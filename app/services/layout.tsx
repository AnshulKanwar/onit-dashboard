"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideNav from "@/components/ui/services/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 pt-8">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel defaultSize={25} minSize={15} maxSize={30}>
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
