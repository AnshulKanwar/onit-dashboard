import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-full grid place-items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">No Service Found</h2>
        <p className="text-muted-foreground mt-4">
          Select a service from the sidebar to view details.
        </p>
      </div>
    </main>
  );
}
