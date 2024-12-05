import React from 'react'
import SearchIcon from '../icons/Icons/SearchIcon';

interface currentProps{
    isActive : boolean;
    setActive : React.Dispatch<React.SetStateAction<boolean>>;

    searchQuery:string;
    setSearchQuery : React.Dispatch<React.SetStateAction<string>>;
    onSearch:()=>void;
}

const SearchHeader:React.FC<currentProps> = ({isActive,setActive,searchQuery,setSearchQuery,onSearch}) => {
  return (
    <>
        <div className=' w-[40%]  max-sm:w-[65%] flex relative'>
            <input  onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            onSearch();      
                        }
                    }}
                    onChange={(e)=>{
                        setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                    placeholder="Search"
                    type="text"
                    onFocus={() => setActive(true)} // Set active on focus
                    onBlur={() => setActive(false)}  // Reset active on blur
                    className={`outline-blue-500 w-full border h-[40px] ${
                        isActive ? 'px-[55px]' : 'px-7'
                    } rounded-t-full rounded-b-full rounded-r-[0px] mr-[50px] bg-white`}
            />
            <div onClick={()=>{
                onSearch();
            }} className=' h-[40px] w-[50px] border-2 absolute right-0 flex items-center 
            justify-center rounded-r-full bg-[#eaeaea] hover:cursor-pointer'>
                <SearchIcon height={20} color='#3e3e3e'/>
            </div>
            <div className={` h-[36px] bottom-[2px] w-[50px]
            absolute left-[2px] font-thin rounded-l-full ${isActive ? 'flex':'hidden'}  
            items-center justify-center bg-white `}>
                <SearchIcon height={20 } color='#49494980'/>
            </div>
        </div>
    </>
  )
}

export default SearchHeader