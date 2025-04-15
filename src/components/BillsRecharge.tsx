import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Zap, Tv, Droplet, Beaker, ShieldCheck } from "lucide-react";

const BillsRecharge = () => {
  const paymentOptions = [
    { id: 1, title: "Mobile", icon: <Smartphone className="h-6 w-6" />, link: "/" },
    { id: 2, title: "Electricity", icon: <Zap className="h-6 w-6" />, link: "/" },
    { id: 3, title: "DTH", icon: <Tv className="h-6 w-6" />, link: "/" },
    { id: 4, title: "Water", icon: <Droplet className="h-6 w-6" />, link: "/" },
    { id: 5, title: "Gas", icon: <Beaker className="h-6 w-6" />, link: "/" },
    { id: 6, title: "Insurance", icon: <ShieldCheck className="h-6 w-6" />, link: "/" },
  ];

  return (
    <section className="jd-container">
      <Card className="border-0 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-50 to-primary/5 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  Bills & Recharge
                  <span className="ml-2 text-xs font-medium px-2 py-1 bg-secondary text-white rounded-full">
                    EASY
                  </span>
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Pay your bills & recharge instantly with Justdial
                </p>
              </div>
              <Link
                href="/"
                className="text-sm font-medium text-primary flex items-center mt-2 md:mt-0 hover:underline"
              >
                Explore More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {paymentOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.link}
                  className="bg-white rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-200 group"
                >
                  <div className="text-gray-600 group-hover:text-primary transition-colors">
                    {option.icon}
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    {option.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BillsRecharge;
