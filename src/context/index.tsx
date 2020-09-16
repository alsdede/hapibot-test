import React from 'react';
import { UserProvider } from './user';
import { SocialProvider } from './social';


const AppProvider:React.FC= ({ children }) => (
  <UserProvider>
    <SocialProvider>
    {children}
    </SocialProvider>
  </UserProvider>
);

export default AppProvider;
