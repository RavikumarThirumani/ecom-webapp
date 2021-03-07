import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Table } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions.js";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product name</th>
            <th>Product Price</th>
            <th>Processor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>Rs.{product.price}</td>
              <td>core-{product.processor}</td>
              <td>
                {/* <a href="/">view more info</a> */}
                <Link to={`/product/${product._id}`}>view more info</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomeScreen;
