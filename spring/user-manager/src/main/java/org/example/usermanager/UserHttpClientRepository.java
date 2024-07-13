package org.example.usermanager;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserHttpClientRepository implements UserHttpClient {
    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public User findById(Integer id) {
        return null;
    }
}
