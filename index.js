// index.js

// Import the Libraries
const express = require("express");
const axios = require("axios");
const cors = require("cors");

// Initialize the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Start the Web Server on Port 8000
app.listen(8000, () => {
	console.log("App is listening on port 8000");

	// Get Students Endpoint
	app.get("/students", async (req, res) => {
		try {
			const students = await axios.get(
				"https://json-server-if4r.onrender.com/students"
			);
			res.status(200).json(students.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	});

	// Get One Student Endpoint
	app.get("/students/:id", async (req, res) => {
		try {
			const { id } = req.params;

			const student = await axios.get(
				`https://json-server-if4r.onrender.com/students/${id}`
			);
			res.status(200).json(student.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	});

	// Add Students Endpoint
	app.post("/students", async (req, res) => {
		try {
			const student = await axios.post(
				"https://json-server-if4r.onrender.com/students",
				req.body
			);
			res.status(200).json(student.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	});

	// Update Student Endpoint
	app.put("/students/:id", async (req, res) => {
		try {
			const { id } = req.params;

			const student = await axios.put(
				`https://json-server-if4r.onrender.com/students/${id}`,
				req.body
			);
			res.status(200).json(student.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	});

	// Delete Student Endpoint
	app.delete("/students/:id", async (req, res) => {
		try {
			const { id } = req.params;

			const student = await axios.delete(
				`https://json-server-if4r.onrender.com/students/${id}`
			);
			res.status(200).json(student.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	});
});
