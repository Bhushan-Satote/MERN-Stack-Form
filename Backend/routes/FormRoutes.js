const express = require('express');
const { storeFormData, fetchFormData, updateFormData, deleteFormData } = require('../controllers/FormController');
const router = express.Router();

router.post('/submit', storeFormData); // Handles form submissions

router.get('/data', fetchFormData);   // Retrieves all data


// Update data
router.put('/:id', updateFormData); // New route for updating data

// Delete data
router.delete('/:id', deleteFormData); // New route for deleting data


module.exports = router;
