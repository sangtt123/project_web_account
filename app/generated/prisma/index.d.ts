
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model hero_slides
 * 
 */
export type hero_slides = $Result.DefaultSelection<Prisma.$hero_slidesPayload>
/**
 * Model product_features
 * 
 */
export type product_features = $Result.DefaultSelection<Prisma.$product_featuresPayload>
/**
 * Model product_guides
 * 
 */
export type product_guides = $Result.DefaultSelection<Prisma.$product_guidesPayload>
/**
 * Model product_options
 * 
 */
export type product_options = $Result.DefaultSelection<Prisma.$product_optionsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hero_slides
 * const hero_slides = await prisma.hero_slides.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hero_slides
   * const hero_slides = await prisma.hero_slides.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hero_slides`: Exposes CRUD operations for the **hero_slides** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hero_slides
    * const hero_slides = await prisma.hero_slides.findMany()
    * ```
    */
  get hero_slides(): Prisma.hero_slidesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_features`: Exposes CRUD operations for the **product_features** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_features
    * const product_features = await prisma.product_features.findMany()
    * ```
    */
  get product_features(): Prisma.product_featuresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_guides`: Exposes CRUD operations for the **product_guides** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_guides
    * const product_guides = await prisma.product_guides.findMany()
    * ```
    */
  get product_guides(): Prisma.product_guidesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_options`: Exposes CRUD operations for the **product_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_options
    * const product_options = await prisma.product_options.findMany()
    * ```
    */
  get product_options(): Prisma.product_optionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    hero_slides: 'hero_slides',
    product_features: 'product_features',
    product_guides: 'product_guides',
    product_options: 'product_options',
    products: 'products',
    category: 'category',
    account: 'account',
    order: 'order',
    order_item: 'order_item',
    admin: 'admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hero_slides" | "product_features" | "product_guides" | "product_options" | "products" | "category" | "account" | "order" | "order_item" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      hero_slides: {
        payload: Prisma.$hero_slidesPayload<ExtArgs>
        fields: Prisma.hero_slidesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hero_slidesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hero_slidesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          findFirst: {
            args: Prisma.hero_slidesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hero_slidesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          findMany: {
            args: Prisma.hero_slidesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>[]
          }
          create: {
            args: Prisma.hero_slidesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          createMany: {
            args: Prisma.hero_slidesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hero_slidesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>[]
          }
          delete: {
            args: Prisma.hero_slidesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          update: {
            args: Prisma.hero_slidesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          deleteMany: {
            args: Prisma.hero_slidesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hero_slidesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hero_slidesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>[]
          }
          upsert: {
            args: Prisma.hero_slidesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_slidesPayload>
          }
          aggregate: {
            args: Prisma.Hero_slidesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero_slides>
          }
          groupBy: {
            args: Prisma.hero_slidesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hero_slidesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hero_slidesCountArgs<ExtArgs>
            result: $Utils.Optional<Hero_slidesCountAggregateOutputType> | number
          }
        }
      }
      product_features: {
        payload: Prisma.$product_featuresPayload<ExtArgs>
        fields: Prisma.product_featuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_featuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_featuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          findFirst: {
            args: Prisma.product_featuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_featuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          findMany: {
            args: Prisma.product_featuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>[]
          }
          create: {
            args: Prisma.product_featuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          createMany: {
            args: Prisma.product_featuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_featuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>[]
          }
          delete: {
            args: Prisma.product_featuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          update: {
            args: Prisma.product_featuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          deleteMany: {
            args: Prisma.product_featuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_featuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_featuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>[]
          }
          upsert: {
            args: Prisma.product_featuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_featuresPayload>
          }
          aggregate: {
            args: Prisma.Product_featuresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_features>
          }
          groupBy: {
            args: Prisma.product_featuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_featuresGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_featuresCountArgs<ExtArgs>
            result: $Utils.Optional<Product_featuresCountAggregateOutputType> | number
          }
        }
      }
      product_guides: {
        payload: Prisma.$product_guidesPayload<ExtArgs>
        fields: Prisma.product_guidesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_guidesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_guidesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          findFirst: {
            args: Prisma.product_guidesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_guidesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          findMany: {
            args: Prisma.product_guidesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>[]
          }
          create: {
            args: Prisma.product_guidesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          createMany: {
            args: Prisma.product_guidesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_guidesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>[]
          }
          delete: {
            args: Prisma.product_guidesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          update: {
            args: Prisma.product_guidesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          deleteMany: {
            args: Prisma.product_guidesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_guidesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_guidesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>[]
          }
          upsert: {
            args: Prisma.product_guidesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guidesPayload>
          }
          aggregate: {
            args: Prisma.Product_guidesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_guides>
          }
          groupBy: {
            args: Prisma.product_guidesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_guidesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_guidesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_guidesCountAggregateOutputType> | number
          }
        }
      }
      product_options: {
        payload: Prisma.$product_optionsPayload<ExtArgs>
        fields: Prisma.product_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          findFirst: {
            args: Prisma.product_optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          findMany: {
            args: Prisma.product_optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>[]
          }
          create: {
            args: Prisma.product_optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          createMany: {
            args: Prisma.product_optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_optionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>[]
          }
          delete: {
            args: Prisma.product_optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          update: {
            args: Prisma.product_optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          deleteMany: {
            args: Prisma.product_optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_optionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>[]
          }
          upsert: {
            args: Prisma.product_optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionsPayload>
          }
          aggregate: {
            args: Prisma.Product_optionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_options>
          }
          groupBy: {
            args: Prisma.product_optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_optionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_optionsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_optionsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    hero_slides?: hero_slidesOmit
    product_features?: product_featuresOmit
    product_guides?: product_guidesOmit
    product_options?: product_optionsOmit
    products?: productsOmit
    category?: categoryOmit
    account?: accountOmit
    order?: orderOmit
    order_item?: order_itemOmit
    admin?: adminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_features: number
    product_guides: number
    product_options: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_features?: boolean | ProductsCountOutputTypeCountProduct_featuresArgs
    product_guides?: boolean | ProductsCountOutputTypeCountProduct_guidesArgs
    product_options?: boolean | ProductsCountOutputTypeCountProduct_optionsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_featuresWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_guidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_guidesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_optionsWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_item: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | OrderCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Count Type Order_itemCountOutputType
   */

  export type Order_itemCountOutputType = {
    account: number
  }

  export type Order_itemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Order_itemCountOutputTypeCountAccountArgs
  }

  // Custom InputTypes
  /**
   * Order_itemCountOutputType without action
   */
  export type Order_itemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_itemCountOutputType
     */
    select?: Order_itemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Order_itemCountOutputType without action
   */
  export type Order_itemCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model hero_slides
   */

  export type AggregateHero_slides = {
    _count: Hero_slidesCountAggregateOutputType | null
    _avg: Hero_slidesAvgAggregateOutputType | null
    _sum: Hero_slidesSumAggregateOutputType | null
    _min: Hero_slidesMinAggregateOutputType | null
    _max: Hero_slidesMaxAggregateOutputType | null
  }

  export type Hero_slidesAvgAggregateOutputType = {
    id: number | null
  }

  export type Hero_slidesSumAggregateOutputType = {
    id: number | null
  }

  export type Hero_slidesMinAggregateOutputType = {
    id: number | null
    tag: string | null
    title: string | null
    highlight: string | null
    description: string | null
    bg_image: string | null
    gradient: string | null
    btn_color: string | null
  }

  export type Hero_slidesMaxAggregateOutputType = {
    id: number | null
    tag: string | null
    title: string | null
    highlight: string | null
    description: string | null
    bg_image: string | null
    gradient: string | null
    btn_color: string | null
  }

  export type Hero_slidesCountAggregateOutputType = {
    id: number
    tag: number
    title: number
    highlight: number
    description: number
    bg_image: number
    gradient: number
    btn_color: number
    _all: number
  }


  export type Hero_slidesAvgAggregateInputType = {
    id?: true
  }

  export type Hero_slidesSumAggregateInputType = {
    id?: true
  }

  export type Hero_slidesMinAggregateInputType = {
    id?: true
    tag?: true
    title?: true
    highlight?: true
    description?: true
    bg_image?: true
    gradient?: true
    btn_color?: true
  }

  export type Hero_slidesMaxAggregateInputType = {
    id?: true
    tag?: true
    title?: true
    highlight?: true
    description?: true
    bg_image?: true
    gradient?: true
    btn_color?: true
  }

  export type Hero_slidesCountAggregateInputType = {
    id?: true
    tag?: true
    title?: true
    highlight?: true
    description?: true
    bg_image?: true
    gradient?: true
    btn_color?: true
    _all?: true
  }

  export type Hero_slidesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero_slides to aggregate.
     */
    where?: hero_slidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_slides to fetch.
     */
    orderBy?: hero_slidesOrderByWithRelationInput | hero_slidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hero_slidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hero_slides
    **/
    _count?: true | Hero_slidesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hero_slidesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hero_slidesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hero_slidesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hero_slidesMaxAggregateInputType
  }

  export type GetHero_slidesAggregateType<T extends Hero_slidesAggregateArgs> = {
        [P in keyof T & keyof AggregateHero_slides]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero_slides[P]>
      : GetScalarType<T[P], AggregateHero_slides[P]>
  }




  export type hero_slidesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hero_slidesWhereInput
    orderBy?: hero_slidesOrderByWithAggregationInput | hero_slidesOrderByWithAggregationInput[]
    by: Hero_slidesScalarFieldEnum[] | Hero_slidesScalarFieldEnum
    having?: hero_slidesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hero_slidesCountAggregateInputType | true
    _avg?: Hero_slidesAvgAggregateInputType
    _sum?: Hero_slidesSumAggregateInputType
    _min?: Hero_slidesMinAggregateInputType
    _max?: Hero_slidesMaxAggregateInputType
  }

  export type Hero_slidesGroupByOutputType = {
    id: number
    tag: string | null
    title: string | null
    highlight: string | null
    description: string | null
    bg_image: string | null
    gradient: string | null
    btn_color: string | null
    _count: Hero_slidesCountAggregateOutputType | null
    _avg: Hero_slidesAvgAggregateOutputType | null
    _sum: Hero_slidesSumAggregateOutputType | null
    _min: Hero_slidesMinAggregateOutputType | null
    _max: Hero_slidesMaxAggregateOutputType | null
  }

  type GetHero_slidesGroupByPayload<T extends hero_slidesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hero_slidesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hero_slidesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hero_slidesGroupByOutputType[P]>
            : GetScalarType<T[P], Hero_slidesGroupByOutputType[P]>
        }
      >
    >


  export type hero_slidesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    title?: boolean
    highlight?: boolean
    description?: boolean
    bg_image?: boolean
    gradient?: boolean
    btn_color?: boolean
  }, ExtArgs["result"]["hero_slides"]>

  export type hero_slidesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    title?: boolean
    highlight?: boolean
    description?: boolean
    bg_image?: boolean
    gradient?: boolean
    btn_color?: boolean
  }, ExtArgs["result"]["hero_slides"]>

  export type hero_slidesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    title?: boolean
    highlight?: boolean
    description?: boolean
    bg_image?: boolean
    gradient?: boolean
    btn_color?: boolean
  }, ExtArgs["result"]["hero_slides"]>

  export type hero_slidesSelectScalar = {
    id?: boolean
    tag?: boolean
    title?: boolean
    highlight?: boolean
    description?: boolean
    bg_image?: boolean
    gradient?: boolean
    btn_color?: boolean
  }

  export type hero_slidesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag" | "title" | "highlight" | "description" | "bg_image" | "gradient" | "btn_color", ExtArgs["result"]["hero_slides"]>

  export type $hero_slidesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hero_slides"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag: string | null
      title: string | null
      highlight: string | null
      description: string | null
      bg_image: string | null
      gradient: string | null
      btn_color: string | null
    }, ExtArgs["result"]["hero_slides"]>
    composites: {}
  }

  type hero_slidesGetPayload<S extends boolean | null | undefined | hero_slidesDefaultArgs> = $Result.GetResult<Prisma.$hero_slidesPayload, S>

  type hero_slidesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hero_slidesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hero_slidesCountAggregateInputType | true
    }

  export interface hero_slidesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hero_slides'], meta: { name: 'hero_slides' } }
    /**
     * Find zero or one Hero_slides that matches the filter.
     * @param {hero_slidesFindUniqueArgs} args - Arguments to find a Hero_slides
     * @example
     * // Get one Hero_slides
     * const hero_slides = await prisma.hero_slides.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hero_slidesFindUniqueArgs>(args: SelectSubset<T, hero_slidesFindUniqueArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero_slides that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hero_slidesFindUniqueOrThrowArgs} args - Arguments to find a Hero_slides
     * @example
     * // Get one Hero_slides
     * const hero_slides = await prisma.hero_slides.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hero_slidesFindUniqueOrThrowArgs>(args: SelectSubset<T, hero_slidesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero_slides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesFindFirstArgs} args - Arguments to find a Hero_slides
     * @example
     * // Get one Hero_slides
     * const hero_slides = await prisma.hero_slides.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hero_slidesFindFirstArgs>(args?: SelectSubset<T, hero_slidesFindFirstArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero_slides that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesFindFirstOrThrowArgs} args - Arguments to find a Hero_slides
     * @example
     * // Get one Hero_slides
     * const hero_slides = await prisma.hero_slides.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hero_slidesFindFirstOrThrowArgs>(args?: SelectSubset<T, hero_slidesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hero_slides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hero_slides
     * const hero_slides = await prisma.hero_slides.findMany()
     * 
     * // Get first 10 Hero_slides
     * const hero_slides = await prisma.hero_slides.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hero_slidesWithIdOnly = await prisma.hero_slides.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hero_slidesFindManyArgs>(args?: SelectSubset<T, hero_slidesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero_slides.
     * @param {hero_slidesCreateArgs} args - Arguments to create a Hero_slides.
     * @example
     * // Create one Hero_slides
     * const Hero_slides = await prisma.hero_slides.create({
     *   data: {
     *     // ... data to create a Hero_slides
     *   }
     * })
     * 
     */
    create<T extends hero_slidesCreateArgs>(args: SelectSubset<T, hero_slidesCreateArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hero_slides.
     * @param {hero_slidesCreateManyArgs} args - Arguments to create many Hero_slides.
     * @example
     * // Create many Hero_slides
     * const hero_slides = await prisma.hero_slides.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hero_slidesCreateManyArgs>(args?: SelectSubset<T, hero_slidesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hero_slides and returns the data saved in the database.
     * @param {hero_slidesCreateManyAndReturnArgs} args - Arguments to create many Hero_slides.
     * @example
     * // Create many Hero_slides
     * const hero_slides = await prisma.hero_slides.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hero_slides and only return the `id`
     * const hero_slidesWithIdOnly = await prisma.hero_slides.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hero_slidesCreateManyAndReturnArgs>(args?: SelectSubset<T, hero_slidesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero_slides.
     * @param {hero_slidesDeleteArgs} args - Arguments to delete one Hero_slides.
     * @example
     * // Delete one Hero_slides
     * const Hero_slides = await prisma.hero_slides.delete({
     *   where: {
     *     // ... filter to delete one Hero_slides
     *   }
     * })
     * 
     */
    delete<T extends hero_slidesDeleteArgs>(args: SelectSubset<T, hero_slidesDeleteArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero_slides.
     * @param {hero_slidesUpdateArgs} args - Arguments to update one Hero_slides.
     * @example
     * // Update one Hero_slides
     * const hero_slides = await prisma.hero_slides.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hero_slidesUpdateArgs>(args: SelectSubset<T, hero_slidesUpdateArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hero_slides.
     * @param {hero_slidesDeleteManyArgs} args - Arguments to filter Hero_slides to delete.
     * @example
     * // Delete a few Hero_slides
     * const { count } = await prisma.hero_slides.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hero_slidesDeleteManyArgs>(args?: SelectSubset<T, hero_slidesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hero_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hero_slides
     * const hero_slides = await prisma.hero_slides.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hero_slidesUpdateManyArgs>(args: SelectSubset<T, hero_slidesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hero_slides and returns the data updated in the database.
     * @param {hero_slidesUpdateManyAndReturnArgs} args - Arguments to update many Hero_slides.
     * @example
     * // Update many Hero_slides
     * const hero_slides = await prisma.hero_slides.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hero_slides and only return the `id`
     * const hero_slidesWithIdOnly = await prisma.hero_slides.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hero_slidesUpdateManyAndReturnArgs>(args: SelectSubset<T, hero_slidesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero_slides.
     * @param {hero_slidesUpsertArgs} args - Arguments to update or create a Hero_slides.
     * @example
     * // Update or create a Hero_slides
     * const hero_slides = await prisma.hero_slides.upsert({
     *   create: {
     *     // ... data to create a Hero_slides
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero_slides we want to update
     *   }
     * })
     */
    upsert<T extends hero_slidesUpsertArgs>(args: SelectSubset<T, hero_slidesUpsertArgs<ExtArgs>>): Prisma__hero_slidesClient<$Result.GetResult<Prisma.$hero_slidesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hero_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesCountArgs} args - Arguments to filter Hero_slides to count.
     * @example
     * // Count the number of Hero_slides
     * const count = await prisma.hero_slides.count({
     *   where: {
     *     // ... the filter for the Hero_slides we want to count
     *   }
     * })
    **/
    count<T extends hero_slidesCountArgs>(
      args?: Subset<T, hero_slidesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hero_slidesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hero_slidesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hero_slidesAggregateArgs>(args: Subset<T, Hero_slidesAggregateArgs>): Prisma.PrismaPromise<GetHero_slidesAggregateType<T>>

    /**
     * Group by Hero_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_slidesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hero_slidesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hero_slidesGroupByArgs['orderBy'] }
        : { orderBy?: hero_slidesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hero_slidesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHero_slidesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hero_slides model
   */
  readonly fields: hero_slidesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hero_slides.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hero_slidesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hero_slides model
   */
  interface hero_slidesFieldRefs {
    readonly id: FieldRef<"hero_slides", 'Int'>
    readonly tag: FieldRef<"hero_slides", 'String'>
    readonly title: FieldRef<"hero_slides", 'String'>
    readonly highlight: FieldRef<"hero_slides", 'String'>
    readonly description: FieldRef<"hero_slides", 'String'>
    readonly bg_image: FieldRef<"hero_slides", 'String'>
    readonly gradient: FieldRef<"hero_slides", 'String'>
    readonly btn_color: FieldRef<"hero_slides", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hero_slides findUnique
   */
  export type hero_slidesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter, which hero_slides to fetch.
     */
    where: hero_slidesWhereUniqueInput
  }

  /**
   * hero_slides findUniqueOrThrow
   */
  export type hero_slidesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter, which hero_slides to fetch.
     */
    where: hero_slidesWhereUniqueInput
  }

  /**
   * hero_slides findFirst
   */
  export type hero_slidesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter, which hero_slides to fetch.
     */
    where?: hero_slidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_slides to fetch.
     */
    orderBy?: hero_slidesOrderByWithRelationInput | hero_slidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hero_slides.
     */
    cursor?: hero_slidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hero_slides.
     */
    distinct?: Hero_slidesScalarFieldEnum | Hero_slidesScalarFieldEnum[]
  }

  /**
   * hero_slides findFirstOrThrow
   */
  export type hero_slidesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter, which hero_slides to fetch.
     */
    where?: hero_slidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_slides to fetch.
     */
    orderBy?: hero_slidesOrderByWithRelationInput | hero_slidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hero_slides.
     */
    cursor?: hero_slidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hero_slides.
     */
    distinct?: Hero_slidesScalarFieldEnum | Hero_slidesScalarFieldEnum[]
  }

  /**
   * hero_slides findMany
   */
  export type hero_slidesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter, which hero_slides to fetch.
     */
    where?: hero_slidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_slides to fetch.
     */
    orderBy?: hero_slidesOrderByWithRelationInput | hero_slidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hero_slides.
     */
    cursor?: hero_slidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_slides.
     */
    skip?: number
    distinct?: Hero_slidesScalarFieldEnum | Hero_slidesScalarFieldEnum[]
  }

  /**
   * hero_slides create
   */
  export type hero_slidesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * The data needed to create a hero_slides.
     */
    data?: XOR<hero_slidesCreateInput, hero_slidesUncheckedCreateInput>
  }

  /**
   * hero_slides createMany
   */
  export type hero_slidesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hero_slides.
     */
    data: hero_slidesCreateManyInput | hero_slidesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero_slides createManyAndReturn
   */
  export type hero_slidesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * The data used to create many hero_slides.
     */
    data: hero_slidesCreateManyInput | hero_slidesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero_slides update
   */
  export type hero_slidesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * The data needed to update a hero_slides.
     */
    data: XOR<hero_slidesUpdateInput, hero_slidesUncheckedUpdateInput>
    /**
     * Choose, which hero_slides to update.
     */
    where: hero_slidesWhereUniqueInput
  }

  /**
   * hero_slides updateMany
   */
  export type hero_slidesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hero_slides.
     */
    data: XOR<hero_slidesUpdateManyMutationInput, hero_slidesUncheckedUpdateManyInput>
    /**
     * Filter which hero_slides to update
     */
    where?: hero_slidesWhereInput
    /**
     * Limit how many hero_slides to update.
     */
    limit?: number
  }

  /**
   * hero_slides updateManyAndReturn
   */
  export type hero_slidesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * The data used to update hero_slides.
     */
    data: XOR<hero_slidesUpdateManyMutationInput, hero_slidesUncheckedUpdateManyInput>
    /**
     * Filter which hero_slides to update
     */
    where?: hero_slidesWhereInput
    /**
     * Limit how many hero_slides to update.
     */
    limit?: number
  }

  /**
   * hero_slides upsert
   */
  export type hero_slidesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * The filter to search for the hero_slides to update in case it exists.
     */
    where: hero_slidesWhereUniqueInput
    /**
     * In case the hero_slides found by the `where` argument doesn't exist, create a new hero_slides with this data.
     */
    create: XOR<hero_slidesCreateInput, hero_slidesUncheckedCreateInput>
    /**
     * In case the hero_slides was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hero_slidesUpdateInput, hero_slidesUncheckedUpdateInput>
  }

  /**
   * hero_slides delete
   */
  export type hero_slidesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
    /**
     * Filter which hero_slides to delete.
     */
    where: hero_slidesWhereUniqueInput
  }

  /**
   * hero_slides deleteMany
   */
  export type hero_slidesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero_slides to delete
     */
    where?: hero_slidesWhereInput
    /**
     * Limit how many hero_slides to delete.
     */
    limit?: number
  }

  /**
   * hero_slides without action
   */
  export type hero_slidesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_slides
     */
    select?: hero_slidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_slides
     */
    omit?: hero_slidesOmit<ExtArgs> | null
  }


  /**
   * Model product_features
   */

  export type AggregateProduct_features = {
    _count: Product_featuresCountAggregateOutputType | null
    _avg: Product_featuresAvgAggregateOutputType | null
    _sum: Product_featuresSumAggregateOutputType | null
    _min: Product_featuresMinAggregateOutputType | null
    _max: Product_featuresMaxAggregateOutputType | null
  }

  export type Product_featuresAvgAggregateOutputType = {
    id: number | null
  }

  export type Product_featuresSumAggregateOutputType = {
    id: number | null
  }

  export type Product_featuresMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    feature: string | null
  }

  export type Product_featuresMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    feature: string | null
  }

  export type Product_featuresCountAggregateOutputType = {
    id: number
    product_id: number
    feature: number
    _all: number
  }


  export type Product_featuresAvgAggregateInputType = {
    id?: true
  }

  export type Product_featuresSumAggregateInputType = {
    id?: true
  }

  export type Product_featuresMinAggregateInputType = {
    id?: true
    product_id?: true
    feature?: true
  }

  export type Product_featuresMaxAggregateInputType = {
    id?: true
    product_id?: true
    feature?: true
  }

  export type Product_featuresCountAggregateInputType = {
    id?: true
    product_id?: true
    feature?: true
    _all?: true
  }

  export type Product_featuresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_features to aggregate.
     */
    where?: product_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_features to fetch.
     */
    orderBy?: product_featuresOrderByWithRelationInput | product_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_features
    **/
    _count?: true | Product_featuresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_featuresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_featuresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_featuresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_featuresMaxAggregateInputType
  }

  export type GetProduct_featuresAggregateType<T extends Product_featuresAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_features]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_features[P]>
      : GetScalarType<T[P], AggregateProduct_features[P]>
  }




  export type product_featuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_featuresWhereInput
    orderBy?: product_featuresOrderByWithAggregationInput | product_featuresOrderByWithAggregationInput[]
    by: Product_featuresScalarFieldEnum[] | Product_featuresScalarFieldEnum
    having?: product_featuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_featuresCountAggregateInputType | true
    _avg?: Product_featuresAvgAggregateInputType
    _sum?: Product_featuresSumAggregateInputType
    _min?: Product_featuresMinAggregateInputType
    _max?: Product_featuresMaxAggregateInputType
  }

  export type Product_featuresGroupByOutputType = {
    id: number
    product_id: string | null
    feature: string
    _count: Product_featuresCountAggregateOutputType | null
    _avg: Product_featuresAvgAggregateOutputType | null
    _sum: Product_featuresSumAggregateOutputType | null
    _min: Product_featuresMinAggregateOutputType | null
    _max: Product_featuresMaxAggregateOutputType | null
  }

  type GetProduct_featuresGroupByPayload<T extends product_featuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_featuresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_featuresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_featuresGroupByOutputType[P]>
            : GetScalarType<T[P], Product_featuresGroupByOutputType[P]>
        }
      >
    >


  export type product_featuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    feature?: boolean
    products?: boolean | product_features$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_features"]>

  export type product_featuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    feature?: boolean
    products?: boolean | product_features$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_features"]>

  export type product_featuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    feature?: boolean
    products?: boolean | product_features$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_features"]>

  export type product_featuresSelectScalar = {
    id?: boolean
    product_id?: boolean
    feature?: boolean
  }

  export type product_featuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "feature", ExtArgs["result"]["product_features"]>
  export type product_featuresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_features$productsArgs<ExtArgs>
  }
  export type product_featuresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_features$productsArgs<ExtArgs>
  }
  export type product_featuresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_features$productsArgs<ExtArgs>
  }

  export type $product_featuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_features"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string | null
      feature: string
    }, ExtArgs["result"]["product_features"]>
    composites: {}
  }

  type product_featuresGetPayload<S extends boolean | null | undefined | product_featuresDefaultArgs> = $Result.GetResult<Prisma.$product_featuresPayload, S>

  type product_featuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_featuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_featuresCountAggregateInputType | true
    }

  export interface product_featuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_features'], meta: { name: 'product_features' } }
    /**
     * Find zero or one Product_features that matches the filter.
     * @param {product_featuresFindUniqueArgs} args - Arguments to find a Product_features
     * @example
     * // Get one Product_features
     * const product_features = await prisma.product_features.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_featuresFindUniqueArgs>(args: SelectSubset<T, product_featuresFindUniqueArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_features that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_featuresFindUniqueOrThrowArgs} args - Arguments to find a Product_features
     * @example
     * // Get one Product_features
     * const product_features = await prisma.product_features.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_featuresFindUniqueOrThrowArgs>(args: SelectSubset<T, product_featuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresFindFirstArgs} args - Arguments to find a Product_features
     * @example
     * // Get one Product_features
     * const product_features = await prisma.product_features.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_featuresFindFirstArgs>(args?: SelectSubset<T, product_featuresFindFirstArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_features that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresFindFirstOrThrowArgs} args - Arguments to find a Product_features
     * @example
     * // Get one Product_features
     * const product_features = await prisma.product_features.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_featuresFindFirstOrThrowArgs>(args?: SelectSubset<T, product_featuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_features
     * const product_features = await prisma.product_features.findMany()
     * 
     * // Get first 10 Product_features
     * const product_features = await prisma.product_features.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_featuresWithIdOnly = await prisma.product_features.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_featuresFindManyArgs>(args?: SelectSubset<T, product_featuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_features.
     * @param {product_featuresCreateArgs} args - Arguments to create a Product_features.
     * @example
     * // Create one Product_features
     * const Product_features = await prisma.product_features.create({
     *   data: {
     *     // ... data to create a Product_features
     *   }
     * })
     * 
     */
    create<T extends product_featuresCreateArgs>(args: SelectSubset<T, product_featuresCreateArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_features.
     * @param {product_featuresCreateManyArgs} args - Arguments to create many Product_features.
     * @example
     * // Create many Product_features
     * const product_features = await prisma.product_features.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_featuresCreateManyArgs>(args?: SelectSubset<T, product_featuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_features and returns the data saved in the database.
     * @param {product_featuresCreateManyAndReturnArgs} args - Arguments to create many Product_features.
     * @example
     * // Create many Product_features
     * const product_features = await prisma.product_features.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_features and only return the `id`
     * const product_featuresWithIdOnly = await prisma.product_features.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_featuresCreateManyAndReturnArgs>(args?: SelectSubset<T, product_featuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_features.
     * @param {product_featuresDeleteArgs} args - Arguments to delete one Product_features.
     * @example
     * // Delete one Product_features
     * const Product_features = await prisma.product_features.delete({
     *   where: {
     *     // ... filter to delete one Product_features
     *   }
     * })
     * 
     */
    delete<T extends product_featuresDeleteArgs>(args: SelectSubset<T, product_featuresDeleteArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_features.
     * @param {product_featuresUpdateArgs} args - Arguments to update one Product_features.
     * @example
     * // Update one Product_features
     * const product_features = await prisma.product_features.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_featuresUpdateArgs>(args: SelectSubset<T, product_featuresUpdateArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_features.
     * @param {product_featuresDeleteManyArgs} args - Arguments to filter Product_features to delete.
     * @example
     * // Delete a few Product_features
     * const { count } = await prisma.product_features.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_featuresDeleteManyArgs>(args?: SelectSubset<T, product_featuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_features
     * const product_features = await prisma.product_features.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_featuresUpdateManyArgs>(args: SelectSubset<T, product_featuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_features and returns the data updated in the database.
     * @param {product_featuresUpdateManyAndReturnArgs} args - Arguments to update many Product_features.
     * @example
     * // Update many Product_features
     * const product_features = await prisma.product_features.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_features and only return the `id`
     * const product_featuresWithIdOnly = await prisma.product_features.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_featuresUpdateManyAndReturnArgs>(args: SelectSubset<T, product_featuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_features.
     * @param {product_featuresUpsertArgs} args - Arguments to update or create a Product_features.
     * @example
     * // Update or create a Product_features
     * const product_features = await prisma.product_features.upsert({
     *   create: {
     *     // ... data to create a Product_features
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_features we want to update
     *   }
     * })
     */
    upsert<T extends product_featuresUpsertArgs>(args: SelectSubset<T, product_featuresUpsertArgs<ExtArgs>>): Prisma__product_featuresClient<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresCountArgs} args - Arguments to filter Product_features to count.
     * @example
     * // Count the number of Product_features
     * const count = await prisma.product_features.count({
     *   where: {
     *     // ... the filter for the Product_features we want to count
     *   }
     * })
    **/
    count<T extends product_featuresCountArgs>(
      args?: Subset<T, product_featuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_featuresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_featuresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_featuresAggregateArgs>(args: Subset<T, Product_featuresAggregateArgs>): Prisma.PrismaPromise<GetProduct_featuresAggregateType<T>>

    /**
     * Group by Product_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_featuresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_featuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_featuresGroupByArgs['orderBy'] }
        : { orderBy?: product_featuresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_featuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_featuresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_features model
   */
  readonly fields: product_featuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_features.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_featuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_features$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_features$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_features model
   */
  interface product_featuresFieldRefs {
    readonly id: FieldRef<"product_features", 'Int'>
    readonly product_id: FieldRef<"product_features", 'String'>
    readonly feature: FieldRef<"product_features", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_features findUnique
   */
  export type product_featuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter, which product_features to fetch.
     */
    where: product_featuresWhereUniqueInput
  }

  /**
   * product_features findUniqueOrThrow
   */
  export type product_featuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter, which product_features to fetch.
     */
    where: product_featuresWhereUniqueInput
  }

  /**
   * product_features findFirst
   */
  export type product_featuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter, which product_features to fetch.
     */
    where?: product_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_features to fetch.
     */
    orderBy?: product_featuresOrderByWithRelationInput | product_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_features.
     */
    cursor?: product_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_features.
     */
    distinct?: Product_featuresScalarFieldEnum | Product_featuresScalarFieldEnum[]
  }

  /**
   * product_features findFirstOrThrow
   */
  export type product_featuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter, which product_features to fetch.
     */
    where?: product_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_features to fetch.
     */
    orderBy?: product_featuresOrderByWithRelationInput | product_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_features.
     */
    cursor?: product_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_features.
     */
    distinct?: Product_featuresScalarFieldEnum | Product_featuresScalarFieldEnum[]
  }

  /**
   * product_features findMany
   */
  export type product_featuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter, which product_features to fetch.
     */
    where?: product_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_features to fetch.
     */
    orderBy?: product_featuresOrderByWithRelationInput | product_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_features.
     */
    cursor?: product_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_features.
     */
    skip?: number
    distinct?: Product_featuresScalarFieldEnum | Product_featuresScalarFieldEnum[]
  }

  /**
   * product_features create
   */
  export type product_featuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * The data needed to create a product_features.
     */
    data: XOR<product_featuresCreateInput, product_featuresUncheckedCreateInput>
  }

  /**
   * product_features createMany
   */
  export type product_featuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_features.
     */
    data: product_featuresCreateManyInput | product_featuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_features createManyAndReturn
   */
  export type product_featuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * The data used to create many product_features.
     */
    data: product_featuresCreateManyInput | product_featuresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_features update
   */
  export type product_featuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * The data needed to update a product_features.
     */
    data: XOR<product_featuresUpdateInput, product_featuresUncheckedUpdateInput>
    /**
     * Choose, which product_features to update.
     */
    where: product_featuresWhereUniqueInput
  }

  /**
   * product_features updateMany
   */
  export type product_featuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_features.
     */
    data: XOR<product_featuresUpdateManyMutationInput, product_featuresUncheckedUpdateManyInput>
    /**
     * Filter which product_features to update
     */
    where?: product_featuresWhereInput
    /**
     * Limit how many product_features to update.
     */
    limit?: number
  }

  /**
   * product_features updateManyAndReturn
   */
  export type product_featuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * The data used to update product_features.
     */
    data: XOR<product_featuresUpdateManyMutationInput, product_featuresUncheckedUpdateManyInput>
    /**
     * Filter which product_features to update
     */
    where?: product_featuresWhereInput
    /**
     * Limit how many product_features to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_features upsert
   */
  export type product_featuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * The filter to search for the product_features to update in case it exists.
     */
    where: product_featuresWhereUniqueInput
    /**
     * In case the product_features found by the `where` argument doesn't exist, create a new product_features with this data.
     */
    create: XOR<product_featuresCreateInput, product_featuresUncheckedCreateInput>
    /**
     * In case the product_features was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_featuresUpdateInput, product_featuresUncheckedUpdateInput>
  }

  /**
   * product_features delete
   */
  export type product_featuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    /**
     * Filter which product_features to delete.
     */
    where: product_featuresWhereUniqueInput
  }

  /**
   * product_features deleteMany
   */
  export type product_featuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_features to delete
     */
    where?: product_featuresWhereInput
    /**
     * Limit how many product_features to delete.
     */
    limit?: number
  }

  /**
   * product_features.products
   */
  export type product_features$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_features without action
   */
  export type product_featuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
  }


  /**
   * Model product_guides
   */

  export type AggregateProduct_guides = {
    _count: Product_guidesCountAggregateOutputType | null
    _avg: Product_guidesAvgAggregateOutputType | null
    _sum: Product_guidesSumAggregateOutputType | null
    _min: Product_guidesMinAggregateOutputType | null
    _max: Product_guidesMaxAggregateOutputType | null
  }

  export type Product_guidesAvgAggregateOutputType = {
    id: number | null
    step_order: number | null
  }

  export type Product_guidesSumAggregateOutputType = {
    id: number | null
    step_order: number | null
  }

  export type Product_guidesMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    step_order: number | null
    step_text: string | null
  }

  export type Product_guidesMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    step_order: number | null
    step_text: string | null
  }

  export type Product_guidesCountAggregateOutputType = {
    id: number
    product_id: number
    step_order: number
    step_text: number
    _all: number
  }


  export type Product_guidesAvgAggregateInputType = {
    id?: true
    step_order?: true
  }

  export type Product_guidesSumAggregateInputType = {
    id?: true
    step_order?: true
  }

  export type Product_guidesMinAggregateInputType = {
    id?: true
    product_id?: true
    step_order?: true
    step_text?: true
  }

  export type Product_guidesMaxAggregateInputType = {
    id?: true
    product_id?: true
    step_order?: true
    step_text?: true
  }

  export type Product_guidesCountAggregateInputType = {
    id?: true
    product_id?: true
    step_order?: true
    step_text?: true
    _all?: true
  }

  export type Product_guidesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_guides to aggregate.
     */
    where?: product_guidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guides to fetch.
     */
    orderBy?: product_guidesOrderByWithRelationInput | product_guidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_guidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_guides
    **/
    _count?: true | Product_guidesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_guidesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_guidesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_guidesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_guidesMaxAggregateInputType
  }

  export type GetProduct_guidesAggregateType<T extends Product_guidesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_guides]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_guides[P]>
      : GetScalarType<T[P], AggregateProduct_guides[P]>
  }




  export type product_guidesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_guidesWhereInput
    orderBy?: product_guidesOrderByWithAggregationInput | product_guidesOrderByWithAggregationInput[]
    by: Product_guidesScalarFieldEnum[] | Product_guidesScalarFieldEnum
    having?: product_guidesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_guidesCountAggregateInputType | true
    _avg?: Product_guidesAvgAggregateInputType
    _sum?: Product_guidesSumAggregateInputType
    _min?: Product_guidesMinAggregateInputType
    _max?: Product_guidesMaxAggregateInputType
  }

  export type Product_guidesGroupByOutputType = {
    id: number
    product_id: string | null
    step_order: number | null
    step_text: string | null
    _count: Product_guidesCountAggregateOutputType | null
    _avg: Product_guidesAvgAggregateOutputType | null
    _sum: Product_guidesSumAggregateOutputType | null
    _min: Product_guidesMinAggregateOutputType | null
    _max: Product_guidesMaxAggregateOutputType | null
  }

  type GetProduct_guidesGroupByPayload<T extends product_guidesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_guidesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_guidesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_guidesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_guidesGroupByOutputType[P]>
        }
      >
    >


  export type product_guidesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    step_order?: boolean
    step_text?: boolean
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_guides"]>

  export type product_guidesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    step_order?: boolean
    step_text?: boolean
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_guides"]>

  export type product_guidesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    step_order?: boolean
    step_text?: boolean
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_guides"]>

  export type product_guidesSelectScalar = {
    id?: boolean
    product_id?: boolean
    step_order?: boolean
    step_text?: boolean
  }

  export type product_guidesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "step_order" | "step_text", ExtArgs["result"]["product_guides"]>
  export type product_guidesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }
  export type product_guidesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }
  export type product_guidesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_guides$productsArgs<ExtArgs>
  }

  export type $product_guidesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_guides"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string | null
      step_order: number | null
      step_text: string | null
    }, ExtArgs["result"]["product_guides"]>
    composites: {}
  }

  type product_guidesGetPayload<S extends boolean | null | undefined | product_guidesDefaultArgs> = $Result.GetResult<Prisma.$product_guidesPayload, S>

  type product_guidesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_guidesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_guidesCountAggregateInputType | true
    }

  export interface product_guidesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_guides'], meta: { name: 'product_guides' } }
    /**
     * Find zero or one Product_guides that matches the filter.
     * @param {product_guidesFindUniqueArgs} args - Arguments to find a Product_guides
     * @example
     * // Get one Product_guides
     * const product_guides = await prisma.product_guides.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_guidesFindUniqueArgs>(args: SelectSubset<T, product_guidesFindUniqueArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_guides that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_guidesFindUniqueOrThrowArgs} args - Arguments to find a Product_guides
     * @example
     * // Get one Product_guides
     * const product_guides = await prisma.product_guides.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_guidesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_guidesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_guides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesFindFirstArgs} args - Arguments to find a Product_guides
     * @example
     * // Get one Product_guides
     * const product_guides = await prisma.product_guides.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_guidesFindFirstArgs>(args?: SelectSubset<T, product_guidesFindFirstArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_guides that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesFindFirstOrThrowArgs} args - Arguments to find a Product_guides
     * @example
     * // Get one Product_guides
     * const product_guides = await prisma.product_guides.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_guidesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_guidesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_guides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_guides
     * const product_guides = await prisma.product_guides.findMany()
     * 
     * // Get first 10 Product_guides
     * const product_guides = await prisma.product_guides.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_guidesWithIdOnly = await prisma.product_guides.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_guidesFindManyArgs>(args?: SelectSubset<T, product_guidesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_guides.
     * @param {product_guidesCreateArgs} args - Arguments to create a Product_guides.
     * @example
     * // Create one Product_guides
     * const Product_guides = await prisma.product_guides.create({
     *   data: {
     *     // ... data to create a Product_guides
     *   }
     * })
     * 
     */
    create<T extends product_guidesCreateArgs>(args: SelectSubset<T, product_guidesCreateArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_guides.
     * @param {product_guidesCreateManyArgs} args - Arguments to create many Product_guides.
     * @example
     * // Create many Product_guides
     * const product_guides = await prisma.product_guides.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_guidesCreateManyArgs>(args?: SelectSubset<T, product_guidesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_guides and returns the data saved in the database.
     * @param {product_guidesCreateManyAndReturnArgs} args - Arguments to create many Product_guides.
     * @example
     * // Create many Product_guides
     * const product_guides = await prisma.product_guides.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_guides and only return the `id`
     * const product_guidesWithIdOnly = await prisma.product_guides.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_guidesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_guidesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_guides.
     * @param {product_guidesDeleteArgs} args - Arguments to delete one Product_guides.
     * @example
     * // Delete one Product_guides
     * const Product_guides = await prisma.product_guides.delete({
     *   where: {
     *     // ... filter to delete one Product_guides
     *   }
     * })
     * 
     */
    delete<T extends product_guidesDeleteArgs>(args: SelectSubset<T, product_guidesDeleteArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_guides.
     * @param {product_guidesUpdateArgs} args - Arguments to update one Product_guides.
     * @example
     * // Update one Product_guides
     * const product_guides = await prisma.product_guides.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_guidesUpdateArgs>(args: SelectSubset<T, product_guidesUpdateArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_guides.
     * @param {product_guidesDeleteManyArgs} args - Arguments to filter Product_guides to delete.
     * @example
     * // Delete a few Product_guides
     * const { count } = await prisma.product_guides.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_guidesDeleteManyArgs>(args?: SelectSubset<T, product_guidesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_guides
     * const product_guides = await prisma.product_guides.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_guidesUpdateManyArgs>(args: SelectSubset<T, product_guidesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_guides and returns the data updated in the database.
     * @param {product_guidesUpdateManyAndReturnArgs} args - Arguments to update many Product_guides.
     * @example
     * // Update many Product_guides
     * const product_guides = await prisma.product_guides.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_guides and only return the `id`
     * const product_guidesWithIdOnly = await prisma.product_guides.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_guidesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_guidesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_guides.
     * @param {product_guidesUpsertArgs} args - Arguments to update or create a Product_guides.
     * @example
     * // Update or create a Product_guides
     * const product_guides = await prisma.product_guides.upsert({
     *   create: {
     *     // ... data to create a Product_guides
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_guides we want to update
     *   }
     * })
     */
    upsert<T extends product_guidesUpsertArgs>(args: SelectSubset<T, product_guidesUpsertArgs<ExtArgs>>): Prisma__product_guidesClient<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesCountArgs} args - Arguments to filter Product_guides to count.
     * @example
     * // Count the number of Product_guides
     * const count = await prisma.product_guides.count({
     *   where: {
     *     // ... the filter for the Product_guides we want to count
     *   }
     * })
    **/
    count<T extends product_guidesCountArgs>(
      args?: Subset<T, product_guidesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_guidesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_guidesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_guidesAggregateArgs>(args: Subset<T, Product_guidesAggregateArgs>): Prisma.PrismaPromise<GetProduct_guidesAggregateType<T>>

    /**
     * Group by Product_guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guidesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_guidesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_guidesGroupByArgs['orderBy'] }
        : { orderBy?: product_guidesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_guidesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_guidesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_guides model
   */
  readonly fields: product_guidesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_guides.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_guidesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_guides$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_guides$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_guides model
   */
  interface product_guidesFieldRefs {
    readonly id: FieldRef<"product_guides", 'Int'>
    readonly product_id: FieldRef<"product_guides", 'String'>
    readonly step_order: FieldRef<"product_guides", 'Int'>
    readonly step_text: FieldRef<"product_guides", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_guides findUnique
   */
  export type product_guidesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter, which product_guides to fetch.
     */
    where: product_guidesWhereUniqueInput
  }

  /**
   * product_guides findUniqueOrThrow
   */
  export type product_guidesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter, which product_guides to fetch.
     */
    where: product_guidesWhereUniqueInput
  }

  /**
   * product_guides findFirst
   */
  export type product_guidesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter, which product_guides to fetch.
     */
    where?: product_guidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guides to fetch.
     */
    orderBy?: product_guidesOrderByWithRelationInput | product_guidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_guides.
     */
    cursor?: product_guidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_guides.
     */
    distinct?: Product_guidesScalarFieldEnum | Product_guidesScalarFieldEnum[]
  }

  /**
   * product_guides findFirstOrThrow
   */
  export type product_guidesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter, which product_guides to fetch.
     */
    where?: product_guidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guides to fetch.
     */
    orderBy?: product_guidesOrderByWithRelationInput | product_guidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_guides.
     */
    cursor?: product_guidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_guides.
     */
    distinct?: Product_guidesScalarFieldEnum | Product_guidesScalarFieldEnum[]
  }

  /**
   * product_guides findMany
   */
  export type product_guidesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter, which product_guides to fetch.
     */
    where?: product_guidesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guides to fetch.
     */
    orderBy?: product_guidesOrderByWithRelationInput | product_guidesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_guides.
     */
    cursor?: product_guidesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guides.
     */
    skip?: number
    distinct?: Product_guidesScalarFieldEnum | Product_guidesScalarFieldEnum[]
  }

  /**
   * product_guides create
   */
  export type product_guidesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_guides.
     */
    data?: XOR<product_guidesCreateInput, product_guidesUncheckedCreateInput>
  }

  /**
   * product_guides createMany
   */
  export type product_guidesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_guides.
     */
    data: product_guidesCreateManyInput | product_guidesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_guides createManyAndReturn
   */
  export type product_guidesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * The data used to create many product_guides.
     */
    data: product_guidesCreateManyInput | product_guidesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_guides update
   */
  export type product_guidesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_guides.
     */
    data: XOR<product_guidesUpdateInput, product_guidesUncheckedUpdateInput>
    /**
     * Choose, which product_guides to update.
     */
    where: product_guidesWhereUniqueInput
  }

  /**
   * product_guides updateMany
   */
  export type product_guidesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_guides.
     */
    data: XOR<product_guidesUpdateManyMutationInput, product_guidesUncheckedUpdateManyInput>
    /**
     * Filter which product_guides to update
     */
    where?: product_guidesWhereInput
    /**
     * Limit how many product_guides to update.
     */
    limit?: number
  }

  /**
   * product_guides updateManyAndReturn
   */
  export type product_guidesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * The data used to update product_guides.
     */
    data: XOR<product_guidesUpdateManyMutationInput, product_guidesUncheckedUpdateManyInput>
    /**
     * Filter which product_guides to update
     */
    where?: product_guidesWhereInput
    /**
     * Limit how many product_guides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_guides upsert
   */
  export type product_guidesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_guides to update in case it exists.
     */
    where: product_guidesWhereUniqueInput
    /**
     * In case the product_guides found by the `where` argument doesn't exist, create a new product_guides with this data.
     */
    create: XOR<product_guidesCreateInput, product_guidesUncheckedCreateInput>
    /**
     * In case the product_guides was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_guidesUpdateInput, product_guidesUncheckedUpdateInput>
  }

  /**
   * product_guides delete
   */
  export type product_guidesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    /**
     * Filter which product_guides to delete.
     */
    where: product_guidesWhereUniqueInput
  }

  /**
   * product_guides deleteMany
   */
  export type product_guidesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_guides to delete
     */
    where?: product_guidesWhereInput
    /**
     * Limit how many product_guides to delete.
     */
    limit?: number
  }

  /**
   * product_guides.products
   */
  export type product_guides$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_guides without action
   */
  export type product_guidesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
  }


  /**
   * Model product_options
   */

  export type AggregateProduct_options = {
    _count: Product_optionsCountAggregateOutputType | null
    _avg: Product_optionsAvgAggregateOutputType | null
    _sum: Product_optionsSumAggregateOutputType | null
    _min: Product_optionsMinAggregateOutputType | null
    _max: Product_optionsMaxAggregateOutputType | null
  }

  export type Product_optionsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    original_price: number | null
  }

  export type Product_optionsSumAggregateOutputType = {
    id: number | null
    price: number | null
    original_price: number | null
  }

  export type Product_optionsMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    option_code: string | null
    name: string | null
    price: number | null
    original_price: number | null
  }

  export type Product_optionsMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    option_code: string | null
    name: string | null
    price: number | null
    original_price: number | null
  }

  export type Product_optionsCountAggregateOutputType = {
    id: number
    product_id: number
    option_code: number
    name: number
    price: number
    original_price: number
    _all: number
  }


  export type Product_optionsAvgAggregateInputType = {
    id?: true
    price?: true
    original_price?: true
  }

  export type Product_optionsSumAggregateInputType = {
    id?: true
    price?: true
    original_price?: true
  }

  export type Product_optionsMinAggregateInputType = {
    id?: true
    product_id?: true
    option_code?: true
    name?: true
    price?: true
    original_price?: true
  }

  export type Product_optionsMaxAggregateInputType = {
    id?: true
    product_id?: true
    option_code?: true
    name?: true
    price?: true
    original_price?: true
  }

  export type Product_optionsCountAggregateInputType = {
    id?: true
    product_id?: true
    option_code?: true
    name?: true
    price?: true
    original_price?: true
    _all?: true
  }

  export type Product_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_options to aggregate.
     */
    where?: product_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionsOrderByWithRelationInput | product_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_options
    **/
    _count?: true | Product_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_optionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_optionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_optionsMaxAggregateInputType
  }

  export type GetProduct_optionsAggregateType<T extends Product_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_options[P]>
      : GetScalarType<T[P], AggregateProduct_options[P]>
  }




  export type product_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_optionsWhereInput
    orderBy?: product_optionsOrderByWithAggregationInput | product_optionsOrderByWithAggregationInput[]
    by: Product_optionsScalarFieldEnum[] | Product_optionsScalarFieldEnum
    having?: product_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_optionsCountAggregateInputType | true
    _avg?: Product_optionsAvgAggregateInputType
    _sum?: Product_optionsSumAggregateInputType
    _min?: Product_optionsMinAggregateInputType
    _max?: Product_optionsMaxAggregateInputType
  }

  export type Product_optionsGroupByOutputType = {
    id: number
    product_id: string | null
    option_code: string | null
    name: string | null
    price: number | null
    original_price: number | null
    _count: Product_optionsCountAggregateOutputType | null
    _avg: Product_optionsAvgAggregateOutputType | null
    _sum: Product_optionsSumAggregateOutputType | null
    _min: Product_optionsMinAggregateOutputType | null
    _max: Product_optionsMaxAggregateOutputType | null
  }

  type GetProduct_optionsGroupByPayload<T extends product_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_optionsGroupByOutputType[P]>
        }
      >
    >


  export type product_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_code?: boolean
    name?: boolean
    price?: boolean
    original_price?: boolean
    products?: boolean | product_options$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_options"]>

  export type product_optionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_code?: boolean
    name?: boolean
    price?: boolean
    original_price?: boolean
    products?: boolean | product_options$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_options"]>

  export type product_optionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_code?: boolean
    name?: boolean
    price?: boolean
    original_price?: boolean
    products?: boolean | product_options$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_options"]>

  export type product_optionsSelectScalar = {
    id?: boolean
    product_id?: boolean
    option_code?: boolean
    name?: boolean
    price?: boolean
    original_price?: boolean
  }

  export type product_optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "option_code" | "name" | "price" | "original_price", ExtArgs["result"]["product_options"]>
  export type product_optionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_options$productsArgs<ExtArgs>
  }
  export type product_optionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_options$productsArgs<ExtArgs>
  }
  export type product_optionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_options$productsArgs<ExtArgs>
  }

  export type $product_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_options"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string | null
      option_code: string | null
      name: string | null
      price: number | null
      original_price: number | null
    }, ExtArgs["result"]["product_options"]>
    composites: {}
  }

  type product_optionsGetPayload<S extends boolean | null | undefined | product_optionsDefaultArgs> = $Result.GetResult<Prisma.$product_optionsPayload, S>

  type product_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_optionsCountAggregateInputType | true
    }

  export interface product_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_options'], meta: { name: 'product_options' } }
    /**
     * Find zero or one Product_options that matches the filter.
     * @param {product_optionsFindUniqueArgs} args - Arguments to find a Product_options
     * @example
     * // Get one Product_options
     * const product_options = await prisma.product_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_optionsFindUniqueArgs>(args: SelectSubset<T, product_optionsFindUniqueArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_optionsFindUniqueOrThrowArgs} args - Arguments to find a Product_options
     * @example
     * // Get one Product_options
     * const product_options = await prisma.product_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsFindFirstArgs} args - Arguments to find a Product_options
     * @example
     * // Get one Product_options
     * const product_options = await prisma.product_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_optionsFindFirstArgs>(args?: SelectSubset<T, product_optionsFindFirstArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsFindFirstOrThrowArgs} args - Arguments to find a Product_options
     * @example
     * // Get one Product_options
     * const product_options = await prisma.product_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_options
     * const product_options = await prisma.product_options.findMany()
     * 
     * // Get first 10 Product_options
     * const product_options = await prisma.product_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_optionsWithIdOnly = await prisma.product_options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_optionsFindManyArgs>(args?: SelectSubset<T, product_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_options.
     * @param {product_optionsCreateArgs} args - Arguments to create a Product_options.
     * @example
     * // Create one Product_options
     * const Product_options = await prisma.product_options.create({
     *   data: {
     *     // ... data to create a Product_options
     *   }
     * })
     * 
     */
    create<T extends product_optionsCreateArgs>(args: SelectSubset<T, product_optionsCreateArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_options.
     * @param {product_optionsCreateManyArgs} args - Arguments to create many Product_options.
     * @example
     * // Create many Product_options
     * const product_options = await prisma.product_options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_optionsCreateManyArgs>(args?: SelectSubset<T, product_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_options and returns the data saved in the database.
     * @param {product_optionsCreateManyAndReturnArgs} args - Arguments to create many Product_options.
     * @example
     * // Create many Product_options
     * const product_options = await prisma.product_options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_options and only return the `id`
     * const product_optionsWithIdOnly = await prisma.product_options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_optionsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_options.
     * @param {product_optionsDeleteArgs} args - Arguments to delete one Product_options.
     * @example
     * // Delete one Product_options
     * const Product_options = await prisma.product_options.delete({
     *   where: {
     *     // ... filter to delete one Product_options
     *   }
     * })
     * 
     */
    delete<T extends product_optionsDeleteArgs>(args: SelectSubset<T, product_optionsDeleteArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_options.
     * @param {product_optionsUpdateArgs} args - Arguments to update one Product_options.
     * @example
     * // Update one Product_options
     * const product_options = await prisma.product_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_optionsUpdateArgs>(args: SelectSubset<T, product_optionsUpdateArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_options.
     * @param {product_optionsDeleteManyArgs} args - Arguments to filter Product_options to delete.
     * @example
     * // Delete a few Product_options
     * const { count } = await prisma.product_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_optionsDeleteManyArgs>(args?: SelectSubset<T, product_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_options
     * const product_options = await prisma.product_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_optionsUpdateManyArgs>(args: SelectSubset<T, product_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_options and returns the data updated in the database.
     * @param {product_optionsUpdateManyAndReturnArgs} args - Arguments to update many Product_options.
     * @example
     * // Update many Product_options
     * const product_options = await prisma.product_options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_options and only return the `id`
     * const product_optionsWithIdOnly = await prisma.product_options.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_optionsUpdateManyAndReturnArgs>(args: SelectSubset<T, product_optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_options.
     * @param {product_optionsUpsertArgs} args - Arguments to update or create a Product_options.
     * @example
     * // Update or create a Product_options
     * const product_options = await prisma.product_options.upsert({
     *   create: {
     *     // ... data to create a Product_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_options we want to update
     *   }
     * })
     */
    upsert<T extends product_optionsUpsertArgs>(args: SelectSubset<T, product_optionsUpsertArgs<ExtArgs>>): Prisma__product_optionsClient<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsCountArgs} args - Arguments to filter Product_options to count.
     * @example
     * // Count the number of Product_options
     * const count = await prisma.product_options.count({
     *   where: {
     *     // ... the filter for the Product_options we want to count
     *   }
     * })
    **/
    count<T extends product_optionsCountArgs>(
      args?: Subset<T, product_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_optionsAggregateArgs>(args: Subset<T, Product_optionsAggregateArgs>): Prisma.PrismaPromise<GetProduct_optionsAggregateType<T>>

    /**
     * Group by Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_optionsGroupByArgs['orderBy'] }
        : { orderBy?: product_optionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_options model
   */
  readonly fields: product_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_options$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_options$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_options model
   */
  interface product_optionsFieldRefs {
    readonly id: FieldRef<"product_options", 'Int'>
    readonly product_id: FieldRef<"product_options", 'String'>
    readonly option_code: FieldRef<"product_options", 'String'>
    readonly name: FieldRef<"product_options", 'String'>
    readonly price: FieldRef<"product_options", 'Int'>
    readonly original_price: FieldRef<"product_options", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_options findUnique
   */
  export type product_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where: product_optionsWhereUniqueInput
  }

  /**
   * product_options findUniqueOrThrow
   */
  export type product_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where: product_optionsWhereUniqueInput
  }

  /**
   * product_options findFirst
   */
  export type product_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where?: product_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionsOrderByWithRelationInput | product_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_options.
     */
    cursor?: product_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_options.
     */
    distinct?: Product_optionsScalarFieldEnum | Product_optionsScalarFieldEnum[]
  }

  /**
   * product_options findFirstOrThrow
   */
  export type product_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where?: product_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionsOrderByWithRelationInput | product_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_options.
     */
    cursor?: product_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_options.
     */
    distinct?: Product_optionsScalarFieldEnum | Product_optionsScalarFieldEnum[]
  }

  /**
   * product_options findMany
   */
  export type product_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where?: product_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionsOrderByWithRelationInput | product_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_options.
     */
    cursor?: product_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    distinct?: Product_optionsScalarFieldEnum | Product_optionsScalarFieldEnum[]
  }

  /**
   * product_options create
   */
  export type product_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_options.
     */
    data?: XOR<product_optionsCreateInput, product_optionsUncheckedCreateInput>
  }

  /**
   * product_options createMany
   */
  export type product_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_options.
     */
    data: product_optionsCreateManyInput | product_optionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_options createManyAndReturn
   */
  export type product_optionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * The data used to create many product_options.
     */
    data: product_optionsCreateManyInput | product_optionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_options update
   */
  export type product_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_options.
     */
    data: XOR<product_optionsUpdateInput, product_optionsUncheckedUpdateInput>
    /**
     * Choose, which product_options to update.
     */
    where: product_optionsWhereUniqueInput
  }

  /**
   * product_options updateMany
   */
  export type product_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_options.
     */
    data: XOR<product_optionsUpdateManyMutationInput, product_optionsUncheckedUpdateManyInput>
    /**
     * Filter which product_options to update
     */
    where?: product_optionsWhereInput
    /**
     * Limit how many product_options to update.
     */
    limit?: number
  }

  /**
   * product_options updateManyAndReturn
   */
  export type product_optionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * The data used to update product_options.
     */
    data: XOR<product_optionsUpdateManyMutationInput, product_optionsUncheckedUpdateManyInput>
    /**
     * Filter which product_options to update
     */
    where?: product_optionsWhereInput
    /**
     * Limit how many product_options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_options upsert
   */
  export type product_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_options to update in case it exists.
     */
    where: product_optionsWhereUniqueInput
    /**
     * In case the product_options found by the `where` argument doesn't exist, create a new product_options with this data.
     */
    create: XOR<product_optionsCreateInput, product_optionsUncheckedCreateInput>
    /**
     * In case the product_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_optionsUpdateInput, product_optionsUncheckedUpdateInput>
  }

  /**
   * product_options delete
   */
  export type product_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    /**
     * Filter which product_options to delete.
     */
    where: product_optionsWhereUniqueInput
  }

  /**
   * product_options deleteMany
   */
  export type product_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_options to delete
     */
    where?: product_optionsWhereInput
    /**
     * Limit how many product_options to delete.
     */
    limit?: number
  }

  /**
   * product_options.products
   */
  export type product_options$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_options without action
   */
  export type product_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    original_price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    original_price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    long_description: string | null
    youtube_video_id: string | null
    price: number | null
    original_price: number | null
    thumbnail: string | null
    category: string | null
    created_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    long_description: string | null
    youtube_video_id: string | null
    price: number | null
    original_price: number | null
    thumbnail: string | null
    category: string | null
    created_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    long_description: number
    youtube_video_id: number
    price: number
    original_price: number
    thumbnail: number
    category: number
    created_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    original_price?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    original_price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    long_description?: true
    youtube_video_id?: true
    price?: true
    original_price?: true
    thumbnail?: true
    category?: true
    created_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    long_description?: true
    youtube_video_id?: true
    price?: true
    original_price?: true
    thumbnail?: true
    category?: true
    created_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    long_description?: true
    youtube_video_id?: true
    price?: true
    original_price?: true
    thumbnail?: true
    category?: true
    created_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    long_description: string | null
    youtube_video_id: string | null
    price: number
    original_price: number | null
    thumbnail: string | null
    category: string
    created_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    long_description?: boolean
    youtube_video_id?: boolean
    price?: boolean
    original_price?: boolean
    thumbnail?: boolean
    category?: boolean
    created_at?: boolean
    product_features?: boolean | products$product_featuresArgs<ExtArgs>
    product_guides?: boolean | products$product_guidesArgs<ExtArgs>
    product_options?: boolean | products$product_optionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    long_description?: boolean
    youtube_video_id?: boolean
    price?: boolean
    original_price?: boolean
    thumbnail?: boolean
    category?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    long_description?: boolean
    youtube_video_id?: boolean
    price?: boolean
    original_price?: boolean
    thumbnail?: boolean
    category?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    long_description?: boolean
    youtube_video_id?: boolean
    price?: boolean
    original_price?: boolean
    thumbnail?: boolean
    category?: boolean
    created_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "long_description" | "youtube_video_id" | "price" | "original_price" | "thumbnail" | "category" | "created_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_features?: boolean | products$product_featuresArgs<ExtArgs>
    product_guides?: boolean | products$product_guidesArgs<ExtArgs>
    product_options?: boolean | products$product_optionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      product_features: Prisma.$product_featuresPayload<ExtArgs>[]
      product_guides: Prisma.$product_guidesPayload<ExtArgs>[]
      product_options: Prisma.$product_optionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      long_description: string | null
      youtube_video_id: string | null
      price: number
      original_price: number | null
      thumbnail: string | null
      category: string
      created_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_features<T extends products$product_featuresArgs<ExtArgs> = {}>(args?: Subset<T, products$product_featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_guides<T extends products$product_guidesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_guidesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guidesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_options<T extends products$product_optionsArgs<ExtArgs> = {}>(args?: Subset<T, products$product_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly long_description: FieldRef<"products", 'String'>
    readonly youtube_video_id: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Int'>
    readonly original_price: FieldRef<"products", 'Int'>
    readonly thumbnail: FieldRef<"products", 'String'>
    readonly category: FieldRef<"products", 'String'>
    readonly created_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_features
   */
  export type products$product_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_features
     */
    select?: product_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_features
     */
    omit?: product_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_featuresInclude<ExtArgs> | null
    where?: product_featuresWhereInput
    orderBy?: product_featuresOrderByWithRelationInput | product_featuresOrderByWithRelationInput[]
    cursor?: product_featuresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_featuresScalarFieldEnum | Product_featuresScalarFieldEnum[]
  }

  /**
   * products.product_guides
   */
  export type products$product_guidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guides
     */
    select?: product_guidesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guides
     */
    omit?: product_guidesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guidesInclude<ExtArgs> | null
    where?: product_guidesWhereInput
    orderBy?: product_guidesOrderByWithRelationInput | product_guidesOrderByWithRelationInput[]
    cursor?: product_guidesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_guidesScalarFieldEnum | Product_guidesScalarFieldEnum[]
  }

  /**
   * products.product_options
   */
  export type products$product_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_options
     */
    select?: product_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_options
     */
    omit?: product_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionsInclude<ExtArgs> | null
    where?: product_optionsWhereInput
    orderBy?: product_optionsOrderByWithRelationInput | product_optionsOrderByWithRelationInput[]
    cursor?: product_optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_optionsScalarFieldEnum | Product_optionsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category_name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category_name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category_name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category_name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category_name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category_name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category_name: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    category_name?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_name", ExtArgs["result"]["category"]>

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_name: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly category_name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data?: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
  }


  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    order_item_id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    order_item_id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    option_id: string | null
    username: string | null
    password: string | null
    is_sold: boolean | null
    sold_at: Date | null
    order_item_id: number | null
    created_at: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    option_id: string | null
    username: string | null
    password: string | null
    is_sold: boolean | null
    sold_at: Date | null
    order_item_id: number | null
    created_at: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    product_id: number
    option_id: number
    username: number
    password: number
    is_sold: number
    sold_at: number
    order_item_id: number
    created_at: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    order_item_id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    order_item_id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    product_id?: true
    option_id?: true
    username?: true
    password?: true
    is_sold?: true
    sold_at?: true
    order_item_id?: true
    created_at?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    product_id?: true
    option_id?: true
    username?: true
    password?: true
    is_sold?: true
    sold_at?: true
    order_item_id?: true
    created_at?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    product_id?: true
    option_id?: true
    username?: true
    password?: true
    is_sold?: true
    sold_at?: true
    order_item_id?: true
    created_at?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold: boolean
    sold_at: Date | null
    order_item_id: number | null
    created_at: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_id?: boolean
    username?: boolean
    password?: boolean
    is_sold?: boolean
    sold_at?: boolean
    order_item_id?: boolean
    created_at?: boolean
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_id?: boolean
    username?: boolean
    password?: boolean
    is_sold?: boolean
    sold_at?: boolean
    order_item_id?: boolean
    created_at?: boolean
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    option_id?: boolean
    username?: boolean
    password?: boolean
    is_sold?: boolean
    sold_at?: boolean
    order_item_id?: boolean
    created_at?: boolean
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    id?: boolean
    product_id?: boolean
    option_id?: boolean
    username?: boolean
    password?: boolean
    is_sold?: boolean
    sold_at?: boolean
    order_item_id?: boolean
    created_at?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "option_id" | "username" | "password" | "is_sold" | "sold_at" | "order_item_id" | "created_at", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }
  export type accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }
  export type accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | account$order_itemArgs<ExtArgs>
  }

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string
      option_id: string
      username: string
      password: string
      is_sold: boolean
      sold_at: Date | null
      order_item_id: number | null
      created_at: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountCreateManyAndReturnArgs>(args?: SelectSubset<T, accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountUpdateManyAndReturnArgs>(args: SelectSubset<T, accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends account$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, account$order_itemArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'Int'>
    readonly product_id: FieldRef<"account", 'String'>
    readonly option_id: FieldRef<"account", 'String'>
    readonly username: FieldRef<"account", 'String'>
    readonly password: FieldRef<"account", 'String'>
    readonly is_sold: FieldRef<"account", 'Boolean'>
    readonly sold_at: FieldRef<"account", 'DateTime'>
    readonly order_item_id: FieldRef<"account", 'Int'>
    readonly created_at: FieldRef<"account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account createManyAndReturn
   */
  export type accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account updateManyAndReturn
   */
  export type accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account.order_item
   */
  export type account$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_code: number | null
    total_amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    order_code: number | null
    total_amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    order_code: number | null
    user_email: string | null
    total_amount: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    order_code: number | null
    user_email: string | null
    total_amount: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    order_code: number
    user_email: number
    total_amount: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_code?: true
    total_amount?: true
  }

  export type OrderSumAggregateInputType = {
    order_code?: true
    total_amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    order_code?: true
    user_email?: true
    total_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    order_code?: true
    user_email?: true
    total_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    order_code?: true
    user_email?: true
    total_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    order_code: number
    user_email: string | null
    total_amount: number
    status: string
    created_at: Date
    updated_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_code?: boolean
    user_email?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_item?: boolean | order$order_itemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_code?: boolean
    user_email?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_code?: boolean
    user_email?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
    order_code?: boolean
    user_email?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_code" | "user_email" | "total_amount" | "status" | "created_at" | "updated_at", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | order$order_itemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_code: number
      user_email: string | null
      total_amount: number
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends order$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, order$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
    readonly order_code: FieldRef<"order", 'Int'>
    readonly user_email: FieldRef<"order", 'String'>
    readonly total_amount: FieldRef<"order", 'Int'>
    readonly status: FieldRef<"order", 'String'>
    readonly created_at: FieldRef<"order", 'DateTime'>
    readonly updated_at: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.order_item
   */
  export type order$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    product_id: string | null
    productName: string | null
    option_id: string | null
    optionName: string | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    product_id: string | null
    productName: string | null
    option_id: string | null
    optionName: string | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    productName: number
    option_id: number
    optionName: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    productName?: true
    option_id?: true
    optionName?: true
    quantity?: true
    price?: true
  }

  export type Order_itemMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    productName?: true
    option_id?: true
    optionName?: true
    quantity?: true
    price?: true
  }

  export type Order_itemCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    productName?: true
    option_id?: true
    optionName?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    id: number
    order_id: string
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    productName?: boolean
    option_id?: boolean
    optionName?: boolean
    quantity?: boolean
    price?: boolean
    account?: boolean | order_item$accountArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    _count?: boolean | Order_itemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    productName?: boolean
    option_id?: boolean
    optionName?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    productName?: boolean
    option_id?: boolean
    optionName?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    productName?: boolean
    option_id?: boolean
    optionName?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "productName" | "option_id" | "optionName" | "quantity" | "price", ExtArgs["result"]["order_item"]>
  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | order_item$accountArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    _count?: boolean | Order_itemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>[]
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      product_id: string
      productName: string
      option_id: string
      optionName: string
      quantity: number
      price: number
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemFindUniqueArgs>(args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemFindFirstArgs>(args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemWithIdOnly = await prisma.order_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemFindManyArgs>(args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
     */
    create<T extends order_itemCreateArgs>(args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemCreateManyArgs>(args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemWithIdOnly = await prisma.order_item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
     */
    delete<T extends order_itemDeleteArgs>(args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemUpdateArgs>(args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemDeleteManyArgs>(args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemUpdateManyArgs>(args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `id`
     * const order_itemWithIdOnly = await prisma.order_item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     */
    upsert<T extends order_itemUpsertArgs>(args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends order_item$accountArgs<ExtArgs> = {}>(args?: Subset<T, order_item$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_item model
   */
  interface order_itemFieldRefs {
    readonly id: FieldRef<"order_item", 'Int'>
    readonly order_id: FieldRef<"order_item", 'String'>
    readonly product_id: FieldRef<"order_item", 'String'>
    readonly productName: FieldRef<"order_item", 'String'>
    readonly option_id: FieldRef<"order_item", 'String'>
    readonly optionName: FieldRef<"order_item", 'String'>
    readonly quantity: FieldRef<"order_item", 'Int'>
    readonly price: FieldRef<"order_item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_item createManyAndReturn
   */
  export type order_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_item updateManyAndReturn
   */
  export type order_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_item.account
   */
  export type order_item$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    where?: accountWhereInput
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    cursor?: accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    user_name: string | null
    password: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    user_name: string | null
    password: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    user_name: number
    password: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    user_name?: true
    password?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    user_name?: true
    password?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    user_name?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    user_name: string
    password: string
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    user_name?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "password" | "created_at", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_name: string
      password: string
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly user_name: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Hero_slidesScalarFieldEnum: {
    id: 'id',
    tag: 'tag',
    title: 'title',
    highlight: 'highlight',
    description: 'description',
    bg_image: 'bg_image',
    gradient: 'gradient',
    btn_color: 'btn_color'
  };

  export type Hero_slidesScalarFieldEnum = (typeof Hero_slidesScalarFieldEnum)[keyof typeof Hero_slidesScalarFieldEnum]


  export const Product_featuresScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    feature: 'feature'
  };

  export type Product_featuresScalarFieldEnum = (typeof Product_featuresScalarFieldEnum)[keyof typeof Product_featuresScalarFieldEnum]


  export const Product_guidesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    step_order: 'step_order',
    step_text: 'step_text'
  };

  export type Product_guidesScalarFieldEnum = (typeof Product_guidesScalarFieldEnum)[keyof typeof Product_guidesScalarFieldEnum]


  export const Product_optionsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    option_code: 'option_code',
    name: 'name',
    price: 'price',
    original_price: 'original_price'
  };

  export type Product_optionsScalarFieldEnum = (typeof Product_optionsScalarFieldEnum)[keyof typeof Product_optionsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    long_description: 'long_description',
    youtube_video_id: 'youtube_video_id',
    price: 'price',
    original_price: 'original_price',
    thumbnail: 'thumbnail',
    category: 'category',
    created_at: 'created_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    option_id: 'option_id',
    username: 'username',
    password: 'password',
    is_sold: 'is_sold',
    sold_at: 'sold_at',
    order_item_id: 'order_item_id',
    created_at: 'created_at'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    order_code: 'order_code',
    user_email: 'user_email',
    total_amount: 'total_amount',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    productName: 'productName',
    option_id: 'option_id',
    optionName: 'optionName',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    password: 'password',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type hero_slidesWhereInput = {
    AND?: hero_slidesWhereInput | hero_slidesWhereInput[]
    OR?: hero_slidesWhereInput[]
    NOT?: hero_slidesWhereInput | hero_slidesWhereInput[]
    id?: IntFilter<"hero_slides"> | number
    tag?: StringNullableFilter<"hero_slides"> | string | null
    title?: StringNullableFilter<"hero_slides"> | string | null
    highlight?: StringNullableFilter<"hero_slides"> | string | null
    description?: StringNullableFilter<"hero_slides"> | string | null
    bg_image?: StringNullableFilter<"hero_slides"> | string | null
    gradient?: StringNullableFilter<"hero_slides"> | string | null
    btn_color?: StringNullableFilter<"hero_slides"> | string | null
  }

  export type hero_slidesOrderByWithRelationInput = {
    id?: SortOrder
    tag?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bg_image?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    btn_color?: SortOrderInput | SortOrder
  }

  export type hero_slidesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hero_slidesWhereInput | hero_slidesWhereInput[]
    OR?: hero_slidesWhereInput[]
    NOT?: hero_slidesWhereInput | hero_slidesWhereInput[]
    tag?: StringNullableFilter<"hero_slides"> | string | null
    title?: StringNullableFilter<"hero_slides"> | string | null
    highlight?: StringNullableFilter<"hero_slides"> | string | null
    description?: StringNullableFilter<"hero_slides"> | string | null
    bg_image?: StringNullableFilter<"hero_slides"> | string | null
    gradient?: StringNullableFilter<"hero_slides"> | string | null
    btn_color?: StringNullableFilter<"hero_slides"> | string | null
  }, "id">

  export type hero_slidesOrderByWithAggregationInput = {
    id?: SortOrder
    tag?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bg_image?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    btn_color?: SortOrderInput | SortOrder
    _count?: hero_slidesCountOrderByAggregateInput
    _avg?: hero_slidesAvgOrderByAggregateInput
    _max?: hero_slidesMaxOrderByAggregateInput
    _min?: hero_slidesMinOrderByAggregateInput
    _sum?: hero_slidesSumOrderByAggregateInput
  }

  export type hero_slidesScalarWhereWithAggregatesInput = {
    AND?: hero_slidesScalarWhereWithAggregatesInput | hero_slidesScalarWhereWithAggregatesInput[]
    OR?: hero_slidesScalarWhereWithAggregatesInput[]
    NOT?: hero_slidesScalarWhereWithAggregatesInput | hero_slidesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hero_slides"> | number
    tag?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    title?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    highlight?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    description?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    bg_image?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    gradient?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
    btn_color?: StringNullableWithAggregatesFilter<"hero_slides"> | string | null
  }

  export type product_featuresWhereInput = {
    AND?: product_featuresWhereInput | product_featuresWhereInput[]
    OR?: product_featuresWhereInput[]
    NOT?: product_featuresWhereInput | product_featuresWhereInput[]
    id?: IntFilter<"product_features"> | number
    product_id?: StringNullableFilter<"product_features"> | string | null
    feature?: StringFilter<"product_features"> | string
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_featuresOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    feature?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_featuresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_featuresWhereInput | product_featuresWhereInput[]
    OR?: product_featuresWhereInput[]
    NOT?: product_featuresWhereInput | product_featuresWhereInput[]
    product_id?: StringNullableFilter<"product_features"> | string | null
    feature?: StringFilter<"product_features"> | string
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type product_featuresOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    feature?: SortOrder
    _count?: product_featuresCountOrderByAggregateInput
    _avg?: product_featuresAvgOrderByAggregateInput
    _max?: product_featuresMaxOrderByAggregateInput
    _min?: product_featuresMinOrderByAggregateInput
    _sum?: product_featuresSumOrderByAggregateInput
  }

  export type product_featuresScalarWhereWithAggregatesInput = {
    AND?: product_featuresScalarWhereWithAggregatesInput | product_featuresScalarWhereWithAggregatesInput[]
    OR?: product_featuresScalarWhereWithAggregatesInput[]
    NOT?: product_featuresScalarWhereWithAggregatesInput | product_featuresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_features"> | number
    product_id?: StringNullableWithAggregatesFilter<"product_features"> | string | null
    feature?: StringWithAggregatesFilter<"product_features"> | string
  }

  export type product_guidesWhereInput = {
    AND?: product_guidesWhereInput | product_guidesWhereInput[]
    OR?: product_guidesWhereInput[]
    NOT?: product_guidesWhereInput | product_guidesWhereInput[]
    id?: IntFilter<"product_guides"> | number
    product_id?: StringNullableFilter<"product_guides"> | string | null
    step_order?: IntNullableFilter<"product_guides"> | number | null
    step_text?: StringNullableFilter<"product_guides"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_guidesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    step_order?: SortOrderInput | SortOrder
    step_text?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_guidesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_guidesWhereInput | product_guidesWhereInput[]
    OR?: product_guidesWhereInput[]
    NOT?: product_guidesWhereInput | product_guidesWhereInput[]
    product_id?: StringNullableFilter<"product_guides"> | string | null
    step_order?: IntNullableFilter<"product_guides"> | number | null
    step_text?: StringNullableFilter<"product_guides"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type product_guidesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    step_order?: SortOrderInput | SortOrder
    step_text?: SortOrderInput | SortOrder
    _count?: product_guidesCountOrderByAggregateInput
    _avg?: product_guidesAvgOrderByAggregateInput
    _max?: product_guidesMaxOrderByAggregateInput
    _min?: product_guidesMinOrderByAggregateInput
    _sum?: product_guidesSumOrderByAggregateInput
  }

  export type product_guidesScalarWhereWithAggregatesInput = {
    AND?: product_guidesScalarWhereWithAggregatesInput | product_guidesScalarWhereWithAggregatesInput[]
    OR?: product_guidesScalarWhereWithAggregatesInput[]
    NOT?: product_guidesScalarWhereWithAggregatesInput | product_guidesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_guides"> | number
    product_id?: StringNullableWithAggregatesFilter<"product_guides"> | string | null
    step_order?: IntNullableWithAggregatesFilter<"product_guides"> | number | null
    step_text?: StringNullableWithAggregatesFilter<"product_guides"> | string | null
  }

  export type product_optionsWhereInput = {
    AND?: product_optionsWhereInput | product_optionsWhereInput[]
    OR?: product_optionsWhereInput[]
    NOT?: product_optionsWhereInput | product_optionsWhereInput[]
    id?: IntFilter<"product_options"> | number
    product_id?: StringNullableFilter<"product_options"> | string | null
    option_code?: StringNullableFilter<"product_options"> | string | null
    name?: StringNullableFilter<"product_options"> | string | null
    price?: IntNullableFilter<"product_options"> | number | null
    original_price?: IntNullableFilter<"product_options"> | number | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_optionsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    option_code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    original_price?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_optionsWhereInput | product_optionsWhereInput[]
    OR?: product_optionsWhereInput[]
    NOT?: product_optionsWhereInput | product_optionsWhereInput[]
    product_id?: StringNullableFilter<"product_options"> | string | null
    option_code?: StringNullableFilter<"product_options"> | string | null
    name?: StringNullableFilter<"product_options"> | string | null
    price?: IntNullableFilter<"product_options"> | number | null
    original_price?: IntNullableFilter<"product_options"> | number | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type product_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    option_code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    original_price?: SortOrderInput | SortOrder
    _count?: product_optionsCountOrderByAggregateInput
    _avg?: product_optionsAvgOrderByAggregateInput
    _max?: product_optionsMaxOrderByAggregateInput
    _min?: product_optionsMinOrderByAggregateInput
    _sum?: product_optionsSumOrderByAggregateInput
  }

  export type product_optionsScalarWhereWithAggregatesInput = {
    AND?: product_optionsScalarWhereWithAggregatesInput | product_optionsScalarWhereWithAggregatesInput[]
    OR?: product_optionsScalarWhereWithAggregatesInput[]
    NOT?: product_optionsScalarWhereWithAggregatesInput | product_optionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_options"> | number
    product_id?: StringNullableWithAggregatesFilter<"product_options"> | string | null
    option_code?: StringNullableWithAggregatesFilter<"product_options"> | string | null
    name?: StringNullableWithAggregatesFilter<"product_options"> | string | null
    price?: IntNullableWithAggregatesFilter<"product_options"> | number | null
    original_price?: IntNullableWithAggregatesFilter<"product_options"> | number | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    long_description?: StringNullableFilter<"products"> | string | null
    youtube_video_id?: StringNullableFilter<"products"> | string | null
    price?: IntFilter<"products"> | number
    original_price?: IntNullableFilter<"products"> | number | null
    thumbnail?: StringNullableFilter<"products"> | string | null
    category?: StringFilter<"products"> | string
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    product_features?: Product_featuresListRelationFilter
    product_guides?: Product_guidesListRelationFilter
    product_options?: Product_optionsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    long_description?: SortOrderInput | SortOrder
    youtube_video_id?: SortOrderInput | SortOrder
    price?: SortOrder
    original_price?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    category?: SortOrder
    created_at?: SortOrderInput | SortOrder
    product_features?: product_featuresOrderByRelationAggregateInput
    product_guides?: product_guidesOrderByRelationAggregateInput
    product_options?: product_optionsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    long_description?: StringNullableFilter<"products"> | string | null
    youtube_video_id?: StringNullableFilter<"products"> | string | null
    price?: IntFilter<"products"> | number
    original_price?: IntNullableFilter<"products"> | number | null
    thumbnail?: StringNullableFilter<"products"> | string | null
    category?: StringFilter<"products"> | string
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    product_features?: Product_featuresListRelationFilter
    product_guides?: Product_guidesListRelationFilter
    product_options?: Product_optionsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    long_description?: SortOrderInput | SortOrder
    youtube_video_id?: SortOrderInput | SortOrder
    price?: SortOrder
    original_price?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    category?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    long_description?: StringNullableWithAggregatesFilter<"products"> | string | null
    youtube_video_id?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: IntWithAggregatesFilter<"products"> | number
    original_price?: IntNullableWithAggregatesFilter<"products"> | number | null
    thumbnail?: StringNullableWithAggregatesFilter<"products"> | string | null
    category?: StringWithAggregatesFilter<"products"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    category_name?: StringNullableFilter<"category"> | string | null
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrderInput | SortOrder
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    category_name?: StringNullableFilter<"category"> | string | null
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    category_name?: StringNullableWithAggregatesFilter<"category"> | string | null
  }

  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: IntFilter<"account"> | number
    product_id?: StringFilter<"account"> | string
    option_id?: StringFilter<"account"> | string
    username?: StringFilter<"account"> | string
    password?: StringFilter<"account"> | string
    is_sold?: BoolFilter<"account"> | boolean
    sold_at?: DateTimeNullableFilter<"account"> | Date | string | null
    order_item_id?: IntNullableFilter<"account"> | number | null
    created_at?: DateTimeFilter<"account"> | Date | string
    order_item?: XOR<Order_itemNullableScalarRelationFilter, order_itemWhereInput> | null
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_sold?: SortOrder
    sold_at?: SortOrderInput | SortOrder
    order_item_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    order_item?: order_itemOrderByWithRelationInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    product_id?: StringFilter<"account"> | string
    option_id?: StringFilter<"account"> | string
    username?: StringFilter<"account"> | string
    password?: StringFilter<"account"> | string
    is_sold?: BoolFilter<"account"> | boolean
    sold_at?: DateTimeNullableFilter<"account"> | Date | string | null
    order_item_id?: IntNullableFilter<"account"> | number | null
    created_at?: DateTimeFilter<"account"> | Date | string
    order_item?: XOR<Order_itemNullableScalarRelationFilter, order_itemWhereInput> | null
  }, "id">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_sold?: SortOrder
    sold_at?: SortOrderInput | SortOrder
    order_item_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"account"> | number
    product_id?: StringWithAggregatesFilter<"account"> | string
    option_id?: StringWithAggregatesFilter<"account"> | string
    username?: StringWithAggregatesFilter<"account"> | string
    password?: StringWithAggregatesFilter<"account"> | string
    is_sold?: BoolWithAggregatesFilter<"account"> | boolean
    sold_at?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    order_item_id?: IntNullableWithAggregatesFilter<"account"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"account"> | Date | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
    order_code?: IntFilter<"order"> | number
    user_email?: StringNullableFilter<"order"> | string | null
    total_amount?: IntFilter<"order"> | number
    status?: StringFilter<"order"> | string
    created_at?: DateTimeFilter<"order"> | Date | string
    updated_at?: DateTimeFilter<"order"> | Date | string
    order_item?: Order_itemListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    order_code?: SortOrder
    user_email?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_item?: order_itemOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_code?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    user_email?: StringNullableFilter<"order"> | string | null
    total_amount?: IntFilter<"order"> | number
    status?: StringFilter<"order"> | string
    created_at?: DateTimeFilter<"order"> | Date | string
    updated_at?: DateTimeFilter<"order"> | Date | string
    order_item?: Order_itemListRelationFilter
  }, "id" | "order_code">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    order_code?: SortOrder
    user_email?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
    order_code?: IntWithAggregatesFilter<"order"> | number
    user_email?: StringNullableWithAggregatesFilter<"order"> | string | null
    total_amount?: IntWithAggregatesFilter<"order"> | number
    status?: StringWithAggregatesFilter<"order"> | string
    created_at?: DateTimeWithAggregatesFilter<"order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: StringFilter<"order_item"> | string
    product_id?: StringFilter<"order_item"> | string
    productName?: StringFilter<"order_item"> | string
    option_id?: StringFilter<"order_item"> | string
    optionName?: StringFilter<"order_item"> | string
    quantity?: IntFilter<"order_item"> | number
    price?: IntFilter<"order_item"> | number
    account?: AccountListRelationFilter
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }

  export type order_itemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    productName?: SortOrder
    option_id?: SortOrder
    optionName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    account?: accountOrderByRelationAggregateInput
    order?: orderOrderByWithRelationInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_id?: StringFilter<"order_item"> | string
    product_id?: StringFilter<"order_item"> | string
    productName?: StringFilter<"order_item"> | string
    option_id?: StringFilter<"order_item"> | string
    optionName?: StringFilter<"order_item"> | string
    quantity?: IntFilter<"order_item"> | number
    price?: IntFilter<"order_item"> | number
    account?: AccountListRelationFilter
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }, "id">

  export type order_itemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    productName?: SortOrder
    option_id?: SortOrder
    optionName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_item"> | number
    order_id?: StringWithAggregatesFilter<"order_item"> | string
    product_id?: StringWithAggregatesFilter<"order_item"> | string
    productName?: StringWithAggregatesFilter<"order_item"> | string
    option_id?: StringWithAggregatesFilter<"order_item"> | string
    optionName?: StringWithAggregatesFilter<"order_item"> | string
    quantity?: IntWithAggregatesFilter<"order_item"> | number
    price?: IntWithAggregatesFilter<"order_item"> | number
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    user_name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_name?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "user_name">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    user_name?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type hero_slidesCreateInput = {
    tag?: string | null
    title?: string | null
    highlight?: string | null
    description?: string | null
    bg_image?: string | null
    gradient?: string | null
    btn_color?: string | null
  }

  export type hero_slidesUncheckedCreateInput = {
    id?: number
    tag?: string | null
    title?: string | null
    highlight?: string | null
    description?: string | null
    bg_image?: string | null
    gradient?: string | null
    btn_color?: string | null
  }

  export type hero_slidesUpdateInput = {
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bg_image?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    btn_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hero_slidesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bg_image?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    btn_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hero_slidesCreateManyInput = {
    id?: number
    tag?: string | null
    title?: string | null
    highlight?: string | null
    description?: string | null
    bg_image?: string | null
    gradient?: string | null
    btn_color?: string | null
  }

  export type hero_slidesUpdateManyMutationInput = {
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bg_image?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    btn_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hero_slidesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bg_image?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    btn_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_featuresCreateInput = {
    feature: string
    products?: productsCreateNestedOneWithoutProduct_featuresInput
  }

  export type product_featuresUncheckedCreateInput = {
    id?: number
    product_id?: string | null
    feature: string
  }

  export type product_featuresUpdateInput = {
    feature?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateOneWithoutProduct_featuresNestedInput
  }

  export type product_featuresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_featuresCreateManyInput = {
    id?: number
    product_id?: string | null
    feature: string
  }

  export type product_featuresUpdateManyMutationInput = {
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_featuresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_guidesCreateInput = {
    step_order?: number | null
    step_text?: string | null
    products?: productsCreateNestedOneWithoutProduct_guidesInput
  }

  export type product_guidesUncheckedCreateInput = {
    id?: number
    product_id?: string | null
    step_order?: number | null
    step_text?: string | null
  }

  export type product_guidesUpdateInput = {
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateOneWithoutProduct_guidesNestedInput
  }

  export type product_guidesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_guidesCreateManyInput = {
    id?: number
    product_id?: string | null
    step_order?: number | null
    step_text?: string | null
  }

  export type product_guidesUpdateManyMutationInput = {
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_guidesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_optionsCreateInput = {
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
    products?: productsCreateNestedOneWithoutProduct_optionsInput
  }

  export type product_optionsUncheckedCreateInput = {
    id?: number
    product_id?: string | null
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
  }

  export type product_optionsUpdateInput = {
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneWithoutProduct_optionsNestedInput
  }

  export type product_optionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_optionsCreateManyInput = {
    id?: number
    product_id?: string | null
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
  }

  export type product_optionsUpdateManyMutationInput = {
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_optionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresCreateNestedManyWithoutProductsInput
    product_guides?: product_guidesCreateNestedManyWithoutProductsInput
    product_options?: product_optionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresUncheckedCreateNestedManyWithoutProductsInput
    product_guides?: product_guidesUncheckedCreateNestedManyWithoutProductsInput
    product_options?: product_optionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUpdateManyWithoutProductsNestedInput
    product_guides?: product_guidesUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUncheckedUpdateManyWithoutProductsNestedInput
    product_guides?: product_guidesUncheckedUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoryCreateInput = {
    category_name?: string | null
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    category_name?: string | null
  }

  export type categoryUpdateInput = {
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateManyInput = {
    id?: number
    category_name?: string | null
  }

  export type categoryUpdateManyMutationInput = {
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountCreateInput = {
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    created_at?: Date | string
    order_item?: order_itemCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    id?: number
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    order_item_id?: number | null
    created_at?: Date | string
  }

  export type accountUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUpdateOneWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateManyInput = {
    id?: number
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    order_item_id?: number | null
    created_at?: Date | string
  }

  export type accountUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateInput = {
    id?: string
    order_code: number
    user_email?: string | null
    total_amount: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    order_item?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: string
    order_code: number
    user_email?: string | null
    total_amount: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: string
    order_code: number
    user_email?: string | null
    total_amount: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateInput = {
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    account?: accountCreateNestedManyWithoutOrder_itemInput
    order: orderCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateInput = {
    id?: number
    order_id: string
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    account?: accountUncheckedCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    account?: accountUpdateManyWithoutOrder_itemNestedInput
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    account?: accountUncheckedUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemCreateManyInput = {
    id?: number
    order_id: string
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
  }

  export type order_itemUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type adminCreateInput = {
    user_name: string
    password: string
    created_at?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    user_name: string
    password: string
    created_at?: Date | string
  }

  export type adminUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    user_name: string
    password: string
    created_at?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type hero_slidesCountOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    highlight?: SortOrder
    description?: SortOrder
    bg_image?: SortOrder
    gradient?: SortOrder
    btn_color?: SortOrder
  }

  export type hero_slidesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hero_slidesMaxOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    highlight?: SortOrder
    description?: SortOrder
    bg_image?: SortOrder
    gradient?: SortOrder
    btn_color?: SortOrder
  }

  export type hero_slidesMinOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    highlight?: SortOrder
    description?: SortOrder
    bg_image?: SortOrder
    gradient?: SortOrder
    btn_color?: SortOrder
  }

  export type hero_slidesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type product_featuresCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    feature?: SortOrder
  }

  export type product_featuresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type product_featuresMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    feature?: SortOrder
  }

  export type product_featuresMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    feature?: SortOrder
  }

  export type product_featuresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type product_guidesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    step_order?: SortOrder
    step_text?: SortOrder
  }

  export type product_guidesAvgOrderByAggregateInput = {
    id?: SortOrder
    step_order?: SortOrder
  }

  export type product_guidesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    step_order?: SortOrder
    step_text?: SortOrder
  }

  export type product_guidesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    step_order?: SortOrder
    step_text?: SortOrder
  }

  export type product_guidesSumOrderByAggregateInput = {
    id?: SortOrder
    step_order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type product_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_code?: SortOrder
    name?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
  }

  export type product_optionsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
  }

  export type product_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_code?: SortOrder
    name?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
  }

  export type product_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_code?: SortOrder
    name?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
  }

  export type product_optionsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Product_featuresListRelationFilter = {
    every?: product_featuresWhereInput
    some?: product_featuresWhereInput
    none?: product_featuresWhereInput
  }

  export type Product_guidesListRelationFilter = {
    every?: product_guidesWhereInput
    some?: product_guidesWhereInput
    none?: product_guidesWhereInput
  }

  export type Product_optionsListRelationFilter = {
    every?: product_optionsWhereInput
    some?: product_optionsWhereInput
    none?: product_optionsWhereInput
  }

  export type product_featuresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_guidesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    youtube_video_id?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    original_price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    youtube_video_id?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    long_description?: SortOrder
    youtube_video_id?: SortOrder
    price?: SortOrder
    original_price?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    original_price?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Order_itemNullableScalarRelationFilter = {
    is?: order_itemWhereInput | null
    isNot?: order_itemWhereInput | null
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_sold?: SortOrder
    sold_at?: SortOrder
    order_item_id?: SortOrder
    created_at?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    id?: SortOrder
    order_item_id?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_sold?: SortOrder
    sold_at?: SortOrder
    order_item_id?: SortOrder
    created_at?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    option_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_sold?: SortOrder
    sold_at?: SortOrder
    order_item_id?: SortOrder
    created_at?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    id?: SortOrder
    order_item_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    order_code?: SortOrder
    user_email?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    order_code?: SortOrder
    total_amount?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_code?: SortOrder
    user_email?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    order_code?: SortOrder
    user_email?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    order_code?: SortOrder
    total_amount?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: accountWhereInput
    some?: accountWhereInput
    none?: accountWhereInput
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    productName?: SortOrder
    option_id?: SortOrder
    optionName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    productName?: SortOrder
    option_id?: SortOrder
    optionName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    productName?: SortOrder
    option_id?: SortOrder
    optionName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsCreateNestedOneWithoutProduct_featuresInput = {
    create?: XOR<productsCreateWithoutProduct_featuresInput, productsUncheckedCreateWithoutProduct_featuresInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_featuresInput
    connect?: productsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productsUpdateOneWithoutProduct_featuresNestedInput = {
    create?: XOR<productsCreateWithoutProduct_featuresInput, productsUncheckedCreateWithoutProduct_featuresInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_featuresInput
    upsert?: productsUpsertWithoutProduct_featuresInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_featuresInput, productsUpdateWithoutProduct_featuresInput>, productsUncheckedUpdateWithoutProduct_featuresInput>
  }

  export type productsCreateNestedOneWithoutProduct_guidesInput = {
    create?: XOR<productsCreateWithoutProduct_guidesInput, productsUncheckedCreateWithoutProduct_guidesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_guidesInput
    connect?: productsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneWithoutProduct_guidesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_guidesInput, productsUncheckedCreateWithoutProduct_guidesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_guidesInput
    upsert?: productsUpsertWithoutProduct_guidesInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_guidesInput, productsUpdateWithoutProduct_guidesInput>, productsUncheckedUpdateWithoutProduct_guidesInput>
  }

  export type productsCreateNestedOneWithoutProduct_optionsInput = {
    create?: XOR<productsCreateWithoutProduct_optionsInput, productsUncheckedCreateWithoutProduct_optionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_optionsInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneWithoutProduct_optionsNestedInput = {
    create?: XOR<productsCreateWithoutProduct_optionsInput, productsUncheckedCreateWithoutProduct_optionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_optionsInput
    upsert?: productsUpsertWithoutProduct_optionsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_optionsInput, productsUpdateWithoutProduct_optionsInput>, productsUncheckedUpdateWithoutProduct_optionsInput>
  }

  export type product_featuresCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput> | product_featuresCreateWithoutProductsInput[] | product_featuresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_featuresCreateOrConnectWithoutProductsInput | product_featuresCreateOrConnectWithoutProductsInput[]
    createMany?: product_featuresCreateManyProductsInputEnvelope
    connect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
  }

  export type product_guidesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput> | product_guidesCreateWithoutProductsInput[] | product_guidesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_guidesCreateOrConnectWithoutProductsInput | product_guidesCreateOrConnectWithoutProductsInput[]
    createMany?: product_guidesCreateManyProductsInputEnvelope
    connect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
  }

  export type product_optionsCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput> | product_optionsCreateWithoutProductsInput[] | product_optionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_optionsCreateOrConnectWithoutProductsInput | product_optionsCreateOrConnectWithoutProductsInput[]
    createMany?: product_optionsCreateManyProductsInputEnvelope
    connect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
  }

  export type product_featuresUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput> | product_featuresCreateWithoutProductsInput[] | product_featuresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_featuresCreateOrConnectWithoutProductsInput | product_featuresCreateOrConnectWithoutProductsInput[]
    createMany?: product_featuresCreateManyProductsInputEnvelope
    connect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
  }

  export type product_guidesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput> | product_guidesCreateWithoutProductsInput[] | product_guidesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_guidesCreateOrConnectWithoutProductsInput | product_guidesCreateOrConnectWithoutProductsInput[]
    createMany?: product_guidesCreateManyProductsInputEnvelope
    connect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
  }

  export type product_optionsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput> | product_optionsCreateWithoutProductsInput[] | product_optionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_optionsCreateOrConnectWithoutProductsInput | product_optionsCreateOrConnectWithoutProductsInput[]
    createMany?: product_optionsCreateManyProductsInputEnvelope
    connect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type product_featuresUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput> | product_featuresCreateWithoutProductsInput[] | product_featuresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_featuresCreateOrConnectWithoutProductsInput | product_featuresCreateOrConnectWithoutProductsInput[]
    upsert?: product_featuresUpsertWithWhereUniqueWithoutProductsInput | product_featuresUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_featuresCreateManyProductsInputEnvelope
    set?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    disconnect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    delete?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    connect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    update?: product_featuresUpdateWithWhereUniqueWithoutProductsInput | product_featuresUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_featuresUpdateManyWithWhereWithoutProductsInput | product_featuresUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_featuresScalarWhereInput | product_featuresScalarWhereInput[]
  }

  export type product_guidesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput> | product_guidesCreateWithoutProductsInput[] | product_guidesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_guidesCreateOrConnectWithoutProductsInput | product_guidesCreateOrConnectWithoutProductsInput[]
    upsert?: product_guidesUpsertWithWhereUniqueWithoutProductsInput | product_guidesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_guidesCreateManyProductsInputEnvelope
    set?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    disconnect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    delete?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    connect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    update?: product_guidesUpdateWithWhereUniqueWithoutProductsInput | product_guidesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_guidesUpdateManyWithWhereWithoutProductsInput | product_guidesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_guidesScalarWhereInput | product_guidesScalarWhereInput[]
  }

  export type product_optionsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput> | product_optionsCreateWithoutProductsInput[] | product_optionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_optionsCreateOrConnectWithoutProductsInput | product_optionsCreateOrConnectWithoutProductsInput[]
    upsert?: product_optionsUpsertWithWhereUniqueWithoutProductsInput | product_optionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_optionsCreateManyProductsInputEnvelope
    set?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    disconnect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    delete?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    connect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    update?: product_optionsUpdateWithWhereUniqueWithoutProductsInput | product_optionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_optionsUpdateManyWithWhereWithoutProductsInput | product_optionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_optionsScalarWhereInput | product_optionsScalarWhereInput[]
  }

  export type product_featuresUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput> | product_featuresCreateWithoutProductsInput[] | product_featuresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_featuresCreateOrConnectWithoutProductsInput | product_featuresCreateOrConnectWithoutProductsInput[]
    upsert?: product_featuresUpsertWithWhereUniqueWithoutProductsInput | product_featuresUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_featuresCreateManyProductsInputEnvelope
    set?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    disconnect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    delete?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    connect?: product_featuresWhereUniqueInput | product_featuresWhereUniqueInput[]
    update?: product_featuresUpdateWithWhereUniqueWithoutProductsInput | product_featuresUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_featuresUpdateManyWithWhereWithoutProductsInput | product_featuresUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_featuresScalarWhereInput | product_featuresScalarWhereInput[]
  }

  export type product_guidesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput> | product_guidesCreateWithoutProductsInput[] | product_guidesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_guidesCreateOrConnectWithoutProductsInput | product_guidesCreateOrConnectWithoutProductsInput[]
    upsert?: product_guidesUpsertWithWhereUniqueWithoutProductsInput | product_guidesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_guidesCreateManyProductsInputEnvelope
    set?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    disconnect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    delete?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    connect?: product_guidesWhereUniqueInput | product_guidesWhereUniqueInput[]
    update?: product_guidesUpdateWithWhereUniqueWithoutProductsInput | product_guidesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_guidesUpdateManyWithWhereWithoutProductsInput | product_guidesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_guidesScalarWhereInput | product_guidesScalarWhereInput[]
  }

  export type product_optionsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput> | product_optionsCreateWithoutProductsInput[] | product_optionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_optionsCreateOrConnectWithoutProductsInput | product_optionsCreateOrConnectWithoutProductsInput[]
    upsert?: product_optionsUpsertWithWhereUniqueWithoutProductsInput | product_optionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_optionsCreateManyProductsInputEnvelope
    set?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    disconnect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    delete?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    connect?: product_optionsWhereUniqueInput | product_optionsWhereUniqueInput[]
    update?: product_optionsUpdateWithWhereUniqueWithoutProductsInput | product_optionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_optionsUpdateManyWithWhereWithoutProductsInput | product_optionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_optionsScalarWhereInput | product_optionsScalarWhereInput[]
  }

  export type order_itemCreateNestedOneWithoutAccountInput = {
    create?: XOR<order_itemCreateWithoutAccountInput, order_itemUncheckedCreateWithoutAccountInput>
    connectOrCreate?: order_itemCreateOrConnectWithoutAccountInput
    connect?: order_itemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type order_itemUpdateOneWithoutAccountNestedInput = {
    create?: XOR<order_itemCreateWithoutAccountInput, order_itemUncheckedCreateWithoutAccountInput>
    connectOrCreate?: order_itemCreateOrConnectWithoutAccountInput
    upsert?: order_itemUpsertWithoutAccountInput
    disconnect?: order_itemWhereInput | boolean
    delete?: order_itemWhereInput | boolean
    connect?: order_itemWhereUniqueInput
    update?: XOR<XOR<order_itemUpdateToOneWithWhereWithoutAccountInput, order_itemUpdateWithoutAccountInput>, order_itemUncheckedUpdateWithoutAccountInput>
  }

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type accountCreateNestedManyWithoutOrder_itemInput = {
    create?: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput> | accountCreateWithoutOrder_itemInput[] | accountUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: accountCreateOrConnectWithoutOrder_itemInput | accountCreateOrConnectWithoutOrder_itemInput[]
    createMany?: accountCreateManyOrder_itemInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type orderCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput
    connect?: orderWhereUniqueInput
  }

  export type accountUncheckedCreateNestedManyWithoutOrder_itemInput = {
    create?: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput> | accountCreateWithoutOrder_itemInput[] | accountUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: accountCreateOrConnectWithoutOrder_itemInput | accountCreateOrConnectWithoutOrder_itemInput[]
    createMany?: accountCreateManyOrder_itemInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type accountUpdateManyWithoutOrder_itemNestedInput = {
    create?: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput> | accountCreateWithoutOrder_itemInput[] | accountUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: accountCreateOrConnectWithoutOrder_itemInput | accountCreateOrConnectWithoutOrder_itemInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutOrder_itemInput | accountUpsertWithWhereUniqueWithoutOrder_itemInput[]
    createMany?: accountCreateManyOrder_itemInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutOrder_itemInput | accountUpdateWithWhereUniqueWithoutOrder_itemInput[]
    updateMany?: accountUpdateManyWithWhereWithoutOrder_itemInput | accountUpdateManyWithWhereWithoutOrder_itemInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type orderUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput
    upsert?: orderUpsertWithoutOrder_itemInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrder_itemInput, orderUpdateWithoutOrder_itemInput>, orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type accountUncheckedUpdateManyWithoutOrder_itemNestedInput = {
    create?: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput> | accountCreateWithoutOrder_itemInput[] | accountUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: accountCreateOrConnectWithoutOrder_itemInput | accountCreateOrConnectWithoutOrder_itemInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutOrder_itemInput | accountUpsertWithWhereUniqueWithoutOrder_itemInput[]
    createMany?: accountCreateManyOrder_itemInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutOrder_itemInput | accountUpdateWithWhereUniqueWithoutOrder_itemInput[]
    updateMany?: accountUpdateManyWithWhereWithoutOrder_itemInput | accountUpdateManyWithWhereWithoutOrder_itemInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type productsCreateWithoutProduct_featuresInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_guides?: product_guidesCreateNestedManyWithoutProductsInput
    product_options?: product_optionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_featuresInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_guides?: product_guidesUncheckedCreateNestedManyWithoutProductsInput
    product_options?: product_optionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_featuresInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_featuresInput, productsUncheckedCreateWithoutProduct_featuresInput>
  }

  export type productsUpsertWithoutProduct_featuresInput = {
    update: XOR<productsUpdateWithoutProduct_featuresInput, productsUncheckedUpdateWithoutProduct_featuresInput>
    create: XOR<productsCreateWithoutProduct_featuresInput, productsUncheckedCreateWithoutProduct_featuresInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_featuresInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_featuresInput, productsUncheckedUpdateWithoutProduct_featuresInput>
  }

  export type productsUpdateWithoutProduct_featuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_guides?: product_guidesUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_featuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_guides?: product_guidesUncheckedUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateWithoutProduct_guidesInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresCreateNestedManyWithoutProductsInput
    product_options?: product_optionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_guidesInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresUncheckedCreateNestedManyWithoutProductsInput
    product_options?: product_optionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_guidesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_guidesInput, productsUncheckedCreateWithoutProduct_guidesInput>
  }

  export type productsUpsertWithoutProduct_guidesInput = {
    update: XOR<productsUpdateWithoutProduct_guidesInput, productsUncheckedUpdateWithoutProduct_guidesInput>
    create: XOR<productsCreateWithoutProduct_guidesInput, productsUncheckedCreateWithoutProduct_guidesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_guidesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_guidesInput, productsUncheckedUpdateWithoutProduct_guidesInput>
  }

  export type productsUpdateWithoutProduct_guidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_guidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUncheckedUpdateManyWithoutProductsNestedInput
    product_options?: product_optionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateWithoutProduct_optionsInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresCreateNestedManyWithoutProductsInput
    product_guides?: product_guidesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_optionsInput = {
    id: string
    name: string
    description?: string | null
    long_description?: string | null
    youtube_video_id?: string | null
    price: number
    original_price?: number | null
    thumbnail?: string | null
    category: string
    created_at?: Date | string | null
    product_features?: product_featuresUncheckedCreateNestedManyWithoutProductsInput
    product_guides?: product_guidesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_optionsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_optionsInput, productsUncheckedCreateWithoutProduct_optionsInput>
  }

  export type productsUpsertWithoutProduct_optionsInput = {
    update: XOR<productsUpdateWithoutProduct_optionsInput, productsUncheckedUpdateWithoutProduct_optionsInput>
    create: XOR<productsCreateWithoutProduct_optionsInput, productsUncheckedCreateWithoutProduct_optionsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_optionsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_optionsInput, productsUncheckedUpdateWithoutProduct_optionsInput>
  }

  export type productsUpdateWithoutProduct_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUpdateManyWithoutProductsNestedInput
    product_guides?: product_guidesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    long_description?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_features?: product_featuresUncheckedUpdateManyWithoutProductsNestedInput
    product_guides?: product_guidesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_featuresCreateWithoutProductsInput = {
    feature: string
  }

  export type product_featuresUncheckedCreateWithoutProductsInput = {
    id?: number
    feature: string
  }

  export type product_featuresCreateOrConnectWithoutProductsInput = {
    where: product_featuresWhereUniqueInput
    create: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput>
  }

  export type product_featuresCreateManyProductsInputEnvelope = {
    data: product_featuresCreateManyProductsInput | product_featuresCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_guidesCreateWithoutProductsInput = {
    step_order?: number | null
    step_text?: string | null
  }

  export type product_guidesUncheckedCreateWithoutProductsInput = {
    id?: number
    step_order?: number | null
    step_text?: string | null
  }

  export type product_guidesCreateOrConnectWithoutProductsInput = {
    where: product_guidesWhereUniqueInput
    create: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput>
  }

  export type product_guidesCreateManyProductsInputEnvelope = {
    data: product_guidesCreateManyProductsInput | product_guidesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_optionsCreateWithoutProductsInput = {
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
  }

  export type product_optionsUncheckedCreateWithoutProductsInput = {
    id?: number
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
  }

  export type product_optionsCreateOrConnectWithoutProductsInput = {
    where: product_optionsWhereUniqueInput
    create: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput>
  }

  export type product_optionsCreateManyProductsInputEnvelope = {
    data: product_optionsCreateManyProductsInput | product_optionsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_featuresUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_featuresWhereUniqueInput
    update: XOR<product_featuresUpdateWithoutProductsInput, product_featuresUncheckedUpdateWithoutProductsInput>
    create: XOR<product_featuresCreateWithoutProductsInput, product_featuresUncheckedCreateWithoutProductsInput>
  }

  export type product_featuresUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_featuresWhereUniqueInput
    data: XOR<product_featuresUpdateWithoutProductsInput, product_featuresUncheckedUpdateWithoutProductsInput>
  }

  export type product_featuresUpdateManyWithWhereWithoutProductsInput = {
    where: product_featuresScalarWhereInput
    data: XOR<product_featuresUpdateManyMutationInput, product_featuresUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_featuresScalarWhereInput = {
    AND?: product_featuresScalarWhereInput | product_featuresScalarWhereInput[]
    OR?: product_featuresScalarWhereInput[]
    NOT?: product_featuresScalarWhereInput | product_featuresScalarWhereInput[]
    id?: IntFilter<"product_features"> | number
    product_id?: StringNullableFilter<"product_features"> | string | null
    feature?: StringFilter<"product_features"> | string
  }

  export type product_guidesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_guidesWhereUniqueInput
    update: XOR<product_guidesUpdateWithoutProductsInput, product_guidesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_guidesCreateWithoutProductsInput, product_guidesUncheckedCreateWithoutProductsInput>
  }

  export type product_guidesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_guidesWhereUniqueInput
    data: XOR<product_guidesUpdateWithoutProductsInput, product_guidesUncheckedUpdateWithoutProductsInput>
  }

  export type product_guidesUpdateManyWithWhereWithoutProductsInput = {
    where: product_guidesScalarWhereInput
    data: XOR<product_guidesUpdateManyMutationInput, product_guidesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_guidesScalarWhereInput = {
    AND?: product_guidesScalarWhereInput | product_guidesScalarWhereInput[]
    OR?: product_guidesScalarWhereInput[]
    NOT?: product_guidesScalarWhereInput | product_guidesScalarWhereInput[]
    id?: IntFilter<"product_guides"> | number
    product_id?: StringNullableFilter<"product_guides"> | string | null
    step_order?: IntNullableFilter<"product_guides"> | number | null
    step_text?: StringNullableFilter<"product_guides"> | string | null
  }

  export type product_optionsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_optionsWhereUniqueInput
    update: XOR<product_optionsUpdateWithoutProductsInput, product_optionsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_optionsCreateWithoutProductsInput, product_optionsUncheckedCreateWithoutProductsInput>
  }

  export type product_optionsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_optionsWhereUniqueInput
    data: XOR<product_optionsUpdateWithoutProductsInput, product_optionsUncheckedUpdateWithoutProductsInput>
  }

  export type product_optionsUpdateManyWithWhereWithoutProductsInput = {
    where: product_optionsScalarWhereInput
    data: XOR<product_optionsUpdateManyMutationInput, product_optionsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_optionsScalarWhereInput = {
    AND?: product_optionsScalarWhereInput | product_optionsScalarWhereInput[]
    OR?: product_optionsScalarWhereInput[]
    NOT?: product_optionsScalarWhereInput | product_optionsScalarWhereInput[]
    id?: IntFilter<"product_options"> | number
    product_id?: StringNullableFilter<"product_options"> | string | null
    option_code?: StringNullableFilter<"product_options"> | string | null
    name?: StringNullableFilter<"product_options"> | string | null
    price?: IntNullableFilter<"product_options"> | number | null
    original_price?: IntNullableFilter<"product_options"> | number | null
  }

  export type order_itemCreateWithoutAccountInput = {
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutAccountInput = {
    id?: number
    order_id: string
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
  }

  export type order_itemCreateOrConnectWithoutAccountInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutAccountInput, order_itemUncheckedCreateWithoutAccountInput>
  }

  export type order_itemUpsertWithoutAccountInput = {
    update: XOR<order_itemUpdateWithoutAccountInput, order_itemUncheckedUpdateWithoutAccountInput>
    create: XOR<order_itemCreateWithoutAccountInput, order_itemUncheckedCreateWithoutAccountInput>
    where?: order_itemWhereInput
  }

  export type order_itemUpdateToOneWithWhereWithoutAccountInput = {
    where?: order_itemWhereInput
    data: XOR<order_itemUpdateWithoutAccountInput, order_itemUncheckedUpdateWithoutAccountInput>
  }

  export type order_itemUpdateWithoutAccountInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemCreateWithoutOrderInput = {
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    account?: accountCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
    account?: accountUncheckedCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: StringFilter<"order_item"> | string
    product_id?: StringFilter<"order_item"> | string
    productName?: StringFilter<"order_item"> | string
    option_id?: StringFilter<"order_item"> | string
    optionName?: StringFilter<"order_item"> | string
    quantity?: IntFilter<"order_item"> | number
    price?: IntFilter<"order_item"> | number
  }

  export type accountCreateWithoutOrder_itemInput = {
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    created_at?: Date | string
  }

  export type accountUncheckedCreateWithoutOrder_itemInput = {
    id?: number
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    created_at?: Date | string
  }

  export type accountCreateOrConnectWithoutOrder_itemInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput>
  }

  export type accountCreateManyOrder_itemInputEnvelope = {
    data: accountCreateManyOrder_itemInput | accountCreateManyOrder_itemInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutOrder_itemInput = {
    id?: string
    order_code: number
    user_email?: string | null
    total_amount: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUncheckedCreateWithoutOrder_itemInput = {
    id?: string
    order_code: number
    user_email?: string | null
    total_amount: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderCreateOrConnectWithoutOrder_itemInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
  }

  export type accountUpsertWithWhereUniqueWithoutOrder_itemInput = {
    where: accountWhereUniqueInput
    update: XOR<accountUpdateWithoutOrder_itemInput, accountUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<accountCreateWithoutOrder_itemInput, accountUncheckedCreateWithoutOrder_itemInput>
  }

  export type accountUpdateWithWhereUniqueWithoutOrder_itemInput = {
    where: accountWhereUniqueInput
    data: XOR<accountUpdateWithoutOrder_itemInput, accountUncheckedUpdateWithoutOrder_itemInput>
  }

  export type accountUpdateManyWithWhereWithoutOrder_itemInput = {
    where: accountScalarWhereInput
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyWithoutOrder_itemInput>
  }

  export type accountScalarWhereInput = {
    AND?: accountScalarWhereInput | accountScalarWhereInput[]
    OR?: accountScalarWhereInput[]
    NOT?: accountScalarWhereInput | accountScalarWhereInput[]
    id?: IntFilter<"account"> | number
    product_id?: StringFilter<"account"> | string
    option_id?: StringFilter<"account"> | string
    username?: StringFilter<"account"> | string
    password?: StringFilter<"account"> | string
    is_sold?: BoolFilter<"account"> | boolean
    sold_at?: DateTimeNullableFilter<"account"> | Date | string | null
    order_item_id?: IntNullableFilter<"account"> | number | null
    created_at?: DateTimeFilter<"account"> | Date | string
  }

  export type orderUpsertWithoutOrder_itemInput = {
    update: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type orderUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_code?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_featuresCreateManyProductsInput = {
    id?: number
    feature: string
  }

  export type product_guidesCreateManyProductsInput = {
    id?: number
    step_order?: number | null
    step_text?: string | null
  }

  export type product_optionsCreateManyProductsInput = {
    id?: number
    option_code?: string | null
    name?: string | null
    price?: number | null
    original_price?: number | null
  }

  export type product_featuresUpdateWithoutProductsInput = {
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_featuresUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_featuresUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: StringFieldUpdateOperationsInput | string
  }

  export type product_guidesUpdateWithoutProductsInput = {
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_guidesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_guidesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    step_order?: NullableIntFieldUpdateOperationsInput | number | null
    step_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_optionsUpdateWithoutProductsInput = {
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_optionsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_optionsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    original_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_itemCreateManyOrderInput = {
    id?: number
    product_id: string
    productName: string
    option_id: string
    optionName: string
    quantity: number
    price: number
  }

  export type order_itemUpdateWithoutOrderInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    account?: accountUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    account?: accountUncheckedUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type accountCreateManyOrder_itemInput = {
    id?: number
    product_id: string
    option_id: string
    username: string
    password: string
    is_sold?: boolean
    sold_at?: Date | string | null
    created_at?: Date | string
  }

  export type accountUpdateWithoutOrder_itemInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateWithoutOrder_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyWithoutOrder_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_sold?: BoolFieldUpdateOperationsInput | boolean
    sold_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}