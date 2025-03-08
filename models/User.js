const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      name: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      aadhar: { type: String, required: true },
      pan: { type: String, required: true },
      dob: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
