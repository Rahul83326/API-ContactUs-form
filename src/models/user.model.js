const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    DoctorName: String,
    Profile: String,
    upload: String,
    createdon: String,
    publishedon: String,
    schedule: Array,
    timings: Array,
    status: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
