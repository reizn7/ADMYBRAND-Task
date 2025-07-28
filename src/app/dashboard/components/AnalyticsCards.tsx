// src/app/dashboard/components/AnalyticsCards.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1,234</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">₹45,600</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">3.5%</p>
        </CardContent>
      </Card>
    </div>
  );
}
