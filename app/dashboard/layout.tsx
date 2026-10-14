/** Admin pages keep the soft network backdrop of the easyWebBuilder brand. */
export default function ConsoleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#eef6f6] bg-[url('/bg.webp')] bg-cover bg-top bg-no-repeat text-ink">
      {children}
    </div>
  );
}
