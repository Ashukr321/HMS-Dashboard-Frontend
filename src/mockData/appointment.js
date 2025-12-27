const appointment = [
  {
    "_id": "APT-001",
    "patientId": "PAT-001",
    "doctorId": "DOC-001",
    "appointmentDate": "2024-10-05",
    "timeSlot": "10:00 - 10:30",
    "status": "SCHEDULED",
    "createdBy": "REC-001",
    "consultationFee": 800,
    "createdAt": "2024-10-01T09:00:00Z"
  },
  {
    "_id": "APT-002",
    "patientId": "PAT-002",
    "doctorId": "DOC-002",
    "appointmentDate": "2024-10-05",
    "timeSlot": "10:30 - 11:00",
    "status": "COMPLETED",
    "createdBy": "REC-001",
    "consultationFee": 600,
    "createdAt": "2024-10-01T09:10:00Z"
  },
  {
    "_id": "APT-003",
    "patientId": "PAT-003",
    "doctorId": "DOC-003",
    "appointmentDate": "2024-10-05",
    "timeSlot": "11:00 - 11:30",
    "status": "CANCELLED",
    "createdBy": "REC-002",
    "consultationFee": 700,
    "createdAt": "2024-10-01T09:20:00Z"
  },
  {
    "_id": "APT-004",
    "patientId": "PAT-004",
    "doctorId": "DOC-004",
    "appointmentDate": "2024-10-05",
    "timeSlot": "11:30 - 12:00",
    "status": "NO_SHOW",
    "createdBy": "REC-002",
    "consultationFee": 650,
    "createdAt": "2024-10-01T09:30:00Z"
  },
  {
    "_id": "APT-005",
    "patientId": "PAT-005",
    "doctorId": "DOC-005",
    "appointmentDate": "2024-10-06",
    "timeSlot": "09:00 - 09:30",
    "status": "SCHEDULED",
    "createdBy": "REC-001",
    "consultationFee": 900,
    "createdAt": "2024-10-02T09:00:00Z"
  },
  {
    "_id": "APT-006",
    "patientId": "PAT-001",
    "doctorId": "DOC-002",
    "appointmentDate": "2024-10-06",
    "timeSlot": "09:30 - 10:00",
    "status": "COMPLETED",
    "createdBy": "REC-001",
    "consultationFee": 600,
    "createdAt": "2024-10-02T09:10:00Z"
  },
  {
    "_id": "APT-007",
    "patientId": "PAT-002",
    "doctorId": "DOC-003",
    "appointmentDate": "2024-10-06",
    "timeSlot": "10:00 - 10:30",
    "status": "NO_SHOW",
    "createdBy": "REC-002",
    "consultationFee": 700,
    "createdAt": "2024-10-02T09:20:00Z"
  },
  {
    "_id": "APT-008",
    "patientId": "PAT-003",
    "doctorId": "DOC-004",
    "appointmentDate": "2024-10-06",
    "timeSlot": "10:30 - 11:00",
    "status": "CANCELLED",
    "createdBy": "REC-002",
    "consultationFee": 650,
    "createdAt": "2024-10-02T09:30:00Z"
  },
  {
    "_id": "APT-009",
    "patientId": "PAT-004",
    "doctorId": "DOC-005",
    "appointmentDate": "2024-10-07",
    "timeSlot": "09:00 - 09:30",
    "status": "COMPLETED",
    "createdBy": "REC-001",
    "consultationFee": 900,
    "createdAt": "2024-10-03T09:00:00Z"
  },
  {
    "_id": "APT-010",
    "patientId": "PAT-005",
    "doctorId": "DOC-001",
    "appointmentDate": "2024-10-07",
    "timeSlot": "09:30 - 10:00",
    "status": "SCHEDULED",
    "createdBy": "REC-001",
    "consultationFee": 800,
    "createdAt": "2024-10-03T09:10:00Z"
  },

  {
    "_id": "APT-011",
    "patientId": "PAT-001",
    "doctorId": "DOC-003",
    "appointmentDate": "2024-10-07",
    "timeSlot": "10:00 - 10:30",
    "status": "COMPLETED",
    "createdBy": "REC-002",
    "consultationFee": 700,
    "createdAt": "2024-10-03T09:20:00Z"
  },
  {
    "_id": "APT-012",
    "patientId": "PAT-002",
    "doctorId": "DOC-004",
    "appointmentDate": "2024-10-07",
    "timeSlot": "10:30 - 11:00",
    "status": "NO_SHOW",
    "createdBy": "REC-002",
    "consultationFee": 650,
    "createdAt": "2024-10-03T09:30:00Z"
  },
  {
    "_id": "APT-013",
    "patientId": "PAT-003",
    "doctorId": "DOC-005",
    "appointmentDate": "2024-10-08",
    "timeSlot": "09:00 - 09:30",
    "status": "SCHEDULED",
    "createdBy": "REC-001",
    "consultationFee": 900,
    "createdAt": "2024-10-04T09:00:00Z"
  },
  {
    "_id": "APT-014",
    "patientId": "PAT-004",
    "doctorId": "DOC-001",
    "appointmentDate": "2024-10-08",
    "timeSlot": "09:30 - 10:00",
    "status": "CANCELLED",
    "createdBy": "REC-001",
    "consultationFee": 800,
    "createdAt": "2024-10-04T09:10:00Z"
  },
  {
    "_id": "APT-015",
    "patientId": "PAT-005",
    "doctorId": "DOC-002",
    "appointmentDate": "2024-10-08",
    "timeSlot": "10:00 - 10:30",
    "status": "COMPLETED",
    "createdBy": "REC-002",
    "consultationFee": 600,
    "createdAt": "2024-10-04T09:20:00Z"
  },

  {
    "_id": "APT-016",
    "patientId": "PAT-001",
    "doctorId": "DOC-004",
    "appointmentDate": "2024-10-09",
    "timeSlot": "09:00 - 09:30",
    "status": "SCHEDULED",
    "createdBy": "REC-001",
    "consultationFee": 650,
    "createdAt": "2024-10-05T09:00:00Z"
  },
  {
    "_id": "APT-017",
    "patientId": "PAT-002",
    "doctorId": "DOC-005",
    "appointmentDate": "2024-10-09",
    "timeSlot": "09:30 - 10:00",
    "status": "NO_SHOW",
    "createdBy": "REC-002",
    "consultationFee": 900,
    "createdAt": "2024-10-05T09:10:00Z"
  },
  {
    "_id": "APT-018",
    "patientId": "PAT-003",
    "doctorId": "DOC-001",
    "appointmentDate": "2024-10-09",
    "timeSlot": "10:00 - 10:30",
    "status": "COMPLETED",
    "createdBy": "REC-001",
    "consultationFee": 800,
    "createdAt": "2024-10-05T09:20:00Z"
  },
  {
    "_id": "APT-019",
    "patientId": "PAT-004",
    "doctorId": "DOC-002",
    "appointmentDate": "2024-10-09",
    "timeSlot": "10:30 - 11:00",
    "status": "SCHEDULED",
    "createdBy": "REC-002",
    "consultationFee": 600,
    "createdAt": "2024-10-05T09:30:00Z"
  },
  {
    "_id": "APT-020",
    "patientId": "PAT-005",
    "doctorId": "DOC-003",
    "appointmentDate": "2024-10-10",
    "timeSlot": "09:00 - 09:30",
    "status": "CANCELLED",
    "createdBy": "REC-001",
    "consultationFee": 700,
    "createdAt": "2024-10-06T09:00:00Z"
  }
]
export default appointment;