import { incrementView } from "queries/db";

type Props = {
  slug: string;
};

export const IncrementViewCount = async ({ slug }: Props) => {
  await incrementView(slug);

  return null;
};
