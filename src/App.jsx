import React from 'react';
import RouteNav from './componetes/RouteNav';

import { ThemeProvider} from '@material-ui/core/styles'
import theme from './confing/confingMUI'



function App() {


  return (
     
    <div>
      
      <ThemeProvider theme={theme}>
 
        <RouteNav/>
       
      </ThemeProvider>

    </div>
    
    
  );
}

export default App;
