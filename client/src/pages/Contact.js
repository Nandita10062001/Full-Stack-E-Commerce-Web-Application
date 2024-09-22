import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img src='/images/contactus.jpg' alt='Contact Us' style={{width: '100%'}}/>
        </div>
      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'> CONTACT US </h1>
        <p className='text-justify mt-2'>
          If any queries regarding our product, feel free to call us anytime. We will be available 24/7!
        </p>
        <p className='mt-3'>
          <BiMailSend/>: www.help@e-commerce.com
        </p>
        <p className='mt-3'>
        <BiPhoneCall/>: 012-3456789
        </p>
        <p className='mt-3'>
        <BiSupport/>: 1800-0000-0000 (toll free)
        </p>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;
