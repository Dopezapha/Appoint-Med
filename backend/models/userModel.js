import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    gender : {
        type: String,
        default: "Not Specified"
    },
    dob : {
        type: String,
        default: "Not Specified"
    },
    phone : {
        type: String,
        default: "00000000000"
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        default: {line1: "", line2: ""}
    },
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel