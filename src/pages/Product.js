import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  const cardStyle = {
    width: "18rem",
    fontFamily: "Roboto, sans-serif",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const imageStyle = {
    height: "180px",
    objectFit: "contain",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#666",
  };

  const priceStyle = {
    fontSize: "1.25rem",
    color: "#ff6600",
    fontWeight: "bold",
  };

  const buttonStyle = {
    marginTop: "10px",
    marginLeft: "10px"
  };


  const addToCart = props.addToCart;

  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src="/book.jpg"
        style={imageStyle}
      />
      <Card.Body>
        <Card.Title style={titleStyle}>Modern Product</Card.Title>
        <Card.Text style={descriptionStyle}>
          Test Lorem epsum
        </Card.Text>
        <Card.Text style={priceStyle}>$99.99</Card.Text>
        <Button
          variant="primary"
          style={buttonStyle}
          onClick={addToCart}
        >
          Add to Cart
        </Button>
        <Button
          variant="success"
          style={buttonStyle}
 
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
