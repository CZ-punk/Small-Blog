import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

function TabElements() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/category/category-list')
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                {categories.map((category) => (
                    <Nav.Item key={category.id}>
                        <Nav.Link href="/" >
                            {category.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <p className="text-center mt-4 mb-4">Or right-aligned</p>
            {/* <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
        </>
    );
}

export default TabElements;