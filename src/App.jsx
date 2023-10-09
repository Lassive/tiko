
import Container from '@mui/material/Container';


import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS

import { Link, Outlet} from 'react-router-dom';
import TabApp from './components/TabApp';




//Tab menu tehtävään löytyy esimerkki materiaaleista


function App() {

  return (
    
    <Container>
      <TabApp /> 
      <Outlet />
      <div>
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
        <Link to={"/contact"}>Contact </Link>
      </nav>
     
    </div>
 
     
    </Container>
  )
}

export default App


