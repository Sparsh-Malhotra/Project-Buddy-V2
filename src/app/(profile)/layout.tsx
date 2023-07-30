import Sidebar from "@/components/Profile/Sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
