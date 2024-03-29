"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideNav from "@/components/services/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 h-[calc(100vh-5rem)]">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
          <SideNav />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} className="p-8">
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
