import React from "react";
import styles from "./About.module.css";
import { Helmet } from "react-helmet-async";
import muskanadvertisingimage from "../assets/muskanadvertisingabout.svg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Muskan Advertising</title>
        <meta
          name="description"
          content="Learn about Muskan Advertising, founded by Dr. Subhash Prajapat in 1998. Trusted advertising & printing agency in Rajasthan."
        />
        <meta
          name="keywords"
          content="Muskan Advertising, Rajasthan advertising, printing services, Dr. Subhash Prajapat"
        />
      </Helmet>

      <div className={styles.aboutmuskanadvertising}>
        <div className={styles.headerimage}>
          <img src={muskanadvertisingimage} alt="Muskan Advertising" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.header}>
          <h1>ABOUT US</h1>
          <p>
            At Muskan Advertising, we believe every idea deserves to shine.
            Founded by <strong>Dr. Subhash Prajapat</strong> in 1998 in
            Jhunjhunu, Rajasthan, we have grown into a trusted advertising and
            printing agency serving clients across India.
          </p>
          <p>
            From newspaper advertisements, billboards, and flex printing to
            vinyl, one-way vision, and digital marketing solutions, our team
            provides end-to-end services tailored to your needs. With over 25
            years of expertise, we combine creative design, strategic planning,
            and advanced printing technology to deliver impactful campaigns that
            get noticed.
          </p>
          <h1>OUR MISSION</h1>
          <div className={styles.muskanadvertisingmission}>
            <div>
              To provide fast, reliable, and high-quality printing services
            </div>
            <div>
              To make advertising affordable and effective for every business
            </div>
            <div>To help brands reach the right audience at the right time</div>
          </div>
          <p>
            Trusted by businesses across Rajasthan and India, Muskan Advertising
            has built a reputation for quality, transparency, and customer
            satisfaction since 1998. Whether you’re a small business looking for
            local visibility or a brand aiming for national reach, we are here
            to turn your vision into reality.
          </p>
          <h1>WHY CHOOSE US?</h1>
          <div className={styles.muskanadvertisingmission}>
            <div>
              25+ years of industry expertise
            </div>
            <div>
              Wide range of printing and digital services
            </div>
            <div>Affordable packages tailored to your budget</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
