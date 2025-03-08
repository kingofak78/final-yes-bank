const User = require('../models/User');

exports.saveUserData = async (req, res) => {
  try {
    const { name, mobileNumber, aadhar,pan,dob, uniqueid } = req.body;
    let user = await User.findOne({ uniqueid });

    if (user) {
      // Uniqueid exist karta hai – naya entry add karo
      user.entries.push({ name, mobileNumber, aadhar,pan,dob });
    } else {
      // Naya document create karo
      user = new User({
        uniqueid,
        entries: [{ name, mobileNumber, aadhar,pan,dob  }]
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting user data"
    });
  }
};
