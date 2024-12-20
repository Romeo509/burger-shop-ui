// pages/index.tsx
import React from "react";

const Page = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",  // Full viewport height
    fontFamily: "'Playfair Display', serif",  // Luxurious font
    flexDirection: "column",  // Stack elements vertically
  };

  const boxStyle = {
    textAlign: "left",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "rgb(55,29,14)",
    height: "auto",  // Let the height adjust according to content
    width: "300px",  // Fixed width for the container
    display: "flex",
    flexDirection: "column",  // Stack content vertically
    justifyContent: "space-between",  // Space between items
    backgroundImage: "url('https://i.pinimg.com/1200x/0e/8a/df/0e8adfd7caa0926af5fd3604256ec6f9.jpg')",  // Set the background image
    backgroundSize: "cover",  // Make the background image cover the container
    backgroundPosition: "center",  // Center the background image
    backgroundRepeat: "no-repeat",  // Don't repeat the background image
    borderRadius: "8px",  // Ensure the corners match the rounded corners
  };

  const imageStyle = {
    width: "100%",  // Adjust the width to 100% of the container's width
    height: "auto", // Maintain the image's aspect ratio
    borderRadius: "8px 8px 0 0", // Optional: Rounded top corners
  };

  const priceButtonContainer = {
    display: "flex",
    justifyContent: "space-between",  // Align price and button horizontally
    alignItems: "center",
    marginTop: "auto",  // Push it to the bottom of the container
  };

  const priceStyle = {
    fontSize: "1.5rem",
    color: "#fff",  // White color for the price
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#ff5733",  // A bright color for the button
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        {/* Image at the top of the container */}
        <img
          src="/images/burger.png"  // Ensure this image exists in your public directory
          alt="Placeholder"
          style={imageStyle}
        />
        <h1>Fresh Classic Burger with Cheese</h1>
        <p>Our signature burger, made with the finest, freshly-grilled beef patty, melted cheese, and a soft, toasted bun. It's the perfect combination of flavors that will leave you craving more. Each bite is a moment of pure indulgence. Savor the taste of luxury in every mouthful.</p>

        {/* Price and Buy Now button */}
        <div style={priceButtonContainer}>
          <span style={priceStyle}>$19.99</span>
          <button style={buttonStyle}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
