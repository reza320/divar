package com.me.divar.divar.service;

import com.me.divar.divar.dto.Post;
import com.me.divar.divar.dto.categories.Category;
import com.me.divar.divar.dto.categories.Property;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post,Long> {

}
