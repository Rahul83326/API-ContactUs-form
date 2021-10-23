const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String, 
    email: String,
    profile: String ,
    phone: String,
    dob: String,
    joineddate: Date,
    password: String,
    subscribedClass: Array,
    totalGift: String,
    status: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);