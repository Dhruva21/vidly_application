const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    if(!req.body.customerId) return res.status(400).send('customerId not found')
    if(!req.body.moveId) return res.status(400).send('movieId not found')
    
    await res.status(401).send('Unauthorized')
});

module.exports = router;