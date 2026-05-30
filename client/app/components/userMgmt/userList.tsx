import { Calendar, Crown, Edit, Eye, Mail, Phone } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "../ui/button";

export default function UserList() {
  return (
    <div className="flex justify-between p-6 bg-white border-1 border-gray-200 rounded-xl">
      <div className="flex">
        <div className="bg-blue-500 p-3 text-white rounded-full mr-3 self-center">EL</div>
        
        <div className="mr-4">
          <div>Eva Lopez</div>
          <div className="flex gap-1 mb-1">
            <Badge variant="secondary">Patient</Badge>
            <Badge className="bg-green-200 text-green-800">Active</Badge>
          </div>
          <Badge variant="outline">Normal User</Badge>
        </div>
        
        <div className="mr-5 text-sm">
          <div className="flex gap-1 text-gray-500">
            <Mail className="h-4 w-4"/>
            <div>eva.lopez@email.com</div>
          </div>
          <div className="flex gap-1 text-gray-500">
            <Phone className="h-4 w-4" />
            <div>+1 (555) 555-5555</div>
          </div>
        </div>
        
        <div>
          <div className="flex gap-1 items-center">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div className="text-gray-500">Joined</div>
          </div>
        
          <div>2025-07-18</div>
        
          <div className="text-sm text-gray-500">Last: 2026-03-01</div>
        </div>
      </div>

      <div>
        <div>Appointments</div>
        <div className="text-blue-500 text-xl">8</div>
      </div>

      <div className="flex gap-1 self-center">
        <Button className="bg-orange-500 text-white"><Crown /> Upgrade to Prime</Button>
        <Button variant="outline"><Eye /> View</Button>
        <Button variant="outline"><Edit /> Edit</Button>
      </div>
    </div>
  );
}
