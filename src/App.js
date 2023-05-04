import ReservationsPage from './pages/ReservationsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReservationsPage />} exact />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
