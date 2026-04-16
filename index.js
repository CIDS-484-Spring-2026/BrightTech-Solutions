import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/add-user', async (req, res) => {
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const {companyName, email, adminName, password, plan, idNumber, service} = req.body;

    try {
        const newClient = await pool.query(
            "INSERT INTO sign_up_info (companyname, email, adminname, password, plan, idnumber, service) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [companyName, email, adminName, password, plan, idNumber, service]   
        );
        res.json(newClient.rows[0]);
    } catch(err){
        console.error("FULL ERROR:", err.stack);
        res.status(500).json({error: err.message});
    }
});

app.post('/add-comment', async (req, res) => {
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const {email, comment} = req.body;

    try {
        const newComment = await pool.query(
            "INSERT INTO comment_info (email, comment) VALUES ($1, $2) RETURNING *",
            [email, comment]
        )
    } catch(err){
        console.error("FULL ERROR:", err.stack);
        res.status(500).json({error: err.message});
    }
});

app.listen(5000, () =>
    console.log("The server will run on port 5000"));
