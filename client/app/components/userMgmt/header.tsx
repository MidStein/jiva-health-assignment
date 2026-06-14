import { useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import AddUserForm from "./addUserForm";

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

      <Dialog open={showForm} onOpenChange={setShowForm} >
          <DialogTrigger asChild>
            <button
              className="text-white bg-gray-700 pl-3 py-1 pr-4 rounded-xl flex gap-2 items-center"
              type="button"
            >
              <span className="text-xl">+</span>
              <span>Add User</span>
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg p-6">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user account with role and permissions
              </DialogDescription>
            </DialogHeader>

            <AddUserForm closeForm={() => { setShowForm(false) }}/>

            <DialogFooter className="bg-white border-none pt-0">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" form="addUserForm">Add User</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>
  );
}
