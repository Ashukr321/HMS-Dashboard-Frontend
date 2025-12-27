const profile = [
  {
    "_id": "PROF-ADMIN-001",
    "userId": "ADMIN-001",
    "role": "ADMIN",
    "name": "Amit Sharma",
    "phone": "9876543210",
    "address": {
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    },
    "details": {
      "hospitalName": "City Care Hospital",
      "branch": "Main Branch",
      "permissions": ["ALL"]
    },
    "createdAt": "2024-01-01T10:00:00Z"
  },

  {
    "_id": "PROF-DOC-001",
    "userId": "DOC-001",
    "role": "DOCTOR",
    "name": "Dr. Rajesh Verma",
    "phone": "9876500001",
    "address": { "city": "Delhi", "state": "Delhi" },
    "details": {
      "specialization": "Cardiology",
      "experience": 12,
      "availability": ["Mon", "Wed", "Fri"],
      "consultationFee": 800,
      "roomNo": "201"
    },
    "createdAt": "2024-02-10T09:00:00Z"
  },
  {
    "_id": "PROF-DOC-002",
    "userId": "DOC-002",
    "role": "DOCTOR",
    "name": "Dr. Neha Singh",
    "phone": "9876500002",
    "address": { "city": "Noida", "state": "UP" },
    "details": {
      "specialization": "Dermatology",
      "experience": 8,
      "availability": ["Tue", "Thu"],
      "consultationFee": 600,
      "roomNo": "202"
    },
    "createdAt": "2024-02-11T09:00:00Z"
  },
  {
    "_id": "PROF-DOC-003",
    "userId": "DOC-003",
    "role": "DOCTOR",
    "name": "Dr. Arjun Patel",
    "phone": "9876500003",
    "address": { "city": "Ahmedabad", "state": "Gujarat" },
    "details": {
      "specialization": "Orthopedics",
      "experience": 10,
      "availability": ["Mon", "Thu"],
      "consultationFee": 700,
      "roomNo": "203"
    },
    "createdAt": "2024-02-12T09:00:00Z"
  },
  {
    "_id": "PROF-DOC-004",
    "userId": "DOC-004",
    "role": "DOCTOR",
    "name": "Dr. Priya Mehta",
    "phone": "9876500004",
    "address": { "city": "Mumbai", "state": "Maharashtra" },
    "details": {
      "specialization": "Pediatrics",
      "experience": 9,
      "availability": ["Wed", "Fri"],
      "consultationFee": 650,
      "roomNo": "204"
    },
    "createdAt": "2024-02-13T09:00:00Z"
  },
  {
    "_id": "PROF-DOC-005",
    "userId": "DOC-005",
    "role": "DOCTOR",
    "name": "Dr. Vikram Shah",
    "phone": "9876500005",
    "address": { "city": "Pune", "state": "Maharashtra" },
    "details": {
      "specialization": "Neurology",
      "experience": 15,
      "availability": ["Tue", "Sat"],
      "consultationFee": 900,
      "roomNo": "205"
    },
    "createdAt": "2024-02-14T09:00:00Z"
  },

  {
    "_id": "PROF-PAT-001",
    "userId": "PAT-001",
    "role": "PATIENT",
    "name": "Rahul Kumar",
    "phone": "9876510001",
    "address": { "city": "Delhi", "state": "Delhi" },
    "details": {
      "age": 32,
      "gender": "Male",
      "bloodGroup": "O+",
      "emergencyContact": "9990001111"
    },
    "createdAt": "2024-03-01T08:30:00Z"
  },
  {
    "_id": "PROF-PAT-002",
    "userId": "PAT-002",
    "role": "PATIENT",
    "name": "Anita Roy",
    "phone": "9876510002",
    "address": { "city": "Kolkata", "state": "West Bengal" },
    "details": {
      "age": 28,
      "gender": "Female",
      "bloodGroup": "A+",
      "emergencyContact": "9990001112"
    },
    "createdAt": "2024-03-02T08:30:00Z"
  },
  {
    "_id": "PROF-PAT-003",
    "userId": "PAT-003",
    "role": "PATIENT",
    "name": "Suresh Mishra",
    "phone": "9876510003",
    "address": { "city": "Bhopal", "state": "MP" },
    "details": {
      "age": 45,
      "gender": "Male",
      "bloodGroup": "B+",
      "emergencyContact": "9990001113"
    },
    "createdAt": "2024-03-03T08:30:00Z"
  },
  {
    "_id": "PROF-PAT-004",
    "userId": "PAT-004",
    "role": "PATIENT",
    "name": "Pooja Naik",
    "phone": "9876510004",
    "address": { "city": "Goa", "state": "Goa" },
    "details": {
      "age": 30,
      "gender": "Female",
      "bloodGroup": "AB+",
      "emergencyContact": "9990001114"
    },
    "createdAt": "2024-03-04T08:30:00Z"
  },
  {
    "_id": "PROF-PAT-005",
    "userId": "PAT-005",
    "role": "PATIENT",
    "name": "Manish Jain",
    "phone": "9876510005",
    "address": { "city": "Indore", "state": "MP" },
    "details": {
      "age": 38,
      "gender": "Male",
      "bloodGroup": "O-",
      "emergencyContact": "9990001115"
    },
    "createdAt": "2024-03-05T08:30:00Z"
  },

  {
    "_id": "PROF-REC-001",
    "userId": "REC-001",
    "role": "RECEPTIONIST",
    "name": "Sunita Joshi",
    "phone": "9876520001",
    "address": { "city": "Delhi", "state": "Delhi" },
    "details": {
      "shift": "Morning",
      "deskNo": "Front-1"
    },
    "createdAt": "2024-01-15T09:00:00Z"
  },
  {
    "_id": "PROF-REC-002",
    "userId": "REC-002",
    "role": "RECEPTIONIST",
    "name": "Alok Rana",
    "phone": "9876520002",
    "address": { "city": "Delhi", "state": "Delhi" },
    "details": {
      "shift": "Evening",
      "deskNo": "Front-2"
    },
    "createdAt": "2024-01-16T09:00:00Z"
  },

  {
    "_id": "PROF-PHAR-001",
    "userId": "PHAR-001",
    "role": "PHARMACIST",
    "name": "Rakesh Nair",
    "phone": "9876530001",
    "address": { "city": "Mumbai", "state": "Maharashtra" },
    "details": {
      "licenseNo": "PHARM-IND-9001",
      "assignedCounter": "Pharmacy-1"
    },
    "createdAt": "2024-01-20T09:00:00Z"
  },
  {
    "_id": "PROF-PHAR-002",
    "userId": "PHAR-002",
    "role": "PHARMACIST",
    "name": "Meena Iyer",
    "phone": "9876530002",
    "address": { "city": "Chennai", "state": "Tamil Nadu" },
    "details": {
      "licenseNo": "PHARM-IND-9002",
      "assignedCounter": "Pharmacy-2"
    },
    "createdAt": "2024-01-21T09:00:00Z"
  }
]


export default profile;