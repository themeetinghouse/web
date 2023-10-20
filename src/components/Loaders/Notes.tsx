import { Analytics, API, Storage } from 'aws-amplify';
import RenderRouter from 'components/RenderRouter/RenderRouter';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotesCustom } from '../../graphql-custom/customQueries';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

type GetCustomNotes = {
  getNotes: {
    __typename: 'Notes';
    id: string;
    title: string | null;
    content: string | null;
    questions: string | null;
    pdf: string | null;
  };
};

type NoteData = GetCustomNotes['getNotes'];

function getLastSunday() {
  const lastSunday = moment().tz('America/Toronto');
  if (lastSunday.isoWeekday() < 7) {
    lastSunday.isoWeekday(0);
  }
  return lastSunday.format('YYYY-MM-DD');
}

export default function Notes() {
  const [noteData, setNoteData] = useState<NoteData>();
  const [content, setContent] = useState<Record<string, unknown>>();
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const lastSunday = getLastSunday();

  useEffect(() => {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'notes' },
    }).catch((e: any) => {
      console.log(e);
    });

    async function fetchNoteData(date: string | undefined) {
      if (!date) {
        date = lastSunday;
      }

      try {
        const json = await (API.graphql({
          query: getNotesCustom,
          variables: { id: date },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }) as Promise<GraphQLResult<GetCustomNotes>>);

        if (json.data?.getNotes) {
          setNoteData(json.data?.getNotes);
          return;
        }
      } catch (e) {
        console.error(e);
      }
      Analytics.record({
        name: 'error',
        attributes: { page: date },
      }).catch((e: any) => {
        console.log(e);
      });
      navigate('/not-found', { replace: true });
    }

    fetchNoteData(date);
  }, [date, lastSunday]);

  useEffect(() => {
    async function fetchPageData() {
      const notesReaderUrl = await Storage.get(
        'savedContent/notes-reader.json'
      );
      const response = await fetch(notesReaderUrl);
      const json = await response.json();
      setContent(json);
    }

    fetchPageData();
  }, []);

  if (content && noteData) {
    return <RenderRouter data={noteData} content={content}></RenderRouter>;
  }
  return null;
}
