import React from "react";
import { useParams } from "react-router-dom";
import MedicalHistoryCard from "../../../widgets/Cards/MedicalHistoryCard";
import MedicalReportCard from "../../../widgets/Cards/MedicalReportCard";

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
          downloadLink: "/reports/blood-test-2023-10-02.pdf",
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
          downloadLink: "/reports/xray-report-2023-04-21.pdf",
          associatedDoctor: "Dr. Robert Lee",
          findings: ["No abnormalities detected in spinal column."],
        },
        {
          title: "MRI Scan Report",
          date: "2022-12-12",
          summary: "Mild swelling in the ankle joint.",
          downloadLink: "/reports/mri-scan-2022-12-12.pdf",
          associatedDoctor: "Dr. Alice Carter",
          findings: ["Ligament strain detected.", "No fractures observed."],
        },
      ],
    },
  };
  
const SessionPage: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-9">Medical Session</h1>
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
