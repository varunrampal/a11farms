import { useEffect, useState } from "react";
import slide1 from "../assets/images/Slider-Home-img-1.jpg"
import slide2 from "../assets/images/Slider-Home-image-2.jpg"
import slide3 from "../assets/images/Slider-Home-img-3.jpg"

const slides = [
  // {
  //   id: 1,
  //   title: "Nursery Plants & Wholesale Supply",
  //   desc: "High-quality container-grown plants for landscapers, developers, municipalities, and restoration companies.",
  //   img: slide1,
  // },
  // {
  //   id: 2,
  //   title: "Landscaping & Site Work",
  //   desc: "Professional softscaping and material installation for residential and commercial properties.",
  //   img: slide2,
  // },
  // {
  //   id: 3,
  //   title: "Labour Support (Human Outsourcing)",
  //   desc: "Reliable seasonal and project-based workers",
  //   img: slide3,
  // },
  {id: 1,
  title: "Nursery Plants & Wholesale Supply",
  desc: "High-quality container-grown nursery plants supplied wholesale for landscapers, developers, municipalities, and large-scale planting projects across British Columbia.",
  img: slide1,
},
{id: 2,
  title: "Native Plant & Restoration Supply",
  desc: "Locally grown native plants for ecological restoration, environmental rehabilitation, habitat recovery, and BC Parks or municipal compliance projects.",
  img: slide2,
},
{id: 3,
  title: "Custom Grow & Contract Propagation",
  desc: "Custom plant growing and contract propagation services designed to meet specific project requirements, plant sizes, quantities, and delivery timelines.",
  img: slide3,
}
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-2xl bg-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* background image only */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.img})` }}
          />

          {/* content on top */}
          <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
            <div className="bg-white/95 rounded-xl shadow-lg p-6 md:p-8 max-w-md space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
               A11 FARMS & NURSERY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                {slide.desc}
              </p>
              {/* <button className="px-5 py-2 rounded-lg bg-[#2596be] text-white text-sm font-semibold shadow hover:bg-[#1b7ea2] transition">
                Get a Quote
              </button> */}
            </div>
          </div>
        </div>
      ))}

      {/* controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-[#FCD220]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
