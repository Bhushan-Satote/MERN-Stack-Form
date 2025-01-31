
const Form = require('../models/Form');

// Store Form Data
const storeFormData = async (req, res) => {
  try {
    const form = await Form.create(req.body); // Save data to MongoDB
    res.status(201).json({ success: true, data: form }); // Send success response
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch Form Data
const fetchFormData = async (req, res) => {
  try {
    const forms = await Form.find(); // Retrieve data from MongoDB
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// Update Form Data
const updateFormData = async (req, res) =>{
  try {
    const { id } = req.params;
    const updatedForm = await Form.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are applied
    });
    if (!updatedForm) {
      return res.status(404).json({ success: false, message: 'Form not found' });
    }
    res.status(200).json({ success: true, data: updatedForm });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Form Data
const deleteFormData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id); // Remove the document
    if (!deletedForm) {
      return res.status(404).json({ success: false, message: 'Form not found' });
    }
    res.status(200).json({ success: true, message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { storeFormData, fetchFormData, updateFormData, deleteFormData };
