import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge } from "@/components/live-badge";
import { UserAvatar } from "@/components/user-avatar";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
};

export const Thumbnail = ({ 
  src,
  fallback,
  isLive,
  username,
 }: ThumbnailProps) => {
  let content;

  // If there is no thumbnail, we'll show the user's avatar instead.
  if (!src) {
    content = (
      <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
        <UserAvatar
          size="lg"
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    )
    // If there is a thumbnail, we'll show it.
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Thumbnail"
        className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md"
      />
    )
  }

  // If the stream is live, we'll show the live badge.
  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      <div className="rounded-md absolute inset-0 bg-[#2d4b4f] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
      {content}
      {isLive && src && (
        <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

// This is the skeleton that will be shown while the thumbnail is loading.
export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};