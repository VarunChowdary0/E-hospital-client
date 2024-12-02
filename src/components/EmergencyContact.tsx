import React, { useState } from 'react';
import Input from '../widgets/Input';
import Heading1 from '../widgets/Heading1';
import ErrorMessage from '../widgets/ErrorMessage';

interface EmergencyContactType {
    t: {
        EmergencyContact: {
            Name: string;
            Relationship: string;
            PhoneNumber: string;
            AlternatePhoneNumber: string;
        }[];
    };
}

interface EmergencyContactProps {
    data: EmergencyContactType['t']['EmergencyContact'];
    setter: React.Dispatch<React.SetStateAction<EmergencyContactType['t']['EmergencyContact']>>;
    Page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
}

const EmergencyContact: React.FC<EmergencyContactProps> = (props) => {
    const [contacts, setContacts] = useState(props.data);
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (
        index: number,
        key: keyof EmergencyContactType['t']['EmergencyContact'][0],
        value: string
    ) => {
        const updatedContacts = [...contacts];
        updatedContacts[index][key] =
            key === 'PhoneNumber' || key === 'AlternatePhoneNumber'
                ? value.substring(0, 10)
                : value;
        setContacts(updatedContacts);
    };

    const addContact = () => {
        setContacts((prev) => [
            ...prev,
            {
                Name: '',
                Relationship: '',
                PhoneNumber: '',
                AlternatePhoneNumber: '',
            },
        ]);
    };

    const removeContact = (index: number) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    const setMsg = (msg: string) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1500);
    };

    const validateAndProceed = () => {
        for (const contact of contacts) {
            if (contact.Name.trim() === '') {
                setMsg('Please enter the contact name for all entries.');
                return;
            }
            if (contact.Relationship.trim() === '') {
                setMsg('Please specify the relationship for all entries.');
                return;
            }
            if (contact.PhoneNumber.trim().length !== 10) {
                setMsg('Please enter a valid 10-digit phone number for all entries.');
                return;
            }
            if (contact.AlternatePhoneNumber.trim().length !== 10) {
                setMsg('Please enter a valid 10-digit alternate phone number for all entries.');
                return;
            }
        }
        props.setter(contacts);
        props.setPage(props.Page+1);

    };

    return (
        <div>
            <Heading1 text='Emergency Contact Details'/>
            <hr />
            {contacts.map((contact, index) => (
                <div key={index} className="p-3 flex flex-col mt-5 gap-5  border-gray-300 pb-3">
                    <div className="w-full h-fit flex justify-start flex-wrap pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4">
                        <Input
                            type="text"
                            value={contact.Name}
                            placeholder={`Contact Name ${index + 1}`}
                            setter={(value) => handleInputChange(index, 'Name', value)}
                        />
                        <Input
                            type="text"
                            value={contact.Relationship}
                            placeholder="Relationship"
                            setter={(value) => handleInputChange(index, 'Relationship', value)}
                        />
                    </div>
                    <div className="w-full h-fit flex justify-start flex-wrap pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4">
                        <Input
                            type="phone"
                            value={contact.PhoneNumber}
                            placeholder="Phone Number"
                            setter={(value) => handleInputChange(index, 'PhoneNumber', value)}
                        />
                        <Input
                            type="phone"
                            value={contact.AlternatePhoneNumber}
                            placeholder="Alternate Phone Number"
                            setter={(value) => handleInputChange(index, 'AlternatePhoneNumber', value)}
                        />
                    </div>
                    {contacts.length > 1 && (
                        <>
                        <button
                                type="button"
                                onClick={() => removeContact(index)}
                                className="text-red-500 text-sm underline self-end"
                            >
                                Remove Contact
                        </button>
                        {index+1 !== contacts.length && <hr />}
                        </>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={addContact}
                className="px-4 py-2 rounded-md bg-blue-500 text-white active:scale-95 transition-all"
            >
                Add Another Contact
            </button>
            <ErrorMessage message={message}/>
            <div className="w-full flex justify-between ">
                <button
                        onClick={()=>props.setPage(props.Page-1)}
                        className="px-4 py-2 rounded-md bg-[#57efb2] border active:scale-90 transition-all select-none hover:cursor-pointer"
                    >
                        Previous
                    </button>
                <button
                    type="submit"
                    onClick={validateAndProceed}
                    className="px-4 py-2 rounded-md bg-[#57efb2] border active:scale-75 transition-all"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default EmergencyContact;
