import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CartPage = ({ match, location, history }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        // Handle removing from cart
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.product}
                                item={item}
                                removeFromCartHandler={removeFromCartHandler}
                            />
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                items
                            </h2>
                            $
                            {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartPage;
