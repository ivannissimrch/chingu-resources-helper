import type { FallbackProps } from "react-error-boundary";

export default function ComponentErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center p-6 bg-red-50 border border-red-200 rounded-lg text-center"
    >
      <p className="text-red-600 font-medium mb-2">Something went wrong</p>
      <pre className="text-red-500 text-sm mb-4 max-w-full overflow-auto">
        {error.message}
      </pre>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
