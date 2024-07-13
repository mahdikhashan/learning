package org.example.usermanager;

import jakarta.validation.constraints.Positive;

public record User(
        Integer id,
        String name,
        @Positive
        Integer age,
        String username,
        String email,
        Address address,
        String phone,
        String website,
        Company company
) {
}
