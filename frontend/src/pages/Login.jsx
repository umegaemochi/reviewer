import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('（画面UI確認用）ログイン処理を実行しました');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>メールアドレス</label>
          <input type="email" required style={{ width: '100%', padding: '8px' }} placeholder="user@example.com" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>パスワード</label>
          <input type="password" required style={{ width: '100%', padding: '8px' }} placeholder="••••••••" />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          ログイン
        </button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
        アカウントをお持ちでない方は <Link to="/signup">新規登録</Link> へ
      </p>
    </div>
  );
}

export default Login;