// src/pages/Services.jsx
import React from "react";
import styles from "./Services.module.css";
import { Helmet } from "react-helmet-async";

// Assets
import services from "../assets/Services.webp";
import dainikbhaskar from "../assets/Dainik Bhaskar.webp";
import rajasthanpatrika from "../assets/Rajasthan Patrika.webp";
import thetimesofindia from "../assets/The Times of India.webp";
import amarujala from "../assets/Amar Ujala.webp";
import punjab from "../assets/Punjab.webp";
import flexprinting from "../assets/Flex Printing Machine.webp";
import muskanbillboard from "../assets/muskanbillboard.webp";
import canopymuskan from "../assets/Muskan Canopy.webp";
import standeemuskan from "../assets/Standee Muskan Advertising.webp";
import polemuskan from "../assets/Pole kiosk Muskan Advertising.webp";
import wallpaintingmuskan from "../assets/Wall Painting Muskan Advertising.webp";

const Services = () => {
  return (
    <>
      {/* SEO Meta Tags */}
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
        <div className={styles.mainimageContainer}>
          <img
            src={services}
            alt="Muskan Advertising Banner"
            className={styles.mainimage}
          />
          <div className={styles.line}></div>
        </div>

        {/* Newspaper Ads Section */}
        <section id="newspaper" className={styles.newspaper}>
          <div className={styles.heading}>
            <h1>NEWSPAPER ADVERTISEMENTS</h1>
            <p>
              Reach millions of readers across Rajasthan and India with
              impactful newspaper ads. From{" "}
              <strong>classifieds to full-page spreads</strong>, we ensure your
              brand message gets maximum visibility in trusted publications.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.logos}>
              <img src={dainikbhaskar} alt="Dainik Bhaskar Logo" />
            </div>
            <div className={styles.logos}>
              <img src={rajasthanpatrika} alt="Rajasthan Patrika Logo" />
            </div>
            <div className={styles.logos}>
              <img src={thetimesofindia} alt="The Times of India Logo" />
            </div>
            <div className={styles.logos}>
              <img src={amarujala} alt="Amar Ujala Logo" />
            </div>
            <div className={styles.logos}>
              <img src={punjab} alt="Punjab Kesari Logo" />
            </div>
          </div>
        </section>

        {/* Newspaper Categories Section */}
        <div className={styles.categories}>
          <h2>ADVERTISEMENTS CATEGORIES WE OFFER</h2>
          <ul>
            <li>Business Ads</li>
            <li>Name Change Ads</li>
            <li>Matrimonial Ads</li>
            <li>Obituary Ads</li>
            <li>Property Sale/Rent Ads</li>
            <li>Court Notice Ads</li>
            <li>General Info Ads</li>
            <li>Recruitment / Job Ads</li>
            <li>Tender Notice Ads</li>
            <li>Education / Admission Ads</li>
            <li>Lost & Found Ads</li>
            <li>Public Notice Ads</li>
            <li>Vehicle Sale / Purchase Ads</li>
            <li>Financial / Loan Notice Ads</li>
            <li>Anniversary / Greeting Ads</li>
            <li>Government / Legal Ads</li>
            <li>Auction Notice Ads</li>
            <li>Corporate Announcement Ads</li>
            <li>Event / Exhibition Ads</li>
            <li>Travel / Tour Package Ads</li>
          </ul>
        </div>

        {/* Newspaper Ads Section */}
        <section className={styles.printing}>
          <div className={styles.heading}>
            <img src={flexprinting} alt="Flex Printing" />
            <h1>HIGH QUALITY PRINTING</h1>
            <p>
              Bring your ideas to life with vibrant, sharp, and durable prints.
              From{" "}
              <strong>
                brochures, flyers, and posters to banners and catalogs
              </strong>
              , we use advanced printing technology to ensure unmatched clarity,
              long-lasting colors, and a premium finish that makes your brand
              stand out.
            </p>
          </div>
        </section>
        <div className={styles.cardline}></div>
        <div id="printing" className={styles.printingcards}>
          <div className={styles.card}>
            <div className={styles.photo}>
              <img src={muskanbillboard} alt="Muskan Flex" />
            </div>
            <div className={styles.servicescontent}>
              <h1>Billboard Advertising</h1>
              <p>
                Promote your brand with eye-catching billboard ads placed in
                high-traffic locations, ensuring maximum visibility and strong
                customer recall.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.servicescontent}>
              <h1>Canopy Advertising</h1>
              <p>
                Boost your promotions with canopy setups at events, markets, and
                public spaces — perfect for sampling, lead generation, and
                face-to-face brand interaction.
              </p>
            </div>
            <div className={styles.photo}>
              <img src={canopymuskan} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.photo}>
              <img src={standeemuskan} alt="Muskan Flex" />
            </div>
            <div className={styles.servicescontent}>
              <h1>Standee Advertising</h1>
              <p>
                Use standees for events, exhibitions, and in-store branding to
                deliver crisp messages and promotions that grab instant
                attention.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.servicescontent}>
              <h1>Pole Kiosk Advertising</h1>
              <p>
                Reach thousands of daily commuters with pole kiosks
                strategically placed along busy roads, highways, and
                marketplaces for consistent brand exposure.
              </p>
            </div>
            <div className={styles.photo}>
              <img src={polemuskan} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.photo}>
              <img src={wallpaintingmuskan} alt="Muskan Flex" />
            </div>
            <div className={styles.servicescontent}>
              <h1>Wall Painting Advertising</h1>
              <p>
                Colorful wall paintings in high-visibility rural and urban
                areas, creating strong local brand recall.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
