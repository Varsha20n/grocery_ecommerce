const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

let stripe;
try {
  stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
} catch (error) {
  console.error("Stripe not configured. Payment functionality will not work.");
}

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  if (!stripe) {
    return next(new ErrorHander("Payment system is not configured. Please contact administrator.", 500));
  }

  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  if (!process.env.STRIPE_API_KEY || process.env.STRIPE_API_KEY === "your_stripe_api_key") {
    return res.status(200).json({ stripeApiKey: "" });
  }
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
