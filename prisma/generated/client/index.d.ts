
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Ad
 * 
 */
export type Ad = $Result.DefaultSelection<Prisma.$AdPayload>
/**
 * Model FavoriteAd
 * 
 */
export type FavoriteAd = $Result.DefaultSelection<Prisma.$FavoriteAdPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **Ad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ads
    * const ads = await prisma.ad.findMany()
    * ```
    */
  get ad(): Prisma.AdDelegate<ExtArgs>;

  /**
   * `prisma.favoriteAd`: Exposes CRUD operations for the **FavoriteAd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteAds
    * const favoriteAds = await prisma.favoriteAd.findMany()
    * ```
    */
  get favoriteAd(): Prisma.FavoriteAdDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Shop: 'Shop',
    Image: 'Image',
    Ad: 'Ad',
    FavoriteAd: 'FavoriteAd',
    Chat: 'Chat',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'shop' | 'image' | 'ad' | 'favoriteAd' | 'chat' | 'message'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Ad: {
        payload: Prisma.$AdPayload<ExtArgs>
        fields: Prisma.AdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findFirst: {
            args: Prisma.AdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findMany: {
            args: Prisma.AdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          create: {
            args: Prisma.AdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          delete: {
            args: Prisma.AdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          update: {
            args: Prisma.AdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          deleteMany: {
            args: Prisma.AdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAd>
          }
          groupBy: {
            args: Prisma.AdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdCountArgs<ExtArgs>,
            result: $Utils.Optional<AdCountAggregateOutputType> | number
          }
        }
      }
      FavoriteAd: {
        payload: Prisma.$FavoriteAdPayload<ExtArgs>
        fields: Prisma.FavoriteAdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteAdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteAdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          findFirst: {
            args: Prisma.FavoriteAdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteAdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          findMany: {
            args: Prisma.FavoriteAdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>[]
          }
          create: {
            args: Prisma.FavoriteAdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          delete: {
            args: Prisma.FavoriteAdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          update: {
            args: Prisma.FavoriteAdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteAdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteAdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteAdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoriteAdPayload>
          }
          aggregate: {
            args: Prisma.FavoriteAdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavoriteAd>
          }
          groupBy: {
            args: Prisma.FavoriteAdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteAdGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteAdCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteAdCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ads: number
    chats: number
    messagesSent: number
    messagesReceived: number
    favoriteAds: number
    shop: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | UserCountOutputTypeCountAdsArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    favoriteAds?: boolean | UserCountOutputTypeCountFavoriteAdsArgs
    shop?: boolean | UserCountOutputTypeCountShopArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAdWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }



  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    ads: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | ShopCountOutputTypeCountAdsArgs
  }

  // Custom InputTypes

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
  }



  /**
   * Count Type AdCountOutputType
   */

  export type AdCountOutputType = {
    Adimages: number
    favoritedBy: number
  }

  export type AdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adimages?: boolean | AdCountOutputTypeCountAdimagesArgs
    favoritedBy?: boolean | AdCountOutputTypeCountFavoritedByArgs
  }

  // Custom InputTypes

  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCountOutputType
     */
    select?: AdCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountAdimagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAdWhereInput
  }



  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    users: number
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatCountOutputTypeCountUsersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    phoneNumber: string | null
    username: string | null
    country: string | null
    image: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    phoneNumber: string | null
    username: string | null
    country: string | null
    image: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    phoneNumber: number
    username: number
    country: number
    image: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    phoneNumber?: true
    username?: true
    country?: true
    image?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    phoneNumber?: true
    username?: true
    country?: true
    image?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    phoneNumber?: true
    username?: true
    country?: true
    image?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    phoneNumber: string | null
    username: string | null
    country: string | null
    image: string | null
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    phoneNumber?: boolean
    username?: boolean
    country?: boolean
    image?: boolean
    email?: boolean
    ads?: boolean | User$adsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    favoriteAds?: boolean | User$favoriteAdsArgs<ExtArgs>
    shop?: boolean | User$shopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    phoneNumber?: boolean
    username?: boolean
    country?: boolean
    image?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | User$adsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    favoriteAds?: boolean | User$favoriteAdsArgs<ExtArgs>
    shop?: boolean | User$shopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ads: Prisma.$AdPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$MessagePayload<ExtArgs>[]
      favoriteAds: Prisma.$FavoriteAdPayload<ExtArgs>[]
      shop: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      phoneNumber: string | null
      username: string | null
      country: string | null
      image: string | null
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ads<T extends User$adsArgs<ExtArgs> = {}>(args?: Subset<T, User$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findMany'> | Null>;

    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'> | Null>;

    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    favoriteAds<T extends User$favoriteAdsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteAdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findMany'> | Null>;

    shop<T extends User$shopArgs<ExtArgs> = {}>(args?: Subset<T, User$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ads
   */
  export type User$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    cursor?: AdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.favoriteAds
   */
  export type User$favoriteAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    where?: FavoriteAdWhereInput
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    cursor?: FavoriteAdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteAdScalarFieldEnum | FavoriteAdScalarFieldEnum[]
  }


  /**
   * User.shop
   */
  export type User$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shopCategory: string | null
    shopName: string | null
    city: string | null
    country: string | null
    bgImage: string | null
    shopImage: string | null
    description: string | null
    facebookLink: string | null
    twitterLink: string | null
    instagramLink: string | null
    tiktokLink: string | null
    snapchatLink: string | null
    phoneNumber1: string | null
    phoneNumber2: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shopCategory: string | null
    shopName: string | null
    city: string | null
    country: string | null
    bgImage: string | null
    shopImage: string | null
    description: string | null
    facebookLink: string | null
    twitterLink: string | null
    instagramLink: string | null
    tiktokLink: string | null
    snapchatLink: string | null
    phoneNumber1: string | null
    phoneNumber2: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    userId: number
    shopCategory: number
    shopName: number
    city: number
    country: number
    bgImage: number
    shopImage: number
    description: number
    facebookLink: number
    twitterLink: number
    instagramLink: number
    tiktokLink: number
    snapchatLink: number
    phoneNumber1: number
    phoneNumber2: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    userId?: true
    shopCategory?: true
    shopName?: true
    city?: true
    country?: true
    bgImage?: true
    shopImage?: true
    description?: true
    facebookLink?: true
    twitterLink?: true
    instagramLink?: true
    tiktokLink?: true
    snapchatLink?: true
    phoneNumber1?: true
    phoneNumber2?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    userId?: true
    shopCategory?: true
    shopName?: true
    city?: true
    country?: true
    bgImage?: true
    shopImage?: true
    description?: true
    facebookLink?: true
    twitterLink?: true
    instagramLink?: true
    tiktokLink?: true
    snapchatLink?: true
    phoneNumber1?: true
    phoneNumber2?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    userId?: true
    shopCategory?: true
    shopName?: true
    city?: true
    country?: true
    bgImage?: true
    shopImage?: true
    description?: true
    facebookLink?: true
    twitterLink?: true
    instagramLink?: true
    tiktokLink?: true
    snapchatLink?: true
    phoneNumber1?: true
    phoneNumber2?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    userId: number
    shopCategory: string
    shopName: string
    city: string | null
    country: string | null
    bgImage: string
    shopImage: string | null
    description: string | null
    facebookLink: string | null
    twitterLink: string | null
    instagramLink: string | null
    tiktokLink: string | null
    snapchatLink: string | null
    phoneNumber1: string | null
    phoneNumber2: string | null
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopCategory?: boolean
    shopName?: boolean
    city?: boolean
    country?: boolean
    bgImage?: boolean
    shopImage?: boolean
    description?: boolean
    facebookLink?: boolean
    twitterLink?: boolean
    instagramLink?: boolean
    tiktokLink?: boolean
    snapchatLink?: boolean
    phoneNumber1?: boolean
    phoneNumber2?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ads?: boolean | Shop$adsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    userId?: boolean
    shopCategory?: boolean
    shopName?: boolean
    city?: boolean
    country?: boolean
    bgImage?: boolean
    shopImage?: boolean
    description?: boolean
    facebookLink?: boolean
    twitterLink?: boolean
    instagramLink?: boolean
    tiktokLink?: boolean
    snapchatLink?: boolean
    phoneNumber1?: boolean
    phoneNumber2?: boolean
  }

  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ads?: boolean | Shop$adsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ads: Prisma.$AdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shopCategory: string
      shopName: string
      city: string | null
      country: string | null
      bgImage: string
      shopImage: string | null
      description: string | null
      facebookLink: string | null
      twitterLink: string | null
      instagramLink: string | null
      tiktokLink: string | null
      snapchatLink: string | null
      phoneNumber1: string | null
      phoneNumber2: string | null
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }


  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
    **/
    create<T extends ShopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopCreateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
    **/
    delete<T extends ShopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
    **/
    upsert<T extends ShopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ads<T extends Shop$adsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly userId: FieldRef<"Shop", 'Int'>
    readonly shopCategory: FieldRef<"Shop", 'String'>
    readonly shopName: FieldRef<"Shop", 'String'>
    readonly city: FieldRef<"Shop", 'String'>
    readonly country: FieldRef<"Shop", 'String'>
    readonly bgImage: FieldRef<"Shop", 'String'>
    readonly shopImage: FieldRef<"Shop", 'String'>
    readonly description: FieldRef<"Shop", 'String'>
    readonly facebookLink: FieldRef<"Shop", 'String'>
    readonly twitterLink: FieldRef<"Shop", 'String'>
    readonly instagramLink: FieldRef<"Shop", 'String'>
    readonly tiktokLink: FieldRef<"Shop", 'String'>
    readonly snapchatLink: FieldRef<"Shop", 'String'>
    readonly phoneNumber1: FieldRef<"Shop", 'String'>
    readonly phoneNumber2: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }


  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
  }


  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }


  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
  }


  /**
   * Shop.ads
   */
  export type Shop$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    cursor?: AdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    adId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    adId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    adId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    adId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    adId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    adId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    adId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    adId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    adId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    adId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    adId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    adId?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    adId?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      ad: Prisma.$AdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      adId: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ad<T extends AdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdDefaultArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly adId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model Ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  export type AdAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    views: number | null
    clicks: number | null
  }

  export type AdSumAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    views: number | null
    clicks: number | null
  }

  export type AdMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    createdAt: Date | null
    description: string | null
    country: string | null
    brand: string | null
    EnginCapacity: string | null
    category: string | null
    carType: string | null
    model: string | null
    year: string | null
    carStatus: string | null
    transmission: string | null
    fuelType: string | null
    meterRange: string | null
    paintType: string | null
    payment: string | null
    price: string | null
    name: string | null
    RegionalSpecifications: string | null
    location: string | null
    CarChassis: string | null
    extraFeatures: string | null
    adStatus: string | null
    views: number | null
    clicks: number | null
  }

  export type AdMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    createdAt: Date | null
    description: string | null
    country: string | null
    brand: string | null
    EnginCapacity: string | null
    category: string | null
    carType: string | null
    model: string | null
    year: string | null
    carStatus: string | null
    transmission: string | null
    fuelType: string | null
    meterRange: string | null
    paintType: string | null
    payment: string | null
    price: string | null
    name: string | null
    RegionalSpecifications: string | null
    location: string | null
    CarChassis: string | null
    extraFeatures: string | null
    adStatus: string | null
    views: number | null
    clicks: number | null
  }

  export type AdCountAggregateOutputType = {
    id: number
    userId: number
    shopId: number
    createdAt: number
    description: number
    country: number
    brand: number
    EnginCapacity: number
    category: number
    carType: number
    model: number
    year: number
    carStatus: number
    transmission: number
    fuelType: number
    meterRange: number
    paintType: number
    payment: number
    price: number
    name: number
    RegionalSpecifications: number
    location: number
    CarChassis: number
    extraFeatures: number
    adStatus: number
    views: number
    clicks: number
    _all: number
  }


  export type AdAvgAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    views?: true
    clicks?: true
  }

  export type AdSumAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    views?: true
    clicks?: true
  }

  export type AdMinAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    createdAt?: true
    description?: true
    country?: true
    brand?: true
    EnginCapacity?: true
    category?: true
    carType?: true
    model?: true
    year?: true
    carStatus?: true
    transmission?: true
    fuelType?: true
    meterRange?: true
    paintType?: true
    payment?: true
    price?: true
    name?: true
    RegionalSpecifications?: true
    location?: true
    CarChassis?: true
    extraFeatures?: true
    adStatus?: true
    views?: true
    clicks?: true
  }

  export type AdMaxAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    createdAt?: true
    description?: true
    country?: true
    brand?: true
    EnginCapacity?: true
    category?: true
    carType?: true
    model?: true
    year?: true
    carStatus?: true
    transmission?: true
    fuelType?: true
    meterRange?: true
    paintType?: true
    payment?: true
    price?: true
    name?: true
    RegionalSpecifications?: true
    location?: true
    CarChassis?: true
    extraFeatures?: true
    adStatus?: true
    views?: true
    clicks?: true
  }

  export type AdCountAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    createdAt?: true
    description?: true
    country?: true
    brand?: true
    EnginCapacity?: true
    category?: true
    carType?: true
    model?: true
    year?: true
    carStatus?: true
    transmission?: true
    fuelType?: true
    meterRange?: true
    paintType?: true
    payment?: true
    price?: true
    name?: true
    RegionalSpecifications?: true
    location?: true
    CarChassis?: true
    extraFeatures?: true
    adStatus?: true
    views?: true
    clicks?: true
    _all?: true
  }

  export type AdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ad to aggregate.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ads
    **/
    _count?: true | AdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMaxAggregateInputType
  }

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
        [P in keyof T & keyof AggregateAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>
  }




  export type AdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
    orderBy?: AdOrderByWithAggregationInput | AdOrderByWithAggregationInput[]
    by: AdScalarFieldEnum[] | AdScalarFieldEnum
    having?: AdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCountAggregateInputType | true
    _avg?: AdAvgAggregateInputType
    _sum?: AdSumAggregateInputType
    _min?: AdMinAggregateInputType
    _max?: AdMaxAggregateInputType
  }

  export type AdGroupByOutputType = {
    id: number
    userId: number | null
    shopId: number | null
    createdAt: Date
    description: string | null
    country: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis: string | null
    extraFeatures: string | null
    adStatus: string
    views: number
    clicks: number
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  type GetAdGroupByPayload<T extends AdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupByOutputType[P]>
        }
      >
    >


  export type AdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    createdAt?: boolean
    description?: boolean
    country?: boolean
    brand?: boolean
    EnginCapacity?: boolean
    category?: boolean
    carType?: boolean
    model?: boolean
    year?: boolean
    carStatus?: boolean
    transmission?: boolean
    fuelType?: boolean
    meterRange?: boolean
    paintType?: boolean
    payment?: boolean
    price?: boolean
    name?: boolean
    RegionalSpecifications?: boolean
    location?: boolean
    CarChassis?: boolean
    extraFeatures?: boolean
    adStatus?: boolean
    views?: boolean
    clicks?: boolean
    user?: boolean | Ad$userArgs<ExtArgs>
    shop?: boolean | Ad$shopArgs<ExtArgs>
    Adimages?: boolean | Ad$AdimagesArgs<ExtArgs>
    favoritedBy?: boolean | Ad$favoritedByArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectScalar = {
    id?: boolean
    userId?: boolean
    shopId?: boolean
    createdAt?: boolean
    description?: boolean
    country?: boolean
    brand?: boolean
    EnginCapacity?: boolean
    category?: boolean
    carType?: boolean
    model?: boolean
    year?: boolean
    carStatus?: boolean
    transmission?: boolean
    fuelType?: boolean
    meterRange?: boolean
    paintType?: boolean
    payment?: boolean
    price?: boolean
    name?: boolean
    RegionalSpecifications?: boolean
    location?: boolean
    CarChassis?: boolean
    extraFeatures?: boolean
    adStatus?: boolean
    views?: boolean
    clicks?: boolean
  }

  export type AdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Ad$userArgs<ExtArgs>
    shop?: boolean | Ad$shopArgs<ExtArgs>
    Adimages?: boolean | Ad$AdimagesArgs<ExtArgs>
    favoritedBy?: boolean | Ad$favoritedByArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ad"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      shop: Prisma.$ShopPayload<ExtArgs> | null
      Adimages: Prisma.$ImagePayload<ExtArgs>[]
      favoritedBy: Prisma.$FavoriteAdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      shopId: number | null
      createdAt: Date
      description: string | null
      country: string | null
      brand: string
      EnginCapacity: string
      category: string
      carType: string
      model: string
      year: string
      carStatus: string
      transmission: string
      fuelType: string
      meterRange: string
      paintType: string
      payment: string
      price: string
      name: string
      RegionalSpecifications: string
      location: string
      CarChassis: string | null
      extraFeatures: string | null
      adStatus: string
      views: number
      clicks: number
    }, ExtArgs["result"]["ad"]>
    composites: {}
  }


  type AdGetPayload<S extends boolean | null | undefined | AdDefaultArgs> = $Result.GetResult<Prisma.$AdPayload, S>

  type AdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdCountAggregateInputType | true
    }

  export interface AdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ad'], meta: { name: 'Ad' } }
    /**
     * Find zero or one Ad that matches the filter.
     * @param {AdFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdFindUniqueArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ad that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindFirstArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     * 
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adWithIdOnly = await prisma.ad.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ad.
     * @param {AdCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     * 
    **/
    create<T extends AdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdCreateArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Ad.
     * @param {AdDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     * 
    **/
    delete<T extends AdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdDeleteArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ad.
     * @param {AdUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpdateArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ads.
     * @param {AdDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ad.
     * @param {AdUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
    **/
    upsert<T extends AdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpsertArgs<ExtArgs>>
    ): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends AdCountArgs>(
      args?: Subset<T, AdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdAggregateArgs>(args: Subset<T, AdAggregateArgs>): Prisma.PrismaPromise<GetAdAggregateType<T>>

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupByArgs} args - Group by arguments.
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
      T extends AdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ad model
   */
  readonly fields: AdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Ad$userArgs<ExtArgs> = {}>(args?: Subset<T, Ad$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    shop<T extends Ad$shopArgs<ExtArgs> = {}>(args?: Subset<T, Ad$shopArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Adimages<T extends Ad$AdimagesArgs<ExtArgs> = {}>(args?: Subset<T, Ad$AdimagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    favoritedBy<T extends Ad$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Ad$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ad model
   */ 
  interface AdFieldRefs {
    readonly id: FieldRef<"Ad", 'Int'>
    readonly userId: FieldRef<"Ad", 'Int'>
    readonly shopId: FieldRef<"Ad", 'Int'>
    readonly createdAt: FieldRef<"Ad", 'DateTime'>
    readonly description: FieldRef<"Ad", 'String'>
    readonly country: FieldRef<"Ad", 'String'>
    readonly brand: FieldRef<"Ad", 'String'>
    readonly EnginCapacity: FieldRef<"Ad", 'String'>
    readonly category: FieldRef<"Ad", 'String'>
    readonly carType: FieldRef<"Ad", 'String'>
    readonly model: FieldRef<"Ad", 'String'>
    readonly year: FieldRef<"Ad", 'String'>
    readonly carStatus: FieldRef<"Ad", 'String'>
    readonly transmission: FieldRef<"Ad", 'String'>
    readonly fuelType: FieldRef<"Ad", 'String'>
    readonly meterRange: FieldRef<"Ad", 'String'>
    readonly paintType: FieldRef<"Ad", 'String'>
    readonly payment: FieldRef<"Ad", 'String'>
    readonly price: FieldRef<"Ad", 'String'>
    readonly name: FieldRef<"Ad", 'String'>
    readonly RegionalSpecifications: FieldRef<"Ad", 'String'>
    readonly location: FieldRef<"Ad", 'String'>
    readonly CarChassis: FieldRef<"Ad", 'String'>
    readonly extraFeatures: FieldRef<"Ad", 'String'>
    readonly adStatus: FieldRef<"Ad", 'String'>
    readonly views: FieldRef<"Ad", 'Int'>
    readonly clicks: FieldRef<"Ad", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ad findUnique
   */
  export type AdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }


  /**
   * Ad findUniqueOrThrow
   */
  export type AdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }


  /**
   * Ad findFirst
   */
  export type AdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * Ad findFirstOrThrow
   */
  export type AdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * Ad findMany
   */
  export type AdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ads to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * Ad create
   */
  export type AdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to create a Ad.
     */
    data: XOR<AdCreateInput, AdUncheckedCreateInput>
  }


  /**
   * Ad update
   */
  export type AdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to update a Ad.
     */
    data: XOR<AdUpdateInput, AdUncheckedUpdateInput>
    /**
     * Choose, which Ad to update.
     */
    where: AdWhereUniqueInput
  }


  /**
   * Ad updateMany
   */
  export type AdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
  }


  /**
   * Ad upsert
   */
  export type AdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The filter to search for the Ad to update in case it exists.
     */
    where: AdWhereUniqueInput
    /**
     * In case the Ad found by the `where` argument doesn't exist, create a new Ad with this data.
     */
    create: XOR<AdCreateInput, AdUncheckedCreateInput>
    /**
     * In case the Ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdUpdateInput, AdUncheckedUpdateInput>
  }


  /**
   * Ad delete
   */
  export type AdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter which Ad to delete.
     */
    where: AdWhereUniqueInput
  }


  /**
   * Ad deleteMany
   */
  export type AdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to delete
     */
    where?: AdWhereInput
  }


  /**
   * Ad.user
   */
  export type Ad$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Ad.shop
   */
  export type Ad$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
  }


  /**
   * Ad.Adimages
   */
  export type Ad$AdimagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Ad.favoritedBy
   */
  export type Ad$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    where?: FavoriteAdWhereInput
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    cursor?: FavoriteAdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteAdScalarFieldEnum | FavoriteAdScalarFieldEnum[]
  }


  /**
   * Ad without action
   */
  export type AdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null
  }



  /**
   * Model FavoriteAd
   */

  export type AggregateFavoriteAd = {
    _count: FavoriteAdCountAggregateOutputType | null
    _avg: FavoriteAdAvgAggregateOutputType | null
    _sum: FavoriteAdSumAggregateOutputType | null
    _min: FavoriteAdMinAggregateOutputType | null
    _max: FavoriteAdMaxAggregateOutputType | null
  }

  export type FavoriteAdAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    adId: number | null
  }

  export type FavoriteAdSumAggregateOutputType = {
    id: number | null
    userId: number | null
    adId: number | null
  }

  export type FavoriteAdMinAggregateOutputType = {
    id: number | null
    userId: number | null
    adId: number | null
    createdAt: Date | null
  }

  export type FavoriteAdMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    adId: number | null
    createdAt: Date | null
  }

  export type FavoriteAdCountAggregateOutputType = {
    id: number
    userId: number
    adId: number
    createdAt: number
    _all: number
  }


  export type FavoriteAdAvgAggregateInputType = {
    id?: true
    userId?: true
    adId?: true
  }

  export type FavoriteAdSumAggregateInputType = {
    id?: true
    userId?: true
    adId?: true
  }

  export type FavoriteAdMinAggregateInputType = {
    id?: true
    userId?: true
    adId?: true
    createdAt?: true
  }

  export type FavoriteAdMaxAggregateInputType = {
    id?: true
    userId?: true
    adId?: true
    createdAt?: true
  }

  export type FavoriteAdCountAggregateInputType = {
    id?: true
    userId?: true
    adId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteAd to aggregate.
     */
    where?: FavoriteAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAds to fetch.
     */
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteAds
    **/
    _count?: true | FavoriteAdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteAdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteAdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteAdMaxAggregateInputType
  }

  export type GetFavoriteAdAggregateType<T extends FavoriteAdAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteAd[P]>
      : GetScalarType<T[P], AggregateFavoriteAd[P]>
  }




  export type FavoriteAdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAdWhereInput
    orderBy?: FavoriteAdOrderByWithAggregationInput | FavoriteAdOrderByWithAggregationInput[]
    by: FavoriteAdScalarFieldEnum[] | FavoriteAdScalarFieldEnum
    having?: FavoriteAdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteAdCountAggregateInputType | true
    _avg?: FavoriteAdAvgAggregateInputType
    _sum?: FavoriteAdSumAggregateInputType
    _min?: FavoriteAdMinAggregateInputType
    _max?: FavoriteAdMaxAggregateInputType
  }

  export type FavoriteAdGroupByOutputType = {
    id: number
    userId: number
    adId: number
    createdAt: Date
    _count: FavoriteAdCountAggregateOutputType | null
    _avg: FavoriteAdAvgAggregateOutputType | null
    _sum: FavoriteAdSumAggregateOutputType | null
    _min: FavoriteAdMinAggregateOutputType | null
    _max: FavoriteAdMaxAggregateOutputType | null
  }

  type GetFavoriteAdGroupByPayload<T extends FavoriteAdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteAdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteAdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteAdGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteAdGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteAdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteAd"]>

  export type FavoriteAdSelectScalar = {
    id?: boolean
    userId?: boolean
    adId?: boolean
    createdAt?: boolean
  }

  export type FavoriteAdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }


  export type $FavoriteAdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteAd"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ad: Prisma.$AdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      adId: number
      createdAt: Date
    }, ExtArgs["result"]["favoriteAd"]>
    composites: {}
  }


  type FavoriteAdGetPayload<S extends boolean | null | undefined | FavoriteAdDefaultArgs> = $Result.GetResult<Prisma.$FavoriteAdPayload, S>

  type FavoriteAdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteAdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoriteAdCountAggregateInputType | true
    }

  export interface FavoriteAdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteAd'], meta: { name: 'FavoriteAd' } }
    /**
     * Find zero or one FavoriteAd that matches the filter.
     * @param {FavoriteAdFindUniqueArgs} args - Arguments to find a FavoriteAd
     * @example
     * // Get one FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteAdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FavoriteAd that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteAdFindUniqueOrThrowArgs} args - Arguments to find a FavoriteAd
     * @example
     * // Get one FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteAdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteAdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FavoriteAd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdFindFirstArgs} args - Arguments to find a FavoriteAd
     * @example
     * // Get one FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteAdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteAdFindFirstArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FavoriteAd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdFindFirstOrThrowArgs} args - Arguments to find a FavoriteAd
     * @example
     * // Get one FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteAdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteAdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FavoriteAds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteAds
     * const favoriteAds = await prisma.favoriteAd.findMany()
     * 
     * // Get first 10 FavoriteAds
     * const favoriteAds = await prisma.favoriteAd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteAdWithIdOnly = await prisma.favoriteAd.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoriteAdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteAdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FavoriteAd.
     * @param {FavoriteAdCreateArgs} args - Arguments to create a FavoriteAd.
     * @example
     * // Create one FavoriteAd
     * const FavoriteAd = await prisma.favoriteAd.create({
     *   data: {
     *     // ... data to create a FavoriteAd
     *   }
     * })
     * 
    **/
    create<T extends FavoriteAdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdCreateArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a FavoriteAd.
     * @param {FavoriteAdDeleteArgs} args - Arguments to delete one FavoriteAd.
     * @example
     * // Delete one FavoriteAd
     * const FavoriteAd = await prisma.favoriteAd.delete({
     *   where: {
     *     // ... filter to delete one FavoriteAd
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteAdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FavoriteAd.
     * @param {FavoriteAdUpdateArgs} args - Arguments to update one FavoriteAd.
     * @example
     * // Update one FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteAdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FavoriteAds.
     * @param {FavoriteAdDeleteManyArgs} args - Arguments to filter FavoriteAds to delete.
     * @example
     * // Delete a few FavoriteAds
     * const { count } = await prisma.favoriteAd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteAdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteAdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteAds
     * const favoriteAd = await prisma.favoriteAd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteAdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteAd.
     * @param {FavoriteAdUpsertArgs} args - Arguments to update or create a FavoriteAd.
     * @example
     * // Update or create a FavoriteAd
     * const favoriteAd = await prisma.favoriteAd.upsert({
     *   create: {
     *     // ... data to create a FavoriteAd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteAd we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteAdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteAdUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteAdClient<$Result.GetResult<Prisma.$FavoriteAdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FavoriteAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdCountArgs} args - Arguments to filter FavoriteAds to count.
     * @example
     * // Count the number of FavoriteAds
     * const count = await prisma.favoriteAd.count({
     *   where: {
     *     // ... the filter for the FavoriteAds we want to count
     *   }
     * })
    **/
    count<T extends FavoriteAdCountArgs>(
      args?: Subset<T, FavoriteAdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteAdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAdAggregateArgs>(args: Subset<T, FavoriteAdAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAdAggregateType<T>>

    /**
     * Group by FavoriteAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAdGroupByArgs} args - Group by arguments.
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
      T extends FavoriteAdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteAdGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteAdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteAdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteAd model
   */
  readonly fields: FavoriteAdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteAd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteAdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ad<T extends AdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdDefaultArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FavoriteAd model
   */ 
  interface FavoriteAdFieldRefs {
    readonly id: FieldRef<"FavoriteAd", 'Int'>
    readonly userId: FieldRef<"FavoriteAd", 'Int'>
    readonly adId: FieldRef<"FavoriteAd", 'Int'>
    readonly createdAt: FieldRef<"FavoriteAd", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FavoriteAd findUnique
   */
  export type FavoriteAdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAd to fetch.
     */
    where: FavoriteAdWhereUniqueInput
  }


  /**
   * FavoriteAd findUniqueOrThrow
   */
  export type FavoriteAdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAd to fetch.
     */
    where: FavoriteAdWhereUniqueInput
  }


  /**
   * FavoriteAd findFirst
   */
  export type FavoriteAdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAd to fetch.
     */
    where?: FavoriteAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAds to fetch.
     */
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteAds.
     */
    cursor?: FavoriteAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteAds.
     */
    distinct?: FavoriteAdScalarFieldEnum | FavoriteAdScalarFieldEnum[]
  }


  /**
   * FavoriteAd findFirstOrThrow
   */
  export type FavoriteAdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAd to fetch.
     */
    where?: FavoriteAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAds to fetch.
     */
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteAds.
     */
    cursor?: FavoriteAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteAds.
     */
    distinct?: FavoriteAdScalarFieldEnum | FavoriteAdScalarFieldEnum[]
  }


  /**
   * FavoriteAd findMany
   */
  export type FavoriteAdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAds to fetch.
     */
    where?: FavoriteAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAds to fetch.
     */
    orderBy?: FavoriteAdOrderByWithRelationInput | FavoriteAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteAds.
     */
    cursor?: FavoriteAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAds.
     */
    skip?: number
    distinct?: FavoriteAdScalarFieldEnum | FavoriteAdScalarFieldEnum[]
  }


  /**
   * FavoriteAd create
   */
  export type FavoriteAdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteAd.
     */
    data: XOR<FavoriteAdCreateInput, FavoriteAdUncheckedCreateInput>
  }


  /**
   * FavoriteAd update
   */
  export type FavoriteAdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteAd.
     */
    data: XOR<FavoriteAdUpdateInput, FavoriteAdUncheckedUpdateInput>
    /**
     * Choose, which FavoriteAd to update.
     */
    where: FavoriteAdWhereUniqueInput
  }


  /**
   * FavoriteAd updateMany
   */
  export type FavoriteAdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteAds.
     */
    data: XOR<FavoriteAdUpdateManyMutationInput, FavoriteAdUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteAds to update
     */
    where?: FavoriteAdWhereInput
  }


  /**
   * FavoriteAd upsert
   */
  export type FavoriteAdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteAd to update in case it exists.
     */
    where: FavoriteAdWhereUniqueInput
    /**
     * In case the FavoriteAd found by the `where` argument doesn't exist, create a new FavoriteAd with this data.
     */
    create: XOR<FavoriteAdCreateInput, FavoriteAdUncheckedCreateInput>
    /**
     * In case the FavoriteAd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteAdUpdateInput, FavoriteAdUncheckedUpdateInput>
  }


  /**
   * FavoriteAd delete
   */
  export type FavoriteAdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
    /**
     * Filter which FavoriteAd to delete.
     */
    where: FavoriteAdWhereUniqueInput
  }


  /**
   * FavoriteAd deleteMany
   */
  export type FavoriteAdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteAds to delete
     */
    where?: FavoriteAdWhereInput
  }


  /**
   * FavoriteAd without action
   */
  export type FavoriteAdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAd
     */
    select?: FavoriteAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteAdInclude<ExtArgs> | null
  }



  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | Chat$usersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
  }

  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Chat$usersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }


  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCreateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Chat$usersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }


  /**
   * Chat.users
   */
  export type Chat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    senderEmail: string | null
    receiverEmail: string | null
    createdAt: Date | null
    chatId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    senderEmail: string | null
    receiverEmail: string | null
    createdAt: Date | null
    chatId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderEmail: number
    receiverEmail: number
    createdAt: number
    chatId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderEmail?: true
    receiverEmail?: true
    createdAt?: true
    chatId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderEmail?: true
    receiverEmail?: true
    createdAt?: true
    chatId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderEmail?: true
    receiverEmail?: true
    createdAt?: true
    chatId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    senderEmail: string
    receiverEmail: string | null
    createdAt: Date
    chatId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderEmail?: boolean
    receiverEmail?: boolean
    createdAt?: boolean
    chatId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Message$receiverArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderEmail?: boolean
    receiverEmail?: boolean
    createdAt?: boolean
    chatId?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Message$receiverArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      senderEmail: string
      receiverEmail: string | null
      createdAt: Date
      chatId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    receiver<T extends Message$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Message$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderEmail: FieldRef<"Message", 'String'>
    readonly receiverEmail: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly chatId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message.receiver
   */
  export type Message$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    phoneNumber: 'phoneNumber',
    username: 'username',
    country: 'country',
    image: 'image',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopCategory: 'shopCategory',
    shopName: 'shopName',
    city: 'city',
    country: 'country',
    bgImage: 'bgImage',
    shopImage: 'shopImage',
    description: 'description',
    facebookLink: 'facebookLink',
    twitterLink: 'twitterLink',
    instagramLink: 'instagramLink',
    tiktokLink: 'tiktokLink',
    snapchatLink: 'snapchatLink',
    phoneNumber1: 'phoneNumber1',
    phoneNumber2: 'phoneNumber2'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    adId: 'adId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const AdScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopId: 'shopId',
    createdAt: 'createdAt',
    description: 'description',
    country: 'country',
    brand: 'brand',
    EnginCapacity: 'EnginCapacity',
    category: 'category',
    carType: 'carType',
    model: 'model',
    year: 'year',
    carStatus: 'carStatus',
    transmission: 'transmission',
    fuelType: 'fuelType',
    meterRange: 'meterRange',
    paintType: 'paintType',
    payment: 'payment',
    price: 'price',
    name: 'name',
    RegionalSpecifications: 'RegionalSpecifications',
    location: 'location',
    CarChassis: 'CarChassis',
    extraFeatures: 'extraFeatures',
    adStatus: 'adStatus',
    views: 'views',
    clicks: 'clicks'
  };

  export type AdScalarFieldEnum = (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum]


  export const FavoriteAdScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    adId: 'adId',
    createdAt: 'createdAt'
  };

  export type FavoriteAdScalarFieldEnum = (typeof FavoriteAdScalarFieldEnum)[keyof typeof FavoriteAdScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderEmail: 'senderEmail',
    receiverEmail: 'receiverEmail',
    createdAt: 'createdAt',
    chatId: 'chatId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    ads?: AdListRelationFilter
    chats?: ChatListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    favoriteAds?: FavoriteAdListRelationFilter
    shop?: ShopListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrder
    ads?: AdOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
    favoriteAds?: FavoriteAdOrderByRelationAggregateInput
    shop?: ShopOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    ads?: AdListRelationFilter
    chats?: ChatListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    favoriteAds?: FavoriteAdListRelationFilter
    shop?: ShopListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    userId?: IntFilter<"Shop"> | number
    shopCategory?: StringFilter<"Shop"> | string
    shopName?: StringFilter<"Shop"> | string
    city?: StringNullableFilter<"Shop"> | string | null
    country?: StringNullableFilter<"Shop"> | string | null
    bgImage?: StringFilter<"Shop"> | string
    shopImage?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    facebookLink?: StringNullableFilter<"Shop"> | string | null
    twitterLink?: StringNullableFilter<"Shop"> | string | null
    instagramLink?: StringNullableFilter<"Shop"> | string | null
    tiktokLink?: StringNullableFilter<"Shop"> | string | null
    snapchatLink?: StringNullableFilter<"Shop"> | string | null
    phoneNumber1?: StringNullableFilter<"Shop"> | string | null
    phoneNumber2?: StringNullableFilter<"Shop"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    ads?: AdListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopCategory?: SortOrder
    shopName?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    bgImage?: SortOrder
    shopImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    tiktokLink?: SortOrderInput | SortOrder
    snapchatLink?: SortOrderInput | SortOrder
    phoneNumber1?: SortOrderInput | SortOrder
    phoneNumber2?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    ads?: AdOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    userId?: IntFilter<"Shop"> | number
    shopCategory?: StringFilter<"Shop"> | string
    shopName?: StringFilter<"Shop"> | string
    city?: StringNullableFilter<"Shop"> | string | null
    country?: StringNullableFilter<"Shop"> | string | null
    bgImage?: StringFilter<"Shop"> | string
    shopImage?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    facebookLink?: StringNullableFilter<"Shop"> | string | null
    twitterLink?: StringNullableFilter<"Shop"> | string | null
    instagramLink?: StringNullableFilter<"Shop"> | string | null
    tiktokLink?: StringNullableFilter<"Shop"> | string | null
    snapchatLink?: StringNullableFilter<"Shop"> | string | null
    phoneNumber1?: StringNullableFilter<"Shop"> | string | null
    phoneNumber2?: StringNullableFilter<"Shop"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    ads?: AdListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopCategory?: SortOrder
    shopName?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    bgImage?: SortOrder
    shopImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    tiktokLink?: SortOrderInput | SortOrder
    snapchatLink?: SortOrderInput | SortOrder
    phoneNumber1?: SortOrderInput | SortOrder
    phoneNumber2?: SortOrderInput | SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    userId?: IntWithAggregatesFilter<"Shop"> | number
    shopCategory?: StringWithAggregatesFilter<"Shop"> | string
    shopName?: StringWithAggregatesFilter<"Shop"> | string
    city?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    country?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    bgImage?: StringWithAggregatesFilter<"Shop"> | string
    shopImage?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    description?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    facebookLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    twitterLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    instagramLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    tiktokLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    snapchatLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    phoneNumber1?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    phoneNumber2?: StringNullableWithAggregatesFilter<"Shop"> | string | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    adId?: IntFilter<"Image"> | number
    ad?: XOR<AdRelationFilter, AdWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    adId?: SortOrder
    ad?: AdOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    adId?: IntFilter<"Image"> | number
    ad?: XOR<AdRelationFilter, AdWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    adId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    adId?: IntWithAggregatesFilter<"Image"> | number
  }

  export type AdWhereInput = {
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    id?: IntFilter<"Ad"> | number
    userId?: IntNullableFilter<"Ad"> | number | null
    shopId?: IntNullableFilter<"Ad"> | number | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    description?: StringNullableFilter<"Ad"> | string | null
    country?: StringNullableFilter<"Ad"> | string | null
    brand?: StringFilter<"Ad"> | string
    EnginCapacity?: StringFilter<"Ad"> | string
    category?: StringFilter<"Ad"> | string
    carType?: StringFilter<"Ad"> | string
    model?: StringFilter<"Ad"> | string
    year?: StringFilter<"Ad"> | string
    carStatus?: StringFilter<"Ad"> | string
    transmission?: StringFilter<"Ad"> | string
    fuelType?: StringFilter<"Ad"> | string
    meterRange?: StringFilter<"Ad"> | string
    paintType?: StringFilter<"Ad"> | string
    payment?: StringFilter<"Ad"> | string
    price?: StringFilter<"Ad"> | string
    name?: StringFilter<"Ad"> | string
    RegionalSpecifications?: StringFilter<"Ad"> | string
    location?: StringFilter<"Ad"> | string
    CarChassis?: StringNullableFilter<"Ad"> | string | null
    extraFeatures?: StringNullableFilter<"Ad"> | string | null
    adStatus?: StringFilter<"Ad"> | string
    views?: IntFilter<"Ad"> | number
    clicks?: IntFilter<"Ad"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    shop?: XOR<ShopNullableRelationFilter, ShopWhereInput> | null
    Adimages?: ImageListRelationFilter
    favoritedBy?: FavoriteAdListRelationFilter
  }

  export type AdOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    brand?: SortOrder
    EnginCapacity?: SortOrder
    category?: SortOrder
    carType?: SortOrder
    model?: SortOrder
    year?: SortOrder
    carStatus?: SortOrder
    transmission?: SortOrder
    fuelType?: SortOrder
    meterRange?: SortOrder
    paintType?: SortOrder
    payment?: SortOrder
    price?: SortOrder
    name?: SortOrder
    RegionalSpecifications?: SortOrder
    location?: SortOrder
    CarChassis?: SortOrderInput | SortOrder
    extraFeatures?: SortOrderInput | SortOrder
    adStatus?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    user?: UserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    Adimages?: ImageOrderByRelationAggregateInput
    favoritedBy?: FavoriteAdOrderByRelationAggregateInput
  }

  export type AdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    userId?: IntNullableFilter<"Ad"> | number | null
    shopId?: IntNullableFilter<"Ad"> | number | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    description?: StringNullableFilter<"Ad"> | string | null
    country?: StringNullableFilter<"Ad"> | string | null
    brand?: StringFilter<"Ad"> | string
    EnginCapacity?: StringFilter<"Ad"> | string
    category?: StringFilter<"Ad"> | string
    carType?: StringFilter<"Ad"> | string
    model?: StringFilter<"Ad"> | string
    year?: StringFilter<"Ad"> | string
    carStatus?: StringFilter<"Ad"> | string
    transmission?: StringFilter<"Ad"> | string
    fuelType?: StringFilter<"Ad"> | string
    meterRange?: StringFilter<"Ad"> | string
    paintType?: StringFilter<"Ad"> | string
    payment?: StringFilter<"Ad"> | string
    price?: StringFilter<"Ad"> | string
    name?: StringFilter<"Ad"> | string
    RegionalSpecifications?: StringFilter<"Ad"> | string
    location?: StringFilter<"Ad"> | string
    CarChassis?: StringNullableFilter<"Ad"> | string | null
    extraFeatures?: StringNullableFilter<"Ad"> | string | null
    adStatus?: StringFilter<"Ad"> | string
    views?: IntFilter<"Ad"> | number
    clicks?: IntFilter<"Ad"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    shop?: XOR<ShopNullableRelationFilter, ShopWhereInput> | null
    Adimages?: ImageListRelationFilter
    favoritedBy?: FavoriteAdListRelationFilter
  }, "id">

  export type AdOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    brand?: SortOrder
    EnginCapacity?: SortOrder
    category?: SortOrder
    carType?: SortOrder
    model?: SortOrder
    year?: SortOrder
    carStatus?: SortOrder
    transmission?: SortOrder
    fuelType?: SortOrder
    meterRange?: SortOrder
    paintType?: SortOrder
    payment?: SortOrder
    price?: SortOrder
    name?: SortOrder
    RegionalSpecifications?: SortOrder
    location?: SortOrder
    CarChassis?: SortOrderInput | SortOrder
    extraFeatures?: SortOrderInput | SortOrder
    adStatus?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    _count?: AdCountOrderByAggregateInput
    _avg?: AdAvgOrderByAggregateInput
    _max?: AdMaxOrderByAggregateInput
    _min?: AdMinOrderByAggregateInput
    _sum?: AdSumOrderByAggregateInput
  }

  export type AdScalarWhereWithAggregatesInput = {
    AND?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    OR?: AdScalarWhereWithAggregatesInput[]
    NOT?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ad"> | number
    userId?: IntNullableWithAggregatesFilter<"Ad"> | number | null
    shopId?: IntNullableWithAggregatesFilter<"Ad"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    country?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    brand?: StringWithAggregatesFilter<"Ad"> | string
    EnginCapacity?: StringWithAggregatesFilter<"Ad"> | string
    category?: StringWithAggregatesFilter<"Ad"> | string
    carType?: StringWithAggregatesFilter<"Ad"> | string
    model?: StringWithAggregatesFilter<"Ad"> | string
    year?: StringWithAggregatesFilter<"Ad"> | string
    carStatus?: StringWithAggregatesFilter<"Ad"> | string
    transmission?: StringWithAggregatesFilter<"Ad"> | string
    fuelType?: StringWithAggregatesFilter<"Ad"> | string
    meterRange?: StringWithAggregatesFilter<"Ad"> | string
    paintType?: StringWithAggregatesFilter<"Ad"> | string
    payment?: StringWithAggregatesFilter<"Ad"> | string
    price?: StringWithAggregatesFilter<"Ad"> | string
    name?: StringWithAggregatesFilter<"Ad"> | string
    RegionalSpecifications?: StringWithAggregatesFilter<"Ad"> | string
    location?: StringWithAggregatesFilter<"Ad"> | string
    CarChassis?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    extraFeatures?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    adStatus?: StringWithAggregatesFilter<"Ad"> | string
    views?: IntWithAggregatesFilter<"Ad"> | number
    clicks?: IntWithAggregatesFilter<"Ad"> | number
  }

  export type FavoriteAdWhereInput = {
    AND?: FavoriteAdWhereInput | FavoriteAdWhereInput[]
    OR?: FavoriteAdWhereInput[]
    NOT?: FavoriteAdWhereInput | FavoriteAdWhereInput[]
    id?: IntFilter<"FavoriteAd"> | number
    userId?: IntFilter<"FavoriteAd"> | number
    adId?: IntFilter<"FavoriteAd"> | number
    createdAt?: DateTimeFilter<"FavoriteAd"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ad?: XOR<AdRelationFilter, AdWhereInput>
  }

  export type FavoriteAdOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ad?: AdOrderByWithRelationInput
  }

  export type FavoriteAdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteAdWhereInput | FavoriteAdWhereInput[]
    OR?: FavoriteAdWhereInput[]
    NOT?: FavoriteAdWhereInput | FavoriteAdWhereInput[]
    userId?: IntFilter<"FavoriteAd"> | number
    adId?: IntFilter<"FavoriteAd"> | number
    createdAt?: DateTimeFilter<"FavoriteAd"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ad?: XOR<AdRelationFilter, AdWhereInput>
  }, "id">

  export type FavoriteAdOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteAdCountOrderByAggregateInput
    _avg?: FavoriteAdAvgOrderByAggregateInput
    _max?: FavoriteAdMaxOrderByAggregateInput
    _min?: FavoriteAdMinOrderByAggregateInput
    _sum?: FavoriteAdSumOrderByAggregateInput
  }

  export type FavoriteAdScalarWhereWithAggregatesInput = {
    AND?: FavoriteAdScalarWhereWithAggregatesInput | FavoriteAdScalarWhereWithAggregatesInput[]
    OR?: FavoriteAdScalarWhereWithAggregatesInput[]
    NOT?: FavoriteAdScalarWhereWithAggregatesInput | FavoriteAdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteAd"> | number
    userId?: IntWithAggregatesFilter<"FavoriteAd"> | number
    adId?: IntWithAggregatesFilter<"FavoriteAd"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteAd"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    users?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    users?: UserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    users?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderEmail?: StringFilter<"Message"> | string
    receiverEmail?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: IntFilter<"Message"> | number
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderEmail?: SortOrder
    receiverEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderEmail?: StringFilter<"Message"> | string
    receiverEmail?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: IntFilter<"Message"> | number
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderEmail?: SortOrder
    receiverEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    senderEmail?: StringWithAggregatesFilter<"Message"> | string
    receiverEmail?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    chatId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateInput = {
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
    user: UserCreateNestedOneWithoutShopInput
    ads?: AdCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    userId: number
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
    ads?: AdUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutShopNestedInput
    ads?: AdUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
    ads?: AdUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUpdateManyMutationInput = {
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateInput = {
    url: string
    ad: AdCreateNestedOneWithoutAdimagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    adId: number
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    ad?: AdUpdateOneRequiredWithoutAdimagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    adId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    adId?: IntFieldUpdateOperationsInput | number
  }

  export type AdCreateInput = {
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    user?: UserCreateNestedOneWithoutAdsInput
    shop?: ShopCreateNestedOneWithoutAdsInput
    Adimages?: ImageCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateInput = {
    id?: number
    userId?: number | null
    shopId?: number | null
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    Adimages?: ImageUncheckedCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutAdsNestedInput
    shop?: ShopUpdateOneWithoutAdsNestedInput
    Adimages?: ImageUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    Adimages?: ImageUncheckedUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type AdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteAdCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteAdsInput
    ad: AdCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteAdUncheckedCreateInput = {
    id?: number
    userId: number
    adId: number
    createdAt?: Date | string
  }

  export type FavoriteAdUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteAdsNestedInput
    ad?: AdUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteAdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteAdUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteAdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    users?: UserCreateNestedManyWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    users?: UserUpdateManyWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUpdateManyMutationInput = {

  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver?: UserCreateNestedOneWithoutMessagesReceivedInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    senderEmail: string
    receiverEmail?: string | null
    createdAt?: Date | string
    chatId: number
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneWithoutMessagesReceivedNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdListRelationFilter = {
    every?: AdWhereInput
    some?: AdWhereInput
    none?: AdWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type FavoriteAdListRelationFilter = {
    every?: FavoriteAdWhereInput
    some?: FavoriteAdWhereInput
    none?: FavoriteAdWhereInput
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteAdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    country?: SortOrder
    image?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    country?: SortOrder
    image?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    country?: SortOrder
    image?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopCategory?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bgImage?: SortOrder
    shopImage?: SortOrder
    description?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    tiktokLink?: SortOrder
    snapchatLink?: SortOrder
    phoneNumber1?: SortOrder
    phoneNumber2?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopCategory?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bgImage?: SortOrder
    shopImage?: SortOrder
    description?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    tiktokLink?: SortOrder
    snapchatLink?: SortOrder
    phoneNumber1?: SortOrder
    phoneNumber2?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopCategory?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bgImage?: SortOrder
    shopImage?: SortOrder
    description?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    tiktokLink?: SortOrder
    snapchatLink?: SortOrder
    phoneNumber1?: SortOrder
    phoneNumber2?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdRelationFilter = {
    is?: AdWhereInput
    isNot?: AdWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShopNullableRelationFilter = {
    is?: ShopWhereInput | null
    isNot?: ShopWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    country?: SortOrder
    brand?: SortOrder
    EnginCapacity?: SortOrder
    category?: SortOrder
    carType?: SortOrder
    model?: SortOrder
    year?: SortOrder
    carStatus?: SortOrder
    transmission?: SortOrder
    fuelType?: SortOrder
    meterRange?: SortOrder
    paintType?: SortOrder
    payment?: SortOrder
    price?: SortOrder
    name?: SortOrder
    RegionalSpecifications?: SortOrder
    location?: SortOrder
    CarChassis?: SortOrder
    extraFeatures?: SortOrder
    adStatus?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
  }

  export type AdAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
  }

  export type AdMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    country?: SortOrder
    brand?: SortOrder
    EnginCapacity?: SortOrder
    category?: SortOrder
    carType?: SortOrder
    model?: SortOrder
    year?: SortOrder
    carStatus?: SortOrder
    transmission?: SortOrder
    fuelType?: SortOrder
    meterRange?: SortOrder
    paintType?: SortOrder
    payment?: SortOrder
    price?: SortOrder
    name?: SortOrder
    RegionalSpecifications?: SortOrder
    location?: SortOrder
    CarChassis?: SortOrder
    extraFeatures?: SortOrder
    adStatus?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
  }

  export type AdMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    country?: SortOrder
    brand?: SortOrder
    EnginCapacity?: SortOrder
    category?: SortOrder
    carType?: SortOrder
    model?: SortOrder
    year?: SortOrder
    carStatus?: SortOrder
    transmission?: SortOrder
    fuelType?: SortOrder
    meterRange?: SortOrder
    paintType?: SortOrder
    payment?: SortOrder
    price?: SortOrder
    name?: SortOrder
    RegionalSpecifications?: SortOrder
    location?: SortOrder
    CarChassis?: SortOrder
    extraFeatures?: SortOrder
    adStatus?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
  }

  export type AdSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FavoriteAdCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAdAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
  }

  export type FavoriteAdMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAdMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAdSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderEmail?: SortOrder
    receiverEmail?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderEmail?: SortOrder
    receiverEmail?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderEmail?: SortOrder
    receiverEmail?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
  }

  export type AdCreateNestedManyWithoutUserInput = {
    create?: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput> | AdCreateWithoutUserInput[] | AdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutUserInput | AdCreateOrConnectWithoutUserInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FavoriteAdCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput> | FavoriteAdCreateWithoutUserInput[] | FavoriteAdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutUserInput | FavoriteAdCreateOrConnectWithoutUserInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
  }

  export type ShopCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput> | ShopCreateWithoutUserInput[] | ShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput | ShopCreateOrConnectWithoutUserInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type AdUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput> | AdCreateWithoutUserInput[] | AdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutUserInput | AdCreateOrConnectWithoutUserInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FavoriteAdUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput> | FavoriteAdCreateWithoutUserInput[] | FavoriteAdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutUserInput | FavoriteAdCreateOrConnectWithoutUserInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput> | ShopCreateWithoutUserInput[] | ShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput | ShopCreateOrConnectWithoutUserInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AdUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput> | AdCreateWithoutUserInput[] | AdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutUserInput | AdCreateOrConnectWithoutUserInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutUserInput | AdUpsertWithWhereUniqueWithoutUserInput[]
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutUserInput | AdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdUpdateManyWithWhereWithoutUserInput | AdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUsersInput | ChatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUsersInput | ChatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUsersInput | ChatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FavoriteAdUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput> | FavoriteAdCreateWithoutUserInput[] | FavoriteAdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutUserInput | FavoriteAdCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteAdUpsertWithWhereUniqueWithoutUserInput | FavoriteAdUpsertWithWhereUniqueWithoutUserInput[]
    set?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    disconnect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    delete?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    update?: FavoriteAdUpdateWithWhereUniqueWithoutUserInput | FavoriteAdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteAdUpdateManyWithWhereWithoutUserInput | FavoriteAdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
  }

  export type ShopUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput> | ShopCreateWithoutUserInput[] | ShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput | ShopCreateOrConnectWithoutUserInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutUserInput | ShopUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutUserInput | ShopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutUserInput | ShopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput> | AdCreateWithoutUserInput[] | AdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutUserInput | AdCreateOrConnectWithoutUserInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutUserInput | AdUpsertWithWhereUniqueWithoutUserInput[]
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutUserInput | AdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdUpdateManyWithWhereWithoutUserInput | AdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUsersInput | ChatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUsersInput | ChatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUsersInput | ChatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FavoriteAdUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput> | FavoriteAdCreateWithoutUserInput[] | FavoriteAdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutUserInput | FavoriteAdCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteAdUpsertWithWhereUniqueWithoutUserInput | FavoriteAdUpsertWithWhereUniqueWithoutUserInput[]
    set?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    disconnect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    delete?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    update?: FavoriteAdUpdateWithWhereUniqueWithoutUserInput | FavoriteAdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteAdUpdateManyWithWhereWithoutUserInput | FavoriteAdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput> | ShopCreateWithoutUserInput[] | ShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput | ShopCreateOrConnectWithoutUserInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutUserInput | ShopUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutUserInput | ShopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutUserInput | ShopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopInput
    connect?: UserWhereUniqueInput
  }

  export type AdCreateNestedManyWithoutShopInput = {
    create?: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput> | AdCreateWithoutShopInput[] | AdUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AdCreateOrConnectWithoutShopInput | AdCreateOrConnectWithoutShopInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type AdUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput> | AdCreateWithoutShopInput[] | AdUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AdCreateOrConnectWithoutShopInput | AdCreateOrConnectWithoutShopInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopInput
    upsert?: UserUpsertWithoutShopInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopInput, UserUpdateWithoutShopInput>, UserUncheckedUpdateWithoutShopInput>
  }

  export type AdUpdateManyWithoutShopNestedInput = {
    create?: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput> | AdCreateWithoutShopInput[] | AdUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AdCreateOrConnectWithoutShopInput | AdCreateOrConnectWithoutShopInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutShopInput | AdUpsertWithWhereUniqueWithoutShopInput[]
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutShopInput | AdUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AdUpdateManyWithWhereWithoutShopInput | AdUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput> | AdCreateWithoutShopInput[] | AdUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AdCreateOrConnectWithoutShopInput | AdCreateOrConnectWithoutShopInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutShopInput | AdUpsertWithWhereUniqueWithoutShopInput[]
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutShopInput | AdUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AdUpdateManyWithWhereWithoutShopInput | AdUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdCreateNestedOneWithoutAdimagesInput = {
    create?: XOR<AdCreateWithoutAdimagesInput, AdUncheckedCreateWithoutAdimagesInput>
    connectOrCreate?: AdCreateOrConnectWithoutAdimagesInput
    connect?: AdWhereUniqueInput
  }

  export type AdUpdateOneRequiredWithoutAdimagesNestedInput = {
    create?: XOR<AdCreateWithoutAdimagesInput, AdUncheckedCreateWithoutAdimagesInput>
    connectOrCreate?: AdCreateOrConnectWithoutAdimagesInput
    upsert?: AdUpsertWithoutAdimagesInput
    connect?: AdWhereUniqueInput
    update?: XOR<XOR<AdUpdateToOneWithWhereWithoutAdimagesInput, AdUpdateWithoutAdimagesInput>, AdUncheckedUpdateWithoutAdimagesInput>
  }

  export type UserCreateNestedOneWithoutAdsInput = {
    create?: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput
    connect?: UserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutAdsInput = {
    create?: XOR<ShopCreateWithoutAdsInput, ShopUncheckedCreateWithoutAdsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAdsInput
    connect?: ShopWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutAdInput = {
    create?: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput> | ImageCreateWithoutAdInput[] | ImageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAdInput | ImageCreateOrConnectWithoutAdInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type FavoriteAdCreateNestedManyWithoutAdInput = {
    create?: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput> | FavoriteAdCreateWithoutAdInput[] | FavoriteAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutAdInput | FavoriteAdCreateOrConnectWithoutAdInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput> | ImageCreateWithoutAdInput[] | ImageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAdInput | ImageCreateOrConnectWithoutAdInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type FavoriteAdUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput> | FavoriteAdCreateWithoutAdInput[] | FavoriteAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutAdInput | FavoriteAdCreateOrConnectWithoutAdInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutAdsNestedInput = {
    create?: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput
    upsert?: UserUpsertWithoutAdsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdsInput, UserUpdateWithoutAdsInput>, UserUncheckedUpdateWithoutAdsInput>
  }

  export type ShopUpdateOneWithoutAdsNestedInput = {
    create?: XOR<ShopCreateWithoutAdsInput, ShopUncheckedCreateWithoutAdsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAdsInput
    upsert?: ShopUpsertWithoutAdsInput
    disconnect?: ShopWhereInput | boolean
    delete?: ShopWhereInput | boolean
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutAdsInput, ShopUpdateWithoutAdsInput>, ShopUncheckedUpdateWithoutAdsInput>
  }

  export type ImageUpdateManyWithoutAdNestedInput = {
    create?: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput> | ImageCreateWithoutAdInput[] | ImageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAdInput | ImageCreateOrConnectWithoutAdInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAdInput | ImageUpsertWithWhereUniqueWithoutAdInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAdInput | ImageUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAdInput | ImageUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FavoriteAdUpdateManyWithoutAdNestedInput = {
    create?: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput> | FavoriteAdCreateWithoutAdInput[] | FavoriteAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutAdInput | FavoriteAdCreateOrConnectWithoutAdInput[]
    upsert?: FavoriteAdUpsertWithWhereUniqueWithoutAdInput | FavoriteAdUpsertWithWhereUniqueWithoutAdInput[]
    set?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    disconnect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    delete?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    update?: FavoriteAdUpdateWithWhereUniqueWithoutAdInput | FavoriteAdUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: FavoriteAdUpdateManyWithWhereWithoutAdInput | FavoriteAdUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput> | ImageCreateWithoutAdInput[] | ImageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAdInput | ImageCreateOrConnectWithoutAdInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAdInput | ImageUpsertWithWhereUniqueWithoutAdInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAdInput | ImageUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAdInput | ImageUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FavoriteAdUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput> | FavoriteAdCreateWithoutAdInput[] | FavoriteAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: FavoriteAdCreateOrConnectWithoutAdInput | FavoriteAdCreateOrConnectWithoutAdInput[]
    upsert?: FavoriteAdUpsertWithWhereUniqueWithoutAdInput | FavoriteAdUpsertWithWhereUniqueWithoutAdInput[]
    set?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    disconnect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    delete?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    connect?: FavoriteAdWhereUniqueInput | FavoriteAdWhereUniqueInput[]
    update?: FavoriteAdUpdateWithWhereUniqueWithoutAdInput | FavoriteAdUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: FavoriteAdUpdateManyWithWhereWithoutAdInput | FavoriteAdUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteAdsInput = {
    create?: XOR<UserCreateWithoutFavoriteAdsInput, UserUncheckedCreateWithoutFavoriteAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteAdsInput
    connect?: UserWhereUniqueInput
  }

  export type AdCreateNestedOneWithoutFavoritedByInput = {
    create?: XOR<AdCreateWithoutFavoritedByInput, AdUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: AdCreateOrConnectWithoutFavoritedByInput
    connect?: AdWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteAdsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteAdsInput, UserUncheckedCreateWithoutFavoriteAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteAdsInput
    upsert?: UserUpsertWithoutFavoriteAdsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteAdsInput, UserUpdateWithoutFavoriteAdsInput>, UserUncheckedUpdateWithoutFavoriteAdsInput>
  }

  export type AdUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: XOR<AdCreateWithoutFavoritedByInput, AdUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: AdCreateOrConnectWithoutFavoritedByInput
    upsert?: AdUpsertWithoutFavoritedByInput
    connect?: AdWhereUniqueInput
    update?: XOR<XOR<AdUpdateToOneWithWhereWithoutFavoritedByInput, AdUpdateWithoutFavoritedByInput>, AdUncheckedUpdateWithoutFavoritedByInput>
  }

  export type UserCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AdCreateWithoutUserInput = {
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    shop?: ShopCreateNestedOneWithoutAdsInput
    Adimages?: ImageCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutUserInput = {
    id?: number
    shopId?: number | null
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    Adimages?: ImageUncheckedCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutUserInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateWithoutUsersInput = {
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUsersInput = {
    id?: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUsersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    receiver?: UserCreateNestedOneWithoutMessagesReceivedInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    receiverEmail?: string | null
    createdAt?: Date | string
    chatId: number
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateWithoutReceiverInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    content: string
    senderEmail: string
    createdAt?: Date | string
    chatId: number
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type FavoriteAdCreateWithoutUserInput = {
    createdAt?: Date | string
    ad: AdCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteAdUncheckedCreateWithoutUserInput = {
    id?: number
    adId: number
    createdAt?: Date | string
  }

  export type FavoriteAdCreateOrConnectWithoutUserInput = {
    where: FavoriteAdWhereUniqueInput
    create: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput>
  }

  export type ShopCreateWithoutUserInput = {
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
    ads?: AdCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUserInput = {
    id?: number
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
    ads?: AdUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUserInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
  }

  export type AdUpsertWithWhereUniqueWithoutUserInput = {
    where: AdWhereUniqueInput
    update: XOR<AdUpdateWithoutUserInput, AdUncheckedUpdateWithoutUserInput>
    create: XOR<AdCreateWithoutUserInput, AdUncheckedCreateWithoutUserInput>
  }

  export type AdUpdateWithWhereUniqueWithoutUserInput = {
    where: AdWhereUniqueInput
    data: XOR<AdUpdateWithoutUserInput, AdUncheckedUpdateWithoutUserInput>
  }

  export type AdUpdateManyWithWhereWithoutUserInput = {
    where: AdScalarWhereInput
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyWithoutUserInput>
  }

  export type AdScalarWhereInput = {
    AND?: AdScalarWhereInput | AdScalarWhereInput[]
    OR?: AdScalarWhereInput[]
    NOT?: AdScalarWhereInput | AdScalarWhereInput[]
    id?: IntFilter<"Ad"> | number
    userId?: IntNullableFilter<"Ad"> | number | null
    shopId?: IntNullableFilter<"Ad"> | number | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    description?: StringNullableFilter<"Ad"> | string | null
    country?: StringNullableFilter<"Ad"> | string | null
    brand?: StringFilter<"Ad"> | string
    EnginCapacity?: StringFilter<"Ad"> | string
    category?: StringFilter<"Ad"> | string
    carType?: StringFilter<"Ad"> | string
    model?: StringFilter<"Ad"> | string
    year?: StringFilter<"Ad"> | string
    carStatus?: StringFilter<"Ad"> | string
    transmission?: StringFilter<"Ad"> | string
    fuelType?: StringFilter<"Ad"> | string
    meterRange?: StringFilter<"Ad"> | string
    paintType?: StringFilter<"Ad"> | string
    payment?: StringFilter<"Ad"> | string
    price?: StringFilter<"Ad"> | string
    name?: StringFilter<"Ad"> | string
    RegionalSpecifications?: StringFilter<"Ad"> | string
    location?: StringFilter<"Ad"> | string
    CarChassis?: StringNullableFilter<"Ad"> | string | null
    extraFeatures?: StringNullableFilter<"Ad"> | string | null
    adStatus?: StringFilter<"Ad"> | string
    views?: IntFilter<"Ad"> | number
    clicks?: IntFilter<"Ad"> | number
  }

  export type ChatUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUpdateManyWithWhereWithoutUsersInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderEmail?: StringFilter<"Message"> | string
    receiverEmail?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: IntFilter<"Message"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type FavoriteAdUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteAdWhereUniqueInput
    update: XOR<FavoriteAdUpdateWithoutUserInput, FavoriteAdUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteAdCreateWithoutUserInput, FavoriteAdUncheckedCreateWithoutUserInput>
  }

  export type FavoriteAdUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteAdWhereUniqueInput
    data: XOR<FavoriteAdUpdateWithoutUserInput, FavoriteAdUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteAdUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteAdScalarWhereInput
    data: XOR<FavoriteAdUpdateManyMutationInput, FavoriteAdUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteAdScalarWhereInput = {
    AND?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
    OR?: FavoriteAdScalarWhereInput[]
    NOT?: FavoriteAdScalarWhereInput | FavoriteAdScalarWhereInput[]
    id?: IntFilter<"FavoriteAd"> | number
    userId?: IntFilter<"FavoriteAd"> | number
    adId?: IntFilter<"FavoriteAd"> | number
    createdAt?: DateTimeFilter<"FavoriteAd"> | Date | string
  }

  export type ShopUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutUserInput, ShopUncheckedUpdateWithoutUserInput>
    create: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutUserInput, ShopUncheckedUpdateWithoutUserInput>
  }

  export type ShopUpdateManyWithWhereWithoutUserInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: IntFilter<"Shop"> | number
    userId?: IntFilter<"Shop"> | number
    shopCategory?: StringFilter<"Shop"> | string
    shopName?: StringFilter<"Shop"> | string
    city?: StringNullableFilter<"Shop"> | string | null
    country?: StringNullableFilter<"Shop"> | string | null
    bgImage?: StringFilter<"Shop"> | string
    shopImage?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    facebookLink?: StringNullableFilter<"Shop"> | string | null
    twitterLink?: StringNullableFilter<"Shop"> | string | null
    instagramLink?: StringNullableFilter<"Shop"> | string | null
    tiktokLink?: StringNullableFilter<"Shop"> | string | null
    snapchatLink?: StringNullableFilter<"Shop"> | string | null
    phoneNumber1?: StringNullableFilter<"Shop"> | string | null
    phoneNumber2?: StringNullableFilter<"Shop"> | string | null
  }

  export type UserCreateWithoutShopInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type AdCreateWithoutShopInput = {
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    user?: UserCreateNestedOneWithoutAdsInput
    Adimages?: ImageCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutShopInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    Adimages?: ImageUncheckedCreateNestedManyWithoutAdInput
    favoritedBy?: FavoriteAdUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutShopInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput>
  }

  export type UserUpsertWithoutShopInput = {
    update: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
  }

  export type UserUpdateWithoutShopInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdUpsertWithWhereUniqueWithoutShopInput = {
    where: AdWhereUniqueInput
    update: XOR<AdUpdateWithoutShopInput, AdUncheckedUpdateWithoutShopInput>
    create: XOR<AdCreateWithoutShopInput, AdUncheckedCreateWithoutShopInput>
  }

  export type AdUpdateWithWhereUniqueWithoutShopInput = {
    where: AdWhereUniqueInput
    data: XOR<AdUpdateWithoutShopInput, AdUncheckedUpdateWithoutShopInput>
  }

  export type AdUpdateManyWithWhereWithoutShopInput = {
    where: AdScalarWhereInput
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyWithoutShopInput>
  }

  export type AdCreateWithoutAdimagesInput = {
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    user?: UserCreateNestedOneWithoutAdsInput
    shop?: ShopCreateNestedOneWithoutAdsInput
    favoritedBy?: FavoriteAdCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutAdimagesInput = {
    id?: number
    userId?: number | null
    shopId?: number | null
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    favoritedBy?: FavoriteAdUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutAdimagesInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutAdimagesInput, AdUncheckedCreateWithoutAdimagesInput>
  }

  export type AdUpsertWithoutAdimagesInput = {
    update: XOR<AdUpdateWithoutAdimagesInput, AdUncheckedUpdateWithoutAdimagesInput>
    create: XOR<AdCreateWithoutAdimagesInput, AdUncheckedCreateWithoutAdimagesInput>
    where?: AdWhereInput
  }

  export type AdUpdateToOneWithWhereWithoutAdimagesInput = {
    where?: AdWhereInput
    data: XOR<AdUpdateWithoutAdimagesInput, AdUncheckedUpdateWithoutAdimagesInput>
  }

  export type AdUpdateWithoutAdimagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutAdsNestedInput
    shop?: ShopUpdateOneWithoutAdsNestedInput
    favoritedBy?: FavoriteAdUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutAdimagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    favoritedBy?: FavoriteAdUncheckedUpdateManyWithoutAdNestedInput
  }

  export type UserCreateWithoutAdsInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdsInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
  }

  export type ShopCreateWithoutAdsInput = {
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
    user: UserCreateNestedOneWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutAdsInput = {
    id?: number
    userId: number
    shopCategory?: string
    shopName: string
    city?: string | null
    country?: string | null
    bgImage?: string
    shopImage?: string | null
    description?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    tiktokLink?: string | null
    snapchatLink?: string | null
    phoneNumber1?: string | null
    phoneNumber2?: string | null
  }

  export type ShopCreateOrConnectWithoutAdsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutAdsInput, ShopUncheckedCreateWithoutAdsInput>
  }

  export type ImageCreateWithoutAdInput = {
    url: string
  }

  export type ImageUncheckedCreateWithoutAdInput = {
    id?: number
    url: string
  }

  export type ImageCreateOrConnectWithoutAdInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput>
  }

  export type FavoriteAdCreateWithoutAdInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteAdsInput
  }

  export type FavoriteAdUncheckedCreateWithoutAdInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FavoriteAdCreateOrConnectWithoutAdInput = {
    where: FavoriteAdWhereUniqueInput
    create: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput>
  }

  export type UserUpsertWithoutAdsInput = {
    update: XOR<UserUpdateWithoutAdsInput, UserUncheckedUpdateWithoutAdsInput>
    create: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdsInput, UserUncheckedUpdateWithoutAdsInput>
  }

  export type UserUpdateWithoutAdsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopUpsertWithoutAdsInput = {
    update: XOR<ShopUpdateWithoutAdsInput, ShopUncheckedUpdateWithoutAdsInput>
    create: XOR<ShopCreateWithoutAdsInput, ShopUncheckedCreateWithoutAdsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutAdsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutAdsInput, ShopUncheckedUpdateWithoutAdsInput>
  }

  export type ShopUpdateWithoutAdsInput = {
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutAdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUpsertWithWhereUniqueWithoutAdInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutAdInput, ImageUncheckedUpdateWithoutAdInput>
    create: XOR<ImageCreateWithoutAdInput, ImageUncheckedCreateWithoutAdInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutAdInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutAdInput, ImageUncheckedUpdateWithoutAdInput>
  }

  export type ImageUpdateManyWithWhereWithoutAdInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutAdInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    adId?: IntFilter<"Image"> | number
  }

  export type FavoriteAdUpsertWithWhereUniqueWithoutAdInput = {
    where: FavoriteAdWhereUniqueInput
    update: XOR<FavoriteAdUpdateWithoutAdInput, FavoriteAdUncheckedUpdateWithoutAdInput>
    create: XOR<FavoriteAdCreateWithoutAdInput, FavoriteAdUncheckedCreateWithoutAdInput>
  }

  export type FavoriteAdUpdateWithWhereUniqueWithoutAdInput = {
    where: FavoriteAdWhereUniqueInput
    data: XOR<FavoriteAdUpdateWithoutAdInput, FavoriteAdUncheckedUpdateWithoutAdInput>
  }

  export type FavoriteAdUpdateManyWithWhereWithoutAdInput = {
    where: FavoriteAdScalarWhereInput
    data: XOR<FavoriteAdUpdateManyMutationInput, FavoriteAdUncheckedUpdateManyWithoutAdInput>
  }

  export type UserCreateWithoutFavoriteAdsInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteAdsInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteAdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteAdsInput, UserUncheckedCreateWithoutFavoriteAdsInput>
  }

  export type AdCreateWithoutFavoritedByInput = {
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    user?: UserCreateNestedOneWithoutAdsInput
    shop?: ShopCreateNestedOneWithoutAdsInput
    Adimages?: ImageCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    userId?: number | null
    shopId?: number | null
    createdAt?: Date | string
    description?: string | null
    country?: string | null
    brand: string
    EnginCapacity: string
    category: string
    carType: string
    model: string
    year: string
    carStatus: string
    transmission: string
    fuelType: string
    meterRange: string
    paintType: string
    payment: string
    price: string
    name: string
    RegionalSpecifications: string
    location: string
    CarChassis?: string | null
    extraFeatures?: string | null
    adStatus?: string
    views?: number
    clicks?: number
    Adimages?: ImageUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutFavoritedByInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutFavoritedByInput, AdUncheckedCreateWithoutFavoritedByInput>
  }

  export type UserUpsertWithoutFavoriteAdsInput = {
    update: XOR<UserUpdateWithoutFavoriteAdsInput, UserUncheckedUpdateWithoutFavoriteAdsInput>
    create: XOR<UserCreateWithoutFavoriteAdsInput, UserUncheckedCreateWithoutFavoriteAdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteAdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteAdsInput, UserUncheckedUpdateWithoutFavoriteAdsInput>
  }

  export type UserUpdateWithoutFavoriteAdsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteAdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdUpsertWithoutFavoritedByInput = {
    update: XOR<AdUpdateWithoutFavoritedByInput, AdUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<AdCreateWithoutFavoritedByInput, AdUncheckedCreateWithoutFavoritedByInput>
    where?: AdWhereInput
  }

  export type AdUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: AdWhereInput
    data: XOR<AdUpdateWithoutFavoritedByInput, AdUncheckedUpdateWithoutFavoritedByInput>
  }

  export type AdUpdateWithoutFavoritedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutAdsNestedInput
    shop?: ShopUpdateOneWithoutAdsNestedInput
    Adimages?: ImageUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    Adimages?: ImageUncheckedUpdateManyWithoutAdNestedInput
  }

  export type UserCreateWithoutChatsInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver?: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    content: string
    senderEmail: string
    receiverEmail?: string | null
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutMessagesSentInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUsersInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    favoriteAds?: FavoriteAdCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    createdAt?: Date | string
    phoneNumber?: string | null
    username?: string | null
    country?: string | null
    image?: string | null
    email: string
    ads?: AdUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    favoriteAds?: FavoriteAdUncheckedCreateNestedManyWithoutUserInput
    shop?: ShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    users?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: number
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    users?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type AdUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    shop?: ShopUpdateOneWithoutAdsNestedInput
    Adimages?: ImageUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    Adimages?: ImageUncheckedUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type ChatUpdateWithoutUsersInput = {
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneWithoutMessagesReceivedNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteAdUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: AdUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteAdUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteAdUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUpdateWithoutUserInput = {
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
    ads?: AdUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
    ads?: AdUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopCategory?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bgImage?: StringFieldUpdateOperationsInput | string
    shopImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber1?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdUpdateWithoutShopInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutAdsNestedInput
    Adimages?: ImageUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    Adimages?: ImageUncheckedUpdateManyWithoutAdNestedInput
    favoritedBy?: FavoriteAdUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    EnginCapacity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    carType?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    carStatus?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    meterRange?: StringFieldUpdateOperationsInput | string
    paintType?: StringFieldUpdateOperationsInput | string
    payment?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    RegionalSpecifications?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    CarChassis?: NullableStringFieldUpdateOperationsInput | string | null
    extraFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    adStatus?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutAdInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutAdInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyWithoutAdInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteAdUpdateWithoutAdInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteAdsNestedInput
  }

  export type FavoriteAdUncheckedUpdateWithoutAdInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteAdUncheckedUpdateManyWithoutAdInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutChatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    favoriteAds?: FavoriteAdUncheckedUpdateManyWithoutUserNestedInput
    shop?: ShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopCountOutputTypeDefaultArgs instead
     */
    export type ShopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdCountOutputTypeDefaultArgs instead
     */
    export type AdCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCountOutputTypeDefaultArgs instead
     */
    export type ChatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopDefaultArgs instead
     */
    export type ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdDefaultArgs instead
     */
    export type AdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteAdDefaultArgs instead
     */
    export type FavoriteAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteAdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatDefaultArgs instead
     */
    export type ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

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