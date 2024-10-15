import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const Users = () => {
  return (
    <Layout title={'All Users'}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-3">
            <h1 className='text-center'>Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
