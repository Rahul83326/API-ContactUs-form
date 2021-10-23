const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    classname: String,
    level: Array,
    uploadphoto: String,
    classDescription: String,
    schedule: Array,
    timing: Array,
    status: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
