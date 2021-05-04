import React,{useState} from 'react';

//materi ui
import {TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody} from '@material-ui/core'

//paginacion
import ReactPaginate from 'react-paginate';        

import UsuarioAd from './UsuarioAd';


//css
import '../../../css/paginacion.css'

import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
query{
  users{
    email
    username
    firstName
    lastName
  }
}
`;

function ExchangeRates() {
  const {loading, error ,  data } = useQuery(EXCHANGE_RATES);
  debugger
  if (loading) return (
    <TableRow>
      <TableCell>Loading...</TableCell>
    </TableRow>
  );
  // if (error) return (
  //   <TableRow>
  //     <TableCell>Error :C</TableCell>
  //   </TableRow>);

  return data.characters.results.map(character => (
    
      <UsuarioAd key={character.id} usuario={character} />
    
  ));
  }

const UsuariosAd = (props) => {
    /* ojo botto crar nuevo usuario */
    const [cambio, setcambio] = useState(1)
    const handlePageClick=(datos)=>{

      setcambio(datos.selected+1)

    }
    return ( 
    <div>
        
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

      <div className="paginacion">

        <div className="paginacion_contenido">

          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />

        </div>

      </div>

    </div> );
}
 
export default UsuariosAd;