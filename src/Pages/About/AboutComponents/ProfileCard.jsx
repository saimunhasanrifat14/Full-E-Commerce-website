import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Profile from "../../../assets/About/Profile.png";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-BGWhite overflow-hidden">
      {/* Image Section */}
      <div className="w-full bg-gray-100 flex items-center justify-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="py-4 md:text-start text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Tom Cruise
        </h2>
        <p className="text-gray-600 mb-4">Founder & Chairman</p>

        {/* Social Icons */}
        <div className="flex md:justify-start justify-center gap-3 text-gray-500">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-HoverRed transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-HoverRed transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-HoverRed transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
