"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your contact numbers
  const whatsappNumber = "919876543210"; // Example: 91 is India code
  const phoneNumber = "+919876543210"; // Phone number for direct call
  const message = "Hello! I'm interested in learning more about your services.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed right-8 bottom-24 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* WhatsApp Button */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
            WhatsApp
          </span>
        </div>
        <Link
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-xl hover:scale-110"
        >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="h-6 w-6"
  fill="currentColor"
>
  <path d="M16 .396C7.163.396 0 7.559 0 16c0 2.822.738 5.48 2.03 7.79L0 32l8.42-2.197A15.944 15.944 0 0016 31.604c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.208c-2.52 0-4.88-.736-6.89-2.003l-.493-.31-4.996 1.304 1.334-4.868-.32-.5A13.938 13.938 0 012.062 16c0-7.68 6.258-13.938 13.938-13.938S29.938 8.32 29.938 16 23.68 29.604 16 29.604zm7.63-10.657c-.417-.209-2.466-1.216-2.848-1.356-.382-.139-.66-.209-.939.209-.278.417-1.078 1.356-1.321 1.635-.243.278-.487.313-.904.104-.417-.209-1.76-.648-3.354-2.067-1.24-1.105-2.078-2.47-2.322-2.887-.243-.417-.026-.642.183-.85.188-.187.417-.487.626-.73.209-.243.278-.417.417-.695.139-.278.07-.521-.035-.73-.104-.209-.939-2.265-1.287-3.1-.34-.816-.687-.705-.939-.718-.243-.012-.521-.015-.8-.015s-.73.104-1.113.521c-.382.417-1.46 1.426-1.46 3.48s1.495 4.037 1.704 4.315c.209.278 2.94 4.49 7.126 6.292.995.43 1.771.687 2.376.88.997.317 1.905.272 2.623.165.8-.119 2.466-1.007 2.814-1.979.348-.973.348-1.808.243-1.979-.104-.174-.382-.278-.8-.487z" />
</svg>
        </Link>
      </div>

      {/* Phone Call Button */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
            Call Us
          </span>
        </div>
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-xl hover:scale-110"
        >
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* Main Toggle Button */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Need Help?</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact options"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-xl hover:scale-110"
        >
          <svg
           className={`h-7 w-7 transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M2 5a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3H8l-4 4v-4H5a3 3 0 01-3-3V5z" />
</svg>
          {/* <svg
            className={`h-7 w-7 transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg> */}
        </button>
      </div>
    </div>
  );
}
