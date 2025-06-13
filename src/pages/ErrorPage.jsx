import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <div className="container">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3 text-dark">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead text-secondary">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary mt-3 px-4">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
