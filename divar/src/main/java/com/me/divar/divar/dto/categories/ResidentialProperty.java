package com.me.divar.divar.dto.categories;

import com.me.divar.divar.validation.Groups;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class ResidentialProperty extends Property{

    @NotBlank(groups = {Groups.HouseAndLand.class})
    private int landArea;

    @NotBlank
    //0:family , 1:familyAndSingle
    private int suitableFor;

    @NotBlank(groups = {Groups.Apartment.class})
    private int numOFFloors;

    @NotBlank
    //0:floor, 1:house, 2:land
    private int type;

    @NotBlank
    private boolean hasBalcony;

    @NotBlank(groups = {Groups.Apartment.class})
    private int numOFApartmentsPerFloor;


    //0: singleSheet, 1:tangled , 2:advocacy   , 3:other
    private int typeOFDocumnet;


    //0: northern, 1:southern , 2:eastern   , 3:western
    private int direction;


    private boolean isReconstructed;


    //0: ceramic, 1: woodenParquet, 2:laminetParquet, 3:stone, 4:pvc , 5:carpet, 6:mosaic
    private int floorType;


    //0: water cooler,  1: gas cooler, 2:duct split, 3: split, 4:fan coil
    private int cooling;

    //0: heater,  1: radiator, 3:fan coil, 4: underfloor heating, 5:duct split, 6: split, 7:fireplace
    private int heating;


    //0:water heater, 1:powerHouse, 2:package
    private int hotWaterSupplier;

    //0:domestic, 1:foreign, 2:both
    private int wcType;

}
