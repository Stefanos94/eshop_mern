import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Main(products) {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button type="button" className="btn btn-default btn-sm">
                <span
                  className="glyphicon 
                    glyphicon-shopping-cart"
                ></span>
                <b> Add to Cart </b>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
