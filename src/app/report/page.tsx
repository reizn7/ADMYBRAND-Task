'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportPage() {
  const handleDownload = () => {
    // For now, just a placeholder. You can hook this up to actual PDF generation later.
    alert("Download report triggered.");
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Generated Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This report provides a comprehensive analysis of your brand performance across
            multiple channels. The AI has analyzed patterns in user behavior and
            engagement metrics to provide actionable insights.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>⚡ Engagement increased by 23% on Instagram in the last 2 weeks.</li>
            <li>📉 Twitter impressions dropped by 12%, mostly due to late posts.</li>
            <li>🎯 Suggested: Post daily reels between 6–8 PM for better engagement.</li>
            <li>📈 Facebook ads resulted in 3x more conversions than LinkedIn.</li>
          </ul>

          <Button onClick={handleDownload} className="mt-4">
            Download PDF
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
