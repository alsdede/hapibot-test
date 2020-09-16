import React, { createContext, useState, useContext,useEffect } from 'react';
import {useQuery} from '@apollo/client';
import GET_USERDATA from '../graphql/queries/user';

interface UserData {
    id:string
    name:string
    background:string
    avatar:string

}
interface UserContextData {
  user:UserData
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider:React.FC= ({ children }) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const {data} = useQuery(GET_USERDATA);

  useEffect(()=>{
    if(data){
      setUser(data.me)
    }
  },[data])
  return (
    <UserContext.Provider
      value={{user}}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an PizzaProvier');
  }
  return context;
}
