import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
 <div>
      {/* Hero */}

      <div className="space-y-10">
      <HomeSlider />
      <Introduction/>
      {/* rest of your sections */}
    </div>
      {/* <section className="bg-gradient-to-r from-[#FCB53B] via-[#f9a825] to-[#f57c00] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-3">
              Landscaping & Labour Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Smart Contracting for Outdoor Projects & Skilled Workforce
            </h1>
            <p className="text-white/90 mb-6">
              We help property managers, builders, and municipalities with reliable landscaping
              crews and on-demand human outsourcing.
            </p>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="bg-white text-[#f57c00] px-5 py-2.5 rounded-full font-semibold hover:bg-white/90 transition"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="px-5 py-2.5 rounded-full border border-white text-white hover:bg-white/10 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Why work with us?</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Full-service landscaping: planting, grading, irrigation, cleanups
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Human outsourcing: skilled &amp; general labour, seasonal workers
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Reliable crews, insured, BC-based
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Highlight sections */}
      <section className="max-w-6xl mx-auto px-4 py-5">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border p-6 shadow-sm hover:border-primary/50 transition">
            <h3 className="font-semibold mb-2 text-slate-900">Nursery Plants & Wholesale Supply</h3>
            <p className="text-sm text-slate-600">
              High-quality container-grown plants for landscapers, developers, municipalities, and restoration companies.
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm hover:border-primary/50 transition">
            <h3 className="font-semibold mb-2 text-slate-900">Native Plant & Restoration Supply</h3>
            <p className="text-sm text-slate-600">
             Locally grown native plants for ecological restoration, environmental rehabilitation, habitat recovery, and BC Parks or municipal compliance projects..
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm hover:border-primary/50 transition">
            <h3 className="font-semibold mb-2 text-slate-900">Custom Grow & Contract Propagation</h3>
            <p className="text-sm text-slate-600">
            Custom plant growing and contract propagation services designed to meet specific project requirements, plant sizes, quantities, and delivery timelines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
