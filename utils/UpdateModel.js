import React from "react";

export class UpdateModel{
    constructor(name, email, password, refer, phone, summ, currendDep, dateEnd, available) {
        if (name){
            this.name = name;
        }
        if (email){
            this.email = email;
        }
        if (password){
            this.password = password;
        }
        if (refer){
            this.refer = refer;
        }
        if (phone){
            this.phone = phone;
        }
        if (summ){
            this.summ = summ;
        }
        if (currendDep){
            this.currendDep = currendDep;
        }
        if (dateEnd){
            this.dateEnd = dateEnd;
        }
        if (available){
            this.available = available;
        }
      }

} 