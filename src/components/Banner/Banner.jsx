const Banner = () => {
  return (
    <div className="md:flex flex-row-reverse items-center justify-between">
      <div>
        <img src="user.png" alt="" />
      </div>
      <div className="p-6 md:w-5/6	lg:w-3/4 flex flex-col items-center md:items-start">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-center md:text-start">
          One Step Closer To Your{" "}
          <span className="text-violet-400">Dream Job</span>
        </h1>
        <p className="text-neutral-500 text-lg my-6 text-justify md:text-start">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-white text-xl">
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
