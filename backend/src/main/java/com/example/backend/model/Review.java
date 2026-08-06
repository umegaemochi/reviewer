package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    // 主キー (PRIMARY KEY) + 自動採番 (AUTO_INCREMENT)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 投稿内容：必須項目 (NOT NULL) + 最大140文字制限
    @Column(nullable = false, length = 140)
    private String content;

    // 投稿者名：必須項目 (NOT NULL)
    @Column(nullable = false, length = 50)
    private String author;

    // 評価（1〜5の星など）：必須項目 (NOT NULL)
    @Column(nullable = false)
    private Integer rating;

    // 作成日時：自動設定
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}