import { Calendar, Crown, Edit, Eye, Mail, Phone } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "../ui/button";
import type { User } from "~/lib/types";

interface UserCardProps {
  user: User;
}

// one letter initial for one word name
// for more than one word names, get the first letters of the first and last word
function getInitials(name: string) {
  const firstLetter = name.charAt(0);
  for (let i = name.length - 1; i >= 0; i--) {
    if (name.charAt(i) == " ") {
      return firstLetter.concat(name.charAt(i + 1)).toUpperCase();
    }
  }
}

function createDisplayPhoneNum(phoneNumber: string) {
  // The country code could be 1-3 digits long
  // The subscriber number will be the last 10 digits, from which the -10 comes
  return `+${phoneNumber.slice(0, -10)} (${phoneNumber.slice(-10, -7)}) ${phoneNumber.slice(-7, -4)}-${phoneNumber.slice(-4)}`;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex p-6 bg-white border-1 border-gray-200 rounded-xl mb-4">
      <div className="flex gap-3 flex-[3]">
        <div className="flex gap-4 w-50">
          <div className="bg-blue-500 text-white rounded-full self-center w-12 h-12 flex justify-center items-center">
            {getInitials(user.name)}
          </div>

          <div>
            <div>{user.name}</div>
            <div className="flex gap-1 mb-1">
              <Badge variant="secondary">
                {user.role.charAt(0) + user.role.slice(1).toLowerCase()}
              </Badge>
              <Badge className="bg-green-200 text-green-800">
                {user.status.charAt(0) + user.status.slice(1).toLowerCase()}
              </Badge>
            </div>
            <Badge variant="outline">
              {user.role === "DOCTOR"
                ? "Admin User"
                : user.role === "NURSE"
                  ? "Support Staff"
                  : "Normal User"}
            </Badge>
          </div>
        </div>

        <div className="text-sm w-50">
          <div className="flex gap-1 text-gray-500">
            <Mail className="h-4 w-4" />
            <div className="truncate">
              {user.email ? user.email : "Email unknown"}
            </div>
          </div>
          <div className="flex gap-1 text-gray-500">
            <Phone className="h-4 w-4" />
            <div>
              {user.phoneNumber
                ? createDisplayPhoneNum(user.phoneNumber)
                : "Phone Number unknown"}
            </div>
          </div>
        </div>

        <div className="w-40">
          <div className="flex gap-1 items-center">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div className="text-gray-500">Joined</div>
          </div>

          <div>{user.joinedDate.toString()}</div>

          <div className="text-sm text-gray-500">
            Last: {user.lastActive.toString()}
          </div>
        </div>
      </div>

      <div className="flex-[1] flex justify-center">
        <div>
          <div>Appointments</div>
          <div className="text-blue-500 text-xl">{user.appointmentsCount}</div>
        </div>
      </div>

      <div className="flex gap-2 self-center flex-[2] justify-end">
        <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
          <Crown /> Upgrade to Prime
        </Button>
        <Button variant="outline">
          <Eye /> View
        </Button>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </div>
    </div>
  );
}
