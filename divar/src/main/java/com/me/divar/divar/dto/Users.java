
package com.me.divar.divar.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name="users"
        ,uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})}
        )
public class Users implements UserDetails {
    @Id
    @GeneratedValue
    private long id;

    @Size.List({
        @Size(max=21, message="نام کاربری نمی تواند بیشتر از {max} کاراکتر باشد"),
        @Size(min=2,message="نام کاربری نمی تواند کمتر از {min} کاراکتر باشد")
    })
    @Pattern(regexp="[A-Za-z0-9_]+", message="برای نام کاربری تنها اعداد، حروف و _ مجاز است")
    private String username;
    @Size.List({
        @Size(max=100,message="رمز عبور نمی تواند بیشتر از {max} کاراکتر باشد"),
        @Size(min=8,message="رمز عبور نمی تواند کمتر از {min} کاراکتر باشد")
    })
    private String password;
    @Size.List({
        @Size(max=25,message="نام نمی تواند بیشتر از {max} کاراکتر باشد"),
        @Size(min=2,message="نام نمی تواند کمتر از {min} کاراکتر باشد")
    })
    private String firstName;
    @Size.List({
        @Size(max=25,message="نام خانوادگی نمی تواند بیشتر از {max} کاراکتر باشد"),
        @Size(min=2,message="نام خانوادگی نمی تواند کمتر از {min} کاراکتر باشد")
    })
    private String lastName;

    @Pattern(regexp=".+@.+\\..+", message="لطفا ایمیل معتبر وارد کنید")
    private String email;


    @Pattern(regexp= "^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$", message="لطفا تلفن معتبر وارد کنید")
    private String phoneNumber;


    @Valid
    @ManyToMany
    private List<Role> roles=new ArrayList<>();



    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Post> posts=new ArrayList<>();

    private boolean enabled;



    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return enabled;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}



