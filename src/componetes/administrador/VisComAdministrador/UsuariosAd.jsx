import React,{useState} from 'react';

//materi ui
import {TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody} from '@material-ui/core'

        

import UsuarioAd from './UsuarioAd';

//apollo
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
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

function ExchangeRates(myvar) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {variables : {myvar}});

  if (loading) return (
    <TableRow>
      <TableCell>Loading...</TableCell>
    </TableRow>
  );
  if (error) return (
    <TableRow>
      <TableCell>Error :C</TableCell>
    </TableRow>);

  return data.characters.results.map(character => (
    
      <UsuarioAd key={character.id} usuario={character} />
    
  ));
  }



const UsuariosAd = (props) => {
    /* ojo botto crar nuevo usuario */
    const [cambio, setcambio] = useState(2)

    return ( <div>
        
      <h1>usuarios</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>nombre</TableCell>
              <TableCell>apellido</TableCell>
              <TableCell>usuario</TableCell>
              <TableCell>mail</TableCell>
              <TableCell>genero</TableCell>
              <TableCell>clave</TableCell>
              <TableCell>tipo</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>                   
            
            {ExchangeRates(cambio)}
            
          </TableBody>
          
        </Table>
      </TableContainer>    

        

        </div> );
}
 
export default UsuariosAd;