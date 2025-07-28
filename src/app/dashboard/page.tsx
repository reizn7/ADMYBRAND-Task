// src/app/dashboard/page.tsx
"use client";

import Topbar from "./components/Topbar";
import UsersBarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto bg-gray-100 dark:bg-gray-950">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <Topbar />
        </div>

        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12,452</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ↗︎ 12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$21,000</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ↘︎ 5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New Signups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,202</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ↗︎ 8% this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Users Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <UsersBarChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
