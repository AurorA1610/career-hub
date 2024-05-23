import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";
import { LiaAngleDownSolid } from "react-icons/lia";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  const [displayAppliedJobs, setDisplayAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      // const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));
      const appliedJobs = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setAllAppliedJobs(appliedJobs);
      setDisplayAppliedJobs(appliedJobs);
    }
  }, []);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayAppliedJobs(allAppliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayAppliedJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayAppliedJobs(onsiteJobs);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold my-11">
        Applied Jobs
      </h1>
      <div className="flex justify-end mb-32">
        <details className="dropdown">
          <summary className="m-1 btn text-xl text-zinc-700">
            Filter by <LiaAngleDownSolid />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-9/12">
            <li onClick={() => handleJobsFilter("all")}>
              <a className="text-zinc-700">All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a className="text-zinc-700">Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a className="text-zinc-700">Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="my-16">
        {displayAppliedJobs.map((job) => (
          <SingleAppliedJob
            key={job.id}
            job={job}
            handleJobsFilter
          ></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
