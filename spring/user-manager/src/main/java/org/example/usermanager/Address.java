package org.example.usermanager;

public record Address(
        String street,
        String suite,
        String city,
        String zipcode,
        Geo geo
) {
}
