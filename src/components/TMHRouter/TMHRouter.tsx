import DashboardHome from 'pages/users/DashboardHome/DashboardHome';
import GivePage from 'pages/users/Give/GivePage';
import TransactionsPage from 'pages/users/Transactions/TransactionsPage';
import PaymentMethodsPage from 'pages/users/PaymentMethods/PaymentMethodsPage';
import AdminWrapper from 'pages/users/AdminWrapper';
import ProfilePage from 'pages/users/ProfilePage/ProfilePage';
import ConfirmSignUp from 'pages/users/Auth/ConfirmSignUp';
import SignUp from 'pages/users/Auth/SignUp';
import SignIn from 'pages/users/Auth/SignIn';
import RequireNewPassword from 'pages/users/Auth/RequireNewPassword';
import ForgotPassword from 'pages/users/Auth/ForgotPassword';
import { ClearCache } from 'pages/admin/ClearCache';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../../pages/HomePage';
const AccountMain = lazy(() => import('../../pages/users/AccountMain'));
const VideoManager = lazy(
  () => import('../../pages/admin/VideoManager/videos')
);
const ImportVideo = lazy(() => import('../../pages/admin/import-video'));
const MoveVideo = lazy(() => import('../../pages/admin/move-video'));
const CreateBlog = lazy(() => import('../../pages/admin/create-blog'));
const CreateNotes = lazy(() => import('../../pages/admin/create-notes'));
const AddLive = lazy(() => import('../../pages/admin/livestream'));
const GetInsta = lazy(() => import('../../pages/admin/instagram'));
const Announcements = lazy(() => import('../../pages/admin/Announcements'));
const HomeChurch = lazy(() => import('../../pages/admin/homechurch'));
const Redirect = lazy(() => import('../../pages/admin/Redirect'));
const Editor = lazy(() => import('../../pages/admin/Editor/Editor'));
const PeopleManager = lazy(
  () => import('../../pages/admin/PeopleManager/PeopleManager')
);
const LocationsManager = lazy(
  () => import('../../pages/admin/locations/locations')
);
const PermissionsManager = lazy(
  () => import('../../pages/admin/PermissionsManager/PermissionsManager')
);
export default function TMHRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />}>
          <Route path="account" element={<AccountMain />}>
            <Route
              path="signin"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route path="requirenewpassword" element={<RequireNewPassword />} />
            <Route
              path="confirmsignup"
              element={
                <PublicRoute>
                  <ConfirmSignUp />
                </PublicRoute>
              }
            />
            <Route
              path="forgotpassword"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />

            <Route
              index
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="give"
              element={
                <PrivateRoute>
                  <GivePage />
                </PrivateRoute>
              }
            />
            <Route
              path="transactions"
              element={
                <PrivateRoute>
                  <TransactionsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="payments"
              element={
                <PrivateRoute>
                  <PaymentMethodsPage />
                </PrivateRoute>
              }
            />

            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="admin"
              element={
                <AdminRoute>
                  <AdminWrapper />
                </AdminRoute>
              }
            >
              <Route path="import-video" element={<ImportVideo />} />
              <Route path="move-video" element={<MoveVideo />} />
              <Route path="create-blog" element={<CreateBlog />} />
              <Route path="create-notes" element={<CreateNotes />} />
              <Route path="livestream" element={<AddLive />} />
              <Route path="videos" element={<VideoManager />} />
              <Route path="permissions" element={<PermissionsManager />} />
              <Route path="instagram" element={<GetInsta />} />
              <Route path="editor" element={<Editor />} />
              <Route path="clearCache" element={<ClearCache />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="homechurches" element={<HomeChurch />} />
              <Route path="locations" element={<LocationsManager />} />
              <Route path="redirects" element={<Redirect />} />
              <Route path="people" element={<PeopleManager />} />
            </Route>
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
