import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import ReviewList from './pages/ReviewList';
import ReviewCreate from './pages/ReviewCreate';
import ReviewDetail from './pages/ReviewDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* 認証が必要な画面 */}
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <ReviewCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reviews/:id"
              element={
                <ProtectedRoute>
                  <ReviewDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;