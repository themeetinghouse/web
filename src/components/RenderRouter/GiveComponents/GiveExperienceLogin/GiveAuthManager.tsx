import { createContext, useContext, useState } from 'react';
import GiveLoginAccount from './GiveLoginAccount';
import GiveRegisterAccount from './GiveRegisterAccount';
import GiveVerifyAccount from './GiveVerifyAccount';
export type GiveAuthManagerPage = 'login' | 'register' | 'verify';
export default function GiveAuthManager() {
  const [page, setPage] = useState<GiveAuthManagerPage>('login');
  console.log({ page });
  return (
    <div>
      <AuthProvider>
        {page === 'login' ? <GiveLoginAccount setPage={setPage} /> : null}
        {page === 'register' ? <GiveRegisterAccount setPage={setPage} /> : null}
        {page === 'verify' ? <GiveVerifyAccount setPage={setPage} /> : null}
      </AuthProvider>
    </div>
  );
}
type AuthUserData = {
  given_name: string;
  family_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
};
type AuthContextType = {
  user: AuthUserData;
  setUser: React.Dispatch<React.SetStateAction<AuthUserData>>;
};
export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<AuthUserData>({
    given_name: '',
    family_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props} />;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
