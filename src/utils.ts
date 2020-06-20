type WithoutKeys<T> = Omit<T, keyof T>;

export type EmptyProps = WithoutKeys<Record<string, never>>;