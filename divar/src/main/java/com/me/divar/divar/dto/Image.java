package com.me.divar.divar.dto;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

@Entity
@Table
@Data
public class Image {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Post post;



    @Column(name = "FILENAME")
    private String name;


    @Column(name = "MIMETYPE")
    private String type;

    @Column(name = "SIZE_KB")
    @Max(value = 8000000,message = "اندازه تصویر نمی تواند بیشتر از 8 مگابایت باشد")
    private long size;

    @Column(name="IMAGE")
    @Lob
    @NotNull(message = "لطفا تصویر را بارگذاری کنید")
    private byte[] image;

}
