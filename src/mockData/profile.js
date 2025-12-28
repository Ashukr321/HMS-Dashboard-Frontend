const profile = [
  /* --- 1. ADMIN PROFILES (3 Records) --- */
  {
    "_id": "PROF-ADMIN-001",
    "userId": "ADMIN-001",
    "firstName": "Amit",
    "lastName": "Sharma",
    "phoneNumber": "+919876543210",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India", "zipCode": "110001", "streetAddress": "Connaught Place" },
    "dateOfBirth": "1985-05-15T00:00:00Z",
    "age": 39,
    "details": { "hospitalName": "City Care Hospital", "branch": "Main Branch", "permissions": ["ALL"] }
  },
  {
    "_id": "PROF-ADMIN-002",
    "userId": "ADMIN-002",
    "firstName": "Suman",
    "lastName": "Mehta",
    "phoneNumber": "+919876543211",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Suman",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India", "zipCode": "400001", "streetAddress": "Andheri West" },
    "dateOfBirth": "1988-08-20T00:00:00Z",
    "age": 36,
    "details": { "hospitalName": "City Care Hospital", "branch": "West Branch", "permissions": ["HR", "REPORTS"] }
  },
  {
    "_id": "PROF-ADMIN-003",
    "userId": "ADMIN-003",
    "firstName": "Vikrant",
    "lastName": "Singh",
    "phoneNumber": "+919876543212",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikrant",
    "address": { "city": "Bangalore", "state": "Karnataka", "country": "India", "zipCode": "560001", "streetAddress": "MG Road" },
    "dateOfBirth": "1990-12-10T00:00:00Z",
    "age": 34,
    "details": { "hospitalName": "City Care Hospital", "branch": "Main Branch", "permissions": ["IT_SUPPORT"] }
  },

  /* --- 2. DOCTOR PROFILES (6 Records) --- */
  {
    "_id": "PROF-DOC-001",
    "userId": "DOC-001",
    "firstName": "Rajesh",
    "lastName": "Verma",
    "phoneNumber": "+919876500001",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1975-04-12T00:00:00Z",
    "age": 49,
    "details": { "specialization": "Cardiology", "experience": 12, "availability": ["Mon", "Wed", "Fri"], "consultationFee": 800, "roomNo": "201" }
  },
  {
    "_id": "PROF-DOC-002",
    "userId": "DOC-002",
    "firstName": "Neha",
    "lastName": "Singh",
    "phoneNumber": "+919876500002",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    "address": { "city": "Noida", "state": "UP", "country": "India" },
    "dateOfBirth": "1982-11-25T00:00:00Z",
    "age": 42,
    "details": { "specialization": "Dermatology", "experience": 8, "availability": ["Tue", "Thu"], "consultationFee": 600, "roomNo": "202" }
  },
  {
    "_id": "PROF-DOC-003",
    "userId": "DOC-003",
    "firstName": "Arjun",
    "lastName": "Patel",
    "phoneNumber": "+919876500003",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    "address": { "city": "Ahmedabad", "state": "Gujarat", "country": "India" },
    "dateOfBirth": "1980-01-30T00:00:00Z",
    "age": 44,
    "details": { "specialization": "Orthopedics", "experience": 10, "availability": ["Mon", "Thu"], "consultationFee": 700, "roomNo": "203" }
  },
  {
    "_id": "PROF-DOC-004",
    "userId": "DOC-004",
    "firstName": "Priya",
    "lastName": "Mehta",
    "phoneNumber": "+919876500004",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1987-09-14T00:00:00Z",
    "age": 37,
    "details": { "specialization": "Pediatrics", "experience": 9, "availability": ["Wed", "Fri"], "consultationFee": 650, "roomNo": "204" }
  },
  {
    "_id": "PROF-DOC-005",
    "userId": "DOC-005",
    "firstName": "Vikram",
    "lastName": "Shah",
    "phoneNumber": "+919876500005",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    "address": { "city": "Pune", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1970-02-14T00:00:00Z",
    "age": 54,
    "details": { "specialization": "Neurology", "experience": 15, "availability": ["Tue", "Sat"], "consultationFee": 900, "roomNo": "205" }
  },
  {
    "_id": "PROF-DOC-006",
    "userId": "DOC-006",
    "firstName": "Amit",
    "lastName": "Khanna",
    "phoneNumber": "+919876500006",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=AmitK",
    "address": { "city": "Lucknow", "state": "UP", "country": "India" },
    "dateOfBirth": "1983-07-22T00:00:00Z",
    "age": 41,
    "details": { "specialization": "General Medicine", "experience": 11, "availability": ["Daily"], "consultationFee": 500, "roomNo": "101" }
  },

  /* --- 3. PATIENT PROFILES (7 Records) --- */
  {
    "_id": "PROF-PAT-001",
    "userId": "PAT-001",
    "firstName": "Rahul",
    "lastName": "Kumar",
    "phoneNumber": "+919876510001",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1992-03-01T08:30:00Z",
    "age": 32,
    "details": { "gender": "Male", "bloodGroup": "O+", "emergencyContact": "9990001111" }
  },
  {
    "_id": "PROF-PAT-002",
    "userId": "PAT-002",
    "firstName": "Anita",
    "lastName": "Roy",
    "phoneNumber": "+919876510002",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita",
    "address": { "city": "Kolkata", "state": "West Bengal", "country": "India" },
    "dateOfBirth": "1996-03-02T08:30:00Z",
    "age": 28,
    "details": { "gender": "Female", "bloodGroup": "A+", "emergencyContact": "9990001112" }
  },
  {
    "_id": "PROF-PAT-003",
    "userId": "PAT-003",
    "firstName": "Suresh",
    "lastName": "Mishra",
    "phoneNumber": "+919876510003",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh",
    "address": { "city": "Bhopal", "state": "MP", "country": "India" },
    "dateOfBirth": "1979-03-03T08:30:00Z",
    "age": 45,
    "details": { "gender": "Male", "bloodGroup": "B+", "emergencyContact": "9990001113" }
  },
  {
    "_id": "PROF-PAT-004",
    "userId": "PAT-004",
    "firstName": "Pooja",
    "lastName": "Naik",
    "phoneNumber": "+919876510004",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
    "address": { "city": "Goa", "state": "Goa", "country": "India" },
    "dateOfBirth": "1994-03-04T08:30:00Z",
    "age": 30,
    "details": { "gender": "Female", "bloodGroup": "AB+", "emergencyContact": "9990001114" }
  },
  {
    "_id": "PROF-PAT-005",
    "userId": "PAT-005",
    "firstName": "Manish",
    "lastName": "Jain",
    "phoneNumber": "+919876510005",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Manish",
    "address": { "city": "Indore", "state": "MP", "country": "India" },
    "dateOfBirth": "1986-03-05T08:30:00Z",
    "age": 38,
    "details": { "gender": "Male", "bloodGroup": "O-", "emergencyContact": "9990001115" }
  },
  {
    "_id": "PROF-PAT-006",
    "userId": "PAT-006",
    "firstName": "Kavita",
    "lastName": "Sharma",
    "phoneNumber": "+919876510006",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
    "address": { "city": "Jaipur", "state": "Rajasthan", "country": "India" },
    "dateOfBirth": "1990-05-12T00:00:00Z",
    "age": 34,
    "details": { "gender": "Female", "bloodGroup": "B-", "emergencyContact": "9990001116" }
  },
  {
    "_id": "PROF-PAT-007",
    "userId": "PAT-007",
    "firstName": "Rohan",
    "lastName": "Das",
    "phoneNumber": "+919876510007",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
    "address": { "city": "Patna", "state": "Bihar", "country": "India" },
    "dateOfBirth": "2000-01-01T00:00:00Z",
    "age": 25,
    "details": { "gender": "Male", "bloodGroup": "A-", "emergencyContact": "9990001117" }
  },

  /* --- 4. RECEPTIONIST PROFILES (5 Records) --- */
  {
    "_id": "PROF-REC-001",
    "userId": "REC-001",
    "firstName": "Sunita",
    "lastName": "Joshi",
    "phoneNumber": "+919876520001",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1995-01-15T09:00:00Z",
    "age": 29,
    "details": { "shift": "Morning", "deskNo": "Front-1" }
  },
  {
    "_id": "PROF-REC-002",
    "userId": "REC-002",
    "firstName": "Alok",
    "lastName": "Rana",
    "phoneNumber": "+919876520002",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alok",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1993-01-16T09:00:00Z",
    "age": 31,
    "details": { "shift": "Evening", "deskNo": "Front-2" }
  },
  {
    "_id": "PROF-REC-003",
    "userId": "REC-003",
    "firstName": "Sandy",
    "lastName": "Pinto",
    "phoneNumber": "+919876520003",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandy",
    "address": { "city": "Goa", "state": "Goa", "country": "India" },
    "dateOfBirth": "1997-06-10T00:00:00Z",
    "age": 27,
    "details": { "shift": "Morning", "deskNo": "Emergency-1" }
  },
  {
    "_id": "PROF-REC-004",
    "userId": "REC-004",
    "firstName": "Nina",
    "lastName": "Gupta",
    "phoneNumber": "+919876520004",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
    "address": { "city": "Pune", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1992-04-05T00:00:00Z",
    "age": 32,
    "details": { "shift": "Night", "deskNo": "Inpatient-3" }
  },
  {
    "_id": "PROF-REC-005",
    "userId": "REC-005",
    "firstName": "Joyce",
    "lastName": "Lee",
    "phoneNumber": "+919876520005",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Joyce",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1998-11-11T00:00:00Z",
    "age": 26,
    "details": { "shift": "Evening", "deskNo": "Front-3" }
  },

  /* --- 5. PHARMACIST PROFILES (4 Records) --- */
  {
    "_id": "PROF-PHAR-001",
    "userId": "PHAR-001",
    "firstName": "Rakesh",
    "lastName": "Nair",
    "phoneNumber": "+919876530001",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakesh",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1988-01-20T00:00:00Z",
    "age": 36,
    "details": { "licenseNo": "PHARM-IND-9001", "assignedCounter": "Pharmacy-1" }
  },
  {
    "_id": "PROF-PHAR-002",
    "userId": "PHAR-002",
    "firstName": "Meena",
    "lastName": "Iyer",
    "phoneNumber": "+919876530002",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Meena",
    "address": { "city": "Chennai", "state": "Tamil Nadu", "country": "India" },
    "dateOfBirth": "1990-01-21T00:00:00Z",
    "age": 34,
    "details": { "licenseNo": "PHARM-IND-9002", "assignedCounter": "Pharmacy-2" }
  },
  {
    "_id": "PROF-PHAR-003",
    "userId": "PHAR-003",
    "firstName": "Rahul",
    "lastName": "Taneja",
    "phoneNumber": "+919876530003",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=RahulT",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1985-05-15T00:00:00Z",
    "age": 39,
    "details": { "licenseNo": "PHARM-IND-9003", "assignedCounter": "Pharmacy-3" }
  },
  {
    "_id": "PROF-PHAR-004",
    "userId": "PHAR-004",
    "firstName": "Sonali",
    "lastName": "Bend",
    "phoneNumber": "+919876530004",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonali",
    "address": { "city": "Lucknow", "state": "UP", "country": "India" },
    "dateOfBirth": "1992-09-10T00:00:00Z",
    "age": 32,
    "details": { "licenseNo": "PHARM-IND-9004", "assignedCounter": "Pharmacy-4" }
  },

  /* --- 6. NURSE PROFILES (5 Records) --- */
  {
    "_id": "PROF-NUR-001",
    "userId": "NUR-001",
    "firstName": "Mary",
    "lastName": "DSouza",
    "phoneNumber": "+919822114455",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Mary",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1994-04-01T08:00:00Z",
    "age": 30,
    "details": { "qualification": "B.Sc Nursing", "assignedWard": "WARD-03", "shift": "Morning", "experience": 5 }
  },
  {
    "_id": "PROF-NUR-002",
    "userId": "NUR-002",
    "firstName": "Lakshmi",
    "lastName": "Nair",
    "phoneNumber": "+919822116677",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lakshmi",
    "address": { "city": "Chennai", "state": "Tamil Nadu", "country": "India" },
    "dateOfBirth": "1991-04-02T08:00:00Z",
    "age": 33,
    "details": { "qualification": "General Nursing", "assignedWard": "WARD-05", "shift": "Night", "experience": 8 }
  },
  {
    "_id": "PROF-NUR-003",
    "userId": "NUR-003",
    "firstName": "Robert",
    "lastName": "William",
    "phoneNumber": "+919822118899",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1996-04-03T08:00:00Z",
    "age": 28,
    "details": { "qualification": "B.Sc Nursing", "assignedWard": "WARD-01", "shift": "Evening", "experience": 3 }
  },
  {
    "_id": "PROF-NUR-004",
    "userId": "NUR-004",
    "firstName": "Clara",
    "lastName": "Smith",
    "phoneNumber": "+919822112233",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Clara",
    "address": { "city": "London", "state": "UK", "country": "UK" },
    "dateOfBirth": "1990-05-10T00:00:00Z",
    "age": 34,
    "details": { "qualification": "Advanced Nursing", "assignedWard": "ICU-02", "shift": "Night", "experience": 10 }
  },
  {
    "_id": "PROF-NUR-005",
    "userId": "NUR-005",
    "firstName": "Anjali",
    "lastName": "Menon",
    "phoneNumber": "+919822110011",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    "address": { "city": "Kochi", "state": "Kerala", "country": "India" },
    "dateOfBirth": "1995-12-12T00:00:00Z",
    "age": 29,
    "details": { "qualification": "B.Sc Nursing", "assignedWard": "WARD-08", "shift": "Morning", "experience": 4 }
  },

  /* --- 7. LAB TECHNICIAN PROFILES (5 Records) --- */
  {
    "_id": "PROF-TECH-001",
    "userId": "TECH-001",
    "firstName": "Arjun",
    "lastName": "Verma",
    "phoneNumber": "+919876500111",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunT",
    "address": { "city": "Delhi", "state": "Delhi", "country": "India" },
    "dateOfBirth": "1992-05-10T10:00:00Z",
    "age": 32,
    "details": { "specialization": "Hematology", "licenseNo": "LAB-LIC-5050", "labRoom": "Room 101, Basement", "shift": "Morning" }
  },
  {
    "_id": "PROF-TECH-002",
    "userId": "TECH-002",
    "firstName": "Sarah",
    "lastName": "Khan",
    "phoneNumber": "+919876500222",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    "address": { "city": "Lucknow", "state": "UP", "country": "India" },
    "dateOfBirth": "1994-05-11T10:00:00Z",
    "age": 30,
    "details": { "specialization": "Radiology", "licenseNo": "RAD-LIC-9090", "labRoom": "X-Ray Room B", "shift": "Evening" }
  },
  {
    "_id": "PROF-TECH-003",
    "userId": "TECH-003",
    "firstName": "Deepak",
    "lastName": "Sharma",
    "phoneNumber": "+919876500333",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak",
    "address": { "city": "Indore", "state": "MP", "country": "India" },
    "dateOfBirth": "1989-05-12T10:00:00Z",
    "age": 35,
    "details": { "specialization": "Biochemistry", "licenseNo": "BIO-LIC-4040", "labRoom": "Room 105, Basement", "shift": "Night" }
  },
  {
    "_id": "PROF-TECH-004",
    "userId": "TECH-004",
    "firstName": "Omkar",
    "lastName": "Desai",
    "phoneNumber": "+919876500444",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Omkar",
    "address": { "city": "Pune", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1991-03-22T00:00:00Z",
    "age": 33,
    "details": { "specialization": "Pathology", "licenseNo": "PATH-LIC-2020", "labRoom": "Room 102", "shift": "Morning" }
  },
  {
    "_id": "PROF-TECH-005",
    "userId": "TECH-005",
    "firstName": "Lisa",
    "lastName": "Ray",
    "phoneNumber": "+919876500555",
    "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    "address": { "city": "Mumbai", "state": "Maharashtra", "country": "India" },
    "dateOfBirth": "1995-07-01T00:00:00Z",
    "age": 29,
    "details": { "specialization": "Microbiology", "licenseNo": "MIC-LIC-3030", "labRoom": "Room 205", "shift": "Morning" }
  }
]


export default profile;