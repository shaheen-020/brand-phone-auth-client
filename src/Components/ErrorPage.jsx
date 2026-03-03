import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-10">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm italic text-red-600">
        {error?.statusText || error?.message || 'Unknown error'}
      </p>
      <Link to="/" className="btn mt-6">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
