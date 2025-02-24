import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

function TabElements({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/category-list")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activeLinkStyle = {
    color: "#1e90ff",
    fontWeight: "bold",
  };

  const inActiveLinkStyle = {
    color: "white",
    fontWeight: "bold",
  };

  console.log('selectedCategory: ', selectedCategory)
  
  return (
    <Nav
      fill
      variant="tabs"
      style={{ fontSize: "1.3rem", backgroundColor: "black"}}
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link
          active={!selectedCategory}
          onClick={() => setSelectedCategory('')}
          style={selectedCategory ? inActiveLinkStyle : activeLinkStyle}
        >
          All
        </Nav.Link>
      </Nav.Item>

      {categories.map((category) => (
        <Nav.Item key={category.name}>
          <Nav.Link
            // href={`/category/${category.name}`}
            active={selectedCategory === category.name}
            eventKey={`link-${category.name}`}
            onClick={() => setSelectedCategory(category.name)}
            style={ selectedCategory === category.name ? activeLinkStyle : inActiveLinkStyle }
          >
            {category.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    
  );
}

export default TabElements;