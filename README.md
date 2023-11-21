# User Management API

This is a simple Express.js API for managing user information, including adding, retrieving, updating, and deleting user records.

## Getting Started

   ```bash
   git clone https://github.com/Smoke221/nowdigitaleasy-assignment.git
   cd nowdigitaleasy-assignment
   npm install
   npm start
   ```

## API Endpoints

### Add User

**Method:** `POST`

**URL:** `/user/add`

**Description:** Adds a new user to the system.

**Request Body:**

```json
{
  "name": "[User Name]",
  "email": "[User Email]",
  "password": "[User Password]",
  // Other user details
}
```
### All users

**Method:** `GET`

**URL:** `/user/fetch`

**Description:** Fetches all the users.

### Get one user

**Method:** `GET`

**URL:** `/user/fetch/:userId`

**Description:** Get details of a single user.

### Delete user by ID

**Method:** `DELETE`

**URL:** `/user/delete/:userId`

**Description:** Deletes a user based on ID.

### Update user by ID

**Method:** `PATCH`

**URL:** `/user/update/:userId`

**Description:** Updates a user based on ID.