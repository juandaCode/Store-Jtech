const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('About page');
});
// Export the router
module.exports = router;
