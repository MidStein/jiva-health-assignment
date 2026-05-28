import { Search } from "lucide-react";

export function HeaderSearch() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="search"
        placeholder="Search"
        className="h-10 pl-10 border border-gray-400 rounded-lg focus:border-blue-500"
      />
    </div>
  );
}
