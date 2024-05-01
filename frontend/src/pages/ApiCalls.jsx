import React, { useEffect } from 'react'

const ApiCalls = () => {

    // useEffect(()=>{

    
    const chatData = async () => {
        const apiUrl = 'http://localhost:5000/api/v1/users/chat/1';
        console.log("bahar se me chl raha hu")
        try {
            let response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            console.log(data, "data")
            return data;
        }
        catch (error) {
            console.error("Error:", error);
            return { error: true, message: "An error occurred" };
        }
    }
  return (
    <div>ApiCalls
        <button onClick={chatData}>Click me</button>
    </div>
  )
}

export default ApiCalls