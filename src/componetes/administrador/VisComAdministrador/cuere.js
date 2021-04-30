import { useQuery, gql } from '@apollo/client';

const  EXCHANGE_RATES = gql`
query ( $myvar : Int ){ 
  characters ( page: $myvar ) {
    results {
        id
        name
        status
        species
        type
        gender
        created
    }
  }
}
`;

export default EXCHANGE_RATES;