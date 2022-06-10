package com.me.divar.divar.dto.categories;

import com.me.divar.divar.validation.Groups;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;


@Entity
@Table
public class Property extends Estate{

    @NotBlank
    private int area;

    @NotBlank
    private long price;

    @NotBlank
    private int numOfRooms;

    @NotBlank
    private int yearBuilt;

    @NotBlank(groups = {Groups.Apartment.class})
    private int floor;

    @NotBlank
    private  boolean hasElavator;

    @NotBlank
    private boolean hasParking;

    @NotBlank
    private boolean hasStoreRoom;

    @NotBlank
    //0:mortgage, 1:rentAndMortgage
    private int rentType;

    @NotBlank
    private long mortgagePrice;

    @NotBlank
    private long rentPrice;

    @NotBlank
    private boolean mortgageToRentPossible;


}
