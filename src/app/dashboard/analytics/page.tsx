// app/(dashboard)/analytics/page.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LineChart from "./LineChartComponent";

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 w-full max-w-screen-xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">User Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[300px]">
          <div className="w-full h-[300px]">
            <LineChart />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
