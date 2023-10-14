// // import { Auth } from '@aws-amplify/auth';
// // import { API, GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
// import React from 'react';
// //import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// // import { useUser } from './UserContext';
// // import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
// // import { GetTMHUserQuery } from 'API';
// // import { Hub } from 'aws-amplify';
// type AuthenticatorProps = {
//   children: React.ReactNode | React.ReactNode[];
//   history: ReturnType<typeof useHistory>;
// };

// // const protectedRoutes = [
// //   '/account/give',
// //   '/account/profile',
// //   '/account/admin',
// //   '/account/transactions',
// //   '/account/payments',
// // ];

// function AuthWithContext(props: AuthenticatorProps) {
//   // const { history } = props;
//   // const { state } = useUser();
//   // useCurrentAuthenticatedUser();
//   // useEffect(() => {
//   //   const { user, isProfileComplete } = state;
//   //   const { pathname } = history.location;

//   //   if (isLoaded) {
//   //     if (!user) {
//   //       if (
//   //         protectedRoutes.includes(pathname) ||
//   //         pathname === '/account/' ||
//   //         pathname === '/account'
//   //       ) {
//   //         history.push('/account/signin');
//   //       }
//   //     } else if (!isProfileComplete) {
//   //       history.push('/account/profile');
//   //     } else {
//   //       if (
//   //         pathname === '/account/signin' ||
//   //         pathname === '/account/signup' ||
//   //         pathname === '/account/confirmsignup' ||
//   //         pathname === '/account/forgotpassword' ||
//   //         pathname === '/account/requirenewpassword'
//   //       )
//   //         history.push('/account');
//   //     }
//   //   }
//   // }, [
//   //   state.user,
//   //   history.location.pathname,
//   //   isLoaded,
//   //   state.isProfileComplete,
//   // ]);

//   // if (!state.user && !isLoaded) return <div>Loading...</div>;
//   // if (protectedRoutes.includes(history?.location?.pathname) && !state.user)
//   //   return <div>Redirecting...</div>;
//   return <>{props.children}</>;
// }

// export default function Authenticator(props: AuthenticatorProps) {
//   return <AuthWithContext {...props}>{props.children}</AuthWithContext>;
// }
export {};
