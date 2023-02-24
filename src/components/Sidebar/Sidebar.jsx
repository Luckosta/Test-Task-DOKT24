import React from 'react';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
   return (
      <div className={styles.container}>
        
         	<a className={styles.ref} to={'/Foxes'}>Foxes</a>
	         <a className={styles.ref} to={'/Dogs'}>Dogs</a>
	         <a className={styles.ref} to={'/Ducks'}>Ducks</a>
      
      </div>
   );
}
