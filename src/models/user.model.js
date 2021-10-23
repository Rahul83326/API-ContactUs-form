const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    GuruName: String,
    Classes: Array,
    GuruDescription: String,
    schedule: Array,
    status: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);