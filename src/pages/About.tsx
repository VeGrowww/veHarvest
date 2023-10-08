import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="main">
      <div className="about-container">
        <h2 className="about-title">About veHarvest</h2>
        <p className="about-info">
          veHarvest is a pioneering venture under the umbrella of the
          <strong> veGrowww conglomerate</strong>. Our primary mission is to
          revolutionize urban agriculture, allowing city dwellers to cultivate
          crops right in their own homes. Through innovative techniques and
          top-quality resources, we empower individuals to nurture thriving
          plants within the confines of their urban spaces.
        </p>
        <p className="about-info">
          As part of the veGrowww conglomerate, veHarvest introduces a unique
          rewards system. Participants are compensated with veCoins based on the
          success and growth of their plants. This not only encourages skillful
          cultivation but also provides a tangible incentive for our dedicated
          urban farmers.
        </p>
        <p className="about-info">
          In addition to personal cultivation, veHarvest facilitates a
          marketplace where users can sell their homegrown produce to other
          members of the community. Customers are encouraged to rate the quality
          of the plants, and tokens are distributed accordingly. This feedback
          loop not only ensures a thriving marketplace but also fosters a sense
          of camaraderie and excellence within the veHarvest ecosystem.
        </p>
      </div>
    </main>
  );
}
