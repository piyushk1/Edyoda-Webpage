import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
          <div className={styles.leftcontent}>
            <img src={logo} alt="Logo" style={{ cursor: "pointer" }} />
            <div className={styles.coursesSection} style={{ cursor: "pointer" }}>
              Courses
              <FontAwesomeIcon icon={faChevronDown} style={{ color: '#000000' }} />
            </div>

            <div className={styles.programsSection} style={{ cursor: "pointer" }}>
              Programs
              <FontAwesomeIcon icon={faChevronDown} style={{ color: '#000000' }} />
            </div>
          </div>

        <div className={styles.rightcontent}>

        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000", cursor: "pointer"}} />

        <div className= {styles.logIn} onClick={null} style={{ cursor: "pointer" }}>
          Log In
        </div>

        <button className={styles.joinNow}>Join Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
