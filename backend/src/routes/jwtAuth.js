const router = require('express').Router();
const pool = require('../db');

// Register
router.post('/register', async (req, res) => {
  try {
    // 1. Destructure the req.body (name, email, password)
    const {name, email, password} = req.body;
    // 2. Check if user exists (if exists throw error)
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email
    ]);

    res.json('i work')
    // 3. Bcrypt the user's password

    // 4. Enter the user inside out database

    // 5. Generate jwt token

  } catch (error) {
   console.log(error.message); 
   res.status(500).send('Server Error');
  }
})

module.exports = router;