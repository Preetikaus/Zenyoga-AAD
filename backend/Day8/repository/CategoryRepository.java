package com.Zenyoga.web.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.Zenyoga.web.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCid(Long cid);

}
