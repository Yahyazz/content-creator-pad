import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="container-big h-[calc(90vh-5rem)] flex flex-col justify-center items-center gap-y-8">
      <p className="text-center font-semibold text-lg">
        <span className="font-bold text-xl text-primary-blue">404!</span> <br />
        Sorry, this page isn't available.
      </p>
      <button className="btn-primary w-4/5 sm:w-1/3 md:w-1/4">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}
