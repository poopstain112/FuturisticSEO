const express = require("express");
const app = express();
const Stripe = require("stripe");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/stripe-check", (req, res) => {
  const stripeKey = process.env.STRIPE_KEY;
  if (!stripeKey) return res.status(500).send("STRIPE_KEY not set.");
  try {
    const stripe = Stripe(stripeKey);
    res.send("Stripe key loaded successfully.");
  } catch (err) {
    res.status(500).send("Stripe failed to initialize.");
  }
});

app.listen(PORT, () => {
  console.log(`FuturisticSEO running on port ${PORT}`);
});
