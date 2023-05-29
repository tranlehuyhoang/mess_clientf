import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Logins from './components/Login/Logins';
import Signups from './components/Signup/Signups';
import { useEffect, useState } from 'react';


function App() {
  const [state, setstate] = useState();
  useEffect(() => {
    setstate(localStorage.getItem('user') || false)
  }, [state]);
  return (
    <BrowserRouter basename='/mess_clientf'>
      <Routes>
        {state ?
          <Route path="/" element={<Home />} />
          :
          <Route path="/" element={<Logins />} />
        }
      </Routes>
      <Routes>
        <Route path="/login" element={<Logins />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signups />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
