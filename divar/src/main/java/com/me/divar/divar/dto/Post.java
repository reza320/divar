
package com.me.divar.divar.dto;


import com.me.divar.divar.dto.categories.Category;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Length.List;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;

@Entity
@Table
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotEmpty(message = "عنوان نمی تواند خالی باشد")
    @List({@Length(max = 100, message = "عنوان نمی تواند بیشتر از {max} کاراکتر باشد")})
    private String title;

    @NotEmpty(message = "توضیحات نمی تواند خالی باشد")
    @List({
            @Length(max = 10000, message = "توضیحات نمی تواند بیشتر از {max} کاراکتر باشد")
    })
    private String description;

    @OneToOne
    @Valid
    private Location location;

    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
    @Valid
    private Category category;

    @NotEmpty(message = "نوع آکهی دهنده نمی تواند خالی باشد")
    //0: person   1:realEstate
    private int postIssuer;

    private boolean hasPayment;
    private boolean expired;
    private boolean chatEnabled;


    @Valid
    @OneToMany(mappedBy = "post", cascade = CascadeType.REFRESH,orphanRemoval = true)
    private java.util.List<Image> images=new ArrayList<>();


    @ManyToOne
    private Users user;

    @Temporal(TemporalType.DATE)
    private Date createdDate;

    @Temporal(TemporalType.DATE)
    private Date editDate;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getPostIssuer() {
        return postIssuer;
    }

    public void setPostIssuer(int postIssuer) {
        this.postIssuer = postIssuer;
    }

    public boolean isHasPayment() {
        return hasPayment;
    }

    public void setHasPayment(boolean hasPayment) {
        this.hasPayment = hasPayment;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public boolean isChatEnabled() {
        return chatEnabled;
    }

    public void setChatEnabled(boolean chatEnabled) {
        this.chatEnabled = chatEnabled;
    }

    public java.util.List<Image> getImages() {
        return images;
    }

    public void setImages(java.util.List<Image> images) {
        this.images = images;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getEditDate() {
        return editDate;
    }

    public void setEditDate(Date editDate) {
        this.editDate = editDate;
    }

    public void addImages(Image document) {
        images.add(document);
    }
}
