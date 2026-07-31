import {
  ShieldAlert,
  PhoneCall,
  Hospital,
  Shield,
} from "lucide-react";

import type { EmergencyContacts } from "../types/Recommendation";

interface Props {
  contacts: EmergencyContacts;
}

const EmergencyCard = ({ contacts }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <ShieldAlert className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">Emergency</h2>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Police */}
        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4">
          <Shield className="text-blue-600 mt-1 shrink-0" size={22} />

          <div className="min-w-0">
            <h3 className="font-semibold text-slate-800">Police</h3>
            <p className="text-slate-600 break-words">
              {contacts.police}
            </p>
          </div>
        </div>

        {/* Hospital */}
        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4">
          <Hospital className="text-blue-500 mt-1 shrink-0" size={22} />

          <div className="min-w-0">
            <h3 className="font-semibold text-slate-800">
              Hospital
            </h3>
            <p className="text-slate-600 break-words">
              {contacts.hospital}
            </p>
          </div>
        </div>

        {/* Tourist Helpline */}
        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4">
          <PhoneCall className="text-blue-600 mt-1 shrink-0" size={22} />

          <div className="min-w-0">
            <h3 className="font-semibold text-slate-800">
              Tourist Helpline
            </h3>
            <p className="text-slate-600 break-words">
              {contacts.touristHelpline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;