import React from 'react';
import { useSearch } from '../context/Search';
import Layout from '../components/Layout/Layout';

const SearchPage = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={'Search Results'}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.result.length < 1
              ? 'No Products Found'
              : `Found ${values?.result.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.result.map((p) => (
              <div key={p._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                {' '}
                <div className="card m-2">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{p.name}</h5>
                      <h5>{p.price}$</h5>
                    </div>
                    <p className="card-text">
                      {p.description.substring(0, 25)}...
                    </p>
                    <button class="btn btn-info ms-1">More Details</button>
                    <button class="btn btn-secondary ms-1">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
