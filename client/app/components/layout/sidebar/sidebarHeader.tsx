type Props = {
  sidebarOpen: boolean;
};

export function SidebarHeader({ sidebarOpen }: Props) {
  return (
    <div className="border-b-1 border-gray-300 h-16 flex items-center">
      <img
        className="mx-auto"
        src="/logo.png"
        alt="Logo"
        height={sidebarOpen ? "75": "50"}
        width={sidebarOpen ? "75": "50"}
      />
    </div>
  );
}
