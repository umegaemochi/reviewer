package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // WebConfigで設定したCORS設定を適用
                .cors(cors -> {})
                // REST APIのためCSRFを無効化
                .csrf(csrf -> csrf.disable())
                // アクセス権限の制御
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // プリフライト(OPTIONS)を許可
                        .requestMatchers("/api/auth/**").permitAll()            // 新規登録・ログイン等を許可
                        .anyRequest().permitAll()                               // 開発中のため全アクセスを許可（必要に応じて要調整）
                );

        return http.build();
    }
}