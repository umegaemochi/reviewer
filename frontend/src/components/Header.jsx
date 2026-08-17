import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    alert('ログアウトしました。');
    navigate('/');
  };

  return (
    <header style={{ background: '#333', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          reviewer
        </Link>
      </h1>
      <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>一覧</Link>
        <Link to="/create" style={{ color: '#fff', textDecoration: 'none' }}>新規投稿</Link>
        {user ? (
          <>
            <span style={{ color: '#00ccff' }}>👤 {user.name} さん</span>
            <button onClick={handleLogout} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
              ログアウト
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>ログイン</Link>
            <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>新規登録</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;