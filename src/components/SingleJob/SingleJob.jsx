import { SlLocationPin } from "react-icons/sl";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    <div className="m-6 md:m-0 border border-gray-400 rounded p-10">
      <img className="pb-9" src={logo} alt="" />
      <h3 className="font-extrabold text-2xl text-zinc-700">{job_title}</h3>
      <h3 className="font-semibold text-xl text-neutral-500 py-3">
        {company_name}
      </h3>
      <div className="md:flex text-center">
        <div className="text-violet-400 border border-indigo-400 px-6 py-2 me-6 rounded font-extrabold text-base w-full md:w-auto mb-4">
          {remote_or_onsite}
        </div>
        <div className="text-violet-400 border border-indigo-400 px-6 py-2 rounded font-extrabold text-base w-full md:w-auto mb-4">
          {job_type}
        </div>
      </div>
      <div className="lg:flex py-3">
        <div className="font-semibold text-lg	md:text-xl text-neutral-500 me-8 mb-4 lg:mb-0 flex items-center">
          <SlLocationPin /> <span className="ms-2">{location}</span>
        </div>
        <div className="font-semibold text-neutral-500 flex items-center">
          <PiCurrencyCircleDollar className="text-xl	md:text-2xl" />{" "}
          <span className="ms-2 text-lg	md:text-xl">Salary : {salary}</span>
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

SingleJob.propTypes = {
  job: PropTypes.object,
};
export default SingleJob;
