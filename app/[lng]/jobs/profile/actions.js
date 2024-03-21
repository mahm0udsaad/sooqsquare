"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function getUserJobDataByEmail(email) {
  if (!email) return;
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        username: true,
        jobTitle: true,
        email: true,
        phoneNumber: true,
        country: true,
        company: true,
        createdAt: true,
        jobApplications: true,
        ratings: true,
        ratedUsers: true,
        cvUrl: true,
        about: true,
        age: true,
        workExperiences: true,
        educations: true,
        yearsOfExperince: true,
        certifications: true,
        trainings: true,
        skills: true,
        activites: true,
        languages: true,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("Error fetching user:", error);
  } finally {
    prisma.$disconnect();
  }
}
export async function addUserSkill(formData) {
  try {
    const userId = formData.get("userId");
    const skill = formData.get("skill");
    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    // Add the skill to the user's skills (assuming skills is a string field)
    await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        skills: existingUser.skills
          ? `${existingUser.skills}, ${skill}`
          : skill,
      },
    });
    console.log(`Skill '${skill}' added to user with ID ${userId}`);
  } catch (error) {
    console.error("Error adding skill:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  } finally {
    revalidatePath("/jobs/profile");
  }
}
export async function deleteUserSkill(formData) {
  try {
    const userId = formData.get("userId");
    const skill = formData.get("skill");
    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      select: {
        skills: true,
      },
    });

    // Remove the skill from the user's skills (assuming skills is a string field)
    const updatedSkills = existingUser.skills
      ? existingUser.skills
          .split(", ")
          .filter((s) => s !== skill)
          .join(", ")
      : null;

    await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        skills: updatedSkills,
      },
    });

    console.log(`Skill '${skill}' removed from user with ID ${userId}`);
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  } finally {
    revalidatePath("/jobs/profile");
  }
}
export async function updateUserInfo(formData) {
  try {
    const userId = formData.get("userId");
    const username = formData.get("username");
    const age = formData.get("age");
    const jobTitle = formData.get("jobTitle");
    const yearsOfExperince = formData.get("experience");
    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    // Prepare the data to update
    const userDataToUpdate = {};

    if (username !== undefined) {
      userDataToUpdate.username = username;
    }

    if (age !== undefined) {
      userDataToUpdate.age = parseInt(age);
    }

    if (jobTitle !== undefined) {
      userDataToUpdate.jobTitle = jobTitle;
    }

    if (yearsOfExperince !== undefined) {
      userDataToUpdate.yearsOfExperince = parseInt(yearsOfExperince);
    }

    // Update the user's information
    await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: userDataToUpdate,
    });
    console.log(userDataToUpdate);
    console.log(
      `User information updated successfully for user with ID ${userId}`
    );
  } catch (error) {
    console.error("Error updating user information:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  } finally {
    revalidatePath("/jobs/profile");
  }
}
export async function addWorkExperience(formData) {
  try {
    const userId = formData.get("userId");
    const experienceType = formData.get("experienceType");
    const jobTitle = formData.get("jobTitle");
    const company = formData.get("company");
    const dateRange = formData.get("dateRange");
    const currentlyWorking = formData.get("currentlyWorking");
    const remote = formData.get("remote");
    const description = formData.get("description");
    const country = formData.get("country");

    const workExperienceData = {
      experienceType,
      jobTitle,
      company,
      dateRange,
      currentlyWorking: currentlyWorking == "on" ? true : false,
      remote: remote == "on" ? true : false,
      description,
      country,
    };
    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    // Add the work experience
    await prisma.workExperience.create({
      data: {
        user: {
          connect: {
            id: parseInt(userId),
          },
        },
        ...workExperienceData,
      },
    });

    console.log("Work experience added successfully");
  } catch (error) {
    console.error("Error adding work experience:", error);
    throw error;
  } finally {
    revalidatePath("/jobs/profile");
  }
}
export async function deleteWorkExperience(formData) {
  try {
    // Check if the work experience exists
    const workExperienceId = formData.get("workExperienceId");
    const existingWorkExperience = await prisma.workExperience.findUnique({
      where: {
        id: parseInt(workExperienceId),
      },
    });

    if (!existingWorkExperience) {
      throw new Error("Work experience not found");
    }

    // Delete the work experience
    await prisma.workExperience.delete({
      where: {
        id: parseInt(workExperienceId),
      },
    });

    console.log("Work experience deleted successfully");
  } catch (error) {
    console.error("Error deleting work experience:", error);
    throw error;
  } finally {
    revalidatePath("/jobs/profile");
  }
}
export async function updateCVUrl(userId, cvUrl) {
  try {
    if (!userId || !cvUrl) {
      throw new Error("Missing userId or cvUrl in form data");
    }

    const user = await prisma.User.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    await prisma.User.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        cvUrl: cvUrl.toString(),
      },
    });

    console.log("CV URL updated successfully");
    return true; // Return true on successful update
  } catch (error) {
    console.error("Error updating CV URL:", error);
    return false; // Return false if update fails
  } finally {
    revalidatePath("jobs/profile");
  }
}
export async function getAllApplicants() {
  try {
    const users = await prisma.user.findMany({
      where: {
        jobTitle: {
          not: null,
        },
      },
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}
export async function getApplicantById(userId) {
  try {
    userId = parseInt(userId);
    const user = await prisma.User.findUnique({
      where: { id: userId },
      select: {
        jobApplications: true,
        cvUrl: true,
        jobTitle: true,
        about: true,
        website: true,
        yearsOfExperince: true,
        age: true,
        workExperiences: true,
        educations: true,
        certifications: true,
        trainings: true,
        skills: true,
        activites: true,
        languages: true,
      },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  } catch (error) {
    console.error(`Error fetching user by adId ${userId}:`, error);
    throw new Error("Failed to fetch user by userId");
  }
}
