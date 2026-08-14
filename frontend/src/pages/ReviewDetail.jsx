import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

function ReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/reviews/${id}`);
        if (response.ok) {
          const data = await response.json();
          setReview(data);
        }
      } catch (error) {
        console.error('詳細の取得に失敗しました:', error);
      }
    };
    fetchReview();
  }, [id]);

  // 更新処理
  const handleUpdate = async (updatedReview) => {
    try {
      const response = await fetch(`http://localhost:8080/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedReview),
      });
      if (response.ok) {
        alert('更新しました！');
        navigate('/'); // 一覧に戻る
      }
    } catch (error) {
      console.error('更新に失敗しました:', error);
    }
  };

  if (!review) return <p>読み込み中...</p>;

  return (
    <div>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '15px' }}>← 一覧に戻る</Link>
      <h2>レビュー詳細・編集 (ID: {review.id})</h2>
      <ReviewForm initialData={review} onSubmit={handleUpdate} buttonText="更新する" />
    </div>
  );
}

export default ReviewDetail;