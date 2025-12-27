const medicalRecords =
[
  {
    "_id": "MR-001",
    "patientId": "PAT-001",
    "doctorId": "DOC-001",
    "appointmentId": "APT-001",
    "diagnosis": "High Blood Pressure",
    "symptoms": ["Headache", "Dizziness"],
    "notes": "Reduce salt intake and monitor BP daily",
    "createdAt": "2024-10-05T10:30:00Z"
  },
  {
    "_id": "MR-002",
    "patientId": "PAT-002",
    "doctorId": "DOC-002",
    "appointmentId": "APT-002",
    "diagnosis": "Common Cold",
    "symptoms": ["Sneezing", "Runny Nose"],
    "notes": "Rest and stay hydrated",
    "createdAt": "2024-10-05T11:00:00Z"
  },
  {
    "_id": "MR-003",
    "patientId": "PAT-003",
    "doctorId": "DOC-003",
    "appointmentId": "APT-003",
    "diagnosis": "Migraine",
    "symptoms": ["Severe Headache", "Nausea"],
    "notes": "Avoid screen time and stress",
    "createdAt": "2024-10-05T11:30:00Z"
  },
  {
    "_id": "MR-004",
    "patientId": "PAT-004",
    "doctorId": "DOC-004",
    "appointmentId": "APT-004",
    "diagnosis": "Gastritis",
    "symptoms": ["Stomach Pain", "Acidity"],
    "notes": "Avoid spicy food",
    "createdAt": "2024-10-05T12:00:00Z"
  },
  {
    "_id": "MR-005",
    "patientId": "PAT-005",
    "doctorId": "DOC-005",
    "appointmentId": "APT-005",
    "diagnosis": "Diabetes Type 2",
    "symptoms": ["Frequent Urination", "Fatigue"],
    "notes": "Monitor blood sugar regularly",
    "createdAt": "2024-10-06T09:30:00Z"
  },

  {
    "_id": "MR-006",
    "patientId": "PAT-001",
    "doctorId": "DOC-002",
    "appointmentId": "APT-006",
    "diagnosis": "Vitamin D Deficiency",
    "symptoms": ["Body Pain", "Weakness"],
    "notes": "Sun exposure recommended",
    "createdAt": "2024-10-06T10:00:00Z"
  },
  {
    "_id": "MR-007",
    "patientId": "PAT-002",
    "doctorId": "DOC-003",
    "appointmentId": "APT-007",
    "diagnosis": "Anxiety Disorder",
    "symptoms": ["Restlessness", "Rapid Heartbeat"],
    "notes": "Practice meditation daily",
    "createdAt": "2024-10-06T10:30:00Z"
  },
  {
    "_id": "MR-008",
    "patientId": "PAT-003",
    "doctorId": "DOC-004",
    "appointmentId": "APT-008",
    "diagnosis": "Back Pain",
    "symptoms": ["Lower Back Pain"],
    "notes": "Physiotherapy advised",
    "createdAt": "2024-10-06T11:00:00Z"
  },
  {
    "_id": "MR-009",
    "patientId": "PAT-004",
    "doctorId": "DOC-005",
    "appointmentId": "APT-009",
    "diagnosis": "High Cholesterol",
    "symptoms": ["Chest Discomfort"],
    "notes": "Low-fat diet recommended",
    "createdAt": "2024-10-07T09:30:00Z"
  },
  {
    "_id": "MR-010",
    "patientId": "PAT-005",
    "doctorId": "DOC-001",
    "appointmentId": "APT-010",
    "diagnosis": "Seasonal Allergy",
    "symptoms": ["Itchy Eyes", "Sneezing"],
    "notes": "Avoid allergens",
    "createdAt": "2024-10-07T10:00:00Z"
  },

  {
    "_id": "MR-011",
    "patientId": "PAT-001",
    "doctorId": "DOC-003",
    "appointmentId": "APT-011",
    "diagnosis": "Insomnia",
    "symptoms": ["Sleeplessness"],
    "notes": "Maintain sleep schedule",
    "createdAt": "2024-10-07T10:30:00Z"
  },
  {
    "_id": "MR-012",
    "patientId": "PAT-002",
    "doctorId": "DOC-004",
    "appointmentId": "APT-012",
    "diagnosis": "Dehydration",
    "symptoms": ["Dry Mouth", "Fatigue"],
    "notes": "Increase fluid intake",
    "createdAt": "2024-10-07T11:00:00Z"
  },
  {
    "_id": "MR-013",
    "patientId": "PAT-003",
    "doctorId": "DOC-005",
    "appointmentId": "APT-013",
    "diagnosis": "Thyroid Disorder",
    "symptoms": ["Weight Gain", "Hair Loss"],
    "notes": "Regular thyroid tests required",
    "createdAt": "2024-10-08T09:30:00Z"
  },
  {
    "_id": "MR-014",
    "patientId": "PAT-004",
    "doctorId": "DOC-001",
    "appointmentId": "APT-014",
    "diagnosis": "Acid Reflux",
    "symptoms": ["Heartburn"],
    "notes": "Avoid late-night meals",
    "createdAt": "2024-10-08T10:00:00Z"
  },
  {
    "_id": "MR-015",
    "patientId": "PAT-005",
    "doctorId": "DOC-002",
    "appointmentId": "APT-015",
    "diagnosis": "Iron Deficiency Anemia",
    "symptoms": ["Fatigue", "Pale Skin"],
    "notes": "Iron-rich diet advised",
    "createdAt": "2024-10-08T10:30:00Z"
  },

  {
    "_id": "MR-016",
    "patientId": "PAT-001",
    "doctorId": "DOC-004",
    "appointmentId": "APT-016",
    "diagnosis": "Joint Pain",
    "symptoms": ["Knee Pain"],
    "notes": "Light exercise recommended",
    "createdAt": "2024-10-09T09:30:00Z"
  },
  {
    "_id": "MR-017",
    "patientId": "PAT-002",
    "doctorId": "DOC-005",
    "appointmentId": "APT-017",
    "diagnosis": "Asthma",
    "symptoms": ["Shortness of Breath"],
    "notes": "Avoid dust and smoke",
    "createdAt": "2024-10-09T10:00:00Z"
  },
  {
    "_id": "MR-018",
    "patientId": "PAT-003",
    "doctorId": "DOC-001",
    "appointmentId": "APT-018",
    "diagnosis": "Food Poisoning",
    "symptoms": ["Vomiting", "Diarrhea"],
    "notes": "ORS and rest advised",
    "createdAt": "2024-10-09T10:30:00Z"
  },
  {
    "_id": "MR-019",
    "patientId": "PAT-004",
    "doctorId": "DOC-002",
    "appointmentId": "APT-019",
    "diagnosis": "Eye Strain",
    "symptoms": ["Blurred Vision"],
    "notes": "Reduce screen time",
    "createdAt": "2024-10-09T11:00:00Z"
  },
  {
    "_id": "MR-020",
    "patientId": "PAT-005",
    "doctorId": "DOC-003",
    "appointmentId": "APT-020",
    "diagnosis": "Hypertension Follow-up",
    "symptoms": ["Mild Headache"],
    "notes": "Continue previous medication",
    "createdAt": "2024-10-10T09:30:00Z"
  }
]
export default medicalRecords;
