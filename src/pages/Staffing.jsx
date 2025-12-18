export default function Staffing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-3">Human Outsourcing / Labour Supply</h1>
      <p className="text-slate-600 mb-6 max-w-3xl">
        When your projects pick up, we can provide extra hands — landscape labourers, nursery
        workers, site helpers, and delivery assistants.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-1">General Labour</h2>
          <p className="text-sm text-slate-600">
            Lifting, loading, planting assistance, cleanup crews.
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-1">Landscape Crews</h2>
          <p className="text-sm text-slate-600">
            For strata, commercial, and municipal sites.
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-1">Driver Helpers</h2>
          <p className="text-sm text-slate-600">
            For loading trucks, site deliveries, and material handling.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white border rounded-xl p-6">
        <h2 className="font-semibold mb-2">How it works</h2>
        <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1">
          <li>Tell us the date, location, and type of work.</li>
          <li>We send you availability and rates.</li>
          <li>Our crew reports to your supervisor on site.</li>
        </ol>
      </div>
    </div>
  );
}
