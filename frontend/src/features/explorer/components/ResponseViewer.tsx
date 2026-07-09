import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  loading: boolean;
  response: unknown;
};

export function ResponseViewer({ loading, response }: Props) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold text-white">Response</h3>

      {loading && (
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/6" />
        </div>
      )}

      {!loading && response && (
        <pre className="overflow-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm text-white">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
