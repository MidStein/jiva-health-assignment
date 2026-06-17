import { Bell, Moon } from "lucide-react";

import { Button } from "~/components/ui/button";

export function HeaderButtonGroup() {
  return (
    <div className="flex gap-4 items-center">
      <Button variant="outline">
        <Moon />
      </Button>
      <Button variant="outline" className="relative">
        <Bell />
        <div className="absolute rounded rounded-full bg-red-600 text-white text-sm w-6 h-6 bottom-4 left-4 flex items-center justify-center">
          1
        </div>
      </Button>
      <Button variant="outline" className="px-1 py-5">
        <div className="rounded-full text-white bg-green-800 p-1.5 text-sm">
          AD
        </div>
      </Button>
    </div>
  );
}
