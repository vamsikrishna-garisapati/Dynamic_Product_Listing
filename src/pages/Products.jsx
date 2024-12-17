import React from 'react';
import { Data } from '../data/products';
import { useLocation, useNavigate } from 'react-router-dom';


const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Extract the parameters
  const category = queryParams.get("category");
  const sort = queryParams.get("sort");

  // Filtering the products
  const filteredProducts = Data.filter((product) => category ? product.category === category : true);

  // Sorting the products
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "des") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function HandleFilter(key, value) {
    if (value) {
      queryParams.set(key, value);
    } else {
      queryParams.delete(key);
    }
    navigate(`?${queryParams.toString()}`);
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center mb-4" style={{ color: '#007bff' }}>The Best Summer Deals</h1>
      
      {/* Category filter section */}
      <div className="mb-4">
        <h3 className="text-center" style={{ color: '#007bff' }}>Filter by Category</h3>
        <div className="btn-group d-flex justify-content-center" role="group">
          <button type="button" onClick={() => HandleFilter("category", "")} className="btn btn-info">All Products</button>
          <button type="button" onClick={() => HandleFilter("category", "men's clothing")} className="btn btn-primary">Men's Clothing</button>
          <button type="button" onClick={() => HandleFilter("category", "women's clothing")} className="btn btn-warning">Women's Clothing</button>
          <button type="button" onClick={() => HandleFilter("category", "electronics")} className="btn btn-danger">Electronics</button>
          <button type="button" onClick={() => HandleFilter("category", "jewelery")} className="btn btn-success">Jewelry</button>
          
        </div>
      </div>

      {/* Sorting button section */}
      <div className="mb-4">
        <h3 className="text-center" style={{ color: '#007bff' }}>Sort by Price</h3>
        <div className="btn-group d-flex justify-content-center" role="group">
          <button type="button" onClick={() => HandleFilter("sort", "asc")} className="btn btn-success">Low to High</button>
          <button type="button" onClick={() => HandleFilter("sort", "des")} className="btn btn-danger">High to Low</button>
        </div>
      </div>

      {/* Products section */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow" style={{ borderColor: '#ff5722' }}> {/* Accent color for card border */}
                <img src={product.image} alt={product.title} className="card-img-top img-fluid" style={{ height: '250px'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className=" card-text"><strong>Price: ${product.price}</strong></p>
                  <button className="btn btn-primary mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;