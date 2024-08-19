# Cartify

Cartify is a modern e-commerce application built with Django and Vue.js, designed to provide a seamless shopping experience. The app allows users to browse products, manage their shopping cart, and proceed to checkout with ease.

## Features

- **Product Listings**: View detailed product information and images.
- **Shopping Cart**: Add, remove, and update product quantities in your cart.
- **Checkout**: Secure checkout process with Stripe integration for payments.
- **User Authentication**: Secure user login and registration (if applicable).

## Technologies Used

- **Backend**: Django
- **Frontend**: Vue.js
- **Payment Processing**: Stripe
- **Database**: SQL

## Getting Started

To get started with Cartify locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (for Vue.js)
- [Python](https://www.python.org/) (for Django)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/cartify.git
   cd cartify
   ```

2. **Set Up the Backend**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Create a virtual environment and activate it:

     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```

   - Install the required Python packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Apply migrations and start the Django server:

     ```bash
     python manage.py migrate
     python manage.py runserver
     ```

3. **Set Up the Frontend**

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install the required Node.js packages:

     ```bash
     npm install
     ```

   - Start the Vue.js development server:

     ```bash
     npm run serve
     ```

### Environment Variables

Create a `.env` file in the `frontend` and `backend` directories with the following variables:

#### Frontend (.env)

```plaintext
VUE_APP_STRIPE_PUBLISHABLE_KEY=your_publishable_key_here
```

#### Backend (.env)

```plaintext
STRIPE_SECRET_KEY=your_secret_key_here
```

### Running the Application

1. Start the Django server (backend) and Vue.js server (frontend) as described in the installation steps.
2. Navigate to `http://localhost:8080` in your web browser to access the Cartify app.

## Contributing

Feel free to open issues and submit pull requests. For detailed contribution guidelines, please refer to the CONTRIBUTING.md file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, you can contact me at [pbofah1@gmail.com].
