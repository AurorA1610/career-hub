import { useEffect } from "react";
import { useState } from "react";
import SingleJob from "../SingleJob/SingleJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl	font-extrabold">Featured Jobs</h2>
        <p className="font-medium text-base text-neutral-500 my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-4 mb-12 md:mx-7">
        {jobs.slice(0, 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/all-jobs"
          className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-xl text-white mb-28"
        >
          See All Jobs{" "}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
