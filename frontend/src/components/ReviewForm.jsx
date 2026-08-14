import { useState } from 'react';

function ReviewForm({ onSubmit, initialData = { author: '', rating: 5, content: '' }, buttonText = '投稿する' }) {
  const [author, setAuthor] = useState(initialData.author);
  const [rating, setRating] = useState(initialData.rating);
  const [content, setContent] = useState(initialData.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      alert('投稿者名と内容を入力してください。');
      return;
    }
    onSubmit({ author, rating: Number(rating), content });
    // 新規投稿時はフォームをクリア
    if (!initialData.id) {
      setAuthor('');
      setRating(5);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>投稿者名</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          placeholder="名前を入力"
          maxLength={50}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>評価 (1〜5)</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        >
          <option value={5}>★★★★★ (5)</option>
          <option value={4}>★★★★☆ (4)</option>
          <option value={3}>★★★☆☆ (3)</option>
          <option value={2}>★★☆☆☆ (2)</option>
          <option value={1}>★☆☆☆☆ (1)</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>レビュー内容 (最大140文字)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          maxLength={140}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          placeholder="レビューを入力してください..."
        />
        <small style={{ color: content.length > 140 ? 'red' : '#666' }}>
          {content.length} / 140文字
        </small>
      </div>

      <button type="submit" style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
        {buttonText}
      </button>
    </form>
  );
}

export default ReviewForm;