export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400 text-center"
      role="alert"
    >
      {message}
    </div>
  );
}
