import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome'; // Assuming this is your Welcome component
import Loading from './Loading'; // The Loading component we just created
import SignIn from './SignIn'; 
import CreateAccount from './CreateAccount';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
