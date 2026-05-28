import { Bell, Moon } from "lucide-react";

export function HeaderButtonGroup() {
  return (
    <div className="flex gap-4">
      <div className="rounded rounded-lg border-1 border-gray-300 px-3 flex items-center">
        <Moon className="h-4 w-4" />
      </div>
      <div className="rounded rounded-lg border-1 border-gray-300 px-3 flex items-center relative">
        <Bell className="h-4 w-4" />
        <div
          className="absolute rounded rounded-full bg-red-600 text-white text-xs w-5 h-5 bottom-5 left-5 flex items-center justify-center"
        >
          1
        </div>
      </div>
      <div className="rounded rounded-lg border-1 border-gray-300 p-2">
        <div className="rounded-full text-white bg-green-800 p-2 text-xs">AD</div>
      </div>
    </div>
  );
}
