import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DocsSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-topbar px-6 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
             {/* Header content like search could go here */}
             <h3 className="font-bold font-display text-xl tracking-wide font-normal">Documentation</h3>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-[#fafafa]">
          {children}
        </main>
      </div>
    </div>
  )
}

