import type { User } from "~/lib/types";

type MetricsGridProps = {
  users: User[],
  totalFamilyMembers: number
};

export default function metricsGrid({ users, totalFamilyMembers }: MetricsGridProps) {
  return (
    <div className="flex gap-9 mb-5">
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Total User</div>
        <div className="text-2xl">{users.length}</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Prime User</div>
        <div className="text-2xl text-green-500">{users.filter(u => u.prime).length}</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Non-Prime User</div>
        <div className="text-2xl text-green-800">{users.filter(u => !u.prime).length}</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Total Family members</div>
        <div className="text-2xl text-green-500">0</div>
      </div>
    </div>
  );
}
