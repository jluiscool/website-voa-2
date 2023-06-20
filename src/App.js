import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalMenu from './components/ModalMenu';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
