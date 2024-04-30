
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>

      <Navbar></Navbar>

      <div className="w-1/2 mx-auto my-10 p-10 bg-green-50 shadow animate__animated animate__fadeInUp">
        <h2 className="text-4xl text-center font-bold mb-12 text-green-800">
          Contact Us
        </h2>

        <div>
          <p className="flex items-center mb-4 justify-center text-2xl">
            <FaEnvelope className="mr-4 text-xl text-blue-500" />
            <span>info@wanderlustcollective.com</span>
          </p>
          <p className="flex items-center mb-4  justify-center text-2xl">
            <FaPhoneAlt className="mr-4 text-xl text-blue-500" />
            <span>+8801732412345</span>
          </p>
          <p className="flex items-center  justify-center text-2xl">
            <FaMapMarkerAlt className="mr-4 text-xl text-blue-500" />
            <span>Dhanmondi, Dhaka</span>
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
