import Kpis from "@/components/kpis";
import Revenue from "@/components/revenue";
import Services from "@/components/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-8">
      <Kpis />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Revenue />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent service requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Services />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
