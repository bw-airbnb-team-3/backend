const db = require('../dbConfig');
require('dotenv').config();

const router = require("express").Router();

router.post("/listings", async (req, res) => {
  try {
    const { amenities, bedrooms, bathrooms, host_identity_verified, weekly_price, recommended_price } = req.body;

    if (!amenities || !bedrooms || !bathrooms || !host_identity_verified || !weekly_price || !recommended_price) {
      return res.status(404).json({ error: true, message: 'amenities, bedrooms, bathrooms, host_identity_verified, weekly_price, recommended_price is required!' });
    } else {
    const listing = await db('listings').insert(req.body);
      return res.status(201).json({ id: listing[0] });
    }
  } catch (err) {
      console.log("Something went wrong!");
      return res
        .status(500)
        .json({ error: true, message: "Error adding to the database" });
  }
});


router.get("/getListings", async (req, res) => {
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


router.delete("/deleteListing", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id ) {
      return res.status(400).json({
        error: true,
        message: 'Listing id is required to make a deletion',
      });
    }

    const result = await db('listings').where({id: id}).del();
    return res.status(200).json(result);
  } catch (err) {
      console.log('Something went wrong!');
      return res
        .status(500)
        .json({ error: true, message: 'Error deleting the listing' });
  }
});

module.exports = router;