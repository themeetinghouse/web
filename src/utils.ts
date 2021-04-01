type WithoutKeys<T> = Omit<T, keyof T>;

export type EmptyProps = WithoutKeys<Record<string, never>>;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// inverse of the NonNullable<T> utility type
export type Nullable<T> = T | null | undefined;
