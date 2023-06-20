import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalMenu from './components/ModalMenu';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import StudiosPage from './pages/StudiosPage'
import TheTeamPage from './pages/TheTeamPage'
import ClientsPage from './pages/ClientsPage';

function App() {

  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(prev => !prev)
  }
  
  return (
    <div className="relative">
      <Header toggleModal={toggleModal}/>
      {showModal ? <ModalMenu toggleModal={toggleModal}/> : false}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/studios" element={<StudiosPage />}/>
        <Route path="/the-team" element={<TheTeamPage />}/>
        <Route path="/clients" element={<ClientsPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
