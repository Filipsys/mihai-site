import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen *:max-w-[1400px] items-center flex flex-col justify-center gap-4 p-4 bg-neutral-900 text-neutral-400">
      <p>WIP</p>
    </div>
  );
}
