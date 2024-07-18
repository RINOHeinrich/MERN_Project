const express = require('express');
require('./db/userDatabase');
const userRoute = require('./routes/userRoutes');
const bodyParser=require('body-parser');
const app = express();
const port = 3000;
app.use(express.json())
// Routes
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
