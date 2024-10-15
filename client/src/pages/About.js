import React from 'react';
import Layout from './../components/Layout/Layout';
import '../index.css';

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="aboutus"
            style={{ width: '70%' }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2" style={{ textAlign: 'justify' }}>
            Welcome to our E-commerce app, your one-stop destination for your
            product niche, e.g., fashion, electronics, home goods, etc. We are
            dedicated to providing you with the best shopping experience,
            offering top-quality products, unbeatable prices, and outstanding
            customer service. At this platform, we believe in the power of
            choice. That’s why we carefully curate a wide selection of products
            from trusted brands and manufacturers, ensuring that you find
            exactly what you’re looking for—whether it's the latest trends or
            everyday essentials.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
