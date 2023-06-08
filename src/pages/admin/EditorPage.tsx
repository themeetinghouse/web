//import Pages from './Editor/Pages';
import EditorMenu from './Editor/components/EditorMenu';
import { EditorPageProvider } from './Editor/contexts/EditorPageContext';

export default function EditorPage() {
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
        {/* <Pages /> */}
      </div>
    </EditorPageProvider>
  );
}
