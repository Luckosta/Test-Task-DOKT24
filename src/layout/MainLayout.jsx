import React from 'react';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

function MainLayout() {
   return (
      <div className={styles.wrapper}>
         <Sidebar />
         <Main />
      </div>
   );
}

export default MainLayout;
