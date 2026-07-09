import { Loader2, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  loading: boolean;
  onClick: () => void;
};

export function ExecuteButton({ loading, onClick }: Props) {
  return (
    <Button disabled={loading} onClick={onClick} className="mt-6">
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Executing...
        </>
      ) : (
        <>
          <Play className="mr-2 h-4 w-4" />
          Execute Tool
        </>
      )}
    </Button>
  );
}
