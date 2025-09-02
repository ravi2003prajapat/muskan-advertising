// src/pages/Services.jsx
import React from "react";
import styles from "./Services.module.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Muskan Advertising</title>
        <meta
          name="description"
          content="Explore the wide range of services offered by Muskan Advertising – from newspaper ads and flex printing to digital marketing and outdoor promotions in Rajasthan."
        />
        <meta
          name="keywords"
          content="Advertising services Rajasthan, Newspaper Ads, Flex Printing, Billboard Ads, Digital Marketing, Muskan Advertising"
        />
      </Helmet>

      <div className={styles.services}>
        <div className={styles.mainimage}>
            
        </div>
      </div>
    </>
  );
};

export default Services;
