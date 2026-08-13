package com.example.backend.service;

import com.example.backend.model.Review;
import com.example.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    // コンストラクタでRepositoryを注入 (DI)
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // 1. レビュー全件取得 (Read)
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // 2. レビュー1件取得 (Read)
    public Optional<Review> getReviewById(Long id) {
        return reviewRepository.findById(id);
    }

    // 3. レビュー新規登録・更新 (Create / Update)
    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    // 4. レビュー削除 (Delete)
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}