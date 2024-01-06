import Kpis from "@/components/kpis";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="p-8">
      <Kpis />
      <div className="mt-12">
        <Services />
      </div>
    </main>
  );
}
