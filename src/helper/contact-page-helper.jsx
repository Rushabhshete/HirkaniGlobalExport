/* ---------- Helpers ---------- */

export function Info({ icon: Icon, title, lines }) {
  return (
    <div className="flex space-x-3">
      <Icon className="h-5 w-5 text-primary mt-1" />
      <div>
        <p className="font-medium text-foreground">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-foreground/70 text-sm">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Input({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <input
        {...props}
        className="
          w-full px-3 py-2 rounded-md
          bg-background
          border border-border
          text-foreground
          placeholder:text-foreground/50
          focus:outline-none
          focus:ring-2 focus:ring-ring
          transition
        "
      />
    </div>
  );
}

export function Textarea({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <textarea
        rows={4}
        {...props}
        className="
          w-full px-3 py-2 rounded-md
          bg-background
          border border-border
          text-foreground
          placeholder:text-foreground/50
          focus:outline-none
          focus:ring-2 focus:ring-ring
          transition
        "
      />
    </div>
  );
}
