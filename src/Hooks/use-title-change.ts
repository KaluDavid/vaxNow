import React from "react";

function useTitleChange({ title }: { title: string }) {
  React.useEffect(() => {
    document.title = title;
    return () => {
      document.title = "VaxNow";
    };
  }, [title]);

  return;
}

export default useTitleChange;
