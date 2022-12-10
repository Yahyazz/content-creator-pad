import { Link } from 'react-router-dom';
import { MdPeople, MdPublish, MdBarChart } from 'react-icons/md';

export default function LandingPage() {
  return (
    <div>
      <section className="container-big w-full h-auto min-h-[calc(100vh-5rem)] pb-16 flex justify-center items-center flex-col-reverse gap-y-8 md:gap-0 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-y-4 px-8 text-center md:text-left">
          <h2 className="font-extrabold text-4xl">Start Your Way to be Content Creator.</h2>
          <p className="text-xl">
            One-Stop-Learn you need to start your carrerr to become a Content Creator.
          </p>
          <Link to="/learn" className="w-full lg:w-1/2">
            <button className="w-full btn-primary">Start Learn for Free</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <img
            className="w-full md:w-full lg:w-3/4 h-fit overflow-hidden rounded-2xl object-cover"
            src="/images/hero1.jpg"
            alt="A person working on laptop"
          />
        </div>
      </section>
      <section className="w-full h-auto min-h-[calc(100vh-5rem)] pb-16 bg-primary_background-darkgray02">
        <div className="container-big w-full h-auto min-h-[calc(100vh-5rem)] flex justify-center items-center flex-col-reverse gap-y-8 md:gap-0 md:flex-row-reverse md:justify-between">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-y-4 px-8 text-center md:text-left">
            <h2 className="font-extrabold text-4xl">Start Your Way to be Content Creator.</h2>
            <p className="text-xl">
              One-Stop-Learn you need to start your carrerr to become a Content Creator.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
            <img
              className="w-full md:w-full lg:w-3/4 h-fit overflow-hidden rounded-2xl object-cover"
              src="/images/hero2.jpg"
              alt="A person working on laptop"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-auto bg-primary_background-darkgray02 pb-16">
        <div className="container-big w-full h-auto">
          <h2 className="font-bold text-3xl text-center mb-16 pt-8">Our Services</h2>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-y-8 md:gap-y-0 md:gap-x-8">
            <div className="h-48 w-full md:w-1/3 flex flex-col justify-center items-center bg-primary_background-darkgray01 rounded-xl">
              <MdPeople className="text-8xl text-primary-blue" />
              <p className="text-lg text-center">1000+ person join us.</p>
            </div>
            <div className="h-48 w-full md:w-1/3 flex flex-col justify-center items-center bg-primary_background-darkgray01 rounded-xl">
              <MdPublish className="text-8xl text-primary-blue" />
              <p className="text-lg text-center">10K+ article published.</p>
            </div>
            <div className="h-48 w-full md:w-1/3 flex flex-col justify-center items-center bg-primary_background-darkgray01 rounded-xl">
              <MdBarChart className="text-8xl text-primary-blue" />
              <p className="text-lg text-center">Boost your skills.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-big w-full h-auto min-h-[calc(100vh-5rem)] flex justify-center items-center">
      <div className="w-full md:w-3/4 px-4 sm:px-16 py-16 flex justify-center items-center flex-col gap-y-8 bg-primary_background-darkgray02 rounded-3xl">
          <h2 className="font-extrabold text-4xl text-center">
            JOIN MORE THAN ONE THOUSAND PEOPLE WHO ALREADY CONTRIBUTE TO CCPAD
          </h2>
          <h3 className="font-regular text-xl text-center">Want to contribute with us?</h3>
          <Link to="/login" className="w-4/5 md:w-2/3">
            <button className="btn-primary w-full">Start Contribute</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
