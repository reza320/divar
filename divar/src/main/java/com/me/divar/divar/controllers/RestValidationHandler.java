

package com.me.divar.divar.controllers;


import com.me.divar.divar.validation.ValidationErrorContainer;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@ControllerAdvice
public class RestValidationHandler {
    
    @ExceptionHandler(Exception.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorContainer processValidationErrors(MethodArgumentNotValidException e){
        BindingResult result = e.getBindingResult();
        List<FieldError> fieldErrors = result.getFieldErrors();
        
        ValidationErrorContainer errors = new ValidationErrorContainer();
        for(FieldError fError : fieldErrors){
            errors.addValidationError(fError.getField(), fError.getDefaultMessage());
        }
        
        return errors;
    }

}
