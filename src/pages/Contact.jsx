export default function Contact() {
  return (
    // <div className="max-w-6xl mx-auto px-4 py-14">
    //   <h1 className="text-3xl font-bold mb-3">Request a Quote</h1>
    //   <p className="text-slate-600 mb-6 max-w-2xl">
    //     Tell us what kind of project or staffing you need and we’ll get back to you.
    //   </p>
    //   <form className="bg-white border rounded-xl p-6 grid md:grid-cols-2 gap-4">
    //     <div className="flex flex-col gap-1">
    //       <label className="text-sm font-medium">Name</label>
    //       <input
    //         type="text"
    //         className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/70"
    //         placeholder="Your name"
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <label className="text-sm font-medium">Email</label>
    //       <input
    //         type="email"
    //         className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/70"
    //         placeholder="you@example.com"
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <label className="text-sm font-medium">Phone</label>
    //       <input
    //         type="tel"
    //         className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/70"
    //         placeholder="+1 (604) ..."
    //       />
    //     </div>
    //     {/* <div className="flex flex-col gap-1">
    //       <label className="text-sm font-medium">Service needed</label>
    //       <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/70">
    //         <option>Landscaping</option>
    //         <option>Human Outsourcing / Labour</option>
    //         <option>Restoration project</option>
    //         <option>Other</option>
    //       </select>
    //     </div> */}
    //     <div className="md:col-span-2 flex flex-col gap-1">
    //       <label className="text-sm font-medium">Details</label>
    //       <textarea
    //         rows={4}
    //         className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/70"
    //         placeholder="Site address, dates, number of workers, plant list…"
    //       />
    //     </div>
    //     <div className="md:col-span-2">
    //       <button className="bg-brand text-white text-sm px-5 py-2.5 rounded-full font-semibold hover:bg-brand-dark">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="max-w-6xl mx-auto px-4 py-14">
  <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
  <p className="text-slate-600 mb-8 max-w-4xl">
    Get in touch with A11 Farms & Nursery for plant availability, wholesale inquiries, and custom grow programs.
  </p>

  <div className="bg-white border rounded-xl p-6 grid md:grid-cols-2 gap-6">
    
    {/* Email */}
    <div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">Email</h3>
      <p className="text-slate-600">
        <a
          href="mailto:info@a11farms.com"
          className="text-brand hover:underline"
        >
          info@a11farms.com
        </a>
      </p>
    </div>

    {/* Phone */}
    <div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">Phone</h3>
      <p className="text-slate-600">
        <a
          href="tel:+16040000000"
          className="text-brand hover:underline"
        >
          604-217-2992 
        </a>
      </p>
    </div>

    {/* Address */}
    <div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">Address</h3>
      <p className="text-slate-600">
        29819 Dewdney Trunk Rd<br />
        Mission B.C. V4S 1B7
      </p>
    </div>

    {/* Business Hours */}
    <div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">Business Hours</h3>
      <p className="text-slate-600">
        Monday – Friday: 8:00 AM – 5:00 PM<br />
        Saturday: By appointment<br />
        Sunday: Closed
      </p>
    </div>

  </div>
</div>
  );
}
