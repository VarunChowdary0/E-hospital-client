import React, { useState } from 'react';
import Input from '../widgets/Input';
import Heading1 from '../widgets/Heading1';
import TextArea from '../widgets/TextArea';
import ErrorMessage from '../widgets/ErrorMessage';

interface Type{
    t : {
        Name : { firstname: string;
            middelname: string;
            lastname: string;
        },
        Contact : {
            phoneNumber : string,
            email : string
        },
        Address : {
            Street : string,
            City : string,
            State : string,
            PostalCode : string
        },DOB:string,Marital_Status:string
    } 
}
interface currentProps{
    data : Type['t'];
    setter : React.Dispatch<React.SetStateAction<Type['t']>>;
    Page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
}

const Personal_Info: React.FC<currentProps> = (props) => {
    const [Name, setName] = useState<{
        firstname: string;
        middelname: string;
        lastname: string;
    }>({
        firstname: '',
        middelname: '',
        lastname: ''
    });
    const [DOB,setDOB] = useState<string>('');
    const [Marital_Status,setMarital_Status] = useState<string>('');
    const [contact,setContact] = useState<{
        phoneNumber : string,
        email : string
    }>({
        phoneNumber : '',
        email : ''
    });
    const [Address,setAddress] = useState<{
        Street : string,
        City : string,
        State : string,
        PostalCode : string
    }>({
        Street : '',
        City : '',
        State:'',
        PostalCode:''
    });
    const [message,setMessage] = useState<string>('');
    
    
    const Marital_Status_options:string[] = ['Single','Married','Widowed']; 

    const handleInputChange_Name = (key: keyof typeof Name, value: string) => {
        setName((prev) => ({
            ...prev,
            [key]: value.toUpperCase(),
        }));
    };

    const handleInputChange_Contact = (key: keyof typeof contact, value:string) => {
        setContact((prev) => ({
            ...prev,
            [key]:key==='phoneNumber'?value.substring(0,10):value,
        }));  
    } 

    const handleInputChange_Address = (key: keyof typeof Address,value:string) => {
        setAddress((p)=>({
            ...p,
            [key]:key==='PostalCode'?value.substring(0,6):value
        }));
    }

    const setMsg = (m:string) =>{
        setMessage(m)
        setTimeout(()=>{
            setMessage('');
        },1500)
    }
    const next = () => {
        if(Name.firstname.trim()===''){
            setMsg('Please Enter First Name');
            return;
        }
        if(Name.lastname.trim()===''){
            setMsg('Please Enter Last Name');
            return;
        }
        if(DOB.trim()===''){
            setMsg('Please Enter Date of Birth');
            return;
        }
        if(contact.phoneNumber.trim().length!==10){
            setMsg('Please Enter a valied Phone Number');
            return;
        }
        if(!contact.email.includes('@')){
            setMsg('Please Enter a valied Email Address');
            return;
        }
        if(Address.Street.trim()==='' || Address.City.trim()===''||Address.State.trim()===''){
            setMsg('Incomplete Address');
            return;
        }
        if(Address.PostalCode.trim().length !== 6){
            setMsg('Please Enter correct Postal Code!');
            return;
        }
        else{
            props.setter({
                Name:Name,
                Contact : contact,
                Address : Address,
                DOB:DOB,Marital_Status:Marital_Status
            });
            props.setPage(props.Page+1);
        }
    }
    return (
        <div>
            <Heading1 text='Personal Information'/>
            <hr />
            <div className="p-3 flex flex-col gap-5">
                <div className=' flex flex-wrap justify-between mt-2 
                max-sm:mt-0 pr-[30%] max-md:pr-3 gap-1 max-sm:gap-4'>
                    <Input 
                        type="text" 
                        value={Name.firstname} 
                        placeholder='First name'
                        setter={(value) => handleInputChange_Name('firstname',value)} 
                        />
                    <Input 
                        type="text" 
                        value={Name.middelname} 
                        placeholder='Middle name'
                        setter={(value) => handleInputChange_Name('middelname',value)} 
                        />
                    <Input 
                        type="text" 
                        placeholder='Last name'
                        value={Name.lastname} 
                        setter={(value) => handleInputChange_Name('lastname',value)} 
                    />
                </div>
                <div className=' w-full h-fit flex justify-start  flex-wrap 
                            max-sm:mt-0 pr-[30%] max-md:pr-3 gap-5 max-sm:gap-4'>

                    <div className=' flex items-end justify-center gap-3'>
                        <p className=' pb-1 font-thin hover:underline'>Date of Birth</p>
                        <Input 
                            type='date'
                            value={DOB}
                            setter={setDOB}
                            placeholder='Date of Birth'
                        />
                    </div>
                    <div className=' flex items-end justify-center gap-3'>
                        <p className=' pb-1 font-thin hover:underline'>Marital Status</p>
                        <select
                            className=' border px-3 py-2 rounded-md outline-green-400'
                            onChange={(e)=>{
                                setMarital_Status(e.target.value);
                            }} 
                            defaultValue={Marital_Status}>
                                {
                                    Marital_Status_options.map((ele,idx)=>
                                        <option value={ele}>{ele}</option>
                                    )
                                }
                        </select>
                    </div>
                    
                </div>
                <div className=' w-full h-fit flex justify-start  flex-wrap 
                            max-sm:mt-0 pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4'>
                    <Input 
                        type='phone'
                        value={contact.phoneNumber}
                        setter={(value)=> handleInputChange_Contact('phoneNumber',value)}
                        placeholder='Phone Number'
                    />
                    <Input 
                        type='text'
                        value={contact.email}
                        setter={(value)=> handleInputChange_Contact('email',value)}
                        placeholder='Email'
                    />

                </div>
                <div className=' w-full h-fit flex justify-start  flex-wrap 
                            max-sm:mt-0 pr-[30%] max-md:pr-3 gap-2 max-sm:gap-4'>
                    <TextArea 
                        value={Address.Street}
                        setter={(value)=> handleInputChange_Address('Street',value)}
                        placeholder='Street Address'
                    />
                    <Input 
                        type='text'
                        value={Address.City}
                        setter={(value)=> handleInputChange_Address('City',value)}
                        placeholder='City'
                    />
                    <Input 
                        type='text'
                        value={Address.State}
                        setter={(value)=> handleInputChange_Address('State',value)}
                        placeholder='State'
                    />
                    <Input 
                        type='number'
                        value={Address.PostalCode}
                        setter={(value)=> handleInputChange_Address('PostalCode',value)}
                        placeholder='Postal Code'
                    />

                </div>
            </div>
            <ErrorMessage message={message}/>
            <div className=' w-full flex justify-end'>
                <button type='submit' onClick={next} className=' px-4 py-2 rounded-md bg-[#57efb2] border 
                active:scale-75 transition-all select-none hover:cursor-pointer'>Next</button> 
            </div>
        </div>
    );
};

export default Personal_Info;
