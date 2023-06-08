// import { Storage } from 'aws-amplify';
// import React from 'react';
// import { EmptyProps } from 'utils';
// // import './Editor.scss';
// import { EditorContext } from './EditorContext';
// import Menu from './Menu';
// import Pages from './Pages';
// const recurseEdit = (
//   obj: any,
//   parents: (string | number)[],
//   fieldName: string,
//   value: any
// ): any => {
//   console.log({ parents: parents });
//   if (parents.length > 0) {
//     let z;
//     if (typeof parents[0] === 'number') z = [...obj];
//     else z = { ...obj };
//     z[parents[0]] = recurseEdit(
//       obj[parents[0]],
//       parents.slice(1, parents.length),
//       fieldName,
//       value
//     );
//     console.log({ z: z });
//     return z;
//   } else return { ...obj, [fieldName]: value };
// };
// type Props = EmptyProps;
// type State = {
//   addContent: (value: any) => null;
//   deleteContent: (index: number) => null;
//   editContent: (
//     parents: (string | number)[],
//     fieldName: string,
//     value: any
//   ) => null;
//   moveComponent: (index: number, newIndex: number) => null;
//   loadContent: (filename: string) => Promise<any>;
//   deletePage: (filename: string) => Promise<any>;
//   newContent: (content: any) => void;
//   navigateToPage: (pageName: string) => any;
//   data: any;
//   content: any;
//   currentPage: string;
// };
// class Editor extends React.Component<Props, State> {
//   newContent = (content: any): void => {
//     this.setState({ content: content });
//   };
//   editContent = (
//     parents: (string | number)[],
//     fieldName: string,
//     value: any
//   ): any => {
//     const z = recurseEdit(this.state.content, parents, fieldName, value);
//     console.log(z);
//     this.setState({ content: z });
//   };
//   loadContent = async (filename: string): Promise<void> => {
//     const contentUrl = await Storage.get(filename);
//     console.log({ contentUrl });
//     const json = await fetch(contentUrl);
//     //  console.log({ json: await json.json() });
//     this.setState({ content: await json.clone().json() });
//   };
//   deleteContent = (index: number): any => {
//     const z = this.state.content;

//     z.page.content.splice(index, 1);
//     this.setState({ content: z });
//   };
//   deletePage = async (filename: string): Promise<any> => {
//     try {
//       const response = await Storage.remove(filename);
//       if (response.$metadata.httpStatusCode === 204) return true;
//       return false;
//     } catch (error) {
//       console.error({ error });
//       return false;
//     }
//   };
//   moveComponent = (index: number, newIndex: number): any => {
//     const z = this.state.content;
//     const [removed] = z.page.content.splice(index, 1);
//     z.page.content.splice(newIndex, 0, removed);
//     this.setState({ content: z });
//   };
//   addContent = (value: any): any => {
//     const z = this.state.content;
//     z.page.content.push(value);
//     this.setState({ content: z });
//   };
//   navigateToPage = (pageName: string): any => {
//     this.setState({ currentPage: pageName });
//   };
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       newContent: this.newContent,
//       loadContent: this.loadContent,
//       deletePage: this.deletePage,
//       moveComponent: this.moveComponent,
//       deleteContent: this.deleteContent,
//       addContent: this.addContent,
//       editContent: this.editContent,
//       navigateToPage: this.navigateToPage,
//       data: null,
//       content: null,
//       currentPage: 'pages',
//     };
//   }

//   render() {
//     return (
//       <div>
//         <EditorContext.Provider value={this.state}>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flex: 1,
//             }}
//           >
//             <Menu />
//             <Pages data={this.state.data} content={this.state.content} />
//           </div>
//         </EditorContext.Provider>
//       </div>
//     );
//   }
// }

// export default Editor;

export {};
