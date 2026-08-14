import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('（画面UI確認用）アカウント登録が完了しました');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>アカウント新規登録</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>ユーザー名</label>
          <input type="text" required style={{ width: '100%', padding: '8px' }} placeholder="山田太郎" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>メールアドレス</label>
          <input type="email" required style={{ width: '100%', padding: '8px' }} placeholder="user@example.com" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>パスワード</label>
          <input type="password" required style={{ width: '100%', padding: '8px' }} placeholder="••••••••" />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          登録する
        </button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
        既にアカウントをお持ちの方は <Link to="/login">ログイン</Link> へ
      </p>
    </div>
  );
}

export default Signup;