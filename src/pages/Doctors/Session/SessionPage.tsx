import React from "react";
import { useParams } from "react-router-dom";
import MedicalHistoryCard from "../../../widgets/Cards/MedicalHistoryCard";
import MedicalReportCard from "../../../widgets/Cards/MedicalReportCard";

interface currentProps{
  isSession : Boolean
}
type data = {
    name: string;
    age: number;
    gender: "Male" | "Female" | "Other"; 
    contact: string;
    address: string;
    insurance: {
        provider: string,
        policyNumber: string,
        expirationDate: string,
    };
    emergencyContact: {
        name: string,
        relationship: string,
        contact: string,
    },
    allergies: string[],
    chronicConditions: string[],
    medicalHistory: {
      date: string; 
      reason: string;
      doctor: string;
      notes: string;
      treatmentPlan : string;
    }[];
    reports: {
      title: string;
      date: string; 
      summary: string;
      downloadLink: string; 
      associatedDoctor: string; 
      findings: string[]; 
    }[];
  };
type PatientData = {
    [id: string]: data
  };
  
// Example fake data for demonstration
const patientData: PatientData = {
    "0233232-c3342ed23-23d32d23-d23d2": {
      name: "Jake Paul",
      age: 32,
      gender: "Male",
      contact: "987-654-3210",
      address: "123 Beverly Hills, Los Angeles, CA",
      insurance: {
        provider: "HealthPlus Insurance Co.",
        policyNumber: "HP-98765432",
        expirationDate: "2025-12-31",
      },
      emergencyContact: {
        name: "Logan Paul",
        relationship: "Brother",
        contact: "987-654-9870",
      },
      allergies: ["Penicillin", "Peanuts"],
      chronicConditions: ["Hypertension"],
      medicalHistory: [
        {
          date: "2023-10-01",
          reason: "Routine Checkup",
          doctor: "Dr. John Smith",
          notes: "Patient in good health. Recommended exercise for fitness.",
          treatmentPlan: "Maintain regular check-ups every 6 months.",
        },
        {
          date: "2023-07-15",
          reason: "Fever and Cough",
          doctor: "Dr. Emily Johnson",
          notes: "Prescribed antibiotics for upper respiratory infection.",
          treatmentPlan: "Complete 7-day antibiotic course and rest.",
        },
        {
          date: "2023-04-20",
          reason: "Back Pain",
          doctor: "Dr. Robert Lee",
          notes: "Prescribed physical therapy for 4 weeks.",
          treatmentPlan: "Follow up with orthopedist if pain persists.",
        },
        {
          date: "2022-12-10",
          reason: "Sprained Ankle",
          doctor: "Dr. Alice Carter",
          notes: "Prescribed pain relievers and advised physiotherapy.",
          treatmentPlan: "Avoid strenuous activity for 2 weeks.",
        },
      ],
      reports: [
        {
          title: "Blood Test Report",
          date: "2023-10-02",
          summary: "All parameters within normal range.",
          downloadLink: "/blood-test-2023-10-02.pdf",
          associatedDoctor: "Dr. John Smith",
          findings: [
            "Hemoglobin: Normal",
            "Cholesterol: Normal",
            "Blood Sugar: Normal",
          ],
        },
        {
          title: "X-Ray Report",
          date: "2023-04-21",
          summary: "No fractures or abnormalities detected.",
          downloadLink: "/xray-report-2023-04-21.pdf",
          associatedDoctor: "Dr. Robert Lee",
          findings: ["No abnormalities detected in spinal column."],
        },
        {
          title: "MRI Scan Report",
          date: "2022-12-12",
          summary: "Mild swelling in the ankle joint.",
          downloadLink: "/mri-scan-2022-12-12.pdf",
          associatedDoctor: "Dr. Alice Carter",
          findings: ["Ligament strain detected.", "No fractures observed."],
        },
      ],
    },"qions-23ed-ds23d-q23dqw-23dqw": {
    name: "John Doe",
    age: 45,
    gender: "Male",
    contact: "123-456-7890",
    address: "456 Elm Street, Springfield, IL",
    insurance: {
      provider: "SecureHealth Insurance Co.",
      policyNumber: "SH-12345678",
      expirationDate: "2026-01-15",
    },
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Spouse",
      contact: "987-654-3210",
    },
    allergies: ["Dust", "Shellfish"],
    chronicConditions: ["Diabetes", "High Cholesterol"],
    medicalHistory: [
      {
        date: "2024-06-10",
        reason: "Routine Blood Test",
        doctor: "Dr. Maria Gonzalez",
        notes: "Patient's blood sugar levels are controlled.",
        treatmentPlan: "Continue with current medication and diet plan.",
      },
      {
        date: "2024-04-15",
        reason: "Chest Pain",
        doctor: "Dr. Anthony Smith",
        notes: "EKG was normal. Prescribed antacids for acid reflux.",
        treatmentPlan: "Follow up in 3 months if symptoms persist.",
      },
    ],
    reports: [
      {
        title: "Blood Sugar Report",
        date: "2024-06-11",
        summary: "Fasting glucose levels slightly elevated.",
        downloadLink: "/blood-sugar-2024-06-11.pdf",
        associatedDoctor: "Dr. Maria Gonzalez",
        findings: ["Fasting glucose: 105 mg/dL", "HbA1c: 6.8%"],
      },
    ],
  },
  "12esqx-2223d2-2wsd3wd-3ww3w3s": {
    name: "Jane Smith",
    age: 37,
    gender: "Female",
    contact: "234-567-8901",
    address: "789 Oak Avenue, Seattle, WA",
    insurance: {
      provider: "LifeSecure Insurance",
      policyNumber: "LS-98765432",
      expirationDate: "2025-09-30",
    },
    emergencyContact: {
      name: "John Smith",
      relationship: "Husband",
      contact: "876-543-2109",
    },
    allergies: ["Pollen"],
    chronicConditions: ["Asthma"],
    medicalHistory: [
      {
        date: "2024-07-20",
        reason: "Asthma Check-up",
        doctor: "Dr. Susan Lee",
        notes: "Asthma well-managed with inhaler.",
        treatmentPlan: "Continue with prescribed inhaler.",
      },
      {
        date: "2024-03-12",
        reason: "Seasonal Allergies",
        doctor: "Dr. Henry Green",
        notes: "Prescribed antihistamines for symptom relief.",
        treatmentPlan: "Take antihistamines as needed during allergy season.",
      },
    ],
    reports: [
      {
        title: "Lung Function Test",
        date: "2024-07-21",
        summary: "Lung function normal for asthmatic patient.",
        downloadLink: "/lung-function-2024-07-21.pdf",
        associatedDoctor: "Dr. Susan Lee",
        findings: ["FEV1: 80% of predicted", "Normal lung capacity."],
      },
    ],
  }
  };
  
