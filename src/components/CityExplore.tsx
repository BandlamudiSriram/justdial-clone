import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CityExplore = () => {
  const cities = [
    { id: 1, name: "MUMBAI", link: "/" },
    { id: 2, name: "BANGALORE", link: "/" },
    { id: 3, name: "DELHI", link: "/" },
    { id: 4, name: "KOLKATA", link: "/" },
    { id: 5, name: "CHENNAI", link: "/" },
    { id: 6, name: "AHMEDABAD", link: "/" },
    { id: 7, name: "HYDERABAD", link: "/" },
    { id: 8, name: "PUNE", link: "/" },
  ];

  return (
    <section className="jd-container">
      <Card className="border-0 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                Explore Top Cities
                <Badge variant="secondary" className="ml-2 bg-secondary/80">NEW</Badge>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Card
                  key={city.id}
                  className="border border-gray-100 hover:border-primary/20 group transition-all"
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                      {city.name}
                    </span>
                    <Link
                      href={city.link}
                      className="text-primary font-medium flex items-center text-sm hover:underline"
                    >
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CityExplore;
