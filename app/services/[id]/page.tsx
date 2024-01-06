import DetailCards from "@/components/ui/services/detail-cards";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10">
      <span className="text-3xl font-bold">{service.problem}</span>
      <DetailCards service={service} />
      <p>{service.detail}</p>
    </main>
  );
}

export async function generateStaticParams() {
  return services.map(({ id }) => ({ id: id.toString() }));
}
