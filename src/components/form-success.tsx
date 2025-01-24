import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string | undefined;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return;

  return (
    <div className="bg-secondary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-secondary">
      <CheckCircleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
