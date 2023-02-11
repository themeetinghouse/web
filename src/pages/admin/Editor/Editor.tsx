import { Storage } from 'aws-amplify';
import RenderRouter from 'components/RenderRouter/RenderRouter';
import React from 'react';
import { EmptyProps } from 'utils';
// import './Editor.scss';
import { EditorContext } from './EditorContext';
import { PageConfigEditor } from './PageConfigEditor';
const recurseEdit = (
  obj: any,
  parents: (string | number)[],
  fieldName: string,
  value: any
): any => {
  console.log({ parents: parents });
  if (parents.length > 0) {
    let z;
    if (typeof parents[0] === 'number') z = [...obj];
    else z = { ...obj };
    z[parents[0]] = recurseEdit(
      obj[parents[0]],
      parents.slice(1, parents.length),
      fieldName,
      value
    );
    console.log({ z: z });
    return z;
  } else return { ...obj, [fieldName]: value };
};
type Props = EmptyProps;
type State = {
  addContent: (value: any) => null;
  deleteContent: (index: number) => null;
  editContent: (
    parents: (string | number)[],
    fieldName: string,
    value: any
  ) => null;
  loadContent: (filename: string) => Promise<any>;
  newContent: () => Promise<any>;
  data: any;
  content: any;
};
class Editor extends React.Component<Props, State> {
  newContent = async (): Promise<void> => {
    await this.loadDefaultContent();
  };
  editContent = (
    parents: (string | number)[],
    fieldName: string,
    value: any
  ): any => {
    const z = recurseEdit(this.state.content, parents, fieldName, value);
    console.log(z);
    this.setState({ content: z });
  };
  loadContent = async (filename: string): Promise<void> => {
    const z = await Storage.get(filename);
    const json = await fetch(z);
    //  console.log({ json: await json.json() });
    this.setState({ content: await json.clone().json() });
  };
  deleteContent = (index: number): any => {
    const z = this.state.content;

    z.page.content.splice(index, 1);
    this.setState({ content: z });
  };
  addContent = (value: any): any => {
    const z = this.state.content;
    z.page.content.push(value);
    this.setState({ content: z });
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      newContent: this.newContent,
      loadContent: this.loadContent,
      deleteContent: this.deleteContent,
      addContent: this.addContent,
      editContent: this.editContent,
      data: null,
      content: null,
    };
    this.loadDefaultContent();
  }

  async loadDefaultContent() {
    try {
      const z = await fetch('/static/editor/defaultPage.json');
      const z1 = await z.json();
      this.setState({
        content: z1,
      });
    } catch (e) {
      console.log({ e: e });
    }
  }

  render() {
    return (
      <div style={{ position: 'absolute', left: 0 }}>
        <EditorContext.Provider value={this.state}>
          <PageConfigEditor></PageConfigEditor>
          {this.state.content ? (
            <RenderRouter
              data={this.state.data}
              content={this.state.content}
            ></RenderRouter>
          ) : (
            'Loading'
          )}
        </EditorContext.Provider>
      </div>
    );
  }
}

export default Editor;
