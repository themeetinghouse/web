import React from 'react';
import {
  EditorState,
  ContentState,
  convertToRaw,
  RawDraftContentState,
  convertFromRaw,
} from 'draft-js';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import { Editor } from 'react-draft-wysiwyg';
import { Auth } from '@aws-amplify/auth';
import BlogPreview from './BlogPreview';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as adminQueries from './queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { v1 as uuidv1 } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
import { EmptyProps } from '../../utils';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './create-notes.scss';
import { getQueryString, parseJSON, INVALID_QUERY } from './verses';
import {
  CreateNotesMutation,
  CreateVerseInput,
  GeneratePdfQuery,
  GeneratePdfQueryVariables,
  GetBiblePassageQuery,
  GetNotesQuery,
  GetSeriesBySeriesTypeQuery,
  ListNotesQuery,
  NoteDataType,
  UpdateNotesMutation,
} from '../../API';

interface BibleVerseJSON {
  key: string;
  offset: number;
  length: number;
  youVersionUri: string;
  queryString: string;
  passageRef: string;
}

interface State {
  notesEditorState: EditorState;
  questionsEditorState: EditorState;
  showPreview: boolean;
  notesList: any[];
  selectedTags: (string | null)[];
  noteObject: any;
  noteEditObject: GetNotesQuery['getNotes'];
  showAlert: string;
  currentTag: string;
  moreOptions: boolean;
  showEditModal: boolean;
  delete: string;
  understand: string;
  noteEdit: any;
  date: any;
  pdf: string;
  dateWarning: string;
  title: string;
  showHelp: boolean;
  statusMessage: string;
  unsaved: boolean;
  description: string;
  episodeNumber: number;
  seriesId: string;
  seriesList: any[];
  pdfLink: string;
}

class Index extends React.Component<EmptyProps, State> {
  deleteConfirmation = 'Delete forever';
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      // input
      notesEditorState: EditorState.createEmpty(),
      questionsEditorState: EditorState.createEmpty(),
      date: null,
      pdf: '',
      title: 'Unlisted',
      description: '',
      episodeNumber: 0,
      seriesId: '000',

      // tags
      selectedTags: [],
      currentTag: '',

      // display state
      showPreview: false,
      moreOptions: false,
      showEditModal: false,
      showAlert: '',
      dateWarning: '',
      showHelp: false,
      statusMessage: '',

      // imports
      notesList: [],
      noteEdit: null,
      noteEditObject: null,
      seriesList: [],

      // the power to delete things
      delete: '',
      understand: '',

      // upload object
      noteObject: {},

      unsaved: true,
      pdfLink: '',
    };
    this.listNotes();
    this.listSeries();
  }

  async listSeries(nextToken?: string) {
    try {
      const json = (await API.graphql({
        query: adminQueries.getSeriesBySeriesTypeAdmin,
        variables: {
          nextToken: nextToken,
          limit: 200,
          seriesType: 'adult-sunday',
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetSeriesBySeriesTypeQuery>;

      console.debug(json);
      this.setState({
        seriesList: this.state.seriesList
          .concat(json.data?.getSeriesBySeriesType?.items)
          .sort((a: any, b: any) => this.sortById(a, b)),
      });
      if (json.data?.getSeriesBySeriesType?.nextToken)
        this.listSeries(json.data.getSeriesBySeriesType.nextToken);
    } catch (e) {
      console.error(e);
    }
  }
  sortById(a: any, b: any) {
    const nameA = a.id.toUpperCase();
    const nameB = b.id.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  async listNotes(nextToken?: string) {
    try {
      const listNotes = (await API.graphql({
        query: queries.listNotes,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListNotesQuery>;
      console.log({ 'Success customQueries.listNotes: ': listNotes });
      this.setState({
        notesList: this.state.notesList
          ?.concat(listNotes.data?.listNotes?.items)
          .sort(function (a: any, b: any) {
            const nameA = a.id.toUpperCase();
            const nameB = b.id.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          }),
      });
      if (listNotes.data?.listNotes?.nextToken)
        this.listNotes(listNotes.data.listNotes.nextToken);
    } catch (e: any) {
      console.error(e);
      this.setState({
        notesList: this.state.notesList
          ?.concat(e.data?.listNotes?.items)
          .sort(function (a: any, b: any) {
            const nameA = a.id.toUpperCase();
            const nameB = b.id.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          }),
      });
      if (e.data?.listNotes?.nextToken)
        this.listNotes(e.data.listNotes.nextToken);
    }
  }

  async handleDeleteNote() {
    if (this.state.understand === this.deleteConfirmation) {
      try {
        const deleteNotes: any = await API.graphql({
          query: mutations.deleteNotes,
          variables: { input: { id: this.state.delete } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({ 'Success mutations.deleteNotes: ': deleteNotes });
        this.setState({
          delete: '',
          understand: '',
          showAlert: `⚠️ Deleted: ${deleteNotes.data.deleteNotes.id}`,
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' });
    }
  }

  convertDraftToMarkup(es: EditorState) {
    const temp = es.getCurrentContent();
    const raw = convertToRaw(temp);
    return draftToHtml(raw);
  }

  convertDraftToRaw(es: EditorState) {
    const temp = es.getCurrentContent();
    const raw = convertToRaw(temp);
    return JSON.stringify(raw);
  }

  async getBiblePassages() {
    if (this.state.unsaved) {
      this.setState({
        showAlert: '⚠️ Please save before checking Bible passages.',
      });
      return;
    }

    this.setState({ statusMessage: 'deleting old verses' });
    let oldVerses: NonNullable<
      NonNullable<NonNullable<GetNotesQuery['getNotes']>['verses']>['items']
    > = [];

    try {
      const getNotes = (await API.graphql({
        query: queries.getNotes,
        variables: { id: format(this.state.date, 'yyyy-MM-dd') },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetNotesQuery>;
      if (getNotes.data?.getNotes?.verses?.items)
        oldVerses = getNotes.data.getNotes.verses.items;
    } catch (e: any) {
      if (e.data?.getNotes?.verses?.items)
        oldVerses = e.data.getNotes.verses.items;
      console.error(e);
    }

    for (const verse of oldVerses) {
      try {
        const deleteVerse = await API.graphql({
          query: mutations.deleteVerse,
          variables: { input: { id: verse?.id } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log(deleteVerse);
      } catch (e) {
        console.error(e);
      }
    }

    const notes = this.state.notesEditorState.getCurrentContent();
    const questions = this.state.questionsEditorState.getCurrentContent();

    const rawNotes = convertToRaw(notes);
    const rawQuestions = convertToRaw(questions);

    this.saveBiblePassages(rawNotes, 'notes');
    this.saveBiblePassages(rawQuestions, 'questions');

    this.setState({ statusMessage: 'done' });
  }

  async saveBiblePassages(
    raw: RawDraftContentState,
    type: 'notes' | 'questions'
  ): Promise<void> {
    this.setState({ statusMessage: `finding verses in ${type}` });
    const data = parseJSON(raw);
    const bibleJSON: BibleVerseJSON[] = [];
    const errors: string[] = [];

    data.forEach((item) => {
      const queryObject = getQueryString(item.passageRef);
      if (queryObject !== INVALID_QUERY) {
        bibleJSON.push({
          ...queryObject,
          key: item.key,
          length: item.length,
          offset: item.offset,
          passageRef: item.passageRef,
        });
      } else {
        errors.push(item.passageRef);
      }
    });

    if (errors.length > 0) {
      this.setState({
        showAlert: `error processing the following Bible passages in ${type}:\n ${errors.join(
          '\n'
        )}`,
      });
      this.setState({ statusMessage: '' });
      return;
    }

    const passages: string[] = [];

    this.setState({ statusMessage: `processing verses in ${type}` });

    for (const query of bibleJSON) {
      try {
        const json = (await API.graphql(
          graphqlOperation(queries.getBiblePassage, {
            bibleId: '78a9f6124f344018-01',
            passage: query.queryString,
          })
        )) as GraphQLResult<GetBiblePassageQuery>;

        console.log(json);

        if (json?.data?.getBiblePassage?.data?.content) {
          passages.push(json?.data?.getBiblePassage?.data?.content);
        } else {
          errors.push(query.passageRef);
        }
      } catch (e) {
        console.error(e);
      }
    }

    if (errors.length > 0) {
      this.setState({
        showAlert: `error processing the following Bible passages in ${type}:\n ${errors.join(
          '\n'
        )}`,
      });
      this.setState({ statusMessage: '' });
      return;
    }

    this.setState({ statusMessage: `saving verses in ${type}` });

    if (passages.length === bibleJSON.length) {
      for (let i = 0; i < bibleJSON.length; i++) {
        const currentJSON = bibleJSON[i];

        const input: CreateVerseInput = {
          id: `${type}-${format(this.state.date, 'yyyy-MM-dd')}-${
            currentJSON.key
          }-${currentJSON.offset}-${currentJSON.length}`,
          key: currentJSON.key,
          offset: currentJSON.offset,
          length: currentJSON.length,
          dataType: NoteDataType[type],
          content: passages[i],
          youVersionUri: currentJSON.youVersionUri,
          noteId: format(this.state.date, 'yyyy-MM-dd'),
        };

        console.log(input);

        try {
          const createVerse = await API.graphql({
            query: mutations.createVerse,
            variables: { input },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          console.log({ 'Success mutations.createVerse: ': createVerse });
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      this.setState({ showAlert: 'something went wrong' });
    }
  }

  async handleSave() {
    if (
      !this.state.notesEditorState.getCurrentContent().hasText() ||
      this.state.date === null
    ) {
      this.setState({
        showAlert: '⚠️ You need a valid content and date to save.',
      });
      return false;
    }

    if (this.state.episodeNumber <= 0) {
      this.setState({ showAlert: '⚠️ Invalid episode number.' });
      return false;
    }

    if (!this.state.description) {
      this.setState({ showAlert: '⚠️ Please add an episode description.' });
      return false;
    }

    this.setState({ statusMessage: 'saving...' });

    this.updateField(
      'content',
      this.convertDraftToMarkup(this.state.notesEditorState)
    );
    this.updateField(
      'questions',
      this.convertDraftToMarkup(this.state.questionsEditorState)
    );
    this.updateField(
      'jsonContent',
      this.convertDraftToRaw(this.state.notesEditorState)
    );
    this.updateField(
      'jsonQuestions',
      this.convertDraftToRaw(this.state.questionsEditorState)
    );
    this.updateField('tags', this.state.selectedTags);
    this.updateField('title', this.state.title);
    this.updateField('pdf', this.state.pdf);
    this.updateField('seriesId', this.state.seriesId);
    this.updateField('episodeDescription', this.state.description);
    this.updateField('episodeNumber', this.state.episodeNumber);

    this.setState({ unsaved: false });
    try {
      const updateNotes = (await API.graphql({
        query: mutations.updateNotes,
        variables: { input: this.state.noteObject },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateNotesMutation>;
      console.log({ 'Success mutations.createNotes: ': updateNotes });
      this.setState({
        showAlert: `✅ Saved: ${updateNotes.data?.updateNotes?.id}. Please don't forget to click the Bible passages button.`,
      });
    } catch (e: any) {
      console.error(e);
      if (e.data?.updateNotes?.id) {
        this.setState({
          showAlert: `✅ Saved: ${e.data?.updateNotes?.id}. Please don't forget to click the Bible passages button.`,
        });
      }
      try {
        const createNotes = (await API.graphql({
          query: mutations.createNotes,
          variables: { input: this.state.noteObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateNotesMutation>;
        console.log({ 'Success mutations.createNotes: ': createNotes });
        this.setState({
          showAlert: `✅ Created: ${createNotes.data?.createNotes?.id}. Please don't forget to click the Bible passages button.`,
        });
      } catch (e: any) {
        console.error(e);
        if (e.data?.createNotes?.id) {
          this.setState({
            showAlert: `✅ Saved: ${e.data?.createNotes?.id}. Please don't forget to click the Bible passages button.`,
          });
        }
      }
    }

    this.setState({ statusMessage: '' });
  }

  waitForSelection(conditionFunction: () => boolean) {
    const poll = (resolve: any) => {
      if (conditionFunction()) resolve();
      else setTimeout(() => poll(resolve), 250);
    };

    return new Promise(poll);
  }

  convertMarkupToDraft(data: string) {
    const blocksfromHtml = htmlToDraft(data);
    const { contentBlocks, entityMap } = blocksfromHtml;
    return ContentState.createFromBlockArray(contentBlocks, entityMap);
  }

  async handleEdit() {
    this.setState({ showEditModal: true });
    await this.waitForSelection(() => Boolean(this.state.noteEditObject));
    if (this.state.noteEditObject && this.state.noteEditObject.jsonContent) {
      const date = parse(
        this.state.noteEditObject.id,
        'yyyy-MM-dd',
        new Date()
      );
      if (this.state.noteEditObject.jsonQuestions) {
        const jsonQuestions = JSON.parse(
          this.state.noteEditObject.jsonQuestions
        );
        const questions = convertFromRaw(jsonQuestions);
        this.setState({
          questionsEditorState: EditorState.createWithContent(questions),
        });
      } else {
        this.setState({
          questionsEditorState: EditorState.createEmpty(),
        });
      }

      const jsonNotes = JSON.parse(this.state.noteEditObject.jsonContent);
      const notes = convertFromRaw(jsonNotes);

      this.setState({
        notesEditorState: EditorState.createWithContent(notes),
        selectedTags: this.state.noteEditObject.tags ?? [],
        date: date,
        title: this.state.noteEditObject.title ?? '',
        pdf: this.state.noteEditObject.pdf ?? '',
        episodeNumber: this.state.noteEditObject.episodeNumber ?? 0,
        description: this.state.noteEditObject.episodeDescription ?? '',
        seriesId: this.state.noteEditObject.seriesId,
      });
      this.updateField('title', this.state.noteEditObject.title); // call updateField to set id
    }
  }

  updateField(field: any, value: any) {
    const note = this.state.noteObject;
    note[field] = value;

    try {
      note.id = format(this.state.date, 'yyyy-MM-dd');
      this.setState({ noteObject: note, unsaved: true });
    } catch (e) {
      this.setState({
        showAlert:
          "If you are reading this, you likely didn't select a date. Please select a date :)",
      });
      console.error(e);
    }
  }

  handleRemoveTag(item: string): void {
    this.setState({
      selectedTags: this.state.selectedTags.filter((elem) => elem !== item),
    });
    this.updateField('tags', this.state.selectedTags);
  }

  onNotesChange = (notesEditorState: EditorState) =>
    this.setState({ notesEditorState, unsaved: true });
  onQuestionsChange = (questionsEditorState: EditorState) =>
    this.setState({ questionsEditorState, unsaved: true });

  handlePublishDate = (date: any) => {
    this.setState({
      date: date,
      unsaved: true,
    });

    const dayofweek = getDay(date);
    if (dayofweek !== 0) {
      this.setState({
        dateWarning: 'Warning: this date is not a Sunday',
      });
    } else {
      this.setState({
        dateWarning: '',
      });
    }
  };

  async makePdf(): Promise<void> {
    const { title, episodeNumber, notesEditorState, questionsEditorState } =
      this.state;

    if (
      questionsEditorState.getCurrentContent().hasText() &&
      notesEditorState.getCurrentContent().hasText() &&
      episodeNumber &&
      title
    ) {
      this.setState({ statusMessage: 'making pdf...' });
      try {
        const user = await Auth.currentAuthenticatedUser();
        const input: GeneratePdfQueryVariables = {
          userId: user.username,
          questions: this.convertDraftToMarkup(questionsEditorState),
          notes: this.convertDraftToMarkup(notesEditorState),
          week: episodeNumber.toString(),
          title,
        };

        const json = (await API.graphql(
          graphqlOperation(queries.generatePdf, input)
        )) as GraphQLResult<GeneratePdfQuery>;

        if (json.data?.generatePdf?.objectKey) {
          this.setState({
            pdfLink:
              'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/' +
              json.data.generatePdf.objectKey,
          });
        }
      } catch (e) {
        this.setState({
          showAlert: `error generating PDF 😢`,
        });
      } finally {
        this.setState({ statusMessage: '' });
      }
    } else {
      this.setState({
        showAlert: `missing required fields: notes, questions, episode number, title`,
      });
    }
  }

  // RENDER FUNCTIONS

  renderPdfModal() {
    const { pdfLink } = this.state;

    return (
      <Modal isOpen={Boolean(pdfLink)}>
        <div style={{ padding: 10, textAlign: 'center' }}>
          <a href={pdfLink} rel="noopener noreferrer" target="_blank">
            Download PDF
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <button
            style={{ flexGrow: 1 }}
            onClick={() => this.setState({ pdf: pdfLink, pdfLink: '' })}
          >
            Use this PDF
          </button>
          <button
            style={{ background: 'red', flexGrow: 1 }}
            onClick={() => this.setState({ pdfLink: '' })}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  }

  renderEditModal() {
    return (
      <Modal isOpen={this.state.showEditModal}>
        <div>Edit existing notes</div>
        <select
          onChange={(event) => this.setState({ noteEdit: event.target.value })}
        >
          <option key="null" value="null">
            None Selected
          </option>
          {this.state.notesList.map((item) => {
            return (
              <option key={item?.id} value={item?.id}>
                {item?.id}
              </option>
            );
          })}
        </select>
        <button
          onClick={() =>
            this.setState({
              showEditModal: false,
              noteEditObject: this.state.notesList.filter(
                (post) => post?.id === this.state.noteEdit
              )[0],
            })
          }
        >
          DONE
        </button>
      </Modal>
    );
  }

  renderMoreOptions() {
    return (
      <div>
        <label>
          Add tags:
          <input
            type="text"
            value={this.state.currentTag}
            onChange={(event) =>
              this.setState({ currentTag: event.target.value })
            }
          />
        </label>
        <button
          className="tags-button"
          onClick={() =>
            this.setState({
              selectedTags: this.state.selectedTags.concat(
                this.state.currentTag
              ),
              currentTag: '',
            })
          }
        >
          Confirm Tag
        </button>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => {
            this.setState({ selectedTags: [] });
            this.updateField('tags', this.state.selectedTags);
          }}
        >
          Clear All Tags
        </button>
        <div>
          <b>Current tags (click on tag to delete):</b>
          {this.state.selectedTags.map((item, index: number) => {
            return (
              <div
                className="tags-item"
                key={index}
                onClick={() => this.handleRemoveTag(item ?? '')}
              >
                {index === this.state.selectedTags.length - 1
                  ? item
                  : item + ', '}
              </div>
            );
          })}
        </div>
        <br />

        <label>
          Delete existing notes (teaching date):
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.delete}
            onChange={(event) => this.setState({ delete: event.target.value })}
          />
        </label>
        <label>
          Type &quot;{this.deleteConfirmation}&quot;:
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.understand}
            onChange={(event) =>
              this.setState({ understand: event.target.value })
            }
          />
        </label>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.handleDeleteNote()}
        >
          DELETE
        </button>
      </div>
    );
  }

  renderTextInput() {
    const toolBarProps = {
      options: [
        'inline',
        'blockType',
        'fontSize',
        'list',
        'link',
        'textAlign',
        'emoji',
        'colorPicker',
        'image',
        'history',
      ],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough'],
      },
      list: {
        options: ['unordered'],
      },
      image: {
        uploadEnabled: true,
        uploadCallback: async (file: any) => {
          const filepath = 'notesuploads/' + uuidv1() + file.name;
          await Storage.put(filepath, file, {
            contentType: 'image/*',
            acl: 'public-read',
          });
          const download =
            'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/' +
            filepath;
          return { data: { link: download } };
        },
        previewImage: true,
        alt: {
          present: true,
          mandatory: true,
        },
        defaultSize: {
          height: 'auto',
          width: '100%',
        },
        alignmentEnabled: false,
      },
    };

    return (
      <div className="editor-container">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>
            Title:
            <input
              type="text"
              style={{ width: 400 }}
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
          </label>
          <label>
            Episode Number:
            <input
              type="number"
              style={{ width: 150 }}
              value={this.state.episodeNumber}
              onChange={(event) =>
                this.setState({
                  episodeNumber: parseInt(event.target.value, 10),
                })
              }
            />
          </label>
          <label>
            Series:
            <select
              value={this.state.seriesId}
              onChange={(e) => this.setState({ seriesId: e.target.value })}
            >
              <option value="">none selected</option>
              {this.state.seriesList.map((series) => {
                return (
                  <option key={series.id} value={series.id}>
                    {series.id}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div>Notes will remain hidden if the title is &quot;Unlisted&quot;</div>

        <label>
          Episode Description:
          <textarea
            style={{ width: '80vw' }}
            value={this.state.description}
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </label>

        <h2>Notes</h2>
        <Editor
          editorState={this.state.notesEditorState}
          onEditorStateChange={this.onNotesChange}
          spellCheck={true}
          toolbar={toolBarProps}
        />

        <h2>Questions</h2>
        <Editor
          editorState={this.state.questionsEditorState}
          onEditorStateChange={this.onQuestionsChange}
          spellCheck={true}
          toolbar={toolBarProps}
        />
        <div>
          <b className="calendar-label">Teaching date</b>
          <DatePicker
            selected={this.state.date}
            onChange={this.handlePublishDate}
            dateFormat="yyyy-MM-dd"
          />
          <div style={{ color: 'red' }}>{this.state.dateWarning}</div>
        </div>
        <div>
          <label>
            PDF Link:
            <input
              type="url"
              style={{ width: 800 }}
              value={this.state.pdf}
              onChange={(event) => this.setState({ pdf: event.target.value })}
            />
          </label>
        </div>
        {this.state.moreOptions ? this.renderMoreOptions() : null}
      </div>
    );
  }

  renderToolbar() {
    return (
      <div className="toolbar-button-container">
        <button className="toolbar-button" onClick={() => this.handleSave()}>
          SAVE
        </button>
        <br />
        <button className="toolbar-button" onClick={() => this.handleEdit()}>
          Edit existing notes
        </button>
        <br />
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ moreOptions: !this.state.moreOptions })
          }
        >
          More options
        </button>
        <br />
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ showPreview: !this.state.showPreview })
          }
        >
          Preview your work
        </button>
        {this.state.showPreview ? (
          <div style={{ width: 150 }}>Scroll to bottom of page for preview</div>
        ) : null}
        <br />
        <button
          className="toolbar-button"
          onClick={() => this.getBiblePassages()}
        >
          Bible passages
        </button>
        <br />
        <button
          className="toolbar-button"
          onClick={() => this.setState({ showHelp: true })}
        >
          Help
        </button>
        <br />
        <button className="toolbar-button" onClick={() => this.makePdf()}>
          Make PDF
        </button>
        <br />
        <span>{this.state.statusMessage}</span>
      </div>
    );
  }

  renderHelp() {
    return (
      <Modal isOpen={this.state.showHelp}>
        <div>Solutions to common issues with Bible verses:</div>
        <ul>
          <li>Ensure there are no extra spaces</li>
          <li>Ensure that you are using hyphens (-), not dashes</li>
          <li>Use the full book name (e.g. 1 Corinthians, not 1 Cor)</li>
        </ul>
        <div>Here are the five accepted formats for Bible verses:</div>
        <ul>
          <li>Genesis 1 (just chapter)</li>
          <li>Genesis 2-3 (chapter to chapter)</li>
          <li>John 3:16 (chapter, verse)</li>
          <li>John 3:16-17 (verse to verse, one chapter)</li>
          <li>John 3:1-4:5 (verse to verse, multiple chapters)</li>
        </ul>
        <button onClick={() => this.setState({ showHelp: false })}>
          Close
        </button>
      </Modal>
    );
  }

  renderAlert() {
    return (
      <Modal isOpen={Boolean(this.state.showAlert)}>
        <div style={{ whiteSpace: 'pre-wrap' }}>{this.state.showAlert}</div>
        <button onClick={() => this.setState({ showAlert: '' })}>OK</button>
      </Modal>
    );
  }

  render() {
    return (
      <div className="note-container">
        {this.renderHelp()}
        {this.renderAlert()}
        {this.renderPdfModal()}
        {this.renderEditModal()}
        {this.renderToolbar()}
        {this.renderTextInput()}
        <div className="preview">
          {this.state.showPreview ? (
            <BlogPreview
              data={this.state}
              content={null}
              type={'notes'}
            ></BlogPreview>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Index;
