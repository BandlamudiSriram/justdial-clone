import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CareersPage = () => {
  const jobCategories = [
    "All Jobs",
    "Technology",
    "Sales & Marketing",
    "Customer Service",
    "Operations",
    "HR & Admin",
    "Finance",
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Mumbai, India",
      type: "Full Time",
      experience: "3-5 years",
      description: "We are looking for a Senior Software Engineer to join our team...",
    },
    {
      id: 2,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Delhi, India",
      type: "Full Time",
      experience: "5-7 years",
      description: "Looking for an experienced Business Development Manager...",
    },
    {
      id: 3,
      title: "Customer Support Executive",
      department: "Customer Service",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "1-3 years",
      description: "Join our customer support team to help our users...",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="jd-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Be part of a team that's revolutionizing how people discover and connect with businesses.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search for jobs..."
                className="bg-white text-black"
              />
            </div>
            <Button className="bg-white text-primary hover:bg-white/90">
              <Search className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-8 bg-muted">
        <div className="jd-container">
          <div className="flex flex-wrap gap-2">
            {jobCategories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="jd-container">
          <div className="grid gap-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-muted">
        <div className="jd-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join JustDial?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Continuous learning and career advancement opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Work on cutting-edge technologies and solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
              <p className="text-muted-foreground">
                Collaborative and inclusive work environment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 