import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import { reviewApi } from '../api';

function ReviewCreate() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleCreate = async (newReview) => {
    setSubmitting(true);
    setError(null);
    try {
      await reviewApi.create(newReview);
      alert('レビューを投稿しました！');
      navigate('/');
    } catch (err) {
      setError(`投稿に失敗しました: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '15px' }}>← 一覧に戻る</Link>
      <h2>新規レビュー投稿</h2>
      {error && <p style={{ color: 'red', background: '#ffe6e6', padding: '10px', borderRadius: '4px' }}>{error}</p>}
      <ReviewForm onSubmit={handleCreate} buttonText={submitting ? '送信中...' : '投稿する'} />
    </div>
  );
}

export default ReviewCreate;