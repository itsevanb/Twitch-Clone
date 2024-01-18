import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

import { Suspense } from "react";

const BrowseLaout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
        <Navbar />
        <div className="flex h-full pt-20">
            <Suspense fallback={<SidebarSkeleton />}>
              <Sidebar />
            </Suspense>
            <Container>
               {children}
          </Container>
        </div>
        </>
   );
};

export default BrowseLaout;