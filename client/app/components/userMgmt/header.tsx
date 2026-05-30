export default function UserManagementHeader() {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <h1 className="text-2xl mb-1">User Management</h1>
        <div className="text-gray-500">
          Manage user accounts and permissions
        </div>
      </div>
      <button
        className="text-white bg-gray-700 pl-3 py-1 pr-4 rounded-xl flex gap-2 items-center"
        type="button"
      >
        <span className="text-xl">+</span>
        <span>Add User</span>
      </button>
    </div>
  );
}
