import { useState } from "react";

import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import AddUserDialogContent from "./addUserDialogContent";

export default function UserManagementHeader() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <h1 className="text-2xl mb-1">User Management</h1>
        <div className="text-gray-500">
          Manage user accounts and permissions
        </div>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogTrigger asChild>
          <button
            className="text-white bg-gray-700 pl-3 py-1 pr-4 rounded-xl flex gap-2 items-center"
            type="button"
          >
            <span className="text-xl">+</span>
            <span>Add User</span>
          </button>
        </DialogTrigger>

        <AddUserDialogContent
          closeForm={() => {
            setShowForm(false);
          }}
        />
      </Dialog>
    </div>
  );
}
