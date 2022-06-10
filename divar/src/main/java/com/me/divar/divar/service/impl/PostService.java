package com.me.divar.divar.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.me.divar.divar.dto.Image;
import com.me.divar.divar.dto.Post;
import com.me.divar.divar.dto.categories.Category;
import com.me.divar.divar.dto.categories.ResidentialProperty;
import com.me.divar.divar.service.PostRepository;
import com.me.divar.divar.validation.BeanValidation;
import com.me.divar.divar.validation.Groups;
import org.apache.poi.util.IOUtils;
import org.glassfish.jersey.media.multipart.BodyPart;
import org.glassfish.jersey.media.multipart.BodyPartEntity;
import org.glassfish.jersey.media.multipart.ContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataMultiPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.io.InputStream;
import java.util.List;


@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;


    @Autowired
    EntityManager entityManager;


    @Autowired
    BeanValidation beanValidation;


    @Transactional
    public Object savePost(String jsonString, FormDataMultiPart multiPart) throws Exception {
        try {
            ObjectMapper mapper = new ObjectMapper();
            Post post = mapper.readValue(jsonString, Post.class);
            Category category = post.getCategory();
            switch (category.getCode()) {
                case 8: {
                    //فروش آپارتمان
                    saveApartmentSell(category);
                }
                case 2:
            }
            saveImages(post, multiPart);
            entityManager.persist(post);
            return post;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


    private void saveApartmentSell(Category category) throws Exception {
            if (!(category instanceof ResidentialProperty))
                throw new Exception("اطلاعات وارد شده صحیح نمی باشد");
        beanValidation.validateBeans(category, Groups.Apartment.class);
        entityManager.persist(category);
    }


    private void saveImages(Post post, FormDataMultiPart multiPart) throws Exception {
        List<BodyPart> bodyParts = multiPart.getBodyParts();
        if (bodyParts.size() > 20)
            throw new Exception("بیش از 20 عکس مجاز نیست");
        Image document;
        for (BodyPart bodyPart : bodyParts) {
            document = new Image();
            BodyPartEntity bodyPartEntity = (BodyPartEntity) bodyPart.getEntity();
            InputStream inputStream = bodyPartEntity.getInputStream();
            ContentDisposition content = bodyPart.getContentDisposition();
            byte[] bytes = IOUtils.toByteArray(inputStream);
            if (bytes.length != 0) {
                String type = bodyPart.getMediaType().toString();
                if (type.equals("image/jpeg") || type.equals("image/jpg") || type.equals("image/png")) {
                    document.setImage(bytes);
                    document.setName(content.getFileName());
                    document.setType(type);
                    document.setSize(bytes.length / 1000);
                    document.setPost(post);
                    post.addImages(document);
                } else
                    throw new Exception("تنها تصاویر با فرمت jpg و png مجاز هستند");
            }
        }
    }


}
