import { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-5xl	font-extrabold">All Jobs</h2>
        <p className="font-medium text-base text-gray-600 my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-4 my-24 md:mx-7">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
