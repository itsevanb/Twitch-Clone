import { Recommended } from './recommended';
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