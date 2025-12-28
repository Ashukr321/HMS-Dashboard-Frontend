
// 1. Admin 
// 2. Doctors
// 3. Patients
// 4. Receptionists
// 5. Pharmacists
// 6. Nurses
// 7. Lab Technicians
// 8. Hr 



// data model : User 
/*
id :string 
email :string 
password :string (hashed)
role : enum (ADMIN, DOCTOR, PATIENT, RECEPTIONIST, PHARMACIST, NURSE, LAB_TECHNICIAN,HR)
status : enum (ACTIVE, INACTIVE, SUSPENDED)
cretedAt : datetime(ISO 8601 format)
*/


// challenges: All acount id should be start with role prefix ? how we achieive that 

// we have to run a script that genereate prfix based on role and then generate unique id 
// schema pe pre 
const user= [
  /* --- 1. ADMIN --- */
  {
    "id": "ADMIN-001",
    "email": "admin@cityhospital.com",
    "password": "$mock$password123",
    "role": "ADMIN",
    "status": "ACTIVE",
    "createdAt": "2024-01-01T10:00:00Z"
  },
  {
    "id": "ADMIN-002",
    "email": "hr.manager@cityhospital.com",
    "password": "$mock$password123",
    "role": "ADMIN",
    "status": "ACTIVE",
    "createdAt": "2024-01-02T11:00:00Z"
  },

  /* --- 2. DOCTORS --- */
  {
    "id": "DOC-001",
    "email": "rajesh.verma@hospital.com",
    "password": "$mock$password123",
    "role": "DOCTOR",
    "status": "ACTIVE",
    "createdAt": "2024-02-10T09:00:00Z"
  },
  {
    "id": "DOC-002",
    "email": "neha.singh@hospital.com",
    "password": "$mock$password123",
    "role": "DOCTOR",
    "status": "ACTIVE",
    "createdAt": "2024-02-11T09:00:00Z"
  },
  {
    "id": "DOC-003",
    "email": "arjun.patel@hospital.com",
    "password": "$mock$password123",
    "role": "DOCTOR",
    "status": "ACTIVE",
    "createdAt": "2024-02-12T09:00:00Z"
  },
  {
    "id": "DOC-004",
    "email": "priya.mehta@hospital.com",
    "password": "$mock$password123",
    "role": "DOCTOR",
    "status": "ACTIVE",
    "createdAt": "2024-02-13T09:00:00Z"
  },
  {
    "id": "DOC-005",
    "email": "vikram.shah@hospital.com",
    "password": "$mock$password123",
    "role": "DOCTOR",
    "status": "ACTIVE",
    "createdAt": "2024-02-14T09:00:00Z"
  },

  /* --- 3. PATIENTS --- */
  {
    "id": "PAT-001",
    "email": "rahul.kumar@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-01T08:30:00Z"
  },
  {
    "id": "PAT-002",
    "email": "anita.roy@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-02T08:30:00Z"
  },
  {
    "id": "PAT-003",
    "email": "suresh.mishra@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-03T08:30:00Z"
  },
  {
    "id": "PAT-004",
    "email": "pooja.naik@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-04T08:30:00Z"
  },
  {
    "id": "PAT-005",
    "email": "manish.jain@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-05T08:30:00Z"
  },
  {
    "id": "PAT-006",
    "email": "kavita.sharma@gmail.com",
    "password": "$mock$password123",
    "role": "PATIENT",
    "status": "ACTIVE",
    "createdAt": "2024-03-06T08:30:00Z"
  },

  /* --- 4. RECEPTIONISTS --- */
  {
    "id": "REC-001",
    "email": "sunita.joshi@hospital.com",
    "password": "$mock$password123",
    "role": "RECEPTIONIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-15T09:00:00Z"
  },
  {
    "id": "REC-002",
    "email": "alok.rana@hospital.com",
    "password": "$mock$password123",
    "role": "RECEPTIONIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-16T09:00:00Z"
  },
  {
    "id": "REC-003",
    "email": "sandy.pinto@hospital.com",
    "password": "$mock$password123",
    "role": "RECEPTIONIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-17T09:00:00Z"
  },
  {
    "id": "REC-004",
    "email": "nina.gupta@hospital.com",
    "password": "$mock$password123",
    "role": "RECEPTIONIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-18T09:00:00Z"
  },

  /* --- 5. PHARMACISTS --- */
  {
    "id": "PHAR-001",
    "email": "rakesh.nair@hospital.com",
    "password": "$mock$password123",
    "role": "PHARMACIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-20T09:00:00Z"
  },
  {
    "id": "PHAR-002",
    "email": "meena.iyer@hospital.com",
    "password": "$mock$password123",
    "role": "PHARMACIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-21T09:00:00Z"
  },
  {
    "id": "PHAR-003",
    "email": "rahul.taneja@hospital.com",
    "password": "$mock$password123",
    "role": "PHARMACIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-22T09:00:00Z"
  },
  {
    "id": "PHAR-004",
    "email": "sonali.bend@hospital.com",
    "password": "$mock$password123",
    "role": "PHARMACIST",
    "status": "ACTIVE",
    "createdAt": "2024-01-23T09:00:00Z"
  },

  /* --- 6. NURSES --- */
  {
    "id": "NUR-001",
    "email": "mary.dsouza@hospital.com",
    "password": "$mock$password123",
    "role": "NURSE",
    "status": "ACTIVE",
    "createdAt": "2024-04-01T08:00:00Z"
  },
  {
    "id": "NUR-002",
    "email": "lakshmi.nair@hospital.com",
    "password": "$mock$password123",
    "role": "NURSE",
    "status": "ACTIVE",
    "createdAt": "2024-04-02T08:00:00Z"
  },
  {
    "id": "NUR-003",
    "email": "robert.william@hospital.com",
    "password": "$mock$password123",
    "role": "NURSE",
    "status": "ACTIVE",
    "createdAt": "2024-04-03T08:00:00Z"
  },
  {
    "id": "NUR-004",
    "email": "clara.smith@hospital.com",
    "password": "$mock$password123",
    "role": "NURSE",
    "status": "ACTIVE",
    "createdAt": "2024-04-04T08:00:00Z"
  },
  {
    "id": "NUR-005",
    "email": "anjali.menon@hospital.com",
    "password": "$mock$password123",
    "role": "NURSE",
    "status": "ACTIVE",
    "createdAt": "2024-04-05T08:00:00Z"
  },

  /* --- 7. LAB TECHNICIANS --- */
  {
    "id": "TECH-001",
    "email": "arjun.verma@hospital.com",
    "password": "$mock$password123",
    "role": "LAB_TECHNICIAN",
    "status": "ACTIVE",
    "createdAt": "2024-05-10T10:00:00Z"
  },
  {
    "id": "TECH-002",
    "email": "sarah.khan@hospital.com",
    "password": "$mock$password123",
    "role": "LAB_TECHNICIAN",
    "status": "ACTIVE",
    "createdAt": "2024-05-11T10:00:00Z"
  },
  {
    "id": "TECH-003",
    "email": "deepak.sharma@hospital.com",
    "password": "$mock$password123",
    "role": "LAB_TECHNICIAN",
    "status": "ACTIVE",
    "createdAt": "2024-05-12T10:00:00Z"
  },
  {
    "id": "TECH-004",
    "email": "omkar.desai@hospital.com",
    "password": "$mock$password123",
    "role": "LAB_TECHNICIAN",
    "status": "ACTIVE",
    "createdAt": "2024-05-13T10:00:00Z"
  }
]

export default user;