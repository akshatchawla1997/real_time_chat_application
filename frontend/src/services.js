export const baseURL = "http://localhost:5000/api/v1/users";

export const postRequest = async (url, body) => {
  try {
    const response = await fetch(`${baseURL}/${url}`, { // Changed the syntax to include baseURL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json(); // Changed response.JSON() to response.json()

    if (!response.ok) {
      let message;
      if (data?.message) {
        message = data?.message;
      } else {
        message = data;
      }
      return { error: true, message };
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: "Internal server error" };
  }
};

export const patchRequest = async(url, body) =>{
    try {
        const response = await fetch(`${baseURL}/${url}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();

        if (!response.ok) {
        let message;
        if (data?.message) {
            message = data?.message;
        } else {
            message = data;
        }
        return { error: true, message };
        }
        return data;
    } catch (error) {
        console.error("Error:", error);
        return { error: true, message: "Internal server error" };
    }
}
export const getRequest = async (url) => {
  try {
      const response = await fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      const data = await response.json();
      
      if (!response.ok) {
          let message = "An error occurred";
          if (data.message) {
              message = data.message;
          }
          return { error: true, message };
      }
      return data;
  } catch (error) {
      console.error("Error:", error);
      return { error: true, message: "An error occurred" };
  }
};
