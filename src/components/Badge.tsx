export const Badge = (props: {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}) => (
  <div
    className={`w-fit px-2 py-1 ${props.backgroundColor ?? "bg-neutral-400/20"} ${props.borderColor ?? null}`}
  >
    <p className={`text-xs ${props.textColor ?? "text-neutral-300"} font-bold`}>
      {props.title}
    </p>
  </div>
);
