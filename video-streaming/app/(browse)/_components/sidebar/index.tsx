import { Recommended, RecommendedSkeleton } from './recommended';
import { Toggle } from './toggle';
import { Wrapper } from './wrapper';

import { getRecommended } from '@/lib/recommended-service';

export const Sidebar = async () => {
    const recommended = await getRecommended();
    // fetch followed users
    // fetch recommended users
    // server component with access to db
    
    return (
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended} />
            </div>
        </Wrapper>
    );
};

export const SidebarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <RecommendedSkeleton />
        </aside>
    );
};