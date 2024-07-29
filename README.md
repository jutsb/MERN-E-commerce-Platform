# MERN-E-commerce-Platform

This is a fully functional e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Key Features

- Responsive front-end built with React.js and styled with Tailwind CSS
- RESTful API backend using Node.js and Express.js
- MongoDB database for product and user data storage
- JWT-based user authentication and authorization
- Integration with Stripe for payment processing
- Admin panel for inventory management

## Installation

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGO_URI=mongodb://localhost:27017/mern_ecommerce
    JWT_SECRET=your_jwt_secret
    PORT=5000
    NODE_ENV=development
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Start the backend server:
    ```sh
    npm run server
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

1. The backend server will be running on `http://localhost:5000`.
2. The frontend development server will be running on `http://localhost:8080`.
3. Open `http://localhost:8080` in your browser to view the application.

## Contributing

Contributions are welcome! Please create a pull request or submit an issue if you have any improvements or suggestions.

## License

This project is licensed under the MIT License.
