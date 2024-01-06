import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import RequestsDrawer from "./requests-drawer";

export default function Nav() {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center px-12 h-20">
        <div className="flex items-center gap-20">
          <Link href="/" className="text-3xl font-semibold text-primary">
            OniT
          </Link>
          <div className="flex gap-5">
            <Link
              href="/service"
              className="text-muted-foreground hover:text-primary"
            >
              Services
            </Link>
            <RequestsDrawer />
          </div>
        </div>
        <div>
          <CircleUserRound className="text-muted-foreground hover:text-primary" />
        </div>
      </div>
    </header>
  );
}
