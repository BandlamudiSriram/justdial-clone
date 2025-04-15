import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the job'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  department: {
    type: String,
    required: [true, 'Please specify the department'],
  },
  location: {
    type: String,
    required: [true, 'Please specify the job location'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a job description'],
  },
  requirements: [{
    type: String,
    required: true,
  }],
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: false,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Open', 'Closed', 'Draft'],
    default: 'Open',
  }
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema); 