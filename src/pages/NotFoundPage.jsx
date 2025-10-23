import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container text-center">
        <h1 className="text-6xl font-serif font-bold text-charcoal-dark mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center gap-2">
          <HomeIcon className="h-5 w-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
