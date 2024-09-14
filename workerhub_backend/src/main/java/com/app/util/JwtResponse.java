
package com.app.util;

import com.app.dto.UserProfileDTO;

public class JwtResponse {

    private String token;
    private UserProfileDTO user;

    public JwtResponse(String token, UserProfileDTO user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public UserProfileDTO getUser() {
        return user;
    }
}