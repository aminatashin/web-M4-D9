import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Registration = () => {
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  //   useEffect(() => {
  //     handleSubmit();
  //   }, []);

  //  const handleSubmit = ()=>{

  //     }
  //  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                required
                value={info.name}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>SurName</Form.Label>
              <Form.Control
                type="email"
                placeholder="Surname"
                required
                value={info.surname}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={info.email}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={info.password}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
                value={info.passwordConfirm}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Registration;
