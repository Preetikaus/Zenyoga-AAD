package com.Zenyoga.web.service;

import java.util.List;

import com.Zenyoga.web.dto.request.UserRequest;
import com.Zenyoga.web.dto.response.CountResponse;
import com.Zenyoga.web.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
