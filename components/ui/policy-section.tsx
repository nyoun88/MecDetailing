/**
 * Numbered section wrapper used on legal pages (/privacy-policy, /terms) —
 * a bold uppercase heading with bullet-list-aware spacing beneath it.
 */
export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-bold uppercase tracking-[0.06em] text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
