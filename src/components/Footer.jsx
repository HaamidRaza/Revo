import React from "react";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-3 bg-gradient-to-b from-gray-900 to-black text-gray-500 text-center">
      <div className="max-w-6xl mx-auto flex justify-around items-center">
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/achahai309/"
            target="_blank"
            aria-label="Revo on Instagram"
            className="hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/HaamidRaza"
            target="_blank"
            aria-label="Me on Github"
            className="hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
        <div className="">
          <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Revo. All rights reserved.
        </p>
        <div className="flex gap-2">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' className='hover:text-gray-300'>
            <p>Terms & Conditions</p>
            </a>
            <p>|</p>
            <a href='Privacy.webp' target='_blank' className='hover:text-gray-300'>
            <p>Privacy Policy</p>
            </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
