package com.example.demo.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
	//private static final Logger log = LoggerFactory.getLogger(HelloController.class);
	
	@GetMapping(value = "/hello")
    public String hello(Model model) {
		String name = "jiangbei";
        model.addAttribute("name", name);
        Map<String,String> user=new HashMap<String,String>();
        
        user.put("name","姓名");
        user.put("age","年龄");
        user.put("sex","性别");
        user.put("birthday","生日");
        user.put("phonenumber","手机");
        model.addAttribute("userhead", user);
        List<String> userinfo=new ArrayList<String>();
        userinfo.add("周美玲");
        userinfo.add("32");
        userinfo.add("女");
        userinfo.add("1985");
        userinfo.add("19850014665");
        model.addAttribute("userinfo",userinfo);
        List<Map<String, Object>> outerList=new ArrayList<Map<String, Object>>();
        Map<String, Object> innerMap=new HashMap<>();
        for(int i=0;i<10;i++) {
            innerMap.put("name", 1);
            innerMap.put("phone", 2);
            innerMap.put("inStock", false);
           
            outerList.add(innerMap);
        }
        model.addAttribute("listmap", outerList);

        
        
        
        return "hello";
    }
	@GetMapping(value = "/start")
    public String start(Model model) {
		
		return "starter";
	}
	
	
	@GetMapping(value = "/test/ee")
    public String test() {
        
        return "hello";
    }
    
	
	


}
