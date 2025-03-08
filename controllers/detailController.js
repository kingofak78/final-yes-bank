const User = require('../models/User');


exports.getUserDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;

    if (!uniqueid) {
      return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
    }

    const [user] = await Promise.all([
      User.findOne({ uniqueid })
    ]);

    console.log("Fetched Data: ", { user});

    // Render detail page with fetched documents
    res.render('detail', {
      user
    });
  } catch (error) {
    console.error("Error in getUserDetails:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
