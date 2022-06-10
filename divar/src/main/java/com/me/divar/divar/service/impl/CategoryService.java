package com.me.divar.divar.service.impl;

import com.me.divar.divar.dto.categories.Category;
import com.me.divar.divar.service.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> categoriesByPid(int pid) {
        return categoryRepository.findAllByPidEquals(pid);
    }

    public Object categoryByCode(int id,int code) throws Exception {
       List<Category> categories =categoryRepository.findAllByPidEquals(id);
        if (categories.size()>0){
              return categories;
        }
        Category category =categoryRepository.findById(id).get();
        return category;
    }



}
