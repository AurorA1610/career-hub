import { SlLocationPin } from "react-icons/sl";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-gray-400 rounded p-10">
      <img className="pb-9" src={logo} alt="" />
      <h3 className="font-extrabold text-2xl">{job_title}</h3>
      <h3 className="font-semibold text-xl text-gray-600 py-3">
        {company_name}
      </h3>
      <div className="md:flex">
        <div className="text-indigo-400 border border-indigo-400 px-6 py-2 me-6 rounded font-extrabold text-base">
          {remote_or_onsite}
        </div>
        <div className="text-indigo-400 border border-indigo-400 px-6 py-2 rounded font-extrabold text-base">
          {job_type}
        </div>
      </div>
      <div className="md:flex py-3">
        <div className="font-semibold text-xl text-gray-600 me-8 flex items-center">
          <SlLocationPin /> <span className="ms-2">{location}</span>
        </div>
        <div className="font-semibold text-gray-600 flex items-center">
          <PiCurrencyCircleDollar className="text-2xl" />{" "}
          <span className="ms-2 text-xl">Salary : {salary}</span>
        </div>
      </div>
      <Link
        to={`/job/${id}`}
        className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-xl text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default SingleJob;
