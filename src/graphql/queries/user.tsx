import { useQuery, gql } from '@apollo/client';

const GET_USERDATA= gql`
  query GET_USERDATA {
	me{
    id,
    name,
    background,
    avatar
  }
}
`;

export default GET_USERDATA;
