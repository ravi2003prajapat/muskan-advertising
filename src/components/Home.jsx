import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import HomeMain from "../assets/HomeMain.webp";
import video2 from "../assets/video2.webm";
import machine from "../assets/Machine.webp";
import newspaper from "../assets/Newspaper.webp";
import hoarding from "../assets/hoarding.webp";

import servicesData from "../data/services.json";
import { Helmet } from "react-helmet-async"; // ✅ FIX: Import Helmet

// ✅ Reusable ServiceCard component
const ServiceCard = ({ title, color }) => {
  return (
    <div className={styles.servicecard} style={{ backgroundColor: color }}>
      {title}
    </div>
  );
};

const Home = () => {
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let clientsTimer, yearsTimer;

    const startCounting = () => {
      clearInterval(clientsTimer);
      clearInterval(yearsTimer);

      // Clients counter
      let cStart = 0;
      const cEnd = 1000; // target clients
      const cDuration = 2000; // 2s
      const cIncrement = Math.ceil(cEnd / (cDuration / 16));

      clientsTimer = setInterval(() => {
        cStart += cIncrement;
        if (cStart >= cEnd) {
          clearInterval(clientsTimer);
          setClients(cEnd);
        } else {
          setClients(cStart);
        }
      }, 16);

      // Years counter
      let yStart = 0;
      const yEnd = 26; // target years
      const yDuration = 2000; // 2s
      const yIncrement = Math.ceil(yEnd / (yDuration / 16));

      yearsTimer = setInterval(() => {
        yStart += yIncrement;
        if (yStart >= yEnd) {
          clearInterval(yearsTimer);
          setYears(yEnd);
        } else {
          setYears(yStart);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        } else {
          clearInterval(clientsTimer);
          clearInterval(yearsTimer);
          setClients(0);
          setYears(0);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      clearInterval(clientsTimer);
      clearInterval(yearsTimer);
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* ✅ Unique SEO tags for Home */}
      <Helmet>
        <title>Muskan Advertising | Smart Marketing, Real Results</title>
        <meta
          name="description"
          content="Muskan Advertising - delivering impactful advertising, printing, and billboard campaigns in Rajasthan since 1998. Trusted by 1000+ clients."
        />
        <meta
          name="keywords"
          content="Muskan Advertising, Rajasthan advertising agency, billboard ads, printing services, newspaper ads"
        />
      </Helmet>

      {/* Hero Section */}
      <div className={styles.homemain}>
        <div className={styles.left}>
          <h1>Smart Marketing</h1>
          <h2>Real Results!</h2>
          <p>
            Where creativity meets strategy, and brands become unforgettable
          </p>
        </div>
        <div className={styles.right}>
          <img loading="lazy" src={HomeMain} alt="Muskan Advertising" />
        </div>
      </div>

      {/* Line */}
      <div className={styles.line1}></div>

      {/* Video Section */}
      <div className={styles.videos}>
        <div className={styles.videobox}>
          <video
            autoPlay
            muted
            loop
            preload="none"
            playsInline
            poster={HomeMain}
            className={styles.video}
          >
            <source src={video2} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services}>
        <h1>OUR SERVICES</h1>
        <div className={styles.cardsWrapper}>
          <div className={styles.cards}>
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                color={service.color}
              />
            ))}

            {/* Optional: Duplicate cards for smooth scrolling effect */}
            {servicesData.map((service, index) => (
              <ServiceCard
                key={`dup-${index}`}
                title={service.title}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.index}>
        <div className={styles.section1}>
          <div className={styles.content}>
            <h1>ADVERTISE IN NEWSPAPER</h1>
            <p>
              Advertise in top newspapers with impactful ads – from classifieds
              to full pages, ensuring wide reach, strong visibility, and
              customer engagement.
            </p>
            <button>View More</button>
          </div>
          <div className={styles.image}>
            <img loading="lazy" src={newspaper} alt="Newspaper Advertising" />
          </div>
        </div>

        <div className={styles.indexline}></div>

        <div className={styles.section1}>
          <div className={styles.image}>
            <img loading="lazy" src={machine} alt="High Quality Printing" />
          </div>
          <div className={styles.content}>
            <h1>HIGH QUALITY PRINTING</h1>
            <p>
              Your one-stop solution for Flex, Vinyl & Star Flex printing –
              superior quality, weather-resistant, and designed to make your
              brand stand out.
            </p>
            <button>View More</button>
          </div>
        </div>

        <div className={styles.indexline}></div>

        <div className={styles.section1}>
          <div className={styles.content}>
            <h1>BILLBOARD ADVERTISING</h1>
            <p>
              Promote your brand effectively with strategically placed
              billboards, maximizing visibility and engagement across
              high-traffic locations nationwide.
            </p>
            <button>View More</button>
          </div>
          <div className={styles.image}>
            <img loading="lazy" src={hoarding} alt="Billboard Advertising" />
          </div>
        </div>
      </div>

      {/* Clients + Years Counter */}
      <div className={styles.clients} ref={counterRef}>
        <div className={styles.clientnumber}>
          <h1>{clients}+</h1>
          <h2>Satisfied Clients</h2>
          <p>Building long-lasting relationships</p>
        </div>
        <div className={styles.verticalline}></div>
        <div className={styles.yearnumber}>
          <h1>{years}+</h1>
          <h2>Years of Expertise</h2>
          <p>Committed to quality & innovation</p>
        </div>
      </div>

      {/* Line */}
      <div className={styles.line2}></div>
    </div>
  );
};

export default Home;
