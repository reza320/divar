
package com.me.divar.divar.dto;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Role {
    @Id
    @GeneratedValue
    private int id;

    @Size.List(@Size(min=2,message="نام نقش نمی تواند کمتر از {min} کاراکتر باشد"))
    private String name;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
