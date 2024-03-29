import { Equal, Expect } from "helpers/type-utils";

type DeepPartial<T> = T extends Array<infer U> ? Array<DeepPartial<U>> : {
  [P in keyof T]?: DeepPartial<T[P]>
};

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
   Equal<
    Result,
    {
      a?: string;
      b?: number;
      c?: {
        d?: string;
        e?: {
          f?: string;
          g?: {
            h?: string;
            i?: string;
          }[];
        };
      };
    }
   >
  >
];

export type {tests}
