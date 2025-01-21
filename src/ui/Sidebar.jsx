function Sidebar({ isSidebarOpen, children }) {
  return (
    isSidebarOpen && (
      <div className="fixed left-0 top-[59px] z-40 h-full w-full max-w-3xl border-l bg-stone-200 bg-white px-4 py-6 font-sans shadow-lg">
        {children}
      </div>
    )
  );
}

export default Sidebar;
