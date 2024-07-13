package org.example.usermanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserHttpClient client;

    UserController(UserHttpClient client) {
        this.client = client;
    }

    @GetMapping("")
    List<User> findAll() {
        return client.findAll();
    }
}

