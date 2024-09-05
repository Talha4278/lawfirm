const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3005;

// Define Mongoose schema and model
const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    business: String,
    message: String
});

const Client = mongoose.model('Client', clientSchema);

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://carrent:talha0404@atlascluster.2xalv0p.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://127.0.0.1:5501', 'https://lawfm.vercel.app/'], 
    methods: ['GET', 'POST'], 
    credentials: true 
}));

// Route to retrieve all clients
app.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find(); // Fetch all client documents from the MongoDB collection
        console.log('Fetched clients:', clients); // Log the fetched data
        res.status(200).json(clients); // Send the data as JSON
    } catch (error) {
        console.error('Error retrieving clients:', error);
        res.status(500).send('Error retrieving clients');
    }
});

// Route to handle form submission
app.post('/clients-data', async (req, res) => {
    try {
        console.log('Received data:', req.body); // Log received data
        const newClient = new Client({
            name: req.body.name,
            email: req.body.email,
            business: req.body.business,
            message: req.body.message
        });
        await newClient.save();
        res.status(200).send('Client data saved successfully');
    } catch (error) {
        console.error('Error saving client data:', error);
        res.status(500).send('Error saving client data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
