interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mb-14 text-center" : "mb-14"}>
      {subtitle && (
        <p className="mb-3 font-semibold uppercase tracking-[5px] text-yellow-500">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
    </div>
  );
}