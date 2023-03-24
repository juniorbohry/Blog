import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar'
import Container from './components/layouts/Container';

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Partnerships from './components/pages/Partnerships';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Container customStyle={{minHeight: '100vh'}}>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/partnerships' element={<Partnerships />} />
                    </Routes>
                </Container>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
