package com.Zenyoga.web.service;

import com.Zenyoga.web.dto.request.AuthenticationRequest;
import com.Zenyoga.web.dto.request.RegisterRequest;
import com.Zenyoga.web.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
