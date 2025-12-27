const ward = [
  {
    "_id": "WARD-01",
    "name": "General Ward - Male",
    "totalBeds": 20,
    "availableBeds": 12,
    "wardType": "GENERAL",
    "dailyRate": 1500,
    "departmentId": "DEPT-015",
    "occupiedBeds": [
      { "bedNo": "B-101", "patientId": "PAT-005", "admittedAt": "2024-10-11T08:00:00Z" }
    ]
  },
  {
    "_id": "WARD-02",
    "name": "General Ward - Female",
    "totalBeds": 20,
    "availableBeds": 18,
    "wardType": "GENERAL",
    "dailyRate": 1500,
    "departmentId": "DEPT-015",
    "occupiedBeds": [
      { "bedNo": "B-205", "patientId": "PAT-012", "admittedAt": "2024-12-20T10:00:00Z" }
    ]
  },
  {
    "_id": "WARD-03",
    "name": "Intensive Care Unit (ICU)",
    "totalBeds": 10,
    "availableBeds": 2,
    "wardType": "ICU",
    "dailyRate": 8500,
    "departmentId": "DEPT-012",
    "occupiedBeds": [
      { "bedNo": "ICU-01", "patientId": "PAT-088", "admittedAt": "2024-12-25T04:30:00Z" }
    ]
  },
  {
    "_id": "WARD-04",
    "name": "Cardiac Care Unit (CCU)",
    "totalBeds": 8,
    "availableBeds": 5,
    "wardType": "ICU",
    "dailyRate": 9000,
    "departmentId": "DEPT-001",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-05",
    "name": "Pediatric Ward",
    "totalBeds": 15,
    "availableBeds": 10,
    "wardType": "GENERAL",
    "dailyRate": 2000,
    "departmentId": "DEPT-003",
    "occupiedBeds": [
      { "bedNo": "P-05", "patientId": "PAT-105", "admittedAt": "2024-12-26T09:00:00Z" }
    ]
  },
  {
    "_id": "WARD-06",
    "name": "Private Deluxe Suite - A1",
    "totalBeds": 1,
    "availableBeds": 0,
    "wardType": "PRIVATE",
    "dailyRate": 12000,
    "departmentId": "DEPT-015",
    "occupiedBeds": [
      { "bedNo": "S-01", "patientId": "PAT-202", "admittedAt": "2024-12-24T14:00:00Z" }
    ]
  },
  {
    "_id": "WARD-07",
    "name": "Maternity Ward",
    "totalBeds": 12,
    "availableBeds": 4,
    "wardType": "GENERAL",
    "dailyRate": 3000,
    "departmentId": "DEPT-005",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-08",
    "name": "Neonatal ICU (NICU)",
    "totalBeds": 6,
    "availableBeds": 3,
    "wardType": "ICU",
    "dailyRate": 9500,
    "departmentId": "DEPT-005",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-09",
    "name": "Semi-Private Ward - East",
    "totalBeds": 4,
    "availableBeds": 2,
    "wardType": "PRIVATE",
    "dailyRate": 4500,
    "departmentId": "DEPT-015",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-10",
    "name": "Emergency Observation",
    "totalBeds": 10,
    "availableBeds": 8,
    "wardType": "EMERGENCY",
    "dailyRate": 2500,
    "departmentId": "DEPT-011",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-11",
    "name": "Orthopedic Recovery",
    "totalBeds": 10,
    "availableBeds": 6,
    "wardType": "GENERAL",
    "dailyRate": 2200,
    "departmentId": "DEPT-004",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-12",
    "name": "Oncology Day Care",
    "totalBeds": 8,
    "availableBeds": 8,
    "wardType": "GENERAL",
    "dailyRate": 3500,
    "departmentId": "DEPT-013",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-13",
    "name": "Neurology High Dependency",
    "totalBeds": 5,
    "availableBeds": 1,
    "wardType": "ICU",
    "dailyRate": 7000,
    "departmentId": "DEPT-002",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-14",
    "name": "Psychiatric Observation",
    "totalBeds": 6,
    "availableBeds": 4,
    "wardType": "PRIVATE",
    "dailyRate": 5000,
    "departmentId": "DEPT-014",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-15",
    "name": "Surgical Recovery Unit",
    "totalBeds": 12,
    "availableBeds": 10,
    "wardType": "GENERAL",
    "dailyRate": 2800,
    "departmentId": "DEPT-015",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-16",
    "name": "Isolation Ward (Infectious)",
    "totalBeds": 4,
    "availableBeds": 4,
    "wardType": "EMERGENCY",
    "dailyRate": 6000,
    "departmentId": "DEPT-011",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-17",
    "name": "VIP Suite - Level 7",
    "totalBeds": 1,
    "availableBeds": 1,
    "wardType": "PRIVATE",
    "dailyRate": 25000,
    "departmentId": "DEPT-018",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-18",
    "name": "Geriatric Care Ward",
    "totalBeds": 10,
    "availableBeds": 7,
    "wardType": "GENERAL",
    "dailyRate": 2000,
    "departmentId": "DEPT-015",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-19",
    "name": "Burn Unit",
    "totalBeds": 4,
    "availableBeds": 2,
    "wardType": "ICU",
    "dailyRate": 10000,
    "departmentId": "DEPT-015",
    "occupiedBeds": []
  },
  {
    "_id": "WARD-20",
    "name": "Dialysis Unit Ward",
    "totalBeds": 10,
    "availableBeds": 10,
    "wardType": "GENERAL",
    "dailyRate": 4000,
    "departmentId": "DEPT-009",
    "occupiedBeds": []
  }
]