import { Session } from 'next-auth';

export function compose(...fns) {
  return function (x) {
    return fns.reduceRight((y, f) => f(y), x);
  };
}

export function isAsync(fn) {
  return fn.constructor.name === 'AsyncFunction';
}

export function isAdmin(session: Session | null) {
  return session?.user?.roles.some(({ name }) => name === 'Admin');
}

export type ParsePathParams<
  Path extends string,
  Result = NonNullable<unknown>,
> = Path extends `${string}:${infer Params}`
  ? ParsePathParams<
      Params,
      Params extends `${infer Param}/${string}`
        ? Result & { [K in Param]: string }
        : Result & { [K in Params]: string }
    >
  : Result;

export function replacePathParams<P extends string>(
  path: P,
  params: ParsePathParams<P>,
) {
  return Object.entries(params).reduce((acc: string, [key, value]) => {
    return acc.replace(`:${key}`, String(value));
  }, path);
}
