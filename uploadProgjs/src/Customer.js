class Customer {
    constructor(name, email, phonenumber,bill_date,bill_amount ) {
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.bill_date = bill_date;
        this.bill_amount = bill_amount;
    }

    vName() {
		let regEx = new RegExp("^[a-zA-Z]+$");
        if (this.name.length <5||!regEx.test(this.name)) 
        {
			return false;
        } 
        else 
        {
			return true;
		}
	}

    vEmail() 
    {
        let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!regEx.test(this.email)) 
        {
            return false;
        } else 
        {
            return true;
        }
    }
    vBill_Date() {
        let c = new Date();
        c.setMonth(c.getMonth()-1);

        if (this.bill_date > c) {
            return false;
        } else {
            return true;
        }
	}

    vPhone() 
    {
		let regEx = new RegExp("^[0-9]{10}$");
        if (!regEx.test(this.phone)) 
        {
            return false;
        } else {
            return true;
        }
    }

   

    vBill_Amount() {
		if (this.bill_amount < 500) {
			return false;
		} else {
			return true;
		}
	}
}
