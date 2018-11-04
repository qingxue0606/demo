 package com.example.demo.service;

import java.util.List;

import com.example.demo.pojo.Itemtree;
import com.example.demo.pojo.Node;

public interface ItemTreeServer {
     List<Itemtree> findAll();
     List<Node> findAllParentId(Integer parentId);
}
