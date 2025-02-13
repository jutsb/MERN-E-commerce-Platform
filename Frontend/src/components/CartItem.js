import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

const CartItem = ({ item, removeFromCartHandler }) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                    <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                    >
                        <i className="fas fa-trash"></i>
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default CartItem;
