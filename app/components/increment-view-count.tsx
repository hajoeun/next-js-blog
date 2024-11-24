"use client";

import { useEffect } from "react";

type Props = {
  slug: string;
};

export const IncrementViewCount = ({ slug }: Props) => {
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
