import React from 'react';
import blog_img1 from "../assets/blog_img1.jpeg";
import blog_img2 from "../assets/blog_img2.jpg";
import blog_img3 from "../assets/blog_img3.jpg";
import blog_img4 from "../assets/blog_img4.jpeg";
import blog_img5 from "../assets/blog_img5.png";
import blog_img6 from "../assets/blog_img6.jpeg";
import blog_img7 from "../assets/blog_img7.jpeg";
import blog_img8 from "../assets/blog_img8.jpeg";
import blog_img9 from "../assets/blog_img9.jpeg";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Health &amp; Wellness Blog</h1>
          <p className="text-xl">Discover insights, tips, and trends to boost your well-being.</p>
        </div>
      </section>

      {/* Blog Page Container */}
      <div className="blog-container">
        <h1 className="blog-page-title">Latest Articles</h1>
        <div className="blog-grid">
          {/* Blog Card 1: Natural Remedies */}
          <div className="blog-card">
            <img src={blog_img1} alt="Herbs & Natural Remedies" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">10 Natural Remedies for Everyday Ailments</h2>
              <p className="blog-card-text">
                Discover effective natural remedies that you can try at home to combat common health issues...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 2: Immune System Boosting */}
          <div className="blog-card">
            <img src={blog_img2} alt="Healthy Smoothie" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">How to Boost Your Immune System Naturally</h2>
              <p className="blog-card-text">
                Learn about foods, habits, and lifestyle changes that can help enhance your immune system...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 3: Health Check-Ups */}
          <div className="blog-card">
            <img src={blog_img3} alt="Doctor Consultation" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">The Benefits of Regular Health Check-Ups</h2>
              <p className="blog-card-text">
                Explore why routine health check-ups are essential for early detection and prevention...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 4: AI in Healthcare */}
          <div className="blog-card">
            <img src={blog_img4} alt="AI in Healthcare" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">How AI is Transforming Healthcare</h2>
              <p className="blog-card-text">
                Discover the impact of artificial intelligence on healthcare and digital medicine...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 5: Natural Supplements */}
          <div className="blog-card">
            <img src={blog_img5} alt="Natural Supplements" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">Natural Supplements for Vitality</h2>
              <p className="blog-card-text">
                Discover the power of natural supplements in boosting your energy levels and overall health...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 6: Balanced Diet */}
          <div className="blog-card">
            <img src={blog_img6} alt="Balanced Diet" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">Tips for a Balanced Diet</h2>
              <p className="blog-card-text">
                Learn how to maintain a balanced diet and enjoy a healthy lifestyle on a budget...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 7: Managing Stress */}
          <div className="blog-card">
            <img src={blog_img7} alt="Stress Management" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">Managing Stress Effectively</h2>
              <p className="blog-card-text">
                Explore techniques and lifestyle changes to manage stress and improve mental well-being...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 8: Digital Healthcare Trends */}
          <div className="blog-card">
            <img src={blog_img8} alt="Digital Healthcare" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">Digital Healthcare Trends</h2>
              <p className="blog-card-text">
                Stay updated with the latest trends in digital healthcare and telemedicine...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
          {/* Blog Card 9: Personal Care & Wellness */}
          <div className="blog-card">
            <img src={blog_img9} alt="Personal Care &amp; Wellness" className="blog-card-img" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">Personal Care &amp; Wellness Tips</h2>
              <p className="blog-card-text">
                Discover effective wellness strategies and personal care tips for a healthier life...
              </p>
              <a href="#" className="blog-card-link">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
