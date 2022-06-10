package com.me.divar.divar.controllers;

import com.me.divar.divar.service.impl.PostService;
import org.glassfish.jersey.media.multipart.FormDataMultiPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @POST
    @Consumes({MediaType.MULTIPART_FORM_DATA})
    @Path("/addPost/{json}")
    public ResponseEntity<?> addPost(@PathParam("json") String json, final FormDataMultiPart multiPart) {
        try {
            return ResponseEntity.ok(postService.savePost(json, multiPart));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }
}
