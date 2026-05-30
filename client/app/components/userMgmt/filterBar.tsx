import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function FilterBar() {
  return (
    <div className="flex gap-6 mb-5">
      <div className="relative w-3/5">
        <Search className="absolute h-4 w-4 top-4 left-3 text-gray-500" />
        <input
          className="bg-white border-1 border-gray-300 rounded-lg py-2 text-lg pl-10 w-full"
          type="text"
          placeholder="Search by patient, doctor, or speciality..."
        />
      </div>

      <div className="relative w-1/5">
        <Filter className="absolute h-6 w-6 top-2 left-3 text-gray-400" />
        <Select>
          <SelectTrigger className="bg-white pl-10 py-5 w-full text-lg">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="allStatus">All Status</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="13-17">13-17 years</SelectItem>
              <SelectItem value="18-35">18-35 years</SelectItem>
              <SelectItem value="36-59">36-59 years</SelectItem>
              <SelectItem value="60+">60+ years</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="relative w-1/5">
        <Filter className="absolute h-6 w-6 top-2 left-3 text-gray-400" />
        <Select>
          <SelectTrigger className="bg-white pl-10 py-5 w-full text-lg">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="allStatus">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
