import {Schema, model, Model} from 'mongoose'
import * as bcrypt from 'bcryptjs'


const UserSchema: Schema = new Schema({

    method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    local: {
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        }
    },
    person : {
        fullName: {
            type: String,
            required:'Enter full name'
        },
        phone: {
            type: String,
            required: 'Enter phone number'
        }
    },
    shipTo: {
        required: false,
        address : {
            type: String,
            required: 'Enter address'
        },
        city: {
            type: String,
            required: 'Enter city'
        },
        state: {
            type: String,
            required: 'Enter state'
        },
        zip:{
            type: String,
            required: 'Enter zip'
        },
        country:{
            type: String,
            required: 'Enter country'
        }
    },

    billing: {
        required: false,
        nameOnCard: {
            type: String,
            required: 'Enter name on card'
        },
        cardNumber: {
            type: String,
            required: 'Enter card number'
        },
        exp: {
            type: String,
            required: 'Enter exp date'
        },
        CVV: {
            type: String,
            required: 'Enter CVV'
        }
    }
}, {
    timestamps: true
});



UserSchema.pre('save', async (next) =>{
    try {
        //check if local auth
        if(this.method != 'local')
            next();
        
        //generate salt
        const salt = await bcrypt.genSalt(15);

        //generate password hash (salt + hash)
        const hash = await bcrypt.hash(this.local.password, salt);

         //re-assign hash version of password over original text password
         this.local.password = hash;

         next();

    } catch (error) {
        next(error);
    }
})


//compare password entered vs hashed password
UserSchema.methods.isValidPassword = async (enteredPassword:string) =>{
    try {
        return await bcrypt.compare(enteredPassword, this.local.password);
    } catch (error) {
        throw new Error(error);
    }
}



export const UserModel:Model<any> = model<any>('user', UserSchema);
