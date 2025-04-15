import { IMAGES } from "@/constants/images";
import Link from "next/link";

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            JustDial Clone - Project Presentation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern clone of JustDial built with Next.js and Shadcn UI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Modern Next.js 14 application</li>
              <li>✅ TypeScript for type safety</li>
              <li>✅ Responsive design with Tailwind CSS</li>
              <li>✅ Beautiful UI components with Shadcn</li>
              <li>✅ Server-side rendering for better SEO</li>
              <li>✅ Dark mode support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>🔍 Business search and discovery</li>
              <li>📂 Category-based browsing</li>
              <li>📍 Location-based services</li>
              <li>⭐ User reviews and ratings</li>
              <li>📱 Business listings management</li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Demo
          </Link>
          <div className="text-gray-600">
            <p>GitHub Repository: <a href="https://github.com/yourusername/justdial-clone" className="text-blue-600 hover:underline">github.com/yourusername/justdial-clone</a></p>
          </div>
        </div>
      </div>
    </div>
  );
} 