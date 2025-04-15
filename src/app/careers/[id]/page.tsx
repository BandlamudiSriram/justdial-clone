import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This would typically come from an API or database
const jobDetails = {
  id: 1,
  title: "Senior Software Engineer",
  department: "Technology",
  location: "Mumbai, India",
  type: "Full Time",
  experience: "3-5 years",
  description: "We are looking for a Senior Software Engineer to join our team...",
  responsibilities: [
    "Design and develop high-quality software solutions",
    "Collaborate with cross-functional teams",
    "Mentor junior developers",
    "Participate in code reviews",
    "Implement best practices and coding standards",
  ],
  requirements: [
    "Bachelor's degree in Computer Science or related field",
    "3-5 years of experience in software development",
    "Strong knowledge of JavaScript/TypeScript",
    "Experience with React and Node.js",
    "Familiarity with cloud platforms (AWS/GCP)",
  ],
};

const JobDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen py-12">
      <div className="jd-container">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{jobDetails.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span>{jobDetails.department}</span>
            <span>•</span>
            <span>{jobDetails.location}</span>
            <span>•</span>
            <span>{jobDetails.type}</span>
            <span>•</span>
            <span>{jobDetails.experience}</span>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="mb-8">{jobDetails.description}</p>

            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-6 mb-8">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc pl-6 mb-8">
              {jobDetails.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={`/careers/${params.id}/apply`}>Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage; 