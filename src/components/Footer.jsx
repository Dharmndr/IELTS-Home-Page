import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-600 text-white py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} IELTS. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
