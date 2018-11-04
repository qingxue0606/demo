 package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.pojo.Itemtree;
import com.example.demo.pojo.Node;
import com.example.demo.service.ItemTreeServer;

@RequestMapping("/easyUI/")
 @Controller
 public class ItemTreeController {
    
    @Autowired
    private ItemTreeServer itemTreeServer;
    
    @PostMapping(value = "all")
    @ResponseBody
    public List<Itemtree> all() {
        
        
        return itemTreeServer.findAll();
    }
    
    @PostMapping(value = "allParentid")
    @ResponseBody
    public List<Node> allParentid(Integer id) {
        System.out.println(id);
        if(id==null) {
            id=0;
        }
        
        return itemTreeServer.findAllParentId(id);
    }

}
