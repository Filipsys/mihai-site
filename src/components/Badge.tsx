export const Badge = (props: { title: string }) => (
  <div className="w-fit px-2 py-1 bg-green-700/20">
    <p className="text-xs text-green-600 font-bold">{props.title}</p>
  </div>
);
