import { gql } from '@apollo/client';

const GET_SOCIALDATA= gql`
 query getStatus{
  getSocialInfo(id:1){
    likes,
    reviews,
    lists,
    media
  }
}
`;

export default GET_SOCIALDATA;
