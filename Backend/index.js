const express = require("express");
const app = express();
const port = 5000;

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, X-Requested-With"

    );

    next();
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/api/auth', require('./Routes/Auth'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
