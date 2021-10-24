const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    TreatmentName: String,
    Description: String,   
    upload: String,
    createdon: String,
    publishedon: String,
    status: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
