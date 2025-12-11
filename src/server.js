require('dotenv').config();

console.log('SESSION_KEY loaded:', process.env.SESSION_KEY ? 'Yes' : 'No');
console.log('SESSION_KEY value:', process.env.SESSION_KEY);

const app = require('./app');
const { connectDB } = require('./data/connection');

const PORT = 3000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
}).catch(err => {
    console.error('Failed to connect to the database', err);
});
