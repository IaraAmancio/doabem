const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/test-db', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;