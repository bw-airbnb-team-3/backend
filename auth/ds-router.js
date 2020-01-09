const db = require('../dbConfig');

const router = require("express").Router();

router.get("/dsListings", async (req, res) => {
    try {
      const listing = await db('listings');
      return res.status(200).json(listing);
    } catch (err) {
        console.log('Something went wrong!');
        return res
          .status(500)
          .json({ error: true, message: 'Error getting listings' });
    }
  });

  module.exports = router;