package com.example.demo.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@RequestMapping("/common/")
@Controller
public class commonController {
	//private static final Logger log = LoggerFactory.getLogger(HelloController.class);
	
	@GetMapping(value = "pageUI")
    public String hello(Model model) {
		
        return "common/page";
    }

	
	


}
