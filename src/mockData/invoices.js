const invoices = [
  {
    "_id": "INV-001",
    "appointmentId": "APT-001",
    "patientId": "PAT-001",
    "amount": 800,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-05T11:00:00Z"
  },
  {
    "_id": "INV-002",
    "appointmentId": "APT-002",
    "patientId": "PAT-002",
    "amount": 600,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-05T12:00:00Z"
  },
  {
    "_id": "INV-003",
    "appointmentId": "APT-003",
    "patientId": "PAT-003",
    "amount": 700,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-06T09:30:00Z"
  },
  {
    "_id": "INV-004",
    "appointmentId": "APT-004",
    "patientId": "PAT-004",
    "amount": 500,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-06T10:00:00Z"
  },
  {
    "_id": "INV-005",
    "appointmentId": "APT-005",
    "patientId": "PAT-005",
    "amount": 900,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-07T11:15:00Z"
  },
  {
    "_id": "INV-006",
    "appointmentId": "APT-006",
    "patientId": "PAT-006",
    "amount": 750,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-07T12:00:00Z"
  },
  {
    "_id": "INV-007",
    "appointmentId": "APT-007",
    "patientId": "PAT-007",
    "amount": 650,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-08T09:00:00Z"
  },
  {
    "_id": "INV-008",
    "appointmentId": "APT-008",
    "patientId": "PAT-008",
    "amount": 800,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-08T10:30:00Z"
  },
  {
    "_id": "INV-009",
    "appointmentId": "APT-009",
    "patientId": "PAT-009",
    "amount": 700,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-09T11:00:00Z"
  },
  {
    "_id": "INV-010",
    "appointmentId": "APT-010",
    "patientId": "PAT-010",
    "amount": 600,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-09T12:30:00Z"
  },
  {
    "_id": "INV-011",
    "appointmentId": "APT-011",
    "patientId": "PAT-001",
    "amount": 850,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-10T09:45:00Z"
  },
  {
    "_id": "INV-012",
    "appointmentId": "APT-012",
    "patientId": "PAT-002",
    "amount": 700,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-10T10:15:00Z"
  },
  {
    "_id": "INV-013",
    "appointmentId": "APT-013",
    "patientId": "PAT-003",
    "amount": 650,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-11T11:00:00Z"
  },
  {
    "_id": "INV-014",
    "appointmentId": "APT-014",
    "patientId": "PAT-004",
    "amount": 900,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-11T12:45:00Z"
  },
  {
    "_id": "INV-015",
    "appointmentId": "APT-015",
    "patientId": "PAT-005",
    "amount": 750,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-12T09:30:00Z"
  },
  {
    "_id": "INV-016",
    "appointmentId": "APT-016",
    "patientId": "PAT-006",
    "amount": 800,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-12T10:15:00Z"
  },
  {
    "_id": "INV-017",
    "appointmentId": "APT-017",
    "patientId": "PAT-007",
    "amount": 850,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-13T11:00:00Z"
  },
  {
    "_id": "INV-018",
    "appointmentId": "APT-018",
    "patientId": "PAT-008",
    "amount": 700,
    "paymentStatus": "UNPAID",
    "paymentMode": "ONLINE",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-13T12:00:00Z"
  },
  {
    "_id": "INV-019",
    "appointmentId": "APT-019",
    "patientId": "PAT-009",
    "amount": 650,
    "paymentStatus": "PAID",
    "paymentMode": "CASH",
    "generatedBy": "REC-001",
    "createdAt": "2024-10-14T09:00:00Z"
  },
  {
    "_id": "INV-020",
    "appointmentId": "APT-020",
    "patientId": "PAT-010",
    "amount": 900,
    "paymentStatus": "PAID",
    "paymentMode": "CARD",
    "generatedBy": "REC-002",
    "createdAt": "2024-10-14T10:30:00Z"
  }
]
export default invoices;