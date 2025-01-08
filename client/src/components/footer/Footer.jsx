import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import FooterRights from "./FooterRights";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm border-gray-300 text-black py-8">
      <div className="container mx-auto flex flex-row lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0">
          <h3 className="font-bold mb-4">For Business</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Employer</li>
            <li>Health Plan</li>
            <li>Individual</li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Resource Center</li>
            <li>Testimonials</li>
            <li>STV</li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h3 className="font-bold mb-4">Partners</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Pull & Bear</li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-0 cursor-pointer">
            <li>About</li>
            <li>Press</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h3 className="font-bold text-center mb-4">Coming soon </h3>
          <div className="flex flex-col sm:flex-row sm:space-x-1">
            <Facebook className="text-blue-600 text-xl cursor-pointer" />
            <Twitter className="text-blue-400 text-xl cursor-pointer" />
            <Linkedin className="text-blue-700 text-xl cursor-pointer" />
            <Instagram className="text-pink-500 text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <FooterRights />
    </footer>
  );
};

export default Footer;
