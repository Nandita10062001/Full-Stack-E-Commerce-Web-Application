import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={'All Products'}>
      <div>
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1 className="text-center mt-3"> All Products</h1>
              <div className="row">
                {products.map((p) => (
                  <div key={p._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    {' '}
                    <Link
                      to={`/dashboard/admin/product/${p.slug}`}
                      className="product-link"
                    >
                      <div className="card">
                        <img
                          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h6 className="card-title">{p.name}</h6>
                            <h5>{p.price}$</h5>
                          </div>
                          <p className="card-text">
                            {p.description.substring(0, 25)}...
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
