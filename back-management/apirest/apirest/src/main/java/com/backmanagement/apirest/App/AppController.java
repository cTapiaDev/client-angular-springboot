package com.backmanagement.apirest.App;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AppController {

    @PostMapping(value = "app")
    public String welcome()
    {
        return "Welcome form secure endpoint";
    }

}
