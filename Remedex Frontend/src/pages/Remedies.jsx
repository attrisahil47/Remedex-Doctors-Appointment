import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import remedy1 from "../assets/remedy1.jpg"
import remedy2 from "../assets/remedy2.webp"
import remedy3 from "../assets/remedy3.avif"
import remedy4 from "../assets/remedy4.jpg"

const Remedies = () => {
  return (
    <div>
      <>
      <Navbar/>
      <>
  {/* Hero Section */}
  <section className="remedies-hero">
    <div className="hero-content">
      <h1>Natural Remedies</h1>
      <p>
        Discover time-tested natural remedies to boost your health and wellness.
      </p>
    </div>
  </section>
  {/* Overview Section */}
  <section className="remedies-overview">
    <div className="overview-container">
      <h2 className="section-title">Why Choose Natural Remedies?</h2>
      <p>
        Natural remedies have been used for centuries to restore balance and
        promote healing. They are gentle on the body and work in harmony with
        your natural processes. Explore our curated selection of remedies,
        backed by science and tradition.
      </p>
    </div>
  </section>
  {/* Remedies Cards Section */}
  <section className="remedies-list">
    <h2 className="section-title">Our Remedies</h2>
    <div className="remedies-grid">
      {/* Remedy Card 1 */}
      <div className="remedy-card">
        <img src={remedy1}
          alt="Herbal Tea for Cough"
          className="remedy-img"
        />
        <div className="remedy-info">
          <h3 className="remedy-title">Herbal Tea for Cough</h3>
          <p className="remedy-description">
            A soothing blend of ginger, honey, and lemon to relieve cough and
            soothe a sore throat.
          </p>
          <a href="#" className="remedy-link">
            Learn More
          </a>
        </div>
      </div>
      {/* Remedy Card 2 */}
      <div className="remedy-card">
      <img src={remedy2}
          alt="Echinacea Tonic"
          className="remedy-img"
        />
        <div className="remedy-info">
          <h3 className="remedy-title">Echinacea Tonic</h3>
          <p className="remedy-description">
            Boost your immune system with this potent echinacea-based tonic that
            fights infections.
          </p>
          <a href="#" className="remedy-link">
            Learn More
          </a>
        </div>
      </div>
      {/* Remedy Card 3 */}
      <div className="remedy-card">
      <img src={remedy3}
          alt="Turmeric Milk"
          className="remedy-img"
        />
        <div className="remedy-info">
          <h3 className="remedy-title">Turmeric Milk</h3>
          <p className="remedy-description">
            A warm, anti-inflammatory drink that helps soothe and heal the body.
          </p>
          <a href="#" className="remedy-link">
            Learn More
          </a>
        </div>
      </div>
      {/* Remedy Card 4 */}
      <div className="remedy-card">
      <img src={remedy4}
          alt="Peppermint Tea"
          className="remedy-img"
        />
        <div className="remedy-info">
          <h3 className="remedy-title">Peppermint Tea</h3>
          <p className="remedy-description">
            Refresh and relax with peppermint tea, known for its digestive and
            calming benefits.
          </p>
          <a href="#" className="remedy-link">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Detailed Remedies Accordion Section */}
  <section className="remedies-details">
    <h2 className="section-title">Detailed Remedies Information</h2>
    <div className="accordion">
      <details>
        <summary>Cold &amp; Flu Remedies</summary>
        <p>
          Explore a comprehensive guide to natural remedies that help alleviate
          cold and flu symptoms, including garlic, ginger, and echinacea.
        </p>
      </details>
      <details>
        <summary>Digestive Health Remedies</summary>
        <p>
          Discover natural ways to improve digestion and soothe the stomach,
          featuring peppermint tea, ginger, and aloe vera.
        </p>
      </details>
      <details>
        <summary>Skin &amp; Hair Care Remedies</summary>
        <p>
          Learn about herbal treatments and natural oils that help enhance skin
          clarity and promote healthy hair.
        </p>
      </details>
      <details>
        <summary>Stress &amp; Relaxation Remedies</summary>
        <p>
          Find out how techniques like aromatherapy, meditation, and herbal teas
          can help manage stress and improve your well-being.
        </p>
      </details>
    </div>
  </section>
</>

      <Footer/>
      </>
    </div>
  )
}

export default Remedies
