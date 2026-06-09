import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  genderAgeFilter: string;
  setGenderAgeFilter: (genderAgeFilter: string) => void;
  activeStatus: string;
  setActiveStatus: (activeStatus: string) => void;
}

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  genderAgeFilter,
  setGenderAgeFilter,
  activeStatus,
  setActiveStatus,
}: FilterBarProps) {
  return (
    <div className="flex gap-6 mb-5">
      <div className="relative w-3/5">
        <Search className="absolute h-4 w-4 top-3 left-3 text-gray-500" />
        <input
          className="bg-white border-1 border-gray-300 rounded-lg text-lg pl-10 w-full h-10.5"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Search by name, email or phone..."
          // stop chrome's autofill from inserting email here when inserting name in add user dialog form
          autoComplete="new-password"
        />
      </div>

      <div className="relative w-1/5">
        <Filter className="absolute h-6 w-6 top-2 left-3 text-gray-400" />
        <Select value={genderAgeFilter} onValueChange={setGenderAgeFilter}>
          <SelectTrigger className="bg-white pl-10 py-5 w-full text-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="allStatus">All Status</SelectItem>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
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
        <Select value={activeStatus} onValueChange={setActiveStatus}>
          <SelectTrigger className="bg-white pl-10 py-5 w-full text-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="allStatus">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="INACTIVE">Inactive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
