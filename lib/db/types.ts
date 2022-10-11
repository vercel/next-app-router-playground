import { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export interface Category {
  id: string;
  name: string;
  order: Generated<number>;
  parentId: string | null;
  slug: string;
}

export interface Image {
  id: string;
  productId: string;
  url: string;
}

export interface Product {
  categoryId: string;
  discount: Json | null;
  id: string;
  isBestSeller: Generated<number | null>;
  leadTime: Generated<number>;
  name: string;
  order: Generated<number>;
  price: Json;
  rating: number | null;
  stock: number;
  usedPrice: Json | null;
}

export interface DB {
  Category: Category;
  Image: Image;
  Product: Product;
}
