package com.example.demo.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/main/")
@Controller
public class MainController {
    
    @GetMapping(value = "{path}")
    public String path(@PathVariable("path") String path) {
        System.out.println(path);
        return "mainPage/"+path;
    }
    /*@GetMapping(value = "fixPlan")
    public String runData(Model model) {
        
        return "mainPage/fixPlan";
    }*/
    @GetMapping(value = "{path}/{second}")
    public String pathSecond(@PathVariable("path") String path,@PathVariable("second") String second) {
        System.out.println(path);
        System.out.println(second);
        return "mainPage/"+path+"/"+second;
    }
    

	

}
