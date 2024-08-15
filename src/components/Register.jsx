import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cc, setCc] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
      username: name, 
      password, 
      email, 
      cedula: cc 
    };
    
    try {
      const response = await fetch('http://127.0.0.1:8000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Registration successful:', result);
        navigate('/');
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center my-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                name='username'
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                name='password'
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                name='email'
                type="text" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicCc" className="mt-3">
              <Form.Label>Cedula (CC)</Form.Label>
              <Form.Control
                name='cedula' 
                type="text" 
                placeholder="Enter your CC" 
                value={cc} 
                onChange={(e) => setCc(e.target.value)} 
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Register
            </Button>

            <Button 
              onClick={handleLogin} 
              variant="outline-primary" 
              type="submit" 
              className="mt-4" 
              style={{marginLeft:'5px'}}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