const SessionPage: React.FC<currentProps> = ({isSession}) => {
  const { id } = useParams<{ id: string }>();
  const patient:data = patientData[id || '0'] ; 

  if (!patient) {
    return (
      <div>
        <h1>Session Page</h1>
        <p>No data found for the given session ID.</p>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-white overflow-y-auto max-h-screen
     p-6 max-w-screen overflow-x-hidden pb-[100px]">
      {
        isSession ? 
        <h1 className="text-3xl font-bold mb-9">Medical Session</h1>
        :
        <h1 className="text-3xl font-bold mb-9">{patient.name}'s Medical information</h1>
      }
      {/* Patient Details */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <div className="mb-2">
              <strong>Name:</strong> {patient.name}
            </div>
            <div className="mb-2">
              <strong>Age:</strong> {patient.age}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {patient.gender}
            </div>
            <div className="mb-2">
              <strong>Contact:</strong> {patient.contact}
            </div>
            <div className="mb-2">
              <strong>Address:</strong> {patient.address}
            </div>
          </div>

          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Insurance Information</h3>
            <div className="mb-2">
              <strong>Provider:</strong> {patient.insurance.provider}
            </div>
            <div className="mb-2">
              <strong>Policy Number:</strong> {patient.insurance.policyNumber}
            </div>
            <div className="mb-2">
              <strong>Expiration Date:</strong> {patient.insurance.expirationDate}
            </div>
          </div>
        </div>
      </section>


       <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Medical History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    patient.medicalHistory.map((ele,idx)=>
                        <MedicalHistoryCard history={ele}/>
                    )
                }
            </div>
        </section>


      {/* Reports */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {patient.reports.map((report, index) => (
            <MedicalReportCard report={report}/>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SessionPage;
