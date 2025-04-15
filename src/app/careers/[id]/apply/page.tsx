import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const JobApplicationPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen py-12">
      <div className="jd-container">
        <Button variant="ghost" asChild className="mb-8">
          <Link href={`/careers/${params.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Details
          </Link>
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Apply for Senior Software Engineer</h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="resume" className="text-sm font-medium">
                Resume/CV
              </label>
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="coverLetter" className="text-sm font-medium">
                Cover Letter
              </label>
              <Textarea
                id="coverLetter"
                placeholder="Tell us why you're interested in this position..."
                className="min-h-[150px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn Profile (Optional)
              </label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio" className="text-sm font-medium">
                Portfolio/GitHub (Optional)
              </label>
              <Input
                id="portfolio"
                type="url"
                placeholder="https://github.com/your-profile"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage; 