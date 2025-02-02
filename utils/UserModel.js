const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb+srv://1streact:1streact@cluster0.gc5rj.mongodb.net/mytable?retryWrites=true&w=majority');

//mongoose.connect('mongodb://1streact:1streact@cluster0-shard-00-00.gc5rj.mongodb.net:27017,cluster0-shard-00-01.gc5rj.mongodb.net:27017,cluster0-shard-00-02.gc5rj.mongodb.net:27017/mytable?ssl=true&replicaSet=atlas-z8u3u0-shard-0&authSource=admin&retryWrites=true&w=majority')

const Schem = new Schema({
    name: String,
    email: { type : String , unique : true, required : true, dropDups: true },
    password: String,
    refer: String,
    phone: String,
    currentDep: {type: String, default: 'Не выбран'},
    summ: {type:Number, default: 0.00},
    dateEnd: {type: Date},
    available: {type: Number, default: 0.00},
    date: { type: Date, default: Date.now }
})

class UserClass {
    get userName(){

    }

    get userEmail(){

    }

    set userName(name){
        this.name = name;
    }
    set userEmail(email){
        this.email = email;
    }
    set userPassword(password){
        this.password = password;
    }
    set ref(refer){
        this.refer = refer;
    }
    set userPhone(phone){
        this.phone = phone;
    }
    set usercurrentDep(currentDep){
        this.currentDep = currentDep;
    }
    set usersumm(summ){
        this.summ = summ;
    }
    set userdateEnd(dateEnd){
        this.dateEnd = dateEnd;
    }
    set userAvailable(available){
        this.available = available;
    }

    static findByEmail(email){
    return this.findOne({email})
}
}

Schem.loadClass(UserClass);

export const UserModel = mongoose.models.UserModel || mongoose.model('UserModel', Schem);