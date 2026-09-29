// Controlled Demo Dataset mapping the 5 required project states
const demoStudents = [
  {
    student_id: "S001",
    name: "Alice Smith",
    branch: "Computer Science",
    semester: 6,
    scenario: "All Clear",
    clearances: [
      { type: "FEES", status: "CLEARED" },
      { type: "LIBRARY", status: "CLEARED" },
      { type: "HOSTEL", status: "CLEARED" },
      { type: "TRANSPORT", status: "CLEARED" },
      { type: "PROJECT", status: "CLEARED" }
    ]
  },
  {
    student_id: "S002",
    name: "Bob Jones",
    branch: "Information Science",
    semester: 6,
    scenario: "Teacher Clearance Pending",
    clearances: [
      { type: "FEES", status: "CLEARED" },
      { type: "LIBRARY", status: "CLEARED" },
      { type: "PROJECT", status: "PENDING" }
    ]
  },
  {
    student_id: "S003",
    name: "Charlie Brown",
    branch: "Electronics",
    semester: 6,
    scenario: "Action Required",
    clearances: [
      { type: "FEES", status: "CLEARED" },
      { type: "PROJECT", status: "ACTION_REQUIRED", remark: "Submit project report and lab manual." }
    ],
    intimation: {
      teacher_id: "T001",
      reason: "Submit project report.",
      status: "UNREAD"
    }
  },
  {
    student_id: "S004",
    name: "Diana Prince",
    branch: "Mechanical",
    semester: 6,
    scenario: "Department Pending",
    clearances: [
      { type: "FEES", status: "CLEARED" },
      { type: "LIBRARY", status: "PENDING", remark: "Unreturned book: Operating Systems." }
    ]
  },
  {
    student_id: "S005",
    name: "Evan Wright",
    branch: "Civil",
    semester: 6,
    scenario: "Dynamic Live Demo Student",
    clearances: [
      { type: "FEES", status: "CLEARED" },
      { type: "PROJECT", status: "PENDING", remark: "Pending final review for live stage demo." }
    ]
  }
];

module.exports = demoStudents;
