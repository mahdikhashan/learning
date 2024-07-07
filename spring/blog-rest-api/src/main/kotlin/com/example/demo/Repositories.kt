package com.example.demo

import org.springframework.data.repository.CrudRepository

interface ArticleRepository : CrudRepository<Article, Long> {
  fun findBySlug(slug: String): Article?
  fun findAllByOrderByAddedAtDesc(): Iterable<Article>
}

interface UserRepository: CrudRepository<MyUser, Long> {
  fun findByLogin(login: String): MyUser?
}


