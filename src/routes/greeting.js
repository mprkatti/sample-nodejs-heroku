const express = require('express');

const router = express.Router();

router.post('/greet', (req, res) => {

  const { name } = req.body;
  console.log(name);
  const greetingMessage = `Hello,  ${name}`;
  console.log(greetingMessage);
  return res.status(200).json({ message: greetingMessage });
})

module.exports = router;