package com.me.divar.divar.dto.categories;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Office extends Property{


    private boolean hasAdministrativeDocument;

}
