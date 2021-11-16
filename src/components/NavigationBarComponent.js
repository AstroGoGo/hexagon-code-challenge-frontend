import React from 'react';
import { Nav, Navbar, NavDropdown,  Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import QuestionOneComponent from './QuestionOneComponent';
import QuestionTwoComponent from './QuestionTwoComponent';

export default class NavigationBarComponent extends React.Component {
    render(){
        return (
            <Router>
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                <Container>    
                <Navbar.Brand href="/">Jim Ritter Code Challenge App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Let's do the questions" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/QuestionOneComponent"}>Question 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/QuestionTwoComponent"}>Question 2</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route  path='/QuestionOneComponent' element={<QuestionOneComponent/>}/>
                    <Route  path='/QuestionTwoComponent' element={<QuestionTwoComponent/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}

