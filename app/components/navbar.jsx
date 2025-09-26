'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Mark component as rendered on client only
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render menu toggle button only on client side
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Shekhar Metre
          </Link>
        </div>

        {/* Menu toggle button for small screens */}
        {isClient && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white px-4 py-2 border border-white rounded"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        )}

        <ul
          id="navbar-default"
          className={`mt-4 flex flex-col items-start text-sm space-y-2 md:mt-0 md:flex-row md:items-center md:space-x-4 md:space-y-0 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link href="/#about" className="text-white hover:text-pink-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white hover:text-pink-600">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white hover:text-pink-600">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-white hover:text-pink-600">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-pink-600">
              BLOGS
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white hover:text-pink-600">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
