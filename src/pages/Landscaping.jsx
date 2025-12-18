export default function Landscaping() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-3">Landscaping Services</h1>
      <p className="text-slate-600 mb-6 max-w-3xl">
        We support restoration, commercial, and residential landscape jobs. Our nursery background
        means we understand plant sourcing, sizing, and site conditions.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Planting & Softscape</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Trees & shrubs (native and ornamentals)</li>
            <li>Perennials, grasses, plugs</li>
            <li>Soil, mulch, edging</li>
          </ul>
        </div>
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Site Maintenance</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Lawn & bed maintenance</li>
            <li>Weeding & pruning</li>
            <li>Seasonal cleanups</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold mb-2">Why us?</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          We’re used to working with government and private companies on restoration projects, so
          we can match your plant list, load trucks accordingly, and meet delivery windows.
        </p>
      </div>
    </div>
  );
}
