import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-bold text-base text-neutral-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-jobs"
          className="font-bold text-base text-neutral-500"
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied-jobs"
          className="font-bold text-base text-neutral-500"
        >
          Applied Jobs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost font-extrabold text-2xl md:text-3xl"
        >
          CareerHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-indigo-400 to-violet-400 font-extrabold	md:text-xl text-white w-3/6 md:w-auto">
          Start Applying
        </a>
      </div>
    </div>
  );
};

export default Header;
