const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail = require("./sendEmail");

app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const mail = req.body;

  try {

    await sendEmail({
      email: mail.addresses,
      subject: mail.subject,
      message: mail.message,
    });

    res.status(200).json({
      success: true
    });

  } catch (error) {
    res.status(500).json({
      success: false
    });
  }

});

module.exports = app;
