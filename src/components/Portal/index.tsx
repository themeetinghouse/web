import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type InlineShareProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: InlineShareProps) => {
  const div = document.createElement('div');

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');

    if (portalRoot) {
      portalRoot.appendChild(div);
      return () => {
        portalRoot.removeChild(div);
      };
    }
  }, []);

  return ReactDOM.createPortal(children, div);
};
