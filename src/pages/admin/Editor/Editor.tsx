import EditorMenu from './components/EditorMenu';
import { EditorPageProvider } from './contexts/EditorPageContext';
import EditorPages from './EditorPages';
export const recurseEdit = (
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
const Editor = () => {
  return (
    <EditorPageProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <EditorMenu />
        <EditorPages />
      </div>
    </EditorPageProvider>
  );
};

export default Editor;
