import React from 'react';
import Layout from './../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ maxWidth:'100%', height:'auto'  }}
          />
        </div>
        <div className="col-md-4 policy-content">
          <h2>Privacy Policy</h2>
          <div className="policy-box">
            <p style={{ textAlign: 'justify' }}>
              At <strong>our company</strong>, we are committed to protecting
              your privacy and ensuring that your personal information is
              handled in a safe and responsible manner. The privacy policy
              outlines how we collect, use, and protect your data when you visit
              our website or make a purchase from us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
