import db from '#/lib/db';
import { ExampleLinksClient } from './example-links-client';

export function ExampleLinks() {
  const product = db.product.find({ where: { id: '2' } })!;

  return <ExampleLinksClient product={product} />;
}
