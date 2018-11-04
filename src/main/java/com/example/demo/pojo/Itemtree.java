 package com.example.demo.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_item_cat")
public class Itemtree implements Serializable {
    
    private static final long serialVersionUID = -4845308990187831873L;
    public Itemtree() {

    }
    


    public Itemtree(Integer id, Integer parentId, String text, Integer status, Integer sortOrder, Integer state) {
        super();
        this.id = id;
        this.parentId = parentId;
        this.text = text;
        this.status = status;
        this.sortOrder = sortOrder;
        this.state = state;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="parent_id")
     private Integer parentId;
    
    @Column(name="name")
     private String text;
     
    
    @Column(name="status")
     private Integer status;
    
    
    @Column(name="sort_order")
     private Integer  sortOrder;
     
    @Column(name="is_parent")
     private Integer state;
     
}
