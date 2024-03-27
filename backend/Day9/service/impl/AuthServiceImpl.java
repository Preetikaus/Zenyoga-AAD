package com.Zenyoga.web.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Zenyoga.web.constant.enumerate.Role;
import com.Zenyoga.web.dto.request.AuthenticationRequest;
import com.Zenyoga.web.dto.request.RegisterRequest;
import com.Zenyoga.web.dto.response.AuthenticationResponse;
import com.Zenyoga.web.model.User;
import com.Zenyoga.web.repository.UserRepository;
import com.Zenyoga.web.service.AuthService;
import com.Zenyoga.web.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@SuppressWarnings("null")
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .address(request.getAddress())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
                .address(user.getAddress())
                .phone(user.getPhone()) 
                .build();
    }
}
