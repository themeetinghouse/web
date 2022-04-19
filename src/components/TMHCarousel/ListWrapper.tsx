import HorizontalScrollList from 'components/RenderRouter/HorizontalScrollList';
import useScreenDimensions from 'hooks/useScreenDimensions';
const ListWrapper = ({ children }: { children: React.ReactNode }) => {
  const { width } = useScreenDimensions();
  if (width > 767) {
    return <HorizontalScrollList>{children}</HorizontalScrollList>;
  }
  return <div>{children}</div>;
};
export default ListWrapper;
