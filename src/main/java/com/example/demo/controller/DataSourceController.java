package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletRequest;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.pojo.TableSplitResult;
import com.example.demo.service.EasyUIData;
import com.example.demo.utils.FileUtils;

@Controller
public class DataSourceController {
    
    @Autowired
    EasyUIData easyUIData;
    // private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    /*@GetMapping(value = "/data-source")
    @ResponseBody
    public List<Map<String, String>> test() {
        
        List<Map<String, String>> list=new ArrayList<>();
        Map<String, String> map1=new HashMap<>();
        map1.put("name", "xiang");
        map1.put("office", "qqq");
        Map<String, String> map2=new HashMap<>();
        map2.put("name", "xiang2");
        map2.put("office", "qqq2");
        for(int i=0;i<1000;i++) {
            Map<String, String> map=new HashMap<>();
            map.put("name", "xiang"+i);
            map.put("office", "office"+i);
            list.add(map);
        }
        
        list.add(map1);
        list.add(map2);
        return list;
    }*/
    @GetMapping(value = "/data-source")
    @ResponseBody
    public Map<String, Object> test(ServletRequest request) {

        System.out.println(request.getParameterMap().get("draw")[0]);
        Map<String, Object> map = new HashMap<>();
        List<Map<String, String>> list = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            Map<String, String> map4 = new HashMap<>();
            map4.put("name", "xiang" + i);
            map4.put("office", "office" + i);
            list.add(map4);
        }

        map.put("draw", request.getParameterMap().get("draw")[0]);
        map.put("recordsTotal", 100);
        map.put("recordsFiltered", 100);
        map.put("data", list);
        return map;
    }

    @RequestMapping(value = "/easyUI/dataEasyUi")
    @ResponseBody
    public  List<Map<String, String>> dataEasyUi( ) throws JSONException {
        List<Map<String, String>> list = easyUIData.dataList();
        return list;
    }
    
    
    @RequestMapping(value = "/easyUI/saveEasyUi")
    @ResponseBody
    public Map<String, Object> saveEasyUi(){
        Map<String, Object> map =easyUIData.dataMap();
        System.out.println(map);
        return map;
    }
    @RequestMapping(value = "/easyUI/showForm")
    public String showForm(Model model,int index){
        System.out.println(index);
        model.addAttribute("index", index);
        return "easyui/form";
    }
    @RequestMapping(value = "/easyUI/getdetail")
    public String getdetail(Model model,int index){
        System.out.println(index);
        model.addAttribute("index", index);
        return "easyui/tableDetial";
    }
    
    @RequestMapping(value = "/easyUI/dataEasyUITestJsaon")
    @ResponseBody
    public String dataTestJsaon() throws IOException{
        JSONArray btnArray = null;
        String input = FileUtils.readFile("menu.json");
        System.out.println(input);
        return input;
    }
    
    @RequestMapping(value = "/easyUI/TableSplitResult")
    @ResponseBody
    public TableSplitResult<Object> TableSplitResult(){
        
        return easyUIData.tableSplitResult();
    }
    
    @RequestMapping(value = "/easyUI/TestForm")
    @ResponseBody
    public String TestForm(String name){
        
        return "Your Name:"+name;
    }
    
    
    
    
    

}
