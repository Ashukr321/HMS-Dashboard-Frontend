import mongoose from 'mongoose';
import crypto from 'crypto';
// id :string 
// email :string 
// password :string (hashed)
// role : enum (ADMIN, DOCTOR, PATIENT, RECEPTIONIST, PHARMACIST, NURSE, LAB_TECHNICIAN,HR)
// status : enum (ACTIVE, INACTIVE, SUSPENDED)
// cretedAt : datetime(ISO 8601 format)


// challenges: All acount id should be start with role prefix ? how we achieive that 

// we have to run a script that genereate prfix based on role and then generate unique id 
// schema pe pre 
// required rolePrefix mapping object 


const userSchema = new mongoose.Schema = ({
    id :{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        trim:true,
        toLowerCase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please Enter valid email address"]
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minLength:[8,'Password must be at least 8 characters long '],
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"]
    },
    role:{
        type:String,
        required:true,
        enum:['ADMIN', 'DOCTOR', 'PATIENT', 'RECEPTIONIST', 'PHARMACIST', 'NURSE', 'LAB_TECHNICIAN','HR'],
        default:'PATIENT'
    },
    status:{
        type:String,
        required:true,
        enum:['ACTIVE', 'INACTIVE', 'SUSPENDED'],
        default:'ACTIVE'
    },
    createdAt:{
        time:Date,
        default:Date.now
    }
},{
    timestamps:true
})
 


userSchema.pre('save',async function (next){
    if(!this.isNew) return next();
    // roleRrefix mapping 
    const rolePrefixMapping = {
        'ADMIN':'ADMIN',
        'DOCTOR':'DOC',
        'PATIENT':'PAT',
        'RECEPTIONIST':'REC',
        'PHARMACIST':'PHA',
        'NURSE':'NUR',
        'LAB_TECHNICIAN':'LAB',
        'HR':'HR'
    }

    // get prefix 
    const prefix = rolePrefixMapping[this.role];

    const uniqueSuffix  = crypto.randomBytes(4)
    .toString('hex')
    .slice(0,6) 
    .toUpperCase(); 
    this.id = `${prefix}-${uniqueSuffix}`;
    next();
})

const User=  mongoose.model('User',userSchema);

export default User;

