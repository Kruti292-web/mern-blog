import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: 'https://lh3.googleusercontent.com/a/ACg8ocJAASPtyqeGg7SQF1GK2Q4FHBJikHaDb0jR7TyemdK3Fb6CO2GP=s360-c-no'
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    }, {timestamps: true}
)

const User = mongoose.model('User',userSchema);

export default User;