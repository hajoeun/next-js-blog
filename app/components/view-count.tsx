import { getViewsCount, incrementView } from "queries/db";
import { cache } from "react";

type Props = {
  slug: string;
};

const cachedIncrementView = cache(incrementView);

export const ViewCount = async ({ slug }: Props) => {
  cachedIncrementView(slug);
  const views = await getViewsCount();
  const count = views.find((view) => view.slug === slug)?.count || 0;

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {count.toLocaleString()} views
    </p>
  );
};
