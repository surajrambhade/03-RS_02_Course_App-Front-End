import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './components/Home';
import Header from './components/Header';
import Course from './components/Course';
import Allcourse from './components/Allcourse';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router,Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
    <BrowserRouter>
    <ToastContainer/>
      <Container>
      <Header/>
        <Row>
          <Col md={4}> <Menus/> </Col>
          <Col md={8}> 
          <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add-course' Component={AddCourse} exact />
          <Route path='/view-courses' Component={Allcourse} exact/>
          </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>  
    </div>
  );
}

export default App;
