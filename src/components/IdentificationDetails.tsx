import React, { useState } from 'react';
import Input from '../widgets/Input';
import Heading1 from '../widgets/Heading1';
import ErrorMessage from '../widgets/ErrorMessage';

interface IdentificationType {
    t: {
        Identification: {
            IDType: string;
            IDNumber: string;
            IssuedBy: string;
            IssuedDate: string;
            ExpiryDate: string;
        }[];
    };
}

interface IdentificationProps {
    data: IdentificationType['t']['Identification'];
    setter: React.Dispatch<React.SetStateAction<IdentificationType['t']['Identification']>>;
    Page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
}

const IdentificationDetails: React.FC<IdentificationProps> = (props) => {
    const [identifications, setIdentifications] = useState<
        {
            IDType: string;
            IDNumber: string;
            IssuedBy: string;
            IssuedDate: string;
            ExpiryDate: string;
        }[]
    >(props.data || []);

    const [message, setMessage] = useState<string>('');

    const IDTypeOptions = ['Passport', 'Driver’s License', 'Aadhar Card', 'Voter ID', 'PAN Card'];

    const handleInputChange = (
        index: number,
        key: keyof IdentificationType['t']['Identification'][0],
        value: string
    ) => {
        setIdentifications((prev) =>
            prev.map((item, idx) =>
                idx === index ? { ...item, [key]: value } : item
            )
        );
    };

    const setMsg = (msg: string) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1500);
    };

    const addIdentification = () => {
        setIdentifications((prev) => [
            ...prev,
            { IDType: '', IDNumber: '', IssuedBy: '', IssuedDate: '', ExpiryDate: '' },
        ]);
    };

    const removeIdentification = (index: number) => {
        setIdentifications((prev) => prev.filter((_, idx) => idx !== index));
    };

    const validateAndSubmit = () => {
        for (const id of identifications) {
            if (!id.IDType.trim()) {
                setMsg('Please select an ID Type for all entries.');
                return;
            }
            if (!id.IDNumber.trim()) {
                setMsg('Please enter the ID Number for all entries.');
                return;
            }
            if (!id.IssuedBy.trim()) {
                setMsg('Please specify the issuing authority for all entries.');
                return;
            }
            if (!id.IssuedDate.trim()) {
                setMsg('Please select the issued date for all entries.');
                return;
            }
            if (!id.ExpiryDate.trim()) {
                setMsg('Please select the expiry date for all entries.');
                return;
            }
        }
        props.setter(identifications);
        props.setPage(props.Page+1);

    };

    return (
        <div>
            <Heading1 text='Identification Details'/>
            <hr className=' mb-4' />
            {identifications.map((identification, index) => (
                <div key={index} className="p-3 flex flex-col gap-5 border mb-4 rounded-md">
                    <div className="w-full flex justify-between">
                        <p className="text-lg font-medium">ID {index + 1}</p>
                       { identifications.length >1 && <button
                            onClick={() => removeIdentification(index)}
                            className="text-red-600 hover:underline"
                        >
                            Remove
                        </button>}
                    </div>
                    <div className="w-full flex justify-start flex-wrap pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4">
                        <select
                            className="border px-3 py-2 rounded-md outline-green-400"
                            onChange={(e) =>
                                handleInputChange(index, 'IDType', e.target.value)
                            }
                            value={identification.IDType}
                        >
                            <option value="" disabled>
                                Select ID Type
                            </option>
                            {IDTypeOptions.map((type, idx) => (
                                <option key={idx} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        <Input
                            type="text"
                            value={identification.IDNumber}
                            setter={(value) => handleInputChange(index, 'IDNumber', value)}
                            placeholder="ID Number"
                        />
                    </div>
                    <div className="w-full flex justify-start flex-wrap pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4">
                        <Input
                            type="text"
                            value={identification.IssuedBy}
                            setter={(value) => handleInputChange(index, 'IssuedBy', value)}
                            placeholder="Issued By (Authority)"
                        />
                    </div>
                    <div className="w-full flex justify-start gap-5 flex-wrap pr-[30%] max-md:pr-3  max-sm:gap-4">
                        <div className="flex items-end justify-center gap-2">
                            <p className="pb-1">Issued Date</p>
                            <Input
                                type="date"
                                value={identification.IssuedDate}
                                setter={(value) => handleInputChange(index, 'IssuedDate', value)}
                                placeholder="Issued Date"
                            />
                        </div>
                        <div className="flex items-end justify-center gap-2">
                            <p className="pb-1">Expiry Date</p>
                            <Input
                                type="date"
                                value={identification.ExpiryDate}
                                setter={(value) => handleInputChange(index, 'ExpiryDate', value)}
                                placeholder="Expiry Date"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <button
                onClick={addIdentification}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Identification
            </button>
            <ErrorMessage message={message}/>
            <div className="w-full flex justify-between">
                <button
                        onClick={()=>props.setPage(props.Page-1)}
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

export default IdentificationDetails;
