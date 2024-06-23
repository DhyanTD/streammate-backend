import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './config/database';
import { UserController } from './app/user/user.controller';
import { errorHandler } from './common/exceptions/error-handler';
import { setupSwagger } from './swagger';

const app = express();

app.use(bodyParser.json());

// Set up routes
app.post('/signup', UserController.signup);
app.post('/login', UserController.login);

// Error handling middleware
app.use(errorHandler);

// Swagger setup
setupSwagger(app);

const PORT = process.env.PORT || 8080;

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization', error);
    });
