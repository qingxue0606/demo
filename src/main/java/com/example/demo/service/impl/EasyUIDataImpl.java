 package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.demo.pojo.TableSplitResult;
import com.example.demo.service.EasyUIData;

@Service
public class EasyUIDataImpl implements EasyUIData {

    @Override
    public List<Map<String, String>> dataList() {
        List<Map<String, String>> list = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            Map<String, String> map4 = new HashMap<>();
            map4.put("id", ""+i);
            map4.put("firstname", "xiang" + i);
            map4.put("lastname", "office" + i);
            map4.put("phone", "129" + i);
            map4.put("email", "qq.com" + i);
            map4.put("itemid", "" + i);
            map4.put("productid", "RP-LI-02");
            map4.put("listprice", "11" + i);
            map4.put("unitcost", "33" + i);
            map4.put("attr1", "44" + i);
            map4.put("status", "55" + i);
            map4.put("name", "name" + i);
            map4.put("price", "7" + i);        
            map4.put("orderid", "7" + i);
            map4.put("quantity", "7" + i);
            map4.put("unitprice", "7" + i);

            list.add(map4);
        }
         return list;
    }
    @Override
    public Map<String, Object> dataMap() {
        // TODO Auto-generated method stub
        Map<String, Object> map=new HashMap<>();
        map.put("rows", dataList());
        map.put("total", 8000);
        map.put("order ", "desc");
        map.put("ordername", "id");
        
        
         return map;
    }
    @Override
    public TableSplitResult<Object> tableSplitResult() {
        // TODO Auto-generated method stub
        TableSplitResult<Object> tableSplitResult=new TableSplitResult<Object>(2, 2000, dataList());
         return tableSplitResult;
    }

}
