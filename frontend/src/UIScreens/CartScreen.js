import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from "../components/Message"
import { addToCart, removeFromCart } from "../actions/cartActions";


const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    // 

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId))
        }
    }, [dispatch, productId])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h2 className='text-secondary'>Shopping Cart</h2>
                {cartItems.length === 0 ? <Message>Your cart is empty<Link to='/'>
                    Go Back</Link></Message> : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2} className='my-3'>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='text-info my-4'>{item.name}</h6>
                                            {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
                                        </Col>
                                        <Col md={2}><h5 className='text-secondary my-4'>Rs.{item.price}</h5></Col>
                                        <Col md={2}>
                                            <Button type='button' className='mx-2 my-3' variant='secondary' onClick={() =>
                                                removeFromCartHandler(item.product)}>Remove</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>
            <Col md={2}>
                <ListGroup.Item className='my-5'>
                    <Button type='button' className='btn-info' disabled={cartItems.length === 0} 
                    onClick={checkOutHandler}>Check out</Button>
                </ListGroup.Item>
            </Col>
                {/*  */}
        </Row>
    )
}

export default CartScreen
