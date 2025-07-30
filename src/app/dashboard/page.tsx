"use client";

import Topbar from "./components/Topbar";
import UsersBarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
      
      {/* Topbar */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
        <Topbar />
      </div>

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        
        {/* Stat Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Users", value: "12,452", change: "↗︎ 12% from last month" },
            { title: "Revenue", value: "$21,000", change: "↘︎ 5% from last month" },
            { title: "New Signups", value: "1,202", change: "↗︎ 8% this week" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl sm:text-3xl font-bold">{item.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Users Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <UsersBarChart />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
