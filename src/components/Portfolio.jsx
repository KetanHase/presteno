import React, { useState } from 'react';
import '../assets/styles/Portfolio.css';

const portfolioItems = [
  { id: 1, title: 'App 1', category: 'app', image: 'images/app-1.jpg' },
  { id: 2, title: 'Product 1', category: 'product', image: 'images/product-1.jpg' },
  { id: 3, title: 'Branding 1', category: 'branding', image: 'images/branding-1.jpg' },
  { id: 4, title: 'Books 1', category: 'books', image: 'images/books-1.jpg' },
  { id: 5, title: 'App 2', category: 'app', image: 'images/app-2.jpg' },
  { id: 6, title: 'Product 2', category: 'product', image: 'images/product-2.jpg' },
  { id: 7, title: 'Branding 2', category: 'branding', image: 'images/branding-2.jpg' },
  { id: 8, title: 'Books 2', category: 'books', image: 'images/books-2.jpg' },
  { id: 9, title: 'App 3', category: 'app', image: 'images/app-3.jpg' },
  { id: 10, title: 'Product 3', category: 'product', image: 'images/product-3.jpg' },
  { id: 11, title: 'Branding 3', category: 'branding', image: 'images/branding-3.jpg' },
  { id: 12, title: 'Books 3', category: 'books', image: 'images/books-3.jpg' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
            <li className={filter === 'all' ? 'filter-active' : ''} onClick={() => handleFilter('all')}>All</li>
            <li className={filter === 'app' ? 'filter-active' : ''} onClick={() => handleFilter('app')}>App</li>
            <li className={filter === 'product' ? 'filter-active' : ''} onClick={() => handleFilter('product')}>Product</li>
            <li className={filter === 'branding' ? 'filter-active' : ''} onClick={() => handleFilter('branding')}>Branding</li>
            <li className={filter === 'books' ? 'filter-active' : ''} onClick={() => handleFilter('books')}>Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
            {filteredItems.map(item => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
                <div className="portfolio-content h-100">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href={item.image} title={item.title} className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a href="portfolio-details.html" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
