import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavigationBar from "./layout/nav";

const Contact = () => {
    const data2 = [];
    const [data, setData] = useState(data2);
  
    for (let i = 0; i < 10; i++) {
      const randomName = generateRandomName();
      const randomEmail = generateRandomEmail();
      const randomNumber = generateRandomNumber();
  
      const person = {
        name: randomName,
        email: randomEmail,
        number: randomNumber,
      };
  
      data2.push(person);
    }
  
    function generateRandomName() {
      const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eva",
        "Frank",
        "Grace",
        "Helen",
        "Ivy",
        "Jack",
      ];
      return names[Math.floor(Math.random() * names.length)];
    }
  
    function generateRandomEmail() {
      return `user${Math.floor(Math.random() * 10000)}@example.com`;
    }
  
    function generateRandomNumber() {
      return Math.floor(Math.random() * 1000000);
    }
  
    const [filterText, setFilterText] = useState('');
  
    const handleFilterChange = (event) => {
      setFilterText(event.target.value);
    };
  
    let filteredData = data.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(filterText.toLowerCase());
      const emailMatch = item.email.toLowerCase().includes(filterText.toLowerCase());
      const numberMatch = item.number.toString().includes(filterText);
    
      return nameMatch || emailMatch || numberMatch;
    });
    
   
  
    return (
      <>
  
        <div className="col-md-12 mt-2 d-flex justify-content-center align-items-center">
          <div className="input-wrap mb-2 ">
            <i className="fas fa-search"></i>
            <label htmlFor="product-search" id="input-label">
              Contact Search
            </label>
            <input
              type="text"
              name="product-search"
              id="product-search"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Search Products"
            />
          </div>
        </div>
  
        <div className="container">
          <div className="row">
            {filteredData.map((person, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>{person.email}</Card.Text>
                    <Card.Text>{person.number}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Contact