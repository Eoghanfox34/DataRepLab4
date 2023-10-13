import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter, Routes, Route} from "react-router-dom";
import Read from './Components/read'; 
import Create from './Components/create';



function App() {
  return (
    //Setting up client-side routing using BrowserRouter for the entire app.
    <BrowserRouter>
    <div className="App">

      {/** Create a navigation bar with a dark theme */}    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         {/** Defining navigation links */}
          <Nav className="me-auto">
            {/** Link to the Home page */}
            <Nav.Link href="/">Home</Nav.Link> 
            {/** Link to the Read page */}
            <Nav.Link href="/read">Read</Nav.Link> 
            {/** Link to the Create page */}
            <Nav.Link href="/create">Create</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

     {/** Define routes for the application within the Routes component */}
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        </Routes>     


  
    </div>
    </BrowserRouter>
  );
}

export default App;
