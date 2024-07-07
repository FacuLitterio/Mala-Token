import { useSnackbar } from "notistack";
import { useCallback } from "react";

const useCopyClipboard = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text);
      enqueueSnackbar("Copied");
    },
    [enqueueSnackbar]
  );
};

export default useCopyClipboard;
