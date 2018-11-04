 package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ItemTreeDao;
import com.example.demo.pojo.Itemtree;
import com.example.demo.pojo.Node;
import com.example.demo.service.ItemTreeServer;

@Service
public class ItemTreeServerImpl implements ItemTreeServer {
    @Autowired
    private ItemTreeDao itemTreeDao;

    @Override
    public List<Itemtree> findAll() {
        
        
        
         return itemTreeDao.findAll();
    }

    @Override
    public List<Node> findAllParentId(Integer parentId) {
        // TODO Auto-generated method stub
        /*Itemtree itemtree=new Itemtree();
        itemtree.setParentId(parentId);;*/
        List<Itemtree> listItems= itemTreeDao.findAllParentId(parentId);
        List<Node> list=new ArrayList<Node>();
        for (Itemtree itemtree : listItems) {
            Node node=new Node(itemtree.getId(),itemtree.getText(),"open");
            if(itemtree.getState()==1) {
                node.setState("closed");
            }
            list.add(node);
        }
        
        
         return  list;
    }
    
    

}
