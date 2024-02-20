"use server";
import prisma from "@/prisma/client";

export async function createCompany(formData) {
  try {
    // Destructure form data
    const companyName = formData.get("companyName");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const industry = formData.get("industry");
    const description = formData.get("description");
    const userId = formData.get("userId");
    const logoUrl = formData.get("logo");

    const newCompany = await prisma.company.create({
      data: {
        name: companyName,
        phone,
        city,
        industry,
        description,
        logoUrl,
        user: {
          connect: { id: parseInt(userId) },
        },
      },
    });

    return newCompany;
  } catch (error) {
    throw new Error(`Failed to create company: ${error.message}`);
  }
}
export async function getUserCompany(userId) {
  try {
    userId = parseInt(userId);
    // Retrieve the user's company details from the database
    const userCompany = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            logoUrl: true,
            description: true,
            industry: true,
            city: true,
            phone: true,
            jobPosts: true,
          },
        }, // Include the associated company details
      },
    });

    return userCompany.company;
  } catch (error) {
    throw new Error(`Failed to get user company details: ${error.message}`);
  }
}
export async function getAllJobPosts() {
  try {
    const jobPosts = await prisma.jobPost.findMany({
      include: {
        company: true,
      },
      orderBy: {
        postedAt: "desc",
      },
    });
    return jobPosts;
  } catch (error) {
    throw new Error(`Failed to fetch job posts: ${error}`);
  }
}
export async function createJobPost(formData) {
  try {
    // Destructure form data
    const title = formData.get("title");
    const description = formData.get("description");
    const city = formData.get("city");
    const gender = formData.get("gender");
    const nationality = formData.get("nationality");
    const employmentType = formData.get("employmentType");
    const careerLevel = formData.get("careerLevel");
    const experience = formData.get("experience");
    const educationLevel = formData.get("educationLevel");
    const languages = formData.get("languages");
    const benefits = formData.get("benefits");
    const jobCategory = formData.get("jobCategory");
    const companyId = formData.get("companyId");
    const salary = formData.get("salary");
    const requirements = formData.get("requirements");

    // Create a new job post using Prisma client
    const newJobPost = await prisma.jobPost.create({
      data: {
        title,
        jobCategory,
        requirements,
        description,
        gender,
        city,
        salary,
        nationality,
        employmentType,
        careerLevel,
        experience,
        educationLevel,
        languages,
        benefits,
        companyId: parseInt(companyId), // Convert companyId to integer
      },
    });

    // Return the newly created job post
    return newJobPost;
  } catch (error) {
    // Handle errors
    console.error("Error creating job post:", error);
    throw error;
  }
}
export async function updateCompany(formData) {
  try {
    const companyName = formData.get("companyName");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const industry = formData.get("industry");
    const description = formData.get("description");
    const companyId = formData.get("companyId");
    const logo = formData.get("logo");

    const updatedCompany = await prisma.company.update({
      where: {
        id: parseInt(companyId),
      },
      data: {
        name: companyName,
        phone: phone,
        city: city,
        logoUrl: logo,
        industry: industry,
        description: description,
      },
    });
    return updatedCompany;
  } catch (error) {
    throw new Error(`Failed to update company: ${error}`);
  }
}
export async function getJobPostById(id) {
  try {
    id = parseInt(id);
    const jobPost = await prisma.jobPost.findUnique({
      where: {
        id: id,
      },
      include: {
        company: true,
      },
    });
    if (!jobPost) {
      throw new Error(`Job post with ID ${id} not found.`);
    }
    return jobPost;
  } catch (error) {
    throw new Error(`Failed to fetch job post by ID ${id}: ${error}`);
  }
}
