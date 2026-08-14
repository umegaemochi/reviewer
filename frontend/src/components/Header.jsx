import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '15px 20px' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          reviewer
        </Link>
      </h1>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>一覧</Link>
        <Link to="/create" style={{ color: '#fff', textDecoration: 'none' }}>新規投稿</Link>
        <Link to="/login" style={{ color: '#aaa', textDecoration: 'none' }}>ログイン</Link>
        <Link to="/signup" style={{ color: '#aaa', textDecoration: 'none' }}>新規登録</Link>
      </nav>
    </header>
  );
}

export default Header;