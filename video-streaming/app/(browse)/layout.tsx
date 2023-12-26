import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const BrowseLaout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
        <Navbar />
        <div className="flex h-full pt-20">
            <Sidebar />
          {children}
        </div>
        </>
   );
};

export default BrowseLaout;