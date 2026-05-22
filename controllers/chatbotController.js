const chatbotResponse = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({ success: false, message: "Please provide a message" });
    }

    const lowerMessage = message.toLowerCase();
    let reply = "I'm sorry, I didn't understand that. Could you please rephrase or ask for 'help'?";

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      reply = "Hello! Welcome to our store. How can I help you today?";
    } else if (lowerMessage.includes("help")) {
      reply = "I can help you with: \n1. Tracking your order ('track order')\n2. Delivery information ('delivery')\n3. Cart queries ('cart')\n4. Product info ('products')";
    } else if (lowerMessage.includes("track") || lowerMessage.includes("order status")) {
      reply = "To track your order, please go to the 'Orders' page accessible from your profile icon at the top right.";
    } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping")) {
      reply = "We charge a flat delivery fee of $10. Delivery usually takes 3-5 business days.";
    } else if (lowerMessage.includes("cart")) {
      reply = "You can view your cart by clicking the cart icon at the top right. Need help adding items?";
    } else if (lowerMessage.includes("product") || lowerMessage.includes("shoe")) {
      reply = "We have a wide variety of shoes! You can use the search bar at the top or browse our Collection page.";
    } else if (lowerMessage.includes("return") || lowerMessage.includes("refund")) {
      reply = "We offer a 7-day return policy. Please make sure the product is unused and in its original packaging.";
    }

    res.json({ success: true, reply });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { chatbotResponse };
