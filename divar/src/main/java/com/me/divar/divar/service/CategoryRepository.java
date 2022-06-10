package com.me.divar.divar.service;

import com.me.divar.divar.dto.categories.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category,Integer> {
    List<Category> findAllByPidEquals(int pid);

    List<Category> findAllByCode(int code);
}
