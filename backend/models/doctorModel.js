import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
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
    image: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    availability: {
        type: Booleean,
        default: true
    },
    address: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    fees: {
        type: Number,
        required: true
    },
    slots_booked: {
        type: Object,
        default: {}
    }
}, { minimize: false })

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel