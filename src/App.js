import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Sample from './Sample'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path = "/register" element={<Register/>}/>
      <Route path="/Sample"element={<Sample/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
