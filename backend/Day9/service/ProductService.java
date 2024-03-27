package com.Zenyoga.web.service;

import java.util.List;

import com.Zenyoga.web.dto.request.ProductRequest;
import com.Zenyoga.web.dto.response.CountResponse;
import com.Zenyoga.web.dto.response.ProductResponse;
import com.Zenyoga.web.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
