package com.Zenyoga.web.service;

import java.util.List;

import com.Zenyoga.web.dto.request.OrderRequest;
import com.Zenyoga.web.dto.response.CountResponse;
import com.Zenyoga.web.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}
