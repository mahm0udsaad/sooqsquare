"use server"

export  async function createUser(userData) {
    try {
        const {email  , name} = userData.user
        const newUser = await prisma.User.create({
          data: {
            username:name,
            email:email,
          },
        });
        return newUser
    } catch (error) {
      
      return null;
    }
  }