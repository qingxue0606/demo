package com.example.demo.controller;


import org.junit.runners.Parameterized.Parameters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//@RequestMapping("/main/history/")
//@Controller
public class HistroyController {

	@GetMapping(value = "data")
    public String start(Model model) {
		
		return "historyList";
	}
	@GetMapping(value = "map")
    public String map(Model model) {
		
		return "starterTwo";
	}
	//加载故障界面的数据
	@GetMapping(value = "historyData")
    public String historyData(Model model) {
        
        return "mainPage/history/historyData";
    }
	//加载运行界面的数据
    @GetMapping(value = "runData")
    public String runData(Model model) {
        
        return "mainPage/history/runData";
    }
}
