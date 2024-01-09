"use client"

import { UseViewerToken } from "@/hooks/use-viewer-token";
import { User, Stream } from "@prisma/client";

interface StreamPlayerProps {
    user: User & { stream : Stream | null };
    stream: Stream;
    isFollowing: boolean;
}

export const StreamPlayer = ({
    user,
    stream,
    isFollowing,
}: StreamPlayerProps) => {
    // information about the current user watching the stream
    const {
        token,
        name,
        identity,
    } = UseViewerToken(user.id);

    if (!token || !name || !identity) {
        return (
            <div>
                Cannot watch the stream at this time.
            </div>
        );
    };

    return (
        <div>
            Access granted to watch the stream.
        </div>
    );
};