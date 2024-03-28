import { FaXTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import configData from "../data/config.json";

export default function Footer() {
  const socialLinks = configData.social;
  return (
    <>
      <div className="px-2 py-2">
  <div className="flex items-center justify-start px-7 py-7 bg-gray-100 rounded-lg">
    <p className="w-full">
      © 2024 MERABET Faycal 
          </p>
          
          <div className="flex gap-x-1">
            {socialLinks.map((socialLink, index) => {
              const iconMap = {
                FaXTwitter,
                FaInstagram,
                FaDribbble,
                FaGithub,
                FaLinkedinIn,
              };
              const IconComponent = iconMap[socialLink.icon];

              return (
                <a key={index} href={socialLink.link} className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm">
                  {<IconComponent size={20} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
