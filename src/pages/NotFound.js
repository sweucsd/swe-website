import React from 'react';

function NotFound() {
  return (
    <div className="margin">
      <p className="darkGray">
        The requested page could not be found.
        It may have been moved or deleted.
        Try rechecking the url,
        or return to the homepage
        {' '}
        <a className="clickableLink" href="/">here.</a>
      </p>
    </div>
  );
}

export default NotFound;
