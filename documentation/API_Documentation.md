# Grocery Booking API Documentation

## Admin Endpoints

### Admin Signup
- **Endpoint:** `/admin/signup`
- **Method:** `POST`
- **Description:** Register a new admin.

### Admin Login
- **Endpoint:** `/admin/login`
- **Method:** `POST`
- **Description:** Log in as an admin.

### Add Grocery Item
- **Endpoint:** `/admin/grocery/add`
- **Method:** `POST`
- **Description:** Add a new grocery item to the system.

### Get All Grocery Items
- **Endpoint:** `/admin/grocery/get-all`
- **Method:** `GET`
- **Description:** Retrieve a list of all existing grocery items.

### Remove Grocery Item
- **Endpoint:** `/admin/grocery/remove/:id`
- **Method:** `DELETE`
- **Description:** Remove a specific grocery item from the system.

### Update Grocery Item
- **Endpoint:** `/admin/grocery/update/:id`
- **Method:** `PUT`
- **Description:** Update details (e.g., name, price) of a specific grocery item.

### Update Inventory
- **Endpoint:** `/admin/grocery/update-inventory/:id`
- **Method:** `PUT`
- **Description:** Manage inventory levels of a specific grocery item.

## User Endpoints

### User Signup
- **Endpoint:** `/user/signup`
- **Method:** `POST`
- **Description:** Register a new user.

### User Login
- **Endpoint:** `/user/login`
- **Method:** `POST`
- **Description:** Log in as a user.

### Get Available Grocery Items
- **Endpoint:** `/user/grocery/get-available-items`
- **Method:** `GET`
- **Description:** View the list of available grocery items.

### Book Items
- **Endpoint:** `/user/order/book-items`
- **Method:** `POST`
- **Description:** Book multiple grocery items in a single order.

### Get Order Details
- **Endpoint:** `/user/order/get/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific order.

## Advanced Challenge

### Containerize Application (Docker)
- **Description:** The application has been containerized using Docker for ease of deployment and scaling.

## Database
- **Type:** Relational
- **Choice:** MySQL
- **ORM:** Sequelize
