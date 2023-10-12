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



function App() {
  return (
    //Setting up client-side routing using BrowserRouter for the entire app.
    <BrowserRouter>
    <div className="App">

      /* Creating a navigation bar with a dark theme */      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          /* Defining navigation links */
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link> /* Link to the home page */
            <Nav.Link href="/read">Read</Nav.Link> /* Link to the read page */
            <Nav.Link href="/create">Create</Nav.Link> /* Link to the create page */
          </Nav>
        </Container>
      </Navbar>

      /* Defining routes for the application within the Routes component */
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Header></Header>}></Route>
        <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>     

      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
