import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Job } from '@/models/Job';
import { JobApplication } from '@/models/JobApplication';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Verify job exists and is active
    const job = await Job.findById(params.id);
    if (!job || !job.isActive) {
      return NextResponse.json(
        { error: 'Job not found or no longer available' },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    
    // Handle file upload (resume)
    const resumeFile = formData.get('resume') as File;
    if (!resumeFile) {
      return NextResponse.json(
        { error: 'Resume is required' },
        { status: 400 }
      );
    }

    // Here you would typically upload the file to a storage service
    // For now, we'll just store the filename
    const resumeUrl = `uploads/${Date.now()}-${resumeFile.name}`;

    const application = await JobApplication.create({
      jobId: params.id,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      resume: resumeUrl,
      coverLetter: formData.get('coverLetter'),
      linkedin: formData.get('linkedin'),
      portfolio: formData.get('portfolio'),
    });
    
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 