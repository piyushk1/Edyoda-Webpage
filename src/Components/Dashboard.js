import React from 'react';
import styles from './dashboard.module.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
const Dashboard = () => {
  return <div className={styles.dashboard}>
    <Navbar/>
    <Content/>
  </div>;
};

export default Dashboard;