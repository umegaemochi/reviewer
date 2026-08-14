import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('本当に削除しますか？')) return;
    try {
      const response = await fetch(`http://localhost:8080/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchReviews();
      }
    } catch (error) {
      console.error('削除に失敗しました:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>レビュー一覧</h2>
        <Link to="/create" style={{ background: '#28a745', color: '#fff', padding: '10px 15px', borderRadius: '4px', textDecoration: 'none' }}>
          ＋ 新規レビューを書く
        </Link>
      </div>

      {reviews.length === 0 ? (
        <p>レビューがまだありません。</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
              <strong>{review.author}</strong>
              <span style={{ color: '#f39c12' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
            </div>
            <p style={{ margin: '10px 0' }}>{review.content}</p>
            <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
              <Link to={`/reviews/${review.id}`}>詳細・編集</Link>
              <button onClick={() => handleDelete(review.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
                削除
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;