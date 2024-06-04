import {useState} from "react"
import Loader from './components/loader'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading ? <Loader/> : null}
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
