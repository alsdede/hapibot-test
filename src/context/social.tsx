import React, { createContext, useState, useContext,useEffect } from 'react';
import {useQuery} from '@apollo/client';
import GET_SOCIALDATA from '../graphql/queries/status';

interface SocialData {
    likes:string
    reviews:string
    lists:string
    media:string
}
interface SocialContextData {
  social:SocialData
}

export const SocialContext = createContext<SocialContextData>(
  {} as SocialContextData,
);

export const SocialProvider:React.FC= ({ children }) => {
  const [social, setSocial] = useState<SocialData>({} as SocialData);
  const {loading,error,data} = useQuery(GET_SOCIALDATA);

  useEffect(()=>{
    if(data){
      setSocial(data.getSocialInfo)
    }
  },[data])
  return (
    <SocialContext.Provider
      value={{social}}
    >
      {children}
    </SocialContext.Provider>
  );
};

export function useSocial(): SocialContextData {
  const context = useContext(SocialContext);

  if (!context) {
    throw new Error('useSocial must be used within an PizzaProvier');
  }
  return context;
}
