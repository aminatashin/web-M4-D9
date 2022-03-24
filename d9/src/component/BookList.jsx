// import { useState } from "react";
import romance from "../book/romance.json";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

const BookList = (props) => {
  //   const [books, setBooks] = useState(null);

  return (
    <Container>
      <Row className="justify-content-center">
        {romance
          .filter((a) => a.title.toLowerCase.includes(props.search.toLowerCase))
          .map((b) => (
            <Col className="col-12 col-sm-6 col-md-4 col-xl-3">
              <Card key={b.asin}>
                <Card.Img variant="top" src={b.img} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text className="mr={4}">
                    <Badge variant="primary">{b.category}</Badge>
                    <Badge variant="danger">{b.price}</Badge>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default BookList;
