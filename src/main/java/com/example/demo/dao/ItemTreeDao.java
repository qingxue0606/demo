 package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.pojo.Itemtree;


public interface ItemTreeDao extends JpaRepository<Itemtree, Long> {
    
    @Query(value="select u from Itemtree u where u.parentId=?1")
    List<Itemtree> findAllParentId(Integer parentId);
}
