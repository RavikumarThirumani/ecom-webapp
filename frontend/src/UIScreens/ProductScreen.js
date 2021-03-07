import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ history, match }) => {

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`);
  };

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <>
      <Link className="btn btn-light my-2" to="/">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={4}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Rs.{product.price}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
            <Row>
              <Col md={4}>
                <Button
                  className="btn-block bg-info my-5 mx-5"
                  type="button"
                  onClick={checkOutHandler}
                >
                  Buy now
                </Button>
              </Col>
              <Col md={5}>
                <Button
                  className="btn-block, btn-secondary my-5 mx-5"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Col>
          {/* <Col>
                <ListGroup.Item>
                    <Button onClick={addToCartHandler} className='btn-block' type='button'>
                        Add to cart
                    </Button>
                </ListGroup.Item>
                </Col> */}
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
