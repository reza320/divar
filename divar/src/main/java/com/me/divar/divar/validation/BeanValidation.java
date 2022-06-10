package com.me.divar.divar.validation;

import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.validation.groups.Default;
import java.util.Set;

@Component
public class BeanValidation<T extends Object> {

    public void validateBeans(T entity,Class<?> clazz) throws Exception {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<T>> constraintViolations = validator.validate(entity);
        validator.validate(entity, clazz, Default.class);
        if (constraintViolations.size() > 0) {
            for (ConstraintViolation<T> cv : constraintViolations) {
                System.err.println(cv.getRootBeanClass().getName() + "." + cv.getPropertyPath() + " " + cv.getMessage());
                throw new Exception(cv.getMessage());
            }
        }
    }
}
