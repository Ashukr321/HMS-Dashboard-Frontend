const insuranceClaim = [
  {
    "_id": "CLAIM-101",
    "invoiceId": "INV-020",
    "patientId": "PAT-010",
    "providerName": "Star Health",
    "policyNumber": "POL-998877",
    "claimAmount": 900,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/pol-998877-inv020.pdf"],
    "createdAt": "2024-10-14T11:00:00Z"
  },
  {
    "_id": "CLAIM-102",
    "invoiceId": "INV-021",
    "patientId": "PAT-005",
    "providerName": "HDFC Ergo",
    "policyNumber": "HE-445522",
    "claimAmount": 12500,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/he-445522-bill.pdf"],
    "createdAt": "2024-10-15T09:30:00Z"
  },
  {
    "_id": "CLAIM-103",
    "invoiceId": "INV-022",
    "patientId": "PAT-088",
    "providerName": "ICICI Lombard",
    "policyNumber": "IL-778899",
    "claimAmount": 45000,
    "status": "REJECTED",
    "documents": ["https://storage.hms.com/claims/rej-note-01.pdf"],
    "createdAt": "2024-10-15T14:20:00Z"
  },
  {
    "_id": "CLAIM-104",
    "invoiceId": "INV-023",
    "patientId": "PAT-120",
    "providerName": "Star Health",
    "policyNumber": "SH-112233",
    "claimAmount": 3200,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/sh-112233.pdf"],
    "createdAt": "2024-10-16T10:15:00Z"
  },
  {
    "_id": "CLAIM-105",
    "invoiceId": "INV-024",
    "patientId": "PAT-202",
    "providerName": "Religare",
    "policyNumber": "REL-90011",
    "claimAmount": 85000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/surgery-bill.pdf"],
    "createdAt": "2024-10-17T16:00:00Z"
  },
  {
    "_id": "CLAIM-106",
    "invoiceId": "INV-025",
    "patientId": "PAT-015",
    "providerName": "Niva Bupa",
    "policyNumber": "NB-556677",
    "claimAmount": 1500,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/nb-cons.pdf"],
    "createdAt": "2024-10-18T11:45:00Z"
  },
  {
    "_id": "CLAIM-107",
    "invoiceId": "INV-026",
    "patientId": "PAT-062",
    "providerName": "TATA AIG",
    "policyNumber": "TA-884422",
    "claimAmount": 28000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/ta-radiology.pdf"],
    "createdAt": "2024-10-19T13:10:00Z"
  },
  {
    "_id": "CLAIM-108",
    "invoiceId": "INV-027",
    "patientId": "PAT-033",
    "providerName": "Star Health",
    "policyNumber": "SH-776655",
    "claimAmount": 450,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/sh-lab.pdf"],
    "createdAt": "2024-10-20T09:00:00Z"
  },
  {
    "_id": "CLAIM-109",
    "invoiceId": "INV-028",
    "patientId": "PAT-099",
    "providerName": "HDFC Ergo",
    "policyNumber": "HE-331100",
    "claimAmount": 5500,
    "status": "REJECTED",
    "documents": ["https://storage.hms.com/claims/he-rejected.pdf"],
    "createdAt": "2024-10-21T15:30:00Z"
  },
  {
    "_id": "CLAIM-110",
    "invoiceId": "INV-029",
    "patientId": "PAT-210",
    "providerName": "Aditya Birla",
    "policyNumber": "AB-667788",
    "claimAmount": 1200,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/ab-physio.pdf"],
    "createdAt": "2024-10-22T10:20:00Z"
  },
  {
    "_id": "CLAIM-111",
    "invoiceId": "INV-030",
    "patientId": "PAT-045",
    "providerName": "ICICI Lombard",
    "policyNumber": "IL-112244",
    "claimAmount": 67000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/icu-stay.pdf"],
    "createdAt": "2024-10-23T18:00:00Z"
  },
  {
    "_id": "CLAIM-112",
    "invoiceId": "INV-031",
    "patientId": "PAT-011",
    "providerName": "Niva Bupa",
    "policyNumber": "NB-990011",
    "claimAmount": 2100,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/nb-meds.pdf"],
    "createdAt": "2024-10-24T12:40:00Z"
  },
  {
    "_id": "CLAIM-113",
    "invoiceId": "INV-032",
    "patientId": "PAT-054",
    "providerName": "Star Health",
    "policyNumber": "SH-445566",
    "claimAmount": 18000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/sh-ortho.pdf"],
    "createdAt": "2024-10-25T14:15:00Z"
  },
  {
    "_id": "CLAIM-114",
    "invoiceId": "INV-033",
    "patientId": "PAT-038",
    "providerName": "Bajaj Allianz",
    "policyNumber": "BA-223344",
    "claimAmount": 9500,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/ba-maternity.pdf"],
    "createdAt": "2024-10-26T11:00:00Z"
  },
  {
    "_id": "CLAIM-115",
    "invoiceId": "INV-034",
    "patientId": "PAT-007",
    "providerName": "Religare",
    "policyNumber": "REL-11223",
    "claimAmount": 300,
    "status": "REJECTED",
    "documents": ["https://storage.hms.com/claims/rel-small-amt.pdf"],
    "createdAt": "2024-10-27T08:50:00Z"
  },
  {
    "_id": "CLAIM-116",
    "invoiceId": "INV-035",
    "patientId": "PAT-019",
    "providerName": "HDFC Ergo",
    "policyNumber": "HE-556644",
    "claimAmount": 110000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/cardio-surgery.pdf"],
    "createdAt": "2024-10-28T17:30:00Z"
  },
  {
    "_id": "CLAIM-117",
    "invoiceId": "INV-036",
    "patientId": "PAT-077",
    "providerName": "TATA AIG",
    "policyNumber": "TA-112288",
    "claimAmount": 4200,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/ta-ent.pdf"],
    "createdAt": "2024-10-29T10:45:00Z"
  },
  {
    "_id": "CLAIM-118",
    "invoiceId": "INV-037",
    "patientId": "PAT-150",
    "providerName": "Aditya Birla",
    "policyNumber": "AB-998811",
    "claimAmount": 15000,
    "status": "PENDING",
    "documents": ["https://storage.hms.com/claims/ab-oncology.pdf"],
    "createdAt": "2024-10-30T13:00:00Z"
  },
  {
    "_id": "CLAIM-119",
    "invoiceId": "INV-038",
    "patientId": "PAT-009",
    "providerName": "Niva Bupa",
    "policyNumber": "NB-334455",
    "claimAmount": 750,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/nb-dental.pdf"],
    "createdAt": "2024-10-31T09:15:00Z"
  },
  {
    "_id": "CLAIM-120",
    "invoiceId": "INV-039",
    "patientId": "PAT-105",
    "providerName": "ICICI Lombard",
    "policyNumber": "IL-665544",
    "claimAmount": 25000,
    "status": "APPROVED",
    "documents": ["https://storage.hms.com/claims/il-pediatrics.pdf"],
    "createdAt": "2024-11-01T11:50:00Z"
  }
]

export default insuranceClaim;
