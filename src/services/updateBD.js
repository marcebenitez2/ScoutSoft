export const updateBD = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data), 
    });
  
  } catch (error) {
    console.log(error);
  }
};
