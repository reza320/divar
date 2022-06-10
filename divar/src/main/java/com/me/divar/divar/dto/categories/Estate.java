package com.me.divar.divar.dto.categories;

import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table
public class Estate extends Category {

    //0: residential, 1:office, 2:store, 3:commercial,agricultural,industrial 4:shortTerm
   private int rentType;


    //0: residential, 1:commercialAndOffice, 2:project
    private int sellType;




}
