import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    const formattedDate = moment(post.create_date).format("MM/DD/YYYY");
    setFormattedDate(formattedDate);
  }, []);

  return (
    console.log('post.id', post.id),
    <Card style={{ width: "18rem" }}>
      {post.image_url ? (
        <Card.Img
          variant="top"
          src={post.image_url}
          style={{ height: "350px" }}
        />
      ) : (
        <div
          style={{
            height: "280px",
            backgroundColor: "lightgrey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Image
        </div>
      )}
      
      <Card.Body>
        <Card.Title>{post.header}</Card.Title>
        <Card.Text>{post.quote}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Posted On: {formattedDate}</span>
          <span>{moment(post.create_date).fromNow()}</span>
        </div>
        <Link to={{ pathname: `/post-blog/${post.id}` }}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
