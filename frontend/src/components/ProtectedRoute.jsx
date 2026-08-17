import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>認証情報を確認中...</p>;

  if (!user) {
    alert('この機能を利用するにはログインが必要です。');
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;