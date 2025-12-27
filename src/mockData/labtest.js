const labTest = 
[
  {
    "_id": "LT-1001",
    "patientId": "PAT-005",
    "doctorId": "DOC-003",
    "testName": "Complete Blood Count (CBC)",
    "category": "Hematology",
    "price": 450,
    "status": "FINAL",
    "technicianId": "TECH-001",
    "results": [
      { "parameter": "Hemoglobin", "value": "14.2", "unit": "g/dL", "range": "13-17" }
    ],
    "reportUrl": "https://storage.hms.com/reports/cbc_001.pdf",
    "createdAt": "2024-11-20T10:00:00Z"
  },
  {
    "_id": "LT-1002",
    "patientId": "PAT-012",
    "doctorId": "DOC-012",
    "testName": "Lipid Profile",
    "category": "Biochemistry",
    "price": 1200,
    "status": "PENDING",
    "technicianId": null,
    "results": [],
    "createdAt": "2024-11-21T08:30:00Z"
  },
  {
    "_id": "LT-1003",
    "patientId": "PAT-088",
    "doctorId": "DOC-025",
    "testName": "Chest X-Ray",
    "category": "Radiology",
    "price": 800,
    "status": "COLLECTED",
    "technicianId": "TECH-002",
    "results": [],
    "createdAt": "2024-11-21T11:00:00Z"
  },
  {
    "_id": "LT-1004",
    "patientId": "PAT-105",
    "doctorId": "DOC-033",
    "testName": "HbA1c",
    "category": "Diabetology",
    "price": 600,
    "status": "FINAL",
    "technicianId": "TECH-001",
    "results": [
      { "parameter": "HbA1c", "value": "6.1", "unit": "%", "range": "< 5.7" }
    ],
    "reportUrl": "https://storage.hms.com/reports/hba1c_004.pdf",
    "createdAt": "2024-11-22T09:15:00Z"
  },
  {
    "_id": "LT-1005",
    "patientId": "PAT-202",
    "doctorId": "DOC-001",
    "testName": "Liver Function Test",
    "category": "Biochemistry",
    "price": 1500,
    "status": "PENDING",
    "technicianId": null,
    "results": [],
    "createdAt": "2024-11-22T14:00:00Z"
  }
]

export default labTest;