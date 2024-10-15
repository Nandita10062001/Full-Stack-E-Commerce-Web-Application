import React from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';

const Products = () => {
  return (
    <Layout title={'All Products'}>
      <div>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className="text-center"> All Products</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
