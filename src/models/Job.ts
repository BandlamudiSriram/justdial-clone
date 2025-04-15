import mongoose from 'mongoose';

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
    enum: ['Full Time', 'Part Time', 'Contract', 'Internship'],
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

export const Job = mongoose.models.Job || mongoose.model('Job', jobSchema); 