import React from "react";
import Link from "next/link";
import {
  UtensilsCrossed, Hotel, Bath, Home, GraduationCap, Briefcase, Building, Users,
  Car, Wrench, Scissors, Phone, Package, Heart, CircleDollarSign
} from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    { id: 1, title: "Restaurants", icon: <UtensilsCrossed className="category-card-icon" />, link: "/" },
    { id: 2, title: "Hotels", icon: <Hotel className="category-card-icon" />, link: "/" },
    { id: 3, title: "Beauty Spa", icon: <Bath className="category-card-icon" />, link: "/" },
    { id: 4, title: "Home Decor", icon: <Home className="category-card-icon" />, link: "/" },
    { id: 5, title: "Wedding Planning", icon: <Heart className="category-card-icon" />, link: "/" },
    { id: 6, title: "Education", icon: <GraduationCap className="category-card-icon" />, link: "/" },
    { id: 7, title: "Rent & Hire", icon: <Briefcase className="category-card-icon" />, link: "/" },
    { id: 8, title: "Hospitals", icon: <Building className="category-card-icon" />, link: "/" },
    { id: 9, title: "Contractors", icon: <Users className="category-card-icon" />, link: "/" },
    { id: 10, title: "Pet Shops", icon: <UtensilsCrossed className="category-card-icon" />, link: "/" },
    { id: 11, title: "PG/Hostels", icon: <Building className="category-card-icon" />, link: "/" },
    { id: 12, title: "Estate Agent", icon: <Home className="category-card-icon" />, link: "/" },
    { id: 13, title: "Dentists", icon: <Scissors className="category-card-icon" />, link: "/" },
    { id: 14, title: "Gym", icon: <UtensilsCrossed className="category-card-icon" />, link: "/" },
    { id: 15, title: "Loans", icon: <CircleDollarSign className="category-card-icon" />, link: "/" },
    { id: 16, title: "Event Organisers", icon: <Users className="category-card-icon" />, link: "/" },
    { id: 17, title: "Driving Schools", icon: <Car className="category-card-icon" />, link: "/" },
    { id: 18, title: "Packers & Movers", icon: <Package className="category-card-icon" />, link: "/" },
    { id: 19, title: "Courier Service", icon: <Phone className="category-card-icon" />, link: "/" },
    { id: 20, title: "Repairs", icon: <Wrench className="category-card-icon" />, link: "/" }
  ];

  return (
    <section className="jd-container">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="category-card text-center group"
          >
            <div className="flex justify-center mb-2 text-gray-600 group-hover:text-primary transition-colors">
              {category.icon}
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-2">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
