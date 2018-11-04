 package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.pojo.TableSplitResult;

public interface EasyUIData {
     List<Map<String, String>> dataList();
     Map<String, Object> dataMap();
     TableSplitResult<Object> tableSplitResult();
     
     
}
