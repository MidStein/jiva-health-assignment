export default function metricsGrid() {
  return (
    <div className="flex gap-9 mb-5">
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Total User</div>
        <div className="text-2xl">6</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Prime User</div>
        <div className="text-2xl text-green-500">5</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Non-Prime User</div>
        <div className="text-2xl text-green-800">10</div>
      </div>
      <div className="bg-white rounded-xl border-1 border-gray-300 p-3 pb-5 flex-1">
        <div className="text-gray-500 mb-2">Total Family members</div>
        <div className="text-2xl text-green-500">49</div>
      </div>
    </div>
  );
}
