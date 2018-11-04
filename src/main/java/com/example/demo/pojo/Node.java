 package com.example.demo.pojo;

import java.io.Serializable;

public class Node implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer id;
     private String text;
     private String state;
     
    public Node() {

    }

    public Node(Integer id, String text, String state) {

        this.id = id;
        this.text = text;
        this.state = state;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    @Override
    public String toString() {
        return "Node [id=" + id + ", text=" + text + ", state=" + state + "]";
    }
     
     
     
}
