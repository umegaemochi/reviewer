import { useNavigate, Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

function ReviewCreate() {
  const navigate = useNavigate();

  const handleCreate = async (newReview) => {
    try {
      const response = await fetch('http://localhost:8080/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      if (response.ok) {
        alert('レビューを投稿しました！');
        navigate('/'); // 一覧画面に遷移
      }
    } catch (error) {
      console.error('投稿に失敗しました:', error);
    }
  };

  return (
    <div>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '15px' }}>← 一覧に戻る</Link>
      <h2>新規レビュー投稿</h2>
      <ReviewForm onSubmit={handleCreate} buttonText="投稿する" />
    </div>
  );
}

export default ReviewCreate;