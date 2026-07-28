import {
    ShieldAlert,
    PhoneCall,
    Hospital,
    Shield
  } from "lucide-react";
  
  import type { EmergencyContacts } from "../types/Recommendation";
  
  interface Props {
    contacts: EmergencyContacts;
  }
  
  const EmergencyCard = ({ contacts }: Props) => {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6">
  
        <div className="flex items-center gap-3 mb-6">
  
          <div className="bg-red-100 p-3 rounded-full">
            <ShieldAlert className="text-red-600" />
          </div>
  
          <h2 className="text-2xl font-bold">
            Emergency
          </h2>
  
        </div>
  
        <div className="space-y-6">
  
          <div className="flex justify-between">
  
            <div className="flex items-center gap-3">
  
              <Shield />
  
              Police
  
            </div>
  
            <span className="font-bold">
  
              {contacts.police}
  
            </span>
  
          </div>
  
          <div className="flex justify-between">
  
            <div className="flex items-center gap-3">
  
              <Hospital />
  
              Hospital
  
            </div>
  
            <span className="font-bold">
  
              {contacts.hospital}
  
            </span>
  
          </div>
  
          <div className="flex justify-between">
  
            <div className="flex items-center gap-3">
  
              <PhoneCall />
  
              Tourist Help
  
            </div>
  
            <span className="font-bold">
  
              {contacts.touristHelpline}
  
            </span>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default EmergencyCard;