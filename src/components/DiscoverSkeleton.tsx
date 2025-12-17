import { Skeleton } from "@mui/material";

export default function DiscoverSkeleton() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col w-full md:flex-row mr-10">
        {/* Sidebar skeleton */}
        <aside className="w-full md:w-96 px-4 py-6 border-gray-200 z-10">
          {/* Search form */}
          <Skeleton variant="rounded" height={40} className="mb-4" />

          {/* Tags */}
          <div className="mb-6">
            <Skeleton variant="text" width={80} height={24} className="mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} variant="rounded" width={70} height={32} />
              ))}
            </div>
          </div>

          {/* Authors */}
          <div className="mb-6">
            <Skeleton variant="text" width={80} height={24} className="mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} variant="rounded" width={90} height={32} />
              ))}
            </div>
          </div>

          {/* Resource Type */}
          <div className="mb-6">
            <Skeleton variant="text" width={100} height={24} className="mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} variant="rounded" width={80} height={32} />
              ))}
            </div>
          </div>

          {/* Reset button */}
          <Skeleton variant="rounded" width={100} height={36} />
        </aside>

        {/* Resources grid skeleton */}
        <section className="flex flex-col items-start overflow-auto flex-1 p-6">
          {/* Sort by */}
          <Skeleton variant="rounded" width={150} height={36} className="mb-4" />

          {/* Resource cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 w-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-full max-w-md mx-auto bg-[#E5E7Eb] rounded-lg p-6"
              >
                {/* Date and favorite */}
                <div className="flex justify-between items-center mb-4">
                  <Skeleton variant="text" width={80} height={20} />
                  <Skeleton variant="circular" width={24} height={24} />
                </div>

                {/* Title */}
                <Skeleton variant="text" width="80%" height={32} className="mb-2" />

                {/* URL */}
                <Skeleton variant="text" width="100%" height={20} className="mb-4" />

                {/* Author and type */}
                <div className="flex justify-between items-center mb-4">
                  <Skeleton variant="text" width={100} height={20} />
                  <Skeleton variant="text" width={80} height={20} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[...Array(3)].map((_, j) => (
                    <Skeleton key={j} variant="rounded" width={60} height={28} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
