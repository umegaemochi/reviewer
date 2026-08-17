import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import { reviewApi } from '../api';

function ReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await reviewApi.getById(id);
        setReview(data);
      } catch (err) {
        setError('該当するレビューが見つかりません。');
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [id]);

  const handleUpdate = async (updatedReview) => {
    setError(null);
    try {
      await reviewApi.update(id, updatedReview);
      alert('更新しました！');
      navigate('/');
    } catch (err) {
      setError(`更新に失敗しました: ${err.message}`);
    }
  };

  if (loading) return <p>読み込み中...</p>;
  if (error) return (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      <Link to="/">← 一覧に戻る</Link>
    </div>
  );

  return (
    <div>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '15px' }}>← 一覧に戻る</Link>
      <h2>レビュー詳細・編集 (ID: {review.id})</h2>
      <ReviewForm initialData={review} onSubmit={handleUpdate} buttonText="更新する" />
    </div>
  );
}

export default ReviewDetail;