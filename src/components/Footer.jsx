import logo from "../assets/a11-farms-logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* left: logo + tagline */}
        <div className="flex gap-4 items-start">
          <img
            src={logo}
            alt="A11 Farms & Nursery"
            className="w-18 h-16 object-contain"
          />
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              A11 FARMS & NURSERY
            </h2>
            <p className="text-sm text-slate-500 max-w-xs">
             Farming & Nursery in the Lower Mainland.
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-auto">
          {/* operation hours */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide mb-3 uppercase text-slate-900">
              Operations Hours
            </h3>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-slate-500">8:00 am – 4:30 pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-slate-500">By appointment</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-slate-500">Closed</span>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide mb-3 uppercase text-slate-900">
              Contact Us
            </h3>
            <p className="text-sm">Langley, BC</p>
            <p className="text-sm mt-1">
              Phone:{" "}
              <a
                href="tel:+16045551234"
                className="text-[#2596be] font-medium hover:underline"
              >
                604-217-2992
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@a11contracting.com"
                className="text-[#2596be] font-medium hover:underline"
              >
                info@a11farms.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} A11 FARMS & NURSERY. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built by A11 Farms & Nursery team.</p>
        </div>
      </div>
    </footer>
  );
}
