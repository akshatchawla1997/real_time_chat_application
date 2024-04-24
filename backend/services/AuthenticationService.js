
const crypto = require("../common/crypto"); 
const { sendMailToUser } = require("../common/sendMail");
const { execute } = require("../config/databases/queryWrapperMysql");
const { v4: uuidv4 } = require('uuid');


// Now, you can use the imported modules as needed
const decryptedData = crypto.decryptedData;
const encryptedData = crypto.encryptedData;
const generateJwtToken = crypto.generateJwtToken;
const generateRandomPassword = crypto.generateRandomPassword;
const decodeToken = crypto.decodeToken

class userAuthenticationService{

    async registerUser(registerData) {
        return new Promise(async (resolve, reject) => {
            try {
                const checkUserQuery = 'SELECT email FROM users WHERE email = ?';
                const isUserExist = await execute(checkUserQuery, [registerData.email]);
                if (isUserExist.length > 0) {
                    reject({ "success": false, error: 402, "message": "Try with a different email" });
                } else {
                    const currentDate = new Date().toLocaleString(); // Format date correctly
                    
                    const cipherText = await encryptedData(registerData.password);
                    const registerQuery = "INSERT INTO users (name, email, password, created_at, updated_at, is_active)  VALUES (?, ?, ?, ?, ?, ?)";
                    const insertResult = await execute(registerQuery, [
                        registerData.name,
                        registerData.email,
                        cipherText,
                        currentDate,
                        currentDate,
                        1
                    ]);
                    if (insertResult.affectedRows > 0) {
                        resolve({ "success": true, message: "Data inserted successfully" });
                    } else {
                        reject({ "success": false, message: "No rows affected" });
                    }
                }
            } catch (error) {
                reject({ "success": false, "message": `Error occurred while signup: ${error.message}` });
            }
        });
    }
    async login(userData) {
        try {
            const checkUser = 'SELECT id, email, password FROM users WHERE email = ?';
            const resultUser = await execute(checkUser, [userData.email]);
            if (resultUser.length > 0) {
                const decryptedPassword = await decryptedData(resultUser[0].password);
                if (decryptedPassword === userData.password) {
                    const payload = {
                        email: userData.email,
                        password: userData.password
                    };
                    const jwttoken = generateJwtToken(payload, "##$$ecomm$$##", '1hr');
                    return { "status": 201, "success": true, "data":{"token": jwttoken, "user_id":resultUser[0].id}, message: "Login successfully" };
                } else {
                    return { "status": 400, "success": false, message: "Incorrect username/password" };
                }
            } else {
                return { "status": 404, "success": false, message: "User not found" };
            }
        } catch (e) {
            console.error('Error during login:', e);
            return { "status": 500, "success": false, message: "An error occurred during login" };
        }
    }
}


module.exports = new userAuthenticationService()