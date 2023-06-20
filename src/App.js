import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  //handle Page Change
  const handlePageChange = (url) => {
    window.history.pushState({}, url, url)
    setCurrentPage(url)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
