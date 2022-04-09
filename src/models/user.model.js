const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
      academic: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      semester: {
        type: String,
        required: true
      },
      branch: {
        type: String,
        required: true
      },
      course: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      community_admitted: {
        type: String,
        required: true
      },
      community_student: {
        type: String,
        required: true
      },
      mode: {
        type: String,
        required: true
      },
      score: {
        type: String,
        required: true
      },
      account: {
        type: String,
        required: true
      },
      bank: {
        type: String,
        required: true
      },
      ifsc: {
        type: String,
        required: true
      },
      phonenumber: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      arrear: {
        type: String,
        required: true
      },
      attendance: {
        type: String,
        required: true
      },
      remark: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now()
      }
      
      });



module.exports = mongoose.model('User', UserSchema);
