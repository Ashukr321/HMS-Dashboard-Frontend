const vitals = [
  {
    "_id": "VIT-501",
    "patientId": "PAT-005",
    "recordedBy": "NURSE-001",
    "appointmentId": "APT-020",
    "bp": "120/80",
    "temperature": "98.6°F",
    "heartRate": "72bpm",
    "weight": "70kg",
    "createdAt": "2024-10-10T08:50:00Z"
  },
  {
    "_id": "VIT-502",
    "patientId": "PAT-012",
    "recordedBy": "NURSE-005",
    "appointmentId": "APT-021",
    "bp": "140/90",
    "temperature": "99.2°F",
    "heartRate": "85bpm",
    "weight": "82kg",
    "createdAt": "2024-10-11T09:15:00Z"
  },
  {
    "_id": "VIT-503",
    "patientId": "PAT-088",
    "recordedBy": "NURSE-010",
    "appointmentId": "APT-022",
    "bp": "110/70",
    "temperature": "102.4°F",
    "heartRate": "110bpm",
    "weight": "65kg",
    "createdAt": "2024-10-12T10:00:00Z"
  },
  {
    "_id": "VIT-504",
    "patientId": "PAT-105",
    "recordedBy": "NURSE-002",
    "appointmentId": "APT-023",
    "bp": "100/60",
    "temperature": "98.4°F",
    "heartRate": "95bpm",
    "weight": "15kg",
    "createdAt": "2024-10-13T11:30:00Z"
  },
  {
    "_id": "VIT-505",
    "patientId": "PAT-202",
    "recordedBy": "NURSE-001",
    "appointmentId": "APT-024",
    "bp": "130/85",
    "temperature": "98.8°F",
    "heartRate": "78bpm",
    "weight": "90kg",
    "createdAt": "2024-10-14T08:00:00Z"
  },
  {
    "_id": "VIT-506",
    "patientId": "PAT-007",
    "recordedBy": "NURSE-008",
    "appointmentId": "APT-025",
    "bp": "115/75",
    "temperature": "97.9°F",
    "heartRate": "68bpm",
    "weight": "62kg",
    "createdAt": "2024-10-15T14:20:00Z"
  },
  {
    "_id": "VIT-507",
    "patientId": "PAT-019",
    "recordedBy": "NURSE-003",
    "appointmentId": "APT-026",
    "bp": "160/100",
    "temperature": "98.6°F",
    "heartRate": "92bpm",
    "weight": "105kg",
    "createdAt": "2024-10-16T16:45:00Z"
  },
  {
    "_id": "VIT-508",
    "patientId": "PAT-045",
    "recordedBy": "NURSE-005",
    "appointmentId": "APT-027",
    "bp": "122/78",
    "temperature": "100.5°F",
    "heartRate": "88bpm",
    "weight": "55kg",
    "createdAt": "2024-10-17T09:30:00Z"
  },
  {
    "_id": "VIT-509",
    "patientId": "PAT-062",
    "recordedBy": "NURSE-012",
    "appointmentId": "APT-028",
    "bp": "90/60",
    "temperature": "96.5°F",
    "heartRate": "105bpm",
    "weight": "48kg",
    "createdAt": "2024-10-18T22:10:00Z"
  },
  {
    "_id": "VIT-510",
    "patientId": "PAT-033",
    "recordedBy": "NURSE-002",
    "appointmentId": "APT-029",
    "bp": "118/79",
    "temperature": "98.2°F",
    "heartRate": "70bpm",
    "weight": "77kg",
    "createdAt": "2024-10-19T10:00:00Z"
  },
  {
    "_id": "VIT-511",
    "patientId": "PAT-099",
    "recordedBy": "NURSE-001",
    "appointmentId": "APT-030",
    "bp": "135/88",
    "temperature": "99.0°F",
    "heartRate": "82bpm",
    "weight": "88kg",
    "createdAt": "2024-10-20T11:20:00Z"
  },
  {
    "_id": "VIT-512",
    "patientId": "PAT-021",
    "recordedBy": "NURSE-007",
    "appointmentId": "APT-031",
    "bp": "120/80",
    "temperature": "98.6°F",
    "heartRate": "74bpm",
    "weight": "68kg",
    "createdAt": "2024-10-21T09:00:00Z"
  },
  {
    "_id": "VIT-513",
    "patientId": "PAT-054",
    "recordedBy": "NURSE-003",
    "appointmentId": "APT-032",
    "bp": "145/95",
    "temperature": "98.7°F",
    "heartRate": "80bpm",
    "weight": "92kg",
    "createdAt": "2024-10-22T13:40:00Z"
  },
  {
    "_id": "VIT-514",
    "patientId": "PAT-011",
    "recordedBy": "NURSE-009",
    "appointmentId": "APT-033",
    "bp": "110/70",
    "temperature": "103.1°F",
    "heartRate": "115bpm",
    "weight": "58kg",
    "createdAt": "2024-10-23T15:15:00Z"
  },
  {
    "_id": "VIT-515",
    "patientId": "PAT-120",
    "recordedBy": "NURSE-004",
    "appointmentId": "APT-034",
    "bp": "128/82",
    "temperature": "98.4°F",
    "heartRate": "76bpm",
    "weight": "74kg",
    "createdAt": "2024-10-24T08:30:00Z"
  },
  {
    "_id": "VIT-516",
    "patientId": "PAT-150",
    "recordedBy": "NURSE-001",
    "appointmentId": "APT-035",
    "bp": "105/65",
    "temperature": "98.6°F",
    "heartRate": "60bpm",
    "weight": "66kg",
    "createdAt": "2024-10-25T10:10:00Z"
  },
  {
    "_id": "VIT-517",
    "patientId": "PAT-038",
    "recordedBy": "NURSE-010",
    "appointmentId": "APT-036",
    "bp": "150/95",
    "temperature": "99.5°F",
    "heartRate": "88bpm",
    "weight": "95kg",
    "createdAt": "2024-10-26T12:00:00Z"
  },
  {
    "_id": "VIT-518",
    "patientId": "PAT-077",
    "recordedBy": "NURSE-006",
    "appointmentId": "APT-037",
    "bp": "118/76",
    "temperature": "98.1°F",
    "heartRate": "72bpm",
    "weight": "70kg",
    "createdAt": "2024-10-27T09:45:00Z"
  },
  {
    "_id": "VIT-519",
    "patientId": "PAT-009",
    "recordedBy": "NURSE-002",
    "appointmentId": "APT-038",
    "bp": "125/85",
    "temperature": "98.9°F",
    "heartRate": "80bpm",
    "weight": "81kg",
    "createdAt": "2024-10-28T14:30:00Z"
  },
  {
    "_id": "VIT-520",
    "patientId": "PAT-210",
    "recordedBy": "NURSE-011",
    "appointmentId": "APT-039",
    "bp": "132/84",
    "temperature": "98.5°F",
    "heartRate": "74bpm",
    "weight": "79kg",
    "createdAt": "2024-10-29T11:00:00Z"
  }
]

export default vitals;