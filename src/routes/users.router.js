const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    "name": "Juan",
    "lastname": "Zuluaga",
    "document": "1045022754",
    "adress": {
      "street": "Calle falsa 123",
      "city": "Bogotá"
    }
  })
});

module.exports = router;
