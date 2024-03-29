import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis } from "@/lib/data";

export default function Kpis() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map(({ name, value }) => (
        <Card key={name}>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
