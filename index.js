
// Import express and axios
import express from "express";
import axios from "axios";

// Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com"

// 3. Use the public folder for static files.
app.use(express.static("public"))

// When the user goes to the home page it should render the index.ejs file.

// Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
    //TODO Use axios to hit up the /random endpoint
    try {
      const result = await axios.get(API_URL + "/random");
      res.render("index.ejs", { 
        secret : result.data.secret,
        username : result.data.username
       });
      
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

//Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});