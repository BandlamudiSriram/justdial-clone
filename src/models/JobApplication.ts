import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  resume: {
    type: String, // URL to the uploaded resume
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  portfolio: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Under Review', 'Shortlisted', 'Rejected'],
    default: 'Pending',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export const JobApplication = mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema); 