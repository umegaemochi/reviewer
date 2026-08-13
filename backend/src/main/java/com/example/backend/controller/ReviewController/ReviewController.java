package com.example.backend.controller;

import com.example.backend.model.Review;
import com.example.backend.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews") // 基本となるURLのパスを設定
public class ReviewController {

    private final ReviewService reviewService;

    // Serviceの注入 (DI)
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // 1. レビュー全件取得 (GET: /api/reviews)
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    // 2. レビュー1件取得 (GET: /api/reviews/{id})
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        return reviewService.getReviewById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. レビュー新規登録 (POST: /api/reviews)
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review savedReview = reviewService.saveReview(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
    }

    // 4. レビュー更新 (PUT: /api/reviews/{id})
    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review reviewDetails) {
        return reviewService.getReviewById(id)
                .map(existingReview -> {
                    existingReview.setContent(reviewDetails.getContent());
                    existingReview.setAuthor(reviewDetails.getAuthor());
                    existingReview.setRating(reviewDetails.getRating());
                    Review updatedReview = reviewService.saveReview(existingReview);
                    return ResponseEntity.ok(updatedReview);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 5. レビュー削除 (DELETE: /api/reviews/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        return reviewService.getReviewById(id)
                .map(review -> {
                    reviewService.deleteReview(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}