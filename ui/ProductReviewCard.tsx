import { Review } from '@/lib/data/reviews';
import { ProductRating } from '@/ui/ProductRating';

export const ProductReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-zinc-700" />
          <div className="text-sm text-white">{review.name}</div>
        </div>

        {review.rating ? <ProductRating rating={review.rating} /> : null}
      </div>

      <div className="text-zinc-400">{review.text}</div>
    </div>
  );
};
