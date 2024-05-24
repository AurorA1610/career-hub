import { PiCurrencyCircleDollar } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleAppliedJob = ({ job }) => {
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
    <div className="card md:card-side bg-base-100 shadow-xl border border-gray-200 mb-10 p-6 md:px-12">
      <figure>
        <img className="w-36" src={logo} alt="" />
      </figure>
      <div className="card-body ms-6">
        <div className="lg:flex justify-between">
          <div>
            <h3 className="font-extrabold text-2xl">{job_title}</h3>
            <h3 className="font-semibold text-2xl text-neutral-500 py-3">
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
            <div className="md:flex py-3 mb-5 text-neutral-500 font-semibold">
              <div className="text-xl me-8 flex items-center">
                <SlLocationPin /> <span className="ms-2">{location}</span>
              </div>
              <div className="flex items-center">
                <PiCurrencyCircleDollar className="text-2xl" />{" "}
                <span className="ms-2 text-xl">Salary : {salary}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to={`/job/${id}`}
              className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold text-xl text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleAppliedJob.propTypes = {
  job: PropTypes.object,
};

export default SingleAppliedJob;
