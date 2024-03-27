package com.Zenyoga.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Zenyoga.web.constant.Api;
import com.Zenyoga.web.dto.response.CategoryResponse;
import com.Zenyoga.web.service.CategoryService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.CATEGORY)
@RequiredArgsConstructor
@Tag(name = "Category")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/get")
    public ResponseEntity<List<CategoryResponse>> getAllCategories() {
 
        List<CategoryResponse> categoryResponse = categoryService.getAllCategories();
        return !categoryResponse.isEmpty() ? ResponseEntity.ok().body(categoryResponse)
                : ResponseEntity.noContent().build();
    
            }
}
