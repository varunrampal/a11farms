import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/A11-farms-logo.png"; 

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  // { to: "/landscaping", label: "Landscaping" },
  // { to: "/staffing", label: "Human Outsourcing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50">
  {/* top info bar */}
  <div className="bg-slate-100 text-slate-700">
    <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs md:text-sm gap-4">
      {/* left: address */}
      <div className="flex items-center gap-2">
        
        <span>29819 Dewdney Trunk Rd.Mission B.C. V4S 1B7</span>
      </div>
      {/* right: phone + email */}
      <div className="flex items-center gap-4">
        <a href="tel:+16045551234" className="hover:text-[#2596be]">
          604-217-2992
        </a>
        <a href="mailto:info@a11contracting.ca" className="hover:text-[#2596be]">
          info@a11farms.com
        </a>
      </div>
    </div>
  </div>

  {/* main nav */}
  <div className="bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
      <Link to="/" className="flex items-center gap-2">
        {/* <div className="h-9 w-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg"> */}
          {/* logo initial if you want */}
        {/* </div> */}
        <img
          src={logo}
          alt="A11 Farms & Nursery"
          className="h-12 w-auto object-contain"
        />
      </Link>
      <button
        className="md:hidden rounded-md border px-2 py-1"
        onClick={() => setOpen((p) => !p)}
      >
        <span className="sr-only">Toggle menu</span>
        ☰
      </button>
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-medium hover:text-brand ${
                isActive ? "text-brand" : "text-slate-700"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        {/* <Link
          to="/contact"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black hover:bg-brand-dark"
        >
          Get Quote
        </Link> */}
      </nav>
    </div>
    {open && (
      <div className="md:hidden border-t bg-white">
        <nav className="flex flex-col px-4 py-3 gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    )}
  </div>
</header>

  );
}
