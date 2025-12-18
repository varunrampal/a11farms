export default function Services() {
  const services = [
  {
    title: "Nursery Plants & Wholesale Supply",
    desc: [
      "High-quality container-grown plants",
      "Ideal for landscapers, developers, and municipalities",
      "Native plants, shrubs, grasses, and trees",
      "Hedging cedars and ornamental shrubs",
      "Reliable wholesale supply for restoration projects",
      "Contract growing for large projects",
      "Bulk wholesale orders",
      "Plant loading, delivery options available"

    ]
  },
  {
    title: "Native Plants & Restoration Stock",
    desc: [
      "Propagation and supply of locally adapted native plant species for restoration and environmental projects.",
      "Plants suitable for riparian, wetland, and habitat restoration",
      "Clean, healthy nursery stock grown to project specifications",
      "Support for municipal, BC Parks, and environmental compliance requirements",
      "Advance growing for future restoration needs"
    ]
  },
  {
    title: "Custom Grow Programs",
    desc: [
      "Contract growing services for customers requiring specific plant sizes, quantities, or timelines.",
      "Advance booking and production planning",
      "Species selection based on site and project needs",
      "Multi-year grow programs for large or phased projects",
      "Reliable scheduling aligned with project timelines"
    ]
  }
  // {
  //   title: "Landscaping & Site Work",
  //   desc: [
  //     "Professional softscaping and material installation for residential and commercial properties",
  //     "Planting & transplanting",
  //     "Lawn install (sod or seed)",
  //     "Mulching & bark installation",
  //     "Garden bed prep",
  //     "Edging, soil installation",
  //     "Property cleanups & strata maintenance"
  //   ]
  // },
  //  {
  //   title: "Labour Support (Human Outsourcing)",
  //   desc: [
  //     "Reliable seasonal and project-based workers for:",
  //     "Plant handling crews",
  //     "General landscaping labour",
  //     "Driver/helpers for deliveries",
  //     "Temporary staffing for peak seasons",
      
  //   ]
  // },
  // {
  //   title: "Labour Support (Human Outsourcing)",
  //   desc: [
  //     "Reliable seasonal and project-based workers for:",
  //     "Plant handling crews",
  //     "General landscaping labour",
  //     "Driver/helpers for deliveries",
  //     "Temporary staffing for peak seasons",
      
  //   ]
  // },
  //  {
  //   title: "Commercial / Municipal Projects",
  //   desc: [
  //     "We partner with government and private contractors for:",
  //     "Riparian & environmental restoration",
  //     "Erosion control & slope planting",
  //     "Wetland and habitat enhancement projects",
  //     "Our experienced crews understand municipal specs and environmental requirements.",
      
  //   ]
  // }

];
  return (
    <div className="max-w-8xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-3">Our Services</h1>
      <p className="text-slate-600 mb-8">
       We handle both nursery and farm operations, eliminating the need to work with multiple suppliers.
      </p>
   <div className="grid md:grid-cols-3 gap-6">
  {services.map((s) => (
    <div key={s.title} className="bg-white rounded-xl border p-5 shadow-sm">
      <h2 className="font-semibold mb-1">{s.title}</h2>

      <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
        {s.desc.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </div>
  );
}
