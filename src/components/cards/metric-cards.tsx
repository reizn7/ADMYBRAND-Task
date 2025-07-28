import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { title: "Total Revenue", value: "$25,300", change: "+12%" },
  { title: "New Users", value: "1,320", change: "+8%" },
  { title: "Conversions", value: "304", change: "+6%" },
  { title: "Bounce Rate", value: "23%", change: "-4%" },
];

export const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <Card key={m.title}>
          <CardHeader>
            <CardTitle>{m.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-sm text-muted-foreground">{m.change} from last month</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
