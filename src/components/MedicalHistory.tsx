import React, { useState } from 'react';
import Input from '../widgets/Input';
import TextArea from '../widgets/TextArea';
import Heading1 from '../widgets/Heading1';
import ErrorMessage from '../widgets/ErrorMessage';

interface MedicalRecord {
    Condition: string;
    DiagnosisDate: string;
    Treatment: string;
    Notes: string;
}

interface MedicalHistoryProps {
    data: MedicalRecord[];
    setter: React.Dispatch<React.SetStateAction<MedicalRecord[]>>;
    Page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;

    submit : () => void ;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ data, setter , Page ,setPage ,submit}) => {
    const [medicalHistory, setMedicalHistory] = useState<MedicalRecord[]>(data || []);
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (index: number, key: keyof MedicalRecord, value: string) => {
        setMedicalHistory((prev) =>
            prev.map((record, idx) =>
                idx === index ? { ...record, [key]: value } : record
            )
        );
    };

    const setMsg = (msg: string) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1500);
    };

    const addRecord = () => {
        setMedicalHistory((prev) => [
            ...prev,
            { Condition: '', DiagnosisDate: '', Treatment: '', Notes: '' },
        ]);
    };

    const removeRecord = (index: number) => {
        setMedicalHistory((prev) => prev.filter((_, idx) => idx !== index));
    };

    const validateAndSubmit = () => {
        for (const record of medicalHistory) {
            if (!record.Condition.trim()) {
                setMsg('Please specify the medical condition for all records.');
                return;
            }
            if (!record.DiagnosisDate.trim()) {
                setMsg('Please enter the diagnosis date for all records.');
                return;
            }
            if (!record.Treatment.trim()) {
                setMsg('Please specify the treatment for all records.');
                return;
            }
        }
        setter(medicalHistory);
        setMsg('Medical history saved successfully!');
        submit();
        
    };

    return (
        <div>
            <Heading1 text='Medical History'/>
            <hr />
            {medicalHistory.map((record, index) => (
                <div key={index} className="p-3 flex flex-col gap-5  mb-4 rounded-md">
                    <div className="w-full flex justify-between">
                        <p className="text-lg font-medium">Record {index + 1}</p>
                       {medicalHistory.length > 1 && <button
                            onClick={() => removeRecord(index)}
                            className="text-red-600 hover:underline"
                        >
                            Remove
                        </button>}
                    </div>
                    <div className="w-full flex flex-wrap gap-2">
                        <TextArea
                            value={record.Condition}
                            setter={(value) => handleInputChange(index, 'Condition', value)}
                            placeholder="Medical Condition"
                        />
                        <TextArea
                            value={record.Treatment}
                            setter={(value) => handleInputChange(index, 'Treatment', value)}
                            placeholder="Treatment"
                        />
                        <TextArea
                            value={record.Notes}
                            setter={(value) => handleInputChange(index, 'Notes', value)}
                            placeholder="Additional Notes"
                        />
                    </div>
                    <div className=' flex items-end justify-end gap-3'>
                        <p className=' pb-1 font-thin hover:underline'>Diagnosis Date</p>
                        <Input
                            type="date"
                            value={record.DiagnosisDate}
                            setter={(value) => handleInputChange(index, 'DiagnosisDate', value)}
                            placeholder="Diagnosis Date"
                        />
                    </div>
                    {index+1 !== medicalHistory.length && <hr />}
                </div>
            ))}
            <button
                onClick={addRecord}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Record
            </button>
            <ErrorMessage message={message}/>
            <div className="w-full flex justify-between">

                <button
                    onClick={()=>setPage(Page-1)}
                    className="px-4 py-2 rounded-md bg-[#57efb2] border active:scale-90 transition-all select-none hover:cursor-pointer"
                    >
                    Previous
                </button>

                <button
                    type="submit"
                    onClick={validateAndSubmit}
                    className="px-4 py-2 rounded-md bg-[#57efb2] border active:scale-75 transition-all select-none hover:cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MedicalHistory;
