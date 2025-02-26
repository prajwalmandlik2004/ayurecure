// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';
import SignInPage from './components/SignInPage';
import RemedyDetail from './components/RemedyDetail';
import ThankYouPage from './components/ThankYouPage';
import SearchBar from './components/SearchBar';

function App() {
  const handleSearch = (query: string) => {
    // Here you would typically handle the search logic
    console.log('Searching for:', query);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <WelcomePage />
              <div className="py-12 bg-green-50">
                <SearchBar onSearch={handleSearch} />
              </div>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/remedy/:illness" element={<RemedyDetail />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;