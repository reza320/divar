package com.me.divar.divar.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Location {

    @Id
    @GeneratedValue
    private long id;

   private double latitude;
   private double longitude;

   private String address;
}
