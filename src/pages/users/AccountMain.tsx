import { Outlet, useLocation } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';

import { Suspense, useState } from 'react';

import { GEProvider } from 'components/RenderRouter/GiveComponents/GEContext';
import { UserProvider } from './Auth/UserContext';

function AccountMainContent(): JSX.Element {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: 'Home', link: '' },
    { label: 'Give', link: 'give' },
    { label: 'Transactions', link: 'transactions' },
    { label: 'Payment Methods', link: 'payments' },
    { label: 'Profile', link: 'profile' },
    { label: 'Admin', link: 'admin' },
  ];
  console.log({ location });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="MyAccountContainer">
        <MyAccountNav
          navigationItems={navLinks}
          open={open}
          toggle={() => setOpen((prev) => !prev)}
        />
        <div
          className="DashboardContent"
          style={open ? { display: 'none' } : {}}
        >
          <Outlet />
        </div>

        <DashboardFooter />
      </div>
    </Suspense>
  );
}

export default function AccountMain(props: any) {
  return (
    <UserProvider>
      <GEProvider>
        <AccountMainContent {...props} />
      </GEProvider>
    </UserProvider>
  );
}
