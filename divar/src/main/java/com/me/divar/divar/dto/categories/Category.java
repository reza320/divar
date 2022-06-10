package com.me.divar.divar.dto.categories;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table
@Data
public class Category {

    @Id
    @GeneratedValue
    private int id;


    @NotNull
    private int code;

    @NotEmpty(message = "عنوان نمی تواند خالی باشد")
    private String title;

    @NotNull
    private int pid;



}
