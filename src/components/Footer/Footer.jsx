import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-10 md:py-20 bg-base-200 text-base-content"
      data-theme="dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="footer border-b border-gray-700 pb-8 md:flex justify-between">
          <aside>
            <h2 className="font-extrabold md:text-3xl text-white">CareerHub</h2>
            <p className="font-regular md:text-base">Career Ltd.</p>
            <div className="flex">
              <FaFacebookF className="text-3xl rounded-full bg-white text-black p-1" />
              <FaTwitter className="text-3xl mx-4 rounded-full bg-white text-black p-1" />
              <FaInstagram className="text-3xl rounded-full bg-white text-black p-1" />
            </div>
          </aside>
          <nav>
            <h6 className="font-semibold md:text-xl text-white">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Work</a>
            <a className="link link-hover">Latest News</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <h6 className="font-semibold md:text-xl text-white">Product</h6>
            <a className="link link-hover">Prototype</a>
            <a className="link link-hover">Plans & Pricing</a>
            <a className="link link-hover">Customers</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="font-semibold md:text-xl text-white">Support</h6>
            <a className="link link-hover">Help Desk</a>
            <a className="link link-hover">Sales</a>
            <a className="link link-hover">Become a Partner</a>
            <a className="link link-hover">Developers</a>
          </nav>
          <nav>
            <h6 className="font-semibold md:text-xl text-white">Contact</h6>
            <a className="link link-hover">Chattogram, BD</a>
            <a className="link link-hover">+88-0147-39303</a>
          </nav>
        </div>
        <div className="copyrights pt-8 flex justify-between">
          <p className="md:text-sm font-regular">
            @2024 <span className="font-bold">CareerHub</span>. All Rights
            Reserved.
          </p>
          <p className="md:text-sm font-regular">
            Powered by <span className="font-bold">CareerHub</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
