"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LeftNav = ({ onItemClick }) => {
  const location = usePathname();
  const splited = location.split("/");
  
  const allpolicies = [
    'Terms-&-Conditions',
    'Privacy-Policy',
    'Refund-Policy',
    'Complaint-Policy',
    'Appeals-Policy',
    'Malpractice-Policy',
    'Course-Content-Review-Policy',
    'Equal-Opportunity-Charter-Policy',
    
  ];
  const [isSelected, setSelect] = useState('');

  
  const handleItemClick = (item) => {
    // onItemClick(item);
    const select = item;
    
    // setAiSubTitle(!aiSubTitle);
    setSelect(select.e);    
  };

  return (
    <div className="lg:pl-24"> 
      <div className="h-screen py-6 pl-4 bg-slate-50">
        
        {allpolicies.map((e)=>(
        <div className="mb-2">
          <div key={e} className={splited[2] == e? "text-[#283357] text-lg font-bold cursor-pointer flex items-center bg-slate-200 rounded-l-full":"text-lg font-bold flex items-center hover:bg-slate-100"}>
            <Link href={`/policies/${e.trim().replace(/\s+/g, "-")}`}>
              <p
                // onClick={() => handleItemClick({e})}
                className="py-2 pl-4"
              >
                {e.replaceAll("-", " ")}
              </p>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};
export default LeftNav;
