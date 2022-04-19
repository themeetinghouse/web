import { ReactNode } from 'react';
import './RenderRouterItemWrapper.scss';
type RenderRouterItemWrapperProps = {
  children: ReactNode;
  index: number;
};
const RenderRouterItemWrapper = ({
  children,
  index,
}: RenderRouterItemWrapperProps) => {
  return children ? (
    <div className="RenderRouterItemWrapper" id={`item-${index}`}>
      {children}
    </div>
  ) : null;
};

export default RenderRouterItemWrapper;
