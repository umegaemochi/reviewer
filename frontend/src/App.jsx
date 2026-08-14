import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ReviewList from './pages/ReviewList';
import ReviewCreate from './pages/ReviewCreate';
import ReviewDetail from './pages/ReviewDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/create" element={<ReviewCreate />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;