import { useRouteError, useNavigate } from "react-router-dom";

export default function FallbackRender() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/");
  };

  return (
    <div
      role="alert"
      className="flex flex-col justify-center items-center min-h-screen p-8"
    >
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-lg text-center shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">
          An unexpected error occurred. Please try again.
        </p>
        <pre className="bg-red-100 text-red-700 p-4 rounded text-sm text-left overflow-auto mb-6">
          {error?.message || "Unknown error"}
        </pre>
        <button
          type="button"
          onClick={handleReset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
