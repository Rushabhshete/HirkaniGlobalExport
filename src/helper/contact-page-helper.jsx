/* ---------- Helpers ---------- */

export function Info({ icon: Icon, title, lines }) {
  return (
    <div className="flex space-x-3">
      <Icon className="h-5 w-5 text-orange-600 mt-1" />
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-gray-600 text-sm">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  );
}

export function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        rows={4}
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  );
}
