package com.me.divar.divar.controllers;

import com.me.divar.divar.service.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> categories(){
       return ResponseEntity.ok(categoryService.categoriesByPid(0));
    }

    @RequestMapping(value = "/{id}/{code}",method = RequestMethod.GET)
    public ResponseEntity<?> categoryByCode(@PathVariable int id,@PathVariable int code) throws Exception {
        return ResponseEntity.ok(categoryService.categoryByCode(id,code));
    }


}
