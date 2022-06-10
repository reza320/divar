
package com.me.divar.divar.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.MessageFormat;

@Controller
public class ErrorController {
  
    @RequestMapping(value="/errorr")
    public String customError(HttpServletRequest request,
                              HttpServletResponse response,
                              Model model){
        
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        HttpStatus httpStatus = HttpStatus.valueOf(statusCode);
        
        Throwable throwable = (Throwable) request.getAttribute("javax.servlet.error.exception");
        String exceptionMessage = httpStatus.getReasonPhrase();
        String requestUri = (String) request.getAttribute("javax.servlet.error.request_uri");
        
        if(requestUri == null){
            requestUri = "Unknown";
        }
        
        String message = MessageFormat.format("{0} returned for {1} : {2}", 
                statusCode,
                requestUri,
                exceptionMessage);
        
        model.addAttribute("errorMessage", message);
        
        return "customError";
    }

}

