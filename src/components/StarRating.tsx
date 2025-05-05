import { RatingStarIcon } from "@/icons/dev-icons";

export const StarRating = (props: { rating: number }) => (
  <div className="flex gap-0.5 text-secondary">
    {[...Array(Math.floor(props.rating)).keys()].map(() => (
      <RatingStarIcon key={crypto.randomUUID()} />
    ))}
    {[...Array(Math.floor(5 - props.rating)).keys()].map(() => (
      <div className="text-text-primary/25" key={crypto.randomUUID()}>
        <RatingStarIcon />
      </div>
    ))}
  </div>
);
