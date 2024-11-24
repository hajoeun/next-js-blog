"use client";

import { useEffect } from "react";

export const IncrementView = ({ slug }: { slug: string }) => {
  useEffect(() => {
    const updateView = async () => {
      await fetch(`/api/view-count`, {
        method: "POST",
        body: JSON.stringify({ slug }),
      });
    };

    updateView();
  }, [slug]);

  return null;
};
