import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { GetNotesQuery } from "API";
import { Analytics, API } from 'aws-amplify';
import RenderRouter from 'components/RenderRouter/RenderRouter';
import moment from 'moment-timezone';
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as queries from '../../graphql/queries';

type NoteData = GetNotesQuery['getNotes'];

interface Params {
  date?: string
}

function getLastSunday() {
  const lastSunday = moment().tz("America/Toronto");
  if (lastSunday.isoWeekday() < 7) {
    lastSunday.isoWeekday(0);
  }
  return lastSunday.format('YYYY-MM-DD');
}

export default function Notes() {
  const [noteData, setNoteData] = useState<NoteData>();
  const [content, setContent] = useState<Record<string, unknown>>();
  const { date } = useParams<Params>();
  const history = useHistory();

  const lastSunday = getLastSunday();

  useEffect(() => {
    async function fetchNoteData(date: string | undefined) {
      if (!date) {
        date = lastSunday;
      }

      try {
        const json = await (API.graphql({
          query: queries.getNotes,
          variables: { id: date },
          authMode: GRAPHQL_AUTH_MODE.API_KEY
        }) as Promise<GraphQLResult<GetNotesQuery>>);

        if (json.data?.getNotes) {
          setNoteData(json.data?.getNotes);
          return;
        }
      } catch (e) {
        console.error(e)
      }
      Analytics.record({
        name: 'error',
        attributes: { page: date }
      });
      history.replace('/not-found');
    }

    fetchNoteData(date);
  }, [date, lastSunday, history]);

  useEffect(() => {
    async function fetchPageData() {
      const response = await fetch('/static/content/notes-reader.json');
      const json = await response.json();
      setContent(json);
    }

    fetchPageData();
  }, []);


  if (content && noteData) {
    return <RenderRouter data={noteData} content={content}></RenderRouter>
  }
  return null
}