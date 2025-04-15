import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Bus, Train, Hotel, Car } from "lucide-react";

const TravelBooking = () => {
  const travelOptions = [
    { id: 1, title: "Flight", subtitle: "Powered By Easemytrip.com", icon: <Plane className="h-6 w-6" />, link: "/" },
    { id: 2, title: "Bus", subtitle: "Affordable Rides", icon: <Bus className="h-6 w-6" />, link: "/" },
    { id: 3, title: "Train", subtitle: "Book Tickets Easily", icon: <Train className="h-6 w-6" />, link: "/" },
    { id: 4, title: "Hotel", subtitle: "Budget-friendly Stay", icon: <Hotel className="h-6 w-6" />, link: "/" },
    { id: 5, title: "Car Rentals", subtitle: "Drive Easy Anywhere", icon: <Car className="h-6 w-6" />, link: "/" },
  ];

  return (
    <section className="jd-container">
      <Card className="border-0 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-green-50 to-primary/5 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Travel Bookings</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Instant ticket bookings for your best travel experience
                </p>
              </div>
              <Link
                href="/"
                className="text-sm font-medium text-primary flex items-center mt-2 md:mt-0 hover:underline"
              >
                Explore More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {travelOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.link}
                  className="bg-white rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-200 group"
                >
                  <div className="text-gray-600 group-hover:text-primary transition-colors mb-2">
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                    {option.title}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {option.subtitle}
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

export default TravelBooking;
