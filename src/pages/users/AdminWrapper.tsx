import { Outlet } from 'react-router-dom';
import './AdminWrapper.scss';
export default function AdminWrapper() {
  return (
    <div className="AdminPageContainer">
      <div className="AdminPage ">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
