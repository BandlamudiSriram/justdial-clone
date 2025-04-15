import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/justdial-clone';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP'],
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: [{
    type: String,
    required: true,
  }],
  requirements: [{
    type: String,
    required: true,
  }],
  salary: {
    min: Number,
    max: Number,
    currency: String,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

const jobs = [
  {
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Mumbai, India",
    type: "Full Time",
    experience: "3-5 years",
    description: "We are looking for a Senior Software Engineer to join our team and help build innovative solutions.",
    responsibilities: [
      "Design and develop high-quality software solutions",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews",
      "Implement best practices and coding standards"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3-5 years of experience in software development",
      "Strong knowledge of JavaScript/TypeScript",
      "Experience with React and Node.js",
      "Familiarity with cloud platforms (AWS/GCP)"
    ],
    salary: {
      min: 1200000,
      max: 1800000,
      currency: "INR"
    }
  },
  {
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Delhi, India",
    type: "Full Time",
    experience: "5-7 years",
    description: "Looking for an experienced Business Development Manager to drive growth and expand our market presence.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Develop and maintain client relationships",
      "Create and implement sales strategies",
      "Analyze market trends and competition",
      "Lead sales team and drive revenue growth"
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "5-7 years of experience in business development",
      "Strong communication and negotiation skills",
      "Proven track record of meeting sales targets",
      "Experience in the tech industry preferred"
    ],
    salary: {
      min: 1500000,
      max: 2500000,
      currency: "INR"
    }
  }
];

async function seedJobs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing jobs
    await Job.deleteMany({});
    console.log('Cleared existing jobs');
    
    // Insert new jobs
    await Job.insertMany(jobs);
    console.log('Jobs seeded successfully');
    
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding jobs:', error);
    process.exit(1);
  }
}

seedJobs(); 