import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
    useEffect(() => {
        document.title = "User Dashboard";
    
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = '/client/public/favicon.ico';
        document.head.appendChild(link);
    
        return () => {
          document.head.removeChild(link);
        };
      }, []);
  return (
    <Layout title={'User Dashboard'}>
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
