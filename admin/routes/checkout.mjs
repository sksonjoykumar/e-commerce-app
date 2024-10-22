import { Router } from "express";
import Stripe from "stripe";

const router = Router();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

router.post("/checkout", async (req, res) => {
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-06-20",
  });

  try {
    const { items, email } = req.body;

    // Map cart items to Stripe format
    const extractingItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.discountedPrice * 100), // Stripe expects amount in cents
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images,
        },
      },
    }));

    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url:
        "https://shopping-nu-drab.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://shopping-nu-drab.vercel.app/cancel",
      metadata: {
        email,
      },
    });

    // Send the session ID to the frontend
    res.json({
      message: "Server is connected",
      success: true,
      id: session.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
