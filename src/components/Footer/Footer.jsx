import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-10 px-12 md:py-20 bg-base-200 text-base-content"
      data-theme="dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="footer border-b border-gray-700 pb-8 md:flex justify-between">
          <aside>
            <h2 className="font-extrabold text-3xl text-white">CareerHub</h2>
            <p className="font-regular text-base">Career Ltd.</p>
            <div className="flex">
              <FaFacebookF className="text-3xl rounded-full bg-white text-black p-1" />
              <FaTwitter className="text-3xl mx-4 rounded-full bg-white text-black p-1" />
              <FaInstagram className="text-3xl rounded-full bg-white text-black p-1" />
            </div>
          </aside>
          <nav>
            <h6 className="font-semibold text-xl text-white">Company</h6>
            <a className="link link-hover text-base font-regular">About Us</a>
            <a className="link link-hover text-base font-regular">Work</a>
            <a className="link link-hover text-base font-regular">
              Latest News
            </a>
            <a className="link link-hover text-base font-regular">Careers</a>
          </nav>
          <nav>
            <h6 className="font-semibold text-xl text-white">Product</h6>
            <a className="link link-hover text-base font-regular">Prototype</a>
            <a className="link link-hover text-base font-regular">
              Plans & Pricing
            </a>
            <a className="link link-hover text-base font-regular">Customers</a>
            <a className="link link-hover text-base font-regular">
              Integrations
            </a>
          </nav>
          <nav>
            <h6 className="font-semibold text-xl text-white">Support</h6>
            <a className="link link-hover text-base font-regular">Help Desk</a>
            <a className="link link-hover text-base font-regular">Sales</a>
            <a className="link link-hover text-base font-regular">
              Become a Partner
            </a>
            <a className="link link-hover text-base font-regular">Developers</a>
          </nav>
          <nav>
            <h6 className="font-semibold text-xl text-white">Contact</h6>
            <a className="link link-hover text-base font-regular">
              Chattogram, BD
            </a>
            <a className="link link-hover text-base font-regular">
              +88-0147-39303
            </a>
          </nav>
        </div>
        <div className="copyrights pt-8 md:flex justify-between">
          <p className="text-sm font-regular mb-4 md:mb-0">
            @2024 <span className="font-bold">CareerHub</span>. All Rights
            Reserved.
          </p>
          <p className="text-sm font-regular">
            Powered by <span className="font-bold">CareerHub</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
