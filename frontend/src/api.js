const BASE_URL = 'http://localhost:8080/api';

// 共通リクエスト関数
async function request(endpoint, options = {}) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // HTTPステータスコードが200系でない場合（4xx, 5xxエラーなど）
    if (!response.ok) {
      let errorMessage = `エラーが発生しました (Status: ${response.status})`;
      try {
        const errorData = await response.json();
        if (errorData.message) errorMessage = errorData.message;
      } catch {
        // レスポンスがJSONでない場合はデフォルトメッセージを使用
      }
      throw new Error(errorMessage);
    }

    // 204 No Content (削除成功時など) の場合は null を返す
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}

// レビュー関連 API
export const reviewApi = {
  // 一覧取得
  getAll: () => request('/reviews'),
  // 詳細取得
  getById: (id) => request(`/reviews/${id}`),
  // 新規登録
  create: (data) => request('/reviews', { method: 'POST', body: JSON.stringify(data) }),
  // 更新
  update: (id, data) => request(`/reviews/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  // 削除
  delete: (id) => request(`/reviews/${id}`, { method: 'DELETE' }),
};