import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../componets/Product";
function Main(products) {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        <Row>
          {products.map((product) => (
            <Col key={product.slug} sm={6} md={4} ls={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Main;
