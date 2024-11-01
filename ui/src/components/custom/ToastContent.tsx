import { toast } from "react-hot-toast";

import { X, XCircle, CheckCircle } from "lucide-react";

// Success Toast Component
const SuccessToast = ({ message }: { message: string }) => (
  <div className="flex items-center w-96 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="flex items-center px-4 py-3 gap-3">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-50">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
      </div>
      <div className="flex-1 ml-3">
        <p className="text-sm font-medium text-gray-900">Success</p>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss()}
        className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-gray-100"
      >
        <X className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  </div>
);

// Error Toast Component
const ErrorToast = ({ message }: { message: string }) => (
  <div className="flex items-center w-96 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="flex items-center px-4 py-3 gap-3">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-50">
          <XCircle className="h-6 w-6 text-red-500" />
        </div>
      </div>
      <div className="flex-1 ml-3">
        <p className="text-sm font-medium text-gray-900">Error</p>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss()}
        className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-gray-100"
      >
        <X className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  </div>
);

// Helper functions to show toasts
export const showSuccessToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md`}
    >
      <SuccessToast message={message} />
    </div>
  ));
};

export const showErrorToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md`}
    >
      <ErrorToast message={message} />
    </div>
  ));
};

export default function Demo() {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => showSuccessToast("Operation completed successfully!")}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Show Success Toast
      </button>
      <button
        onClick={() =>
          showErrorToast("Something went wrong. Please try again.")
        }
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Show Error Toast
      </button>
    </div>
  );
}
