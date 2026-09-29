const mongoose = require('mongoose');

// 1. Student Schema
const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true }, // USN
  name: { type: String, required: true },
  branch: { type: String, required: true },
  semester: { type: Number, required: true },
  contact_reference: { type: String }
});

// 2. Teacher Schema
const teacherSchema = new mongoose.Schema({
  teacher_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  department: { type: String, required: true }
});

// 3. Teacher-Student Assignment Schema
const assignmentSchema = new mongoose.Schema({
  assignment_id: { type: String, required: true, unique: true },
  teacher_id: { type: String, required: true },
  student_id: { type: String, required: true }
});

// 4. Clearance Schema
const clearanceSchema = new mongoose.Schema({
  clearance_id: { type: String, required: true, unique: true },
  student_id: { type: String, required: true },
  clearance_type: { 
    type: String, 
    enum: ['FEES', 'LIBRARY', 'HOSTEL', 'TRANSPORT', 'PROJECT', 'OTHER'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['CLEARED', 'PENDING', 'ACTION_REQUIRED'], 
    default: 'PENDING' 
  },
  updated_by: { type: String },
  updated_at: { type: Date, default: Date.now },
  remark: { type: String, default: '' }
});

// 5. Intimation Schema
const intimationSchema = new mongoose.Schema({
  intimation_id: { type: String, required: true, unique: true },
  student_id: { type: String, required: true },
  teacher_id: { type: String, required: true },
  clearance_id: { type: String },
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['UNREAD', 'READ', 'RESOLVED'], 
    default: 'UNREAD' 
  },
  created_at: { type: Date, default: Date.now }
});

// 6. Verification Schema (For Reception/Admin)
const verificationSchema = new mongoose.Schema({
  verification_id: { type: String, required: true, unique: true },
  student_id: { type: String, required: true },
  clearance_ref_id: { type: String, required: true }, // Unique Clearance ID / QR Pointer
  final_status: { type: String, enum: ['ALL_CLEAR', 'INCOMPLETE'], default: 'INCOMPLETE' },
  verified_at: { type: Date }
});

module.exports = {
  Student: mongoose.model('Student', studentSchema),
  Teacher: mongoose.model('Teacher', teacherSchema),
  Assignment: mongoose.model('Assignment', assignmentSchema),
  Clearance: mongoose.model('Clearance', clearanceSchema),
  Intimation: mongoose.model('Intimation', intimationSchema),
  Verification: mongoose.model('Verification', verificationSchema)
};
