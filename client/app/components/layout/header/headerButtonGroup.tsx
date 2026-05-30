import { Bell, Moon } from "lucide-react";

export function HeaderButtonGroup() {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded rounded-lg border-1 border-gray-300 p-2 flex items-center">
        <Moon className="h-5 w-5" />
      </div>
      <div className="rounded rounded-lg border-1 border-gray-300 p-2 flex items-center relative">
        <Bell className="h-5 w-5" />
        <div className="absolute rounded rounded-full bg-red-600 text-white text-sm w-6 h-6 bottom-5 left-4 flex items-center justify-center">
          1
        </div>
      </div>
      <div className="rounded rounded-lg border-1 border-gray-300 p-1">
        <div className="rounded-full text-white bg-green-800 p-1 text-sm">
          AD
        </div>
      </div>
    </div>
  );
}
