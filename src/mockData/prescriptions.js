const prescriptions =[
  {
    "_id": "PRE-001",
    "medicalRecordId": "MR-001",
    "doctorId": "DOC-001",
    "patientId": "PAT-001",
    "medicines": [
      { "name": "Amlodipine", "dosage": "5mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-05T10:40:00Z"
  },
  {
    "_id": "PRE-002",
    "medicalRecordId": "MR-002",
    "doctorId": "DOC-002",
    "patientId": "PAT-002",
    "medicines": [
      { "name": "Cetirizine", "dosage": "10mg", "frequency": "Once a day", "duration": "5 days" }
    ],
    "createdAt": "2024-10-05T11:10:00Z"
  },
  {
    "_id": "PRE-003",
    "medicalRecordId": "MR-003",
    "doctorId": "DOC-003",
    "patientId": "PAT-003",
    "medicines": [
      { "name": "Sumatriptan", "dosage": "50mg", "frequency": "As needed", "duration": "10 days" }
    ],
    "createdAt": "2024-10-05T11:40:00Z"
  },
  {
    "_id": "PRE-004",
    "medicalRecordId": "MR-004",
    "doctorId": "DOC-004",
    "patientId": "PAT-004",
    "medicines": [
      { "name": "Omeprazole", "dosage": "20mg", "frequency": "Once a day", "duration": "14 days" }
    ],
    "createdAt": "2024-10-05T12:10:00Z"
  },
  {
    "_id": "PRE-005",
    "medicalRecordId": "MR-005",
    "doctorId": "DOC-005",
    "patientId": "PAT-005",
    "medicines": [
      { "name": "Metformin", "dosage": "500mg", "frequency": "Twice a day", "duration": "60 days" }
    ],
    "createdAt": "2024-10-06T09:40:00Z"
  },

  {
    "_id": "PRE-006",
    "medicalRecordId": "MR-006",
    "doctorId": "DOC-002",
    "patientId": "PAT-001",
    "medicines": [
      { "name": "Vitamin D3", "dosage": "60000 IU", "frequency": "Once a week", "duration": "6 weeks" }
    ],
    "createdAt": "2024-10-06T10:10:00Z"
  },
  {
    "_id": "PRE-007",
    "medicalRecordId": "MR-007",
    "doctorId": "DOC-003",
    "patientId": "PAT-002",
    "medicines": [
      { "name": "Escitalopram", "dosage": "10mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-06T10:40:00Z"
  },
  {
    "_id": "PRE-008",
    "medicalRecordId": "MR-008",
    "doctorId": "DOC-004",
    "patientId": "PAT-003",
    "medicines": [
      { "name": "Ibuprofen", "dosage": "400mg", "frequency": "Twice a day", "duration": "7 days" }
    ],
    "createdAt": "2024-10-06T11:10:00Z"
  },
  {
    "_id": "PRE-009",
    "medicalRecordId": "MR-009",
    "doctorId": "DOC-005",
    "patientId": "PAT-004",
    "medicines": [
      { "name": "Atorvastatin", "dosage": "10mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-07T09:40:00Z"
  },
  {
    "_id": "PRE-010",
    "medicalRecordId": "MR-010",
    "doctorId": "DOC-001",
    "patientId": "PAT-005",
    "medicines": [
      { "name": "Levocetirizine", "dosage": "5mg", "frequency": "Once a day", "duration": "5 days" }
    ],
    "createdAt": "2024-10-07T10:10:00Z"
  },

  {
    "_id": "PRE-011",
    "medicalRecordId": "MR-011",
    "doctorId": "DOC-003",
    "patientId": "PAT-001",
    "medicines": [
      { "name": "Melatonin", "dosage": "3mg", "frequency": "At bedtime", "duration": "14 days" }
    ],
    "createdAt": "2024-10-07T10:40:00Z"
  },
  {
    "_id": "PRE-012",
    "medicalRecordId": "MR-012",
    "doctorId": "DOC-004",
    "patientId": "PAT-002",
    "medicines": [
      { "name": "ORS Powder", "dosage": "As directed", "frequency": "After meals", "duration": "3 days" }
    ],
    "createdAt": "2024-10-07T11:10:00Z"
  },
  {
    "_id": "PRE-013",
    "medicalRecordId": "MR-013",
    "doctorId": "DOC-005",
    "patientId": "PAT-003",
    "medicines": [
      { "name": "Levothyroxine", "dosage": "50mcg", "frequency": "Once a day", "duration": "60 days" }
    ],
    "createdAt": "2024-10-08T09:40:00Z"
  },
  {
    "_id": "PRE-014",
    "medicalRecordId": "MR-014",
    "doctorId": "DOC-001",
    "patientId": "PAT-004",
    "medicines": [
      { "name": "Pantoprazole", "dosage": "40mg", "frequency": "Once a day", "duration": "14 days" }
    ],
    "createdAt": "2024-10-08T10:10:00Z"
  },
  {
    "_id": "PRE-015",
    "medicalRecordId": "MR-015",
    "doctorId": "DOC-002",
    "patientId": "PAT-005",
    "medicines": [
      { "name": "Ferrous Sulfate", "dosage": "325mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-08T10:40:00Z"
  },

  {
    "_id": "PRE-016",
    "medicalRecordId": "MR-016",
    "doctorId": "DOC-004",
    "patientId": "PAT-001",
    "medicines": [
      { "name": "Calcium + D3", "dosage": "500mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-09T09:40:00Z"
  },
  {
    "_id": "PRE-017",
    "medicalRecordId": "MR-017",
    "doctorId": "DOC-005",
    "patientId": "PAT-002",
    "medicines": [
      { "name": "Salbutamol Inhaler", "dosage": "2 puffs", "frequency": "As needed", "duration": "30 days" }
    ],
    "createdAt": "2024-10-09T10:10:00Z"
  },
  {
    "_id": "PRE-018",
    "medicalRecordId": "MR-018",
    "doctorId": "DOC-001",
    "patientId": "PAT-003",
    "medicines": [
      { "name": "Domperidone", "dosage": "10mg", "frequency": "Twice a day", "duration": "5 days" }
    ],
    "createdAt": "2024-10-09T10:40:00Z"
  },
  {
    "_id": "PRE-019",
    "medicalRecordId": "MR-019",
    "doctorId": "DOC-002",
    "patientId": "PAT-004",
    "medicines": [
      { "name": "Eye Lubricant Drops", "dosage": "2 drops", "frequency": "Twice a day", "duration": "7 days" }
    ],
    "createdAt": "2024-10-09T11:10:00Z"
  },
  {
    "_id": "PRE-020",
    "medicalRecordId": "MR-020",
    "doctorId": "DOC-003",
    "patientId": "PAT-005",
    "medicines": [
      { "name": "Losartan", "dosage": "50mg", "frequency": "Once a day", "duration": "30 days" }
    ],
    "createdAt": "2024-10-10T09:40:00Z"
  }
]

export default prescriptions;