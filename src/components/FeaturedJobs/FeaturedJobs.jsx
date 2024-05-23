import { useEffect } from "react";
import { useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl	font-extrabold">Featured Jobs</h2>
        <p className="font-medium text-base text-gray-600 my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-12">
        {jobs.slice(0, dataLength).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-xl text-white mb-28"
          >
            See All Jobs{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
