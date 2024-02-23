"use server";
export async function sendPostRequest(imageUrl) {
  const postData = {
    image_url: imageUrl,
  };

  const url = "https://ai.sooqsquare.com/extract_colors_imgUrl";

  const options = {
    method: "POST",
    caches: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Response data:", data); // Log the received data
    const colorString = data.color.split("```json\n")[1].split("```")[0];
    const colorObject = JSON.parse(colorString);
    return colorObject;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Rethrow the error to handle it where the function is called
  }
}
