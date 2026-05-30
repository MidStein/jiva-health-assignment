type Props = {
  sidebarOpen: boolean;
};

export function SidebarFooter({ sidebarOpen }: Props) {
  return (
    <div className="p-4 border-t-1 border-gray-300 mt-auto">
      <div className="flex gap-2 items-center">
        <div className="rounded-full text-white bg-green-800 p-3">AD</div>
        { sidebarOpen &&<div>
          <div>Admin User</div>
          <div className="text-gray-400">Admin@healthcare.com</div>
        </div> }
      </div>
    </div>
  );
}
