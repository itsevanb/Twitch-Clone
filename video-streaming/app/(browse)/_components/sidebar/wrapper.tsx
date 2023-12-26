interface WrapperProps {
    children: React.ReactNode;
};

export const Wrapper = ({
    children,
}: WrapperProps) => {
    return (
        <aside className="fixed left-0 flex flex-col w-60 h-full bg-[#32494a] border-r border-[#2D2E35] z-50">
            {children}
        </aside>
    );
};