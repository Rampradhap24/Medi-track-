const mongoose = require('mongoose');

// Define schema for medication stock
const medicationStockSchema = new mongoose.Schema({
  batchNumber: { 
    type: String, 
    required: true, 
    unique: true // primary key
  },
  name: { 
    type: String, 
    required: true 
  },
  availableQuantity: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  soldQuantity: { 
    type: Number, 
    required: true, 
    default: 0 
  },
}, { 
  timestamps: true, 
  collection: 'medicationstock'  // ✅ force collection name
});

// Export model
module.exports = mongoose.model('MedicationStock', medicationStockSchema);
