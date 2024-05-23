import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const handleJobApply = () => {
    saveJobApplication(parseInt(id));
    toast("You have applied to this job !");
  };
  return (
    <div className="mb-12">
      <h1 className="text-center text-3xl font-extrabold my-11">Job Details</h1>
      <div className="px-5 md:grid grid-cols-6 gap-8 font-medium">
        <div className="col-span-4 text-base text-justify">
          <p className="my-9">
            <span className="font-extrabold">Job Description: </span>
            <span className="text-neutral-500">{job_description}</span>
          </p>
          <p className="my-9">
            <span className="font-extrabold">Job Responsibility: </span>
            <span className="text-neutral-500">{job_responsibility}</span>
          </p>
          <p className="my-9">
            <span className="font-extrabold">Educational Requirements: </span>{" "}
            <br />
            <br />
            <span className="text-neutral-500">{educational_requirements}</span>
          </p>
          <p className="my-9">
            <span className="font-extrabold">Experiences: </span> <br />
            <br />
            <span className="text-neutral-500">{experiences}</span>
          </p>
        </div>
        <div className="col-span-2 text-xl">
          <h3 className="font-extrabold py-5 border-b-2 border-stone-300">
            More about this job
          </h3>
          <p className="my-5">
            <span className="font-bold text-zinc-700">Salary : </span>
            <span className="text-neutral-500">{salary} (Per Month)</span>
          </p>
          <p className="mb-12">
            <span className="font-bold text-zinc-700">Job Title : </span>
            <span className="text-neutral-500">{job_title}</span>
          </p>
          <h3 className="font-extrabold py-5 border-b-2 border-stone-300">
            Contact Information
          </h3>
          <p className="my-5">
            <span className="font-bold text-zinc-700">Phone : </span>
            <span className="text-neutral-500">
              {contact_information.phone}
            </span>
          </p>
          <p className="mb-5">
            <span className="font-bold text-zinc-700">Email : </span>{" "}
            <span className="text-neutral-500">
              {contact_information.email}
            </span>
          </p>
          <p className="mb-5">
            <span className="font-bold text-zinc-700">Address : </span>{" "}
            <span className="text-neutral-500">
              {contact_information.address}
            </span>
          </p>
          <button
            onClick={handleJobApply}
            className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-white w-full text-xl"
          >
            Apply Now{" "}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
