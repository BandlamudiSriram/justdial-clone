import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  experience: {
    type: String,
    required: [true, 'Please provide your years of experience'],
  },
  coverLetter: {
    type: String,
    required: [true, 'Please provide a cover letter'],
  },
  resumeUrl: {
    type: String,
    required: [true, 'Please provide a link to your resume'],
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'],
    default: 'Pending',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema); 