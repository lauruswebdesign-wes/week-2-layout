export default function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: (
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      name: "Portfolio",
      icon: (
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18a2.25 2.25 0 0 1 2.25 2.25v4.25a2.25 2.25 0 0 1-2.25 2.25H2.25A2.25 2.25 0 0 1 0 18.75v-4.25a2.25 2.25 0 0 1 2.25-2.25Z" />
        </svg>
      ),
    },
    {
      name: "Design",
      icon: (
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-1.897v-1.476ZM14.47 16.122a3 3 0 0 1 5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 1-8.4-1.897v-1.476M9.53 16.122a3 3 0 0 1 4.94 0M9.53 16.122V12m4.94 4.122V12m0 0a3 3 0 1 0-4.94 0M12 2.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767a1.122 1.122 0 0 0-.428 1.03c.003.047.003.094.003.14 0 .047 0 .094-.003.14a1.122 1.122 0 0 0 .429 1.03l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456a1.125 1.125 0 0 0-1.075.124c-.072.044-.146.086-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281a1.125 1.125 0 0 0-.646-.87c-.074-.041-.147-.083-.22-.127a1.125 1.125 0 0 0-1.074-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767a1.122 1.122 0 0 0 .428-1.03c-.003-.047-.003-.094-.003-.14 0-.047 0-.094.003-.14a1.122 1.122 0 0 0-.429-1.03l-1.002-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.042.146-.084.218-.128c.332-.183.582-.495.646-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-[200px] min-w-[200px] bg-[#010D40] text-white flex flex-col items-center pt-8 gap-y-6">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-x-3 w-full px-6 py-2 cursor-pointer hover:bg-white/10 transition-colors"
        >
          {item.icon}
          <span className="text-sm font-medium">{item.name}</span>
        </div>
      ))}
    </aside>
  );
}
