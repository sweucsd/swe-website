import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notFoundContainer">
      <p className="p1 darkGray">
        The requested page could not be found.
        It may have been moved or deleted.
        Try rechecking the url,
        or return to the homepage
        {' '}
        <a className="notFoundLink" href="/">here.</a>
      </p>
    </div>
  );
}

export default NotFound;
