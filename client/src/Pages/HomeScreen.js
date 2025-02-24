import React, { useState, useEffect } from "react";
import {
  Container,
  HomeHeaderContainer,
  HomeContainer,
  HomeContainerWrapper,
} from "../components/Styles/Container/Container.style";
import { HeaderH1, HeaderP } from "../components/Styles/Font/Font.style";
import TabElements from "../components/Tab/TabElements";
import BlogCard from "../components/Cards/BlogCard";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog/blog-list")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (posts === null) {
    return <div>Loading...</div>;
  }
  const filterPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const getColCount = () => {
    switch (filterPosts.length) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        return 4;
    }
  };

  return (
    <Container>
      <HomeHeaderContainer>
        <HeaderH1>Welcome to CZ-PUNK</HeaderH1>
        <HeaderP>Check out the latest posts below</HeaderP>
      </HomeHeaderContainer>

      <TabElements
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />


      <HomeContainerWrapper>
        <HomeContainer>
          <Row
            sm={getColCount()}
            md={getColCount()}
            lg={getColCount()}
            style={{
              backgroundColor: "dimgray",
            }}
          >
            {filterPosts.map((post) => (
              <Col
                key={post.id}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BlogCard post={post} />
                </div>
              </Col>
            ))}
          </Row>
        </HomeContainer>
      </HomeContainerWrapper>
    </Container>
  );
};

export default HomeScreen;
