
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostBlock
 * 
 */
export type PostBlock = $Result.DefaultSelection<Prisma.$PostBlockPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model VisiMisi
 * 
 */
export type VisiMisi = $Result.DefaultSelection<Prisma.$VisiMisiPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Sosmed
 * 
 */
export type Sosmed = $Result.DefaultSelection<Prisma.$SosmedPayload>
/**
 * Model SchoolProfile
 * 
 */
export type SchoolProfile = $Result.DefaultSelection<Prisma.$SchoolProfilePayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  BERITA: 'BERITA',
  INFO: 'INFO',
  PENGUMUMAN: 'PENGUMUMAN',
  PRESTASI: 'PRESTASI',
  PPDB: 'PPDB'
};

export type Category = (typeof Category)[keyof typeof Category]


export const BlockType: {
  PARAGRAPH: 'PARAGRAPH',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type BlockType = (typeof BlockType)[keyof typeof BlockType]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type BlockType = $Enums.BlockType

export const BlockType: typeof $Enums.BlockType

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postBlock`: Exposes CRUD operations for the **PostBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostBlocks
    * const postBlocks = await prisma.postBlock.findMany()
    * ```
    */
  get postBlock(): Prisma.PostBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visiMisi`: Exposes CRUD operations for the **VisiMisi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisiMisis
    * const visiMisis = await prisma.visiMisi.findMany()
    * ```
    */
  get visiMisi(): Prisma.VisiMisiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sosmed`: Exposes CRUD operations for the **Sosmed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sosmeds
    * const sosmeds = await prisma.sosmed.findMany()
    * ```
    */
  get sosmed(): Prisma.SosmedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolProfile`: Exposes CRUD operations for the **SchoolProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolProfiles
    * const schoolProfiles = await prisma.schoolProfile.findMany()
    * ```
    */
  get schoolProfile(): Prisma.SchoolProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Post: 'Post',
    PostBlock: 'PostBlock',
    Image: 'Image',
    Teacher: 'Teacher',
    VisiMisi: 'VisiMisi',
    Contact: 'Contact',
    Sosmed: 'Sosmed',
    SchoolProfile: 'SchoolProfile',
    Visitor: 'Visitor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "postBlock" | "image" | "teacher" | "visiMisi" | "contact" | "sosmed" | "schoolProfile" | "visitor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostBlock: {
        payload: Prisma.$PostBlockPayload<ExtArgs>
        fields: Prisma.PostBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          findFirst: {
            args: Prisma.PostBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          findMany: {
            args: Prisma.PostBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>[]
          }
          create: {
            args: Prisma.PostBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          createMany: {
            args: Prisma.PostBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>[]
          }
          delete: {
            args: Prisma.PostBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          update: {
            args: Prisma.PostBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          deleteMany: {
            args: Prisma.PostBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>[]
          }
          upsert: {
            args: Prisma.PostBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBlockPayload>
          }
          aggregate: {
            args: Prisma.PostBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostBlock>
          }
          groupBy: {
            args: Prisma.PostBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostBlockCountArgs<ExtArgs>
            result: $Utils.Optional<PostBlockCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      VisiMisi: {
        payload: Prisma.$VisiMisiPayload<ExtArgs>
        fields: Prisma.VisiMisiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisiMisiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisiMisiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          findFirst: {
            args: Prisma.VisiMisiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisiMisiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          findMany: {
            args: Prisma.VisiMisiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>[]
          }
          create: {
            args: Prisma.VisiMisiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          createMany: {
            args: Prisma.VisiMisiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisiMisiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>[]
          }
          delete: {
            args: Prisma.VisiMisiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          update: {
            args: Prisma.VisiMisiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          deleteMany: {
            args: Prisma.VisiMisiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisiMisiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisiMisiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>[]
          }
          upsert: {
            args: Prisma.VisiMisiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisiMisiPayload>
          }
          aggregate: {
            args: Prisma.VisiMisiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisiMisi>
          }
          groupBy: {
            args: Prisma.VisiMisiGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisiMisiGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisiMisiCountArgs<ExtArgs>
            result: $Utils.Optional<VisiMisiCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Sosmed: {
        payload: Prisma.$SosmedPayload<ExtArgs>
        fields: Prisma.SosmedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SosmedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SosmedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          findFirst: {
            args: Prisma.SosmedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SosmedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          findMany: {
            args: Prisma.SosmedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>[]
          }
          create: {
            args: Prisma.SosmedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          createMany: {
            args: Prisma.SosmedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SosmedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>[]
          }
          delete: {
            args: Prisma.SosmedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          update: {
            args: Prisma.SosmedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          deleteMany: {
            args: Prisma.SosmedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SosmedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SosmedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>[]
          }
          upsert: {
            args: Prisma.SosmedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SosmedPayload>
          }
          aggregate: {
            args: Prisma.SosmedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSosmed>
          }
          groupBy: {
            args: Prisma.SosmedGroupByArgs<ExtArgs>
            result: $Utils.Optional<SosmedGroupByOutputType>[]
          }
          count: {
            args: Prisma.SosmedCountArgs<ExtArgs>
            result: $Utils.Optional<SosmedCountAggregateOutputType> | number
          }
        }
      }
      SchoolProfile: {
        payload: Prisma.$SchoolProfilePayload<ExtArgs>
        fields: Prisma.SchoolProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          findFirst: {
            args: Prisma.SchoolProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          findMany: {
            args: Prisma.SchoolProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>[]
          }
          create: {
            args: Prisma.SchoolProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          createMany: {
            args: Prisma.SchoolProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>[]
          }
          delete: {
            args: Prisma.SchoolProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          update: {
            args: Prisma.SchoolProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          deleteMany: {
            args: Prisma.SchoolProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>[]
          }
          upsert: {
            args: Prisma.SchoolProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          aggregate: {
            args: Prisma.SchoolProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolProfile>
          }
          groupBy: {
            args: Prisma.SchoolProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolProfileCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
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
    user?: UserOmit
    post?: PostOmit
    postBlock?: PostBlockOmit
    image?: ImageOmit
    teacher?: TeacherOmit
    visiMisi?: VisiMisiOmit
    contact?: ContactOmit
    sosmed?: SosmedOmit
    schoolProfile?: SchoolProfileOmit
    visitor?: VisitorOmit
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    blocks: number
    visitors: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | PostCountOutputTypeCountBlocksArgs
    visitors?: boolean | PostCountOutputTypeCountVisitorsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBlockWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountVisitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string | null
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    style: number | null
  }

  export type PostSumAggregateOutputType = {
    style: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    style: number | null
    category: $Enums.Category | null
    author: string | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    style: number | null
    category: $Enums.Category | null
    author: string | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    style: number
    category: number
    author: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    style?: true
  }

  export type PostSumAggregateInputType = {
    style?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    style?: true
    category?: true
    author?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    style?: true
    category?: true
    author?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    style?: true
    category?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    style: number
    category: $Enums.Category
    author: string
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    style?: boolean
    category?: boolean
    author?: boolean
    createdAt?: boolean
    blocks?: boolean | Post$blocksArgs<ExtArgs>
    visitors?: boolean | Post$visitorsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    style?: boolean
    category?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    style?: boolean
    category?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    style?: boolean
    category?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "style" | "category" | "author" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | Post$blocksArgs<ExtArgs>
    visitors?: boolean | Post$visitorsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      blocks: Prisma.$PostBlockPayload<ExtArgs>[]
      visitors: Prisma.$VisitorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      style: number
      category: $Enums.Category
      author: string
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocks<T extends Post$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Post$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitors<T extends Post$visitorsArgs<ExtArgs> = {}>(args?: Subset<T, Post$visitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly style: FieldRef<"Post", 'Int'>
    readonly category: FieldRef<"Post", 'Category'>
    readonly author: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.blocks
   */
  export type Post$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    where?: PostBlockWhereInput
    orderBy?: PostBlockOrderByWithRelationInput | PostBlockOrderByWithRelationInput[]
    cursor?: PostBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostBlockScalarFieldEnum | PostBlockScalarFieldEnum[]
  }

  /**
   * Post.visitors
   */
  export type Post$visitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    cursor?: VisitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostBlock
   */

  export type AggregatePostBlock = {
    _count: PostBlockCountAggregateOutputType | null
    _avg: PostBlockAvgAggregateOutputType | null
    _sum: PostBlockSumAggregateOutputType | null
    _min: PostBlockMinAggregateOutputType | null
    _max: PostBlockMaxAggregateOutputType | null
  }

  export type PostBlockAvgAggregateOutputType = {
    order: number | null
  }

  export type PostBlockSumAggregateOutputType = {
    order: number | null
  }

  export type PostBlockMinAggregateOutputType = {
    id: string | null
    type: $Enums.BlockType | null
    content: string | null
    order: number | null
    postId: string | null
  }

  export type PostBlockMaxAggregateOutputType = {
    id: string | null
    type: $Enums.BlockType | null
    content: string | null
    order: number | null
    postId: string | null
  }

  export type PostBlockCountAggregateOutputType = {
    id: number
    type: number
    content: number
    order: number
    postId: number
    _all: number
  }


  export type PostBlockAvgAggregateInputType = {
    order?: true
  }

  export type PostBlockSumAggregateInputType = {
    order?: true
  }

  export type PostBlockMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    postId?: true
  }

  export type PostBlockMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    postId?: true
  }

  export type PostBlockCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    postId?: true
    _all?: true
  }

  export type PostBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBlock to aggregate.
     */
    where?: PostBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBlocks to fetch.
     */
    orderBy?: PostBlockOrderByWithRelationInput | PostBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostBlocks
    **/
    _count?: true | PostBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostBlockMaxAggregateInputType
  }

  export type GetPostBlockAggregateType<T extends PostBlockAggregateArgs> = {
        [P in keyof T & keyof AggregatePostBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostBlock[P]>
      : GetScalarType<T[P], AggregatePostBlock[P]>
  }




  export type PostBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBlockWhereInput
    orderBy?: PostBlockOrderByWithAggregationInput | PostBlockOrderByWithAggregationInput[]
    by: PostBlockScalarFieldEnum[] | PostBlockScalarFieldEnum
    having?: PostBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostBlockCountAggregateInputType | true
    _avg?: PostBlockAvgAggregateInputType
    _sum?: PostBlockSumAggregateInputType
    _min?: PostBlockMinAggregateInputType
    _max?: PostBlockMaxAggregateInputType
  }

  export type PostBlockGroupByOutputType = {
    id: string
    type: $Enums.BlockType
    content: string | null
    order: number
    postId: string
    _count: PostBlockCountAggregateOutputType | null
    _avg: PostBlockAvgAggregateOutputType | null
    _sum: PostBlockSumAggregateOutputType | null
    _min: PostBlockMinAggregateOutputType | null
    _max: PostBlockMaxAggregateOutputType | null
  }

  type GetPostBlockGroupByPayload<T extends PostBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostBlockGroupByOutputType[P]>
            : GetScalarType<T[P], PostBlockGroupByOutputType[P]>
        }
      >
    >


  export type PostBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    image?: boolean | PostBlock$imageArgs<ExtArgs>
  }, ExtArgs["result"]["postBlock"]>

  export type PostBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postBlock"]>

  export type PostBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postBlock"]>

  export type PostBlockSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    postId?: boolean
  }

  export type PostBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "order" | "postId", ExtArgs["result"]["postBlock"]>
  export type PostBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    image?: boolean | PostBlock$imageArgs<ExtArgs>
  }
  export type PostBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostBlock"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.BlockType
      content: string | null
      order: number
      postId: string
    }, ExtArgs["result"]["postBlock"]>
    composites: {}
  }

  type PostBlockGetPayload<S extends boolean | null | undefined | PostBlockDefaultArgs> = $Result.GetResult<Prisma.$PostBlockPayload, S>

  type PostBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostBlockCountAggregateInputType | true
    }

  export interface PostBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostBlock'], meta: { name: 'PostBlock' } }
    /**
     * Find zero or one PostBlock that matches the filter.
     * @param {PostBlockFindUniqueArgs} args - Arguments to find a PostBlock
     * @example
     * // Get one PostBlock
     * const postBlock = await prisma.postBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostBlockFindUniqueArgs>(args: SelectSubset<T, PostBlockFindUniqueArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostBlockFindUniqueOrThrowArgs} args - Arguments to find a PostBlock
     * @example
     * // Get one PostBlock
     * const postBlock = await prisma.postBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, PostBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockFindFirstArgs} args - Arguments to find a PostBlock
     * @example
     * // Get one PostBlock
     * const postBlock = await prisma.postBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostBlockFindFirstArgs>(args?: SelectSubset<T, PostBlockFindFirstArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockFindFirstOrThrowArgs} args - Arguments to find a PostBlock
     * @example
     * // Get one PostBlock
     * const postBlock = await prisma.postBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, PostBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostBlocks
     * const postBlocks = await prisma.postBlock.findMany()
     * 
     * // Get first 10 PostBlocks
     * const postBlocks = await prisma.postBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postBlockWithIdOnly = await prisma.postBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostBlockFindManyArgs>(args?: SelectSubset<T, PostBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostBlock.
     * @param {PostBlockCreateArgs} args - Arguments to create a PostBlock.
     * @example
     * // Create one PostBlock
     * const PostBlock = await prisma.postBlock.create({
     *   data: {
     *     // ... data to create a PostBlock
     *   }
     * })
     * 
     */
    create<T extends PostBlockCreateArgs>(args: SelectSubset<T, PostBlockCreateArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostBlocks.
     * @param {PostBlockCreateManyArgs} args - Arguments to create many PostBlocks.
     * @example
     * // Create many PostBlocks
     * const postBlock = await prisma.postBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostBlockCreateManyArgs>(args?: SelectSubset<T, PostBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostBlocks and returns the data saved in the database.
     * @param {PostBlockCreateManyAndReturnArgs} args - Arguments to create many PostBlocks.
     * @example
     * // Create many PostBlocks
     * const postBlock = await prisma.postBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostBlocks and only return the `id`
     * const postBlockWithIdOnly = await prisma.postBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, PostBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostBlock.
     * @param {PostBlockDeleteArgs} args - Arguments to delete one PostBlock.
     * @example
     * // Delete one PostBlock
     * const PostBlock = await prisma.postBlock.delete({
     *   where: {
     *     // ... filter to delete one PostBlock
     *   }
     * })
     * 
     */
    delete<T extends PostBlockDeleteArgs>(args: SelectSubset<T, PostBlockDeleteArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostBlock.
     * @param {PostBlockUpdateArgs} args - Arguments to update one PostBlock.
     * @example
     * // Update one PostBlock
     * const postBlock = await prisma.postBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostBlockUpdateArgs>(args: SelectSubset<T, PostBlockUpdateArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostBlocks.
     * @param {PostBlockDeleteManyArgs} args - Arguments to filter PostBlocks to delete.
     * @example
     * // Delete a few PostBlocks
     * const { count } = await prisma.postBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostBlockDeleteManyArgs>(args?: SelectSubset<T, PostBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostBlocks
     * const postBlock = await prisma.postBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostBlockUpdateManyArgs>(args: SelectSubset<T, PostBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostBlocks and returns the data updated in the database.
     * @param {PostBlockUpdateManyAndReturnArgs} args - Arguments to update many PostBlocks.
     * @example
     * // Update many PostBlocks
     * const postBlock = await prisma.postBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostBlocks and only return the `id`
     * const postBlockWithIdOnly = await prisma.postBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, PostBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostBlock.
     * @param {PostBlockUpsertArgs} args - Arguments to update or create a PostBlock.
     * @example
     * // Update or create a PostBlock
     * const postBlock = await prisma.postBlock.upsert({
     *   create: {
     *     // ... data to create a PostBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostBlock we want to update
     *   }
     * })
     */
    upsert<T extends PostBlockUpsertArgs>(args: SelectSubset<T, PostBlockUpsertArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockCountArgs} args - Arguments to filter PostBlocks to count.
     * @example
     * // Count the number of PostBlocks
     * const count = await prisma.postBlock.count({
     *   where: {
     *     // ... the filter for the PostBlocks we want to count
     *   }
     * })
    **/
    count<T extends PostBlockCountArgs>(
      args?: Subset<T, PostBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostBlockAggregateArgs>(args: Subset<T, PostBlockAggregateArgs>): Prisma.PrismaPromise<GetPostBlockAggregateType<T>>

    /**
     * Group by PostBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBlockGroupByArgs} args - Group by arguments.
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
      T extends PostBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostBlockGroupByArgs['orderBy'] }
        : { orderBy?: PostBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostBlock model
   */
  readonly fields: PostBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends PostBlock$imageArgs<ExtArgs> = {}>(args?: Subset<T, PostBlock$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostBlock model
   */
  interface PostBlockFieldRefs {
    readonly id: FieldRef<"PostBlock", 'String'>
    readonly type: FieldRef<"PostBlock", 'BlockType'>
    readonly content: FieldRef<"PostBlock", 'String'>
    readonly order: FieldRef<"PostBlock", 'Int'>
    readonly postId: FieldRef<"PostBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostBlock findUnique
   */
  export type PostBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter, which PostBlock to fetch.
     */
    where: PostBlockWhereUniqueInput
  }

  /**
   * PostBlock findUniqueOrThrow
   */
  export type PostBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter, which PostBlock to fetch.
     */
    where: PostBlockWhereUniqueInput
  }

  /**
   * PostBlock findFirst
   */
  export type PostBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter, which PostBlock to fetch.
     */
    where?: PostBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBlocks to fetch.
     */
    orderBy?: PostBlockOrderByWithRelationInput | PostBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBlocks.
     */
    cursor?: PostBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBlocks.
     */
    distinct?: PostBlockScalarFieldEnum | PostBlockScalarFieldEnum[]
  }

  /**
   * PostBlock findFirstOrThrow
   */
  export type PostBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter, which PostBlock to fetch.
     */
    where?: PostBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBlocks to fetch.
     */
    orderBy?: PostBlockOrderByWithRelationInput | PostBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBlocks.
     */
    cursor?: PostBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBlocks.
     */
    distinct?: PostBlockScalarFieldEnum | PostBlockScalarFieldEnum[]
  }

  /**
   * PostBlock findMany
   */
  export type PostBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter, which PostBlocks to fetch.
     */
    where?: PostBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBlocks to fetch.
     */
    orderBy?: PostBlockOrderByWithRelationInput | PostBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostBlocks.
     */
    cursor?: PostBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBlocks.
     */
    skip?: number
    distinct?: PostBlockScalarFieldEnum | PostBlockScalarFieldEnum[]
  }

  /**
   * PostBlock create
   */
  export type PostBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a PostBlock.
     */
    data: XOR<PostBlockCreateInput, PostBlockUncheckedCreateInput>
  }

  /**
   * PostBlock createMany
   */
  export type PostBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostBlocks.
     */
    data: PostBlockCreateManyInput | PostBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostBlock createManyAndReturn
   */
  export type PostBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * The data used to create many PostBlocks.
     */
    data: PostBlockCreateManyInput | PostBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostBlock update
   */
  export type PostBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a PostBlock.
     */
    data: XOR<PostBlockUpdateInput, PostBlockUncheckedUpdateInput>
    /**
     * Choose, which PostBlock to update.
     */
    where: PostBlockWhereUniqueInput
  }

  /**
   * PostBlock updateMany
   */
  export type PostBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostBlocks.
     */
    data: XOR<PostBlockUpdateManyMutationInput, PostBlockUncheckedUpdateManyInput>
    /**
     * Filter which PostBlocks to update
     */
    where?: PostBlockWhereInput
    /**
     * Limit how many PostBlocks to update.
     */
    limit?: number
  }

  /**
   * PostBlock updateManyAndReturn
   */
  export type PostBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * The data used to update PostBlocks.
     */
    data: XOR<PostBlockUpdateManyMutationInput, PostBlockUncheckedUpdateManyInput>
    /**
     * Filter which PostBlocks to update
     */
    where?: PostBlockWhereInput
    /**
     * Limit how many PostBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostBlock upsert
   */
  export type PostBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the PostBlock to update in case it exists.
     */
    where: PostBlockWhereUniqueInput
    /**
     * In case the PostBlock found by the `where` argument doesn't exist, create a new PostBlock with this data.
     */
    create: XOR<PostBlockCreateInput, PostBlockUncheckedCreateInput>
    /**
     * In case the PostBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostBlockUpdateInput, PostBlockUncheckedUpdateInput>
  }

  /**
   * PostBlock delete
   */
  export type PostBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
    /**
     * Filter which PostBlock to delete.
     */
    where: PostBlockWhereUniqueInput
  }

  /**
   * PostBlock deleteMany
   */
  export type PostBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBlocks to delete
     */
    where?: PostBlockWhereInput
    /**
     * Limit how many PostBlocks to delete.
     */
    limit?: number
  }

  /**
   * PostBlock.image
   */
  export type PostBlock$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * PostBlock without action
   */
  export type PostBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBlock
     */
    select?: PostBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBlock
     */
    omit?: PostBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBlockInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    blockId: string | null
    publicId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    blockId: string | null
    publicId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    caption: number
    blockId: number
    publicId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    blockId?: true
    publicId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    blockId?: true
    publicId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    blockId?: true
    publicId?: true
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
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    caption: string | null
    blockId: string
    publicId: string | null
    _count: ImageCountAggregateOutputType | null
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
    caption?: boolean
    blockId?: boolean
    publicId?: boolean
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    blockId?: boolean
    publicId?: boolean
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    blockId?: boolean
    publicId?: boolean
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    caption?: boolean
    blockId?: boolean
    publicId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "caption" | "blockId" | "publicId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | PostBlockDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      block: Prisma.$PostBlockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      caption: string | null
      blockId: string
      publicId: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends PostBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostBlockDefaultArgs<ExtArgs>>): Prisma__PostBlockClient<$Result.GetResult<Prisma.$PostBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly caption: FieldRef<"Image", 'String'>
    readonly blockId: FieldRef<"Image", 'String'>
    readonly publicId: FieldRef<"Image", 'String'>
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Images to delete.
     */
    limit?: number
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
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    nip: string | null
    jabatan: string | null
    pesan: string | null
    imageUrl: string | null
    publicId: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nip: string | null
    jabatan: string | null
    pesan: string | null
    imageUrl: string | null
    publicId: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    nip: number
    jabatan: number
    pesan: number
    imageUrl: number
    publicId: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    jabatan?: true
    pesan?: true
    imageUrl?: true
    publicId?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    jabatan?: true
    pesan?: true
    imageUrl?: true
    publicId?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    jabatan?: true
    pesan?: true
    imageUrl?: true
    publicId?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    nip: string | null
    jabatan: string
    pesan: string
    imageUrl: string | null
    publicId: string | null
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nip?: boolean
    jabatan?: boolean
    pesan?: boolean
    imageUrl?: boolean
    publicId?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nip?: boolean
    jabatan?: boolean
    pesan?: boolean
    imageUrl?: boolean
    publicId?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nip?: boolean
    jabatan?: boolean
    pesan?: boolean
    imageUrl?: boolean
    publicId?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    nip?: boolean
    jabatan?: boolean
    pesan?: boolean
    imageUrl?: boolean
    publicId?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nip" | "jabatan" | "pesan" | "imageUrl" | "publicId", ExtArgs["result"]["teacher"]>

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nip: string | null
      jabatan: string
      pesan: string
      imageUrl: string | null
      publicId: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly nip: FieldRef<"Teacher", 'String'>
    readonly jabatan: FieldRef<"Teacher", 'String'>
    readonly pesan: FieldRef<"Teacher", 'String'>
    readonly imageUrl: FieldRef<"Teacher", 'String'>
    readonly publicId: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
  }


  /**
   * Model VisiMisi
   */

  export type AggregateVisiMisi = {
    _count: VisiMisiCountAggregateOutputType | null
    _min: VisiMisiMinAggregateOutputType | null
    _max: VisiMisiMaxAggregateOutputType | null
  }

  export type VisiMisiMinAggregateOutputType = {
    id: string | null
    visi: string | null
    misi: string | null
  }

  export type VisiMisiMaxAggregateOutputType = {
    id: string | null
    visi: string | null
    misi: string | null
  }

  export type VisiMisiCountAggregateOutputType = {
    id: number
    visi: number
    misi: number
    _all: number
  }


  export type VisiMisiMinAggregateInputType = {
    id?: true
    visi?: true
    misi?: true
  }

  export type VisiMisiMaxAggregateInputType = {
    id?: true
    visi?: true
    misi?: true
  }

  export type VisiMisiCountAggregateInputType = {
    id?: true
    visi?: true
    misi?: true
    _all?: true
  }

  export type VisiMisiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiMisi to aggregate.
     */
    where?: VisiMisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiMisis to fetch.
     */
    orderBy?: VisiMisiOrderByWithRelationInput | VisiMisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisiMisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiMisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiMisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisiMisis
    **/
    _count?: true | VisiMisiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisiMisiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisiMisiMaxAggregateInputType
  }

  export type GetVisiMisiAggregateType<T extends VisiMisiAggregateArgs> = {
        [P in keyof T & keyof AggregateVisiMisi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisiMisi[P]>
      : GetScalarType<T[P], AggregateVisiMisi[P]>
  }




  export type VisiMisiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiMisiWhereInput
    orderBy?: VisiMisiOrderByWithAggregationInput | VisiMisiOrderByWithAggregationInput[]
    by: VisiMisiScalarFieldEnum[] | VisiMisiScalarFieldEnum
    having?: VisiMisiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisiMisiCountAggregateInputType | true
    _min?: VisiMisiMinAggregateInputType
    _max?: VisiMisiMaxAggregateInputType
  }

  export type VisiMisiGroupByOutputType = {
    id: string
    visi: string
    misi: string
    _count: VisiMisiCountAggregateOutputType | null
    _min: VisiMisiMinAggregateOutputType | null
    _max: VisiMisiMaxAggregateOutputType | null
  }

  type GetVisiMisiGroupByPayload<T extends VisiMisiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisiMisiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisiMisiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisiMisiGroupByOutputType[P]>
            : GetScalarType<T[P], VisiMisiGroupByOutputType[P]>
        }
      >
    >


  export type VisiMisiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visi?: boolean
    misi?: boolean
  }, ExtArgs["result"]["visiMisi"]>

  export type VisiMisiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visi?: boolean
    misi?: boolean
  }, ExtArgs["result"]["visiMisi"]>

  export type VisiMisiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visi?: boolean
    misi?: boolean
  }, ExtArgs["result"]["visiMisi"]>

  export type VisiMisiSelectScalar = {
    id?: boolean
    visi?: boolean
    misi?: boolean
  }

  export type VisiMisiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visi" | "misi", ExtArgs["result"]["visiMisi"]>

  export type $VisiMisiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisiMisi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visi: string
      misi: string
    }, ExtArgs["result"]["visiMisi"]>
    composites: {}
  }

  type VisiMisiGetPayload<S extends boolean | null | undefined | VisiMisiDefaultArgs> = $Result.GetResult<Prisma.$VisiMisiPayload, S>

  type VisiMisiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisiMisiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisiMisiCountAggregateInputType | true
    }

  export interface VisiMisiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisiMisi'], meta: { name: 'VisiMisi' } }
    /**
     * Find zero or one VisiMisi that matches the filter.
     * @param {VisiMisiFindUniqueArgs} args - Arguments to find a VisiMisi
     * @example
     * // Get one VisiMisi
     * const visiMisi = await prisma.visiMisi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisiMisiFindUniqueArgs>(args: SelectSubset<T, VisiMisiFindUniqueArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisiMisi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisiMisiFindUniqueOrThrowArgs} args - Arguments to find a VisiMisi
     * @example
     * // Get one VisiMisi
     * const visiMisi = await prisma.visiMisi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisiMisiFindUniqueOrThrowArgs>(args: SelectSubset<T, VisiMisiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisiMisi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiFindFirstArgs} args - Arguments to find a VisiMisi
     * @example
     * // Get one VisiMisi
     * const visiMisi = await prisma.visiMisi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisiMisiFindFirstArgs>(args?: SelectSubset<T, VisiMisiFindFirstArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisiMisi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiFindFirstOrThrowArgs} args - Arguments to find a VisiMisi
     * @example
     * // Get one VisiMisi
     * const visiMisi = await prisma.visiMisi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisiMisiFindFirstOrThrowArgs>(args?: SelectSubset<T, VisiMisiFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisiMisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisiMisis
     * const visiMisis = await prisma.visiMisi.findMany()
     * 
     * // Get first 10 VisiMisis
     * const visiMisis = await prisma.visiMisi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visiMisiWithIdOnly = await prisma.visiMisi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisiMisiFindManyArgs>(args?: SelectSubset<T, VisiMisiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisiMisi.
     * @param {VisiMisiCreateArgs} args - Arguments to create a VisiMisi.
     * @example
     * // Create one VisiMisi
     * const VisiMisi = await prisma.visiMisi.create({
     *   data: {
     *     // ... data to create a VisiMisi
     *   }
     * })
     * 
     */
    create<T extends VisiMisiCreateArgs>(args: SelectSubset<T, VisiMisiCreateArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisiMisis.
     * @param {VisiMisiCreateManyArgs} args - Arguments to create many VisiMisis.
     * @example
     * // Create many VisiMisis
     * const visiMisi = await prisma.visiMisi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisiMisiCreateManyArgs>(args?: SelectSubset<T, VisiMisiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisiMisis and returns the data saved in the database.
     * @param {VisiMisiCreateManyAndReturnArgs} args - Arguments to create many VisiMisis.
     * @example
     * // Create many VisiMisis
     * const visiMisi = await prisma.visiMisi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisiMisis and only return the `id`
     * const visiMisiWithIdOnly = await prisma.visiMisi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisiMisiCreateManyAndReturnArgs>(args?: SelectSubset<T, VisiMisiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisiMisi.
     * @param {VisiMisiDeleteArgs} args - Arguments to delete one VisiMisi.
     * @example
     * // Delete one VisiMisi
     * const VisiMisi = await prisma.visiMisi.delete({
     *   where: {
     *     // ... filter to delete one VisiMisi
     *   }
     * })
     * 
     */
    delete<T extends VisiMisiDeleteArgs>(args: SelectSubset<T, VisiMisiDeleteArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisiMisi.
     * @param {VisiMisiUpdateArgs} args - Arguments to update one VisiMisi.
     * @example
     * // Update one VisiMisi
     * const visiMisi = await prisma.visiMisi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisiMisiUpdateArgs>(args: SelectSubset<T, VisiMisiUpdateArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisiMisis.
     * @param {VisiMisiDeleteManyArgs} args - Arguments to filter VisiMisis to delete.
     * @example
     * // Delete a few VisiMisis
     * const { count } = await prisma.visiMisi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisiMisiDeleteManyArgs>(args?: SelectSubset<T, VisiMisiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisiMisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisiMisis
     * const visiMisi = await prisma.visiMisi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisiMisiUpdateManyArgs>(args: SelectSubset<T, VisiMisiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisiMisis and returns the data updated in the database.
     * @param {VisiMisiUpdateManyAndReturnArgs} args - Arguments to update many VisiMisis.
     * @example
     * // Update many VisiMisis
     * const visiMisi = await prisma.visiMisi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisiMisis and only return the `id`
     * const visiMisiWithIdOnly = await prisma.visiMisi.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisiMisiUpdateManyAndReturnArgs>(args: SelectSubset<T, VisiMisiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisiMisi.
     * @param {VisiMisiUpsertArgs} args - Arguments to update or create a VisiMisi.
     * @example
     * // Update or create a VisiMisi
     * const visiMisi = await prisma.visiMisi.upsert({
     *   create: {
     *     // ... data to create a VisiMisi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisiMisi we want to update
     *   }
     * })
     */
    upsert<T extends VisiMisiUpsertArgs>(args: SelectSubset<T, VisiMisiUpsertArgs<ExtArgs>>): Prisma__VisiMisiClient<$Result.GetResult<Prisma.$VisiMisiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisiMisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiCountArgs} args - Arguments to filter VisiMisis to count.
     * @example
     * // Count the number of VisiMisis
     * const count = await prisma.visiMisi.count({
     *   where: {
     *     // ... the filter for the VisiMisis we want to count
     *   }
     * })
    **/
    count<T extends VisiMisiCountArgs>(
      args?: Subset<T, VisiMisiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisiMisiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisiMisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisiMisiAggregateArgs>(args: Subset<T, VisiMisiAggregateArgs>): Prisma.PrismaPromise<GetVisiMisiAggregateType<T>>

    /**
     * Group by VisiMisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiMisiGroupByArgs} args - Group by arguments.
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
      T extends VisiMisiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisiMisiGroupByArgs['orderBy'] }
        : { orderBy?: VisiMisiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisiMisiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisiMisiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisiMisi model
   */
  readonly fields: VisiMisiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisiMisi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisiMisiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VisiMisi model
   */
  interface VisiMisiFieldRefs {
    readonly id: FieldRef<"VisiMisi", 'String'>
    readonly visi: FieldRef<"VisiMisi", 'String'>
    readonly misi: FieldRef<"VisiMisi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisiMisi findUnique
   */
  export type VisiMisiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter, which VisiMisi to fetch.
     */
    where: VisiMisiWhereUniqueInput
  }

  /**
   * VisiMisi findUniqueOrThrow
   */
  export type VisiMisiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter, which VisiMisi to fetch.
     */
    where: VisiMisiWhereUniqueInput
  }

  /**
   * VisiMisi findFirst
   */
  export type VisiMisiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter, which VisiMisi to fetch.
     */
    where?: VisiMisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiMisis to fetch.
     */
    orderBy?: VisiMisiOrderByWithRelationInput | VisiMisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiMisis.
     */
    cursor?: VisiMisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiMisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiMisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiMisis.
     */
    distinct?: VisiMisiScalarFieldEnum | VisiMisiScalarFieldEnum[]
  }

  /**
   * VisiMisi findFirstOrThrow
   */
  export type VisiMisiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter, which VisiMisi to fetch.
     */
    where?: VisiMisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiMisis to fetch.
     */
    orderBy?: VisiMisiOrderByWithRelationInput | VisiMisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiMisis.
     */
    cursor?: VisiMisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiMisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiMisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiMisis.
     */
    distinct?: VisiMisiScalarFieldEnum | VisiMisiScalarFieldEnum[]
  }

  /**
   * VisiMisi findMany
   */
  export type VisiMisiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter, which VisiMisis to fetch.
     */
    where?: VisiMisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiMisis to fetch.
     */
    orderBy?: VisiMisiOrderByWithRelationInput | VisiMisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisiMisis.
     */
    cursor?: VisiMisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiMisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiMisis.
     */
    skip?: number
    distinct?: VisiMisiScalarFieldEnum | VisiMisiScalarFieldEnum[]
  }

  /**
   * VisiMisi create
   */
  export type VisiMisiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * The data needed to create a VisiMisi.
     */
    data: XOR<VisiMisiCreateInput, VisiMisiUncheckedCreateInput>
  }

  /**
   * VisiMisi createMany
   */
  export type VisiMisiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisiMisis.
     */
    data: VisiMisiCreateManyInput | VisiMisiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisiMisi createManyAndReturn
   */
  export type VisiMisiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * The data used to create many VisiMisis.
     */
    data: VisiMisiCreateManyInput | VisiMisiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisiMisi update
   */
  export type VisiMisiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * The data needed to update a VisiMisi.
     */
    data: XOR<VisiMisiUpdateInput, VisiMisiUncheckedUpdateInput>
    /**
     * Choose, which VisiMisi to update.
     */
    where: VisiMisiWhereUniqueInput
  }

  /**
   * VisiMisi updateMany
   */
  export type VisiMisiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisiMisis.
     */
    data: XOR<VisiMisiUpdateManyMutationInput, VisiMisiUncheckedUpdateManyInput>
    /**
     * Filter which VisiMisis to update
     */
    where?: VisiMisiWhereInput
    /**
     * Limit how many VisiMisis to update.
     */
    limit?: number
  }

  /**
   * VisiMisi updateManyAndReturn
   */
  export type VisiMisiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * The data used to update VisiMisis.
     */
    data: XOR<VisiMisiUpdateManyMutationInput, VisiMisiUncheckedUpdateManyInput>
    /**
     * Filter which VisiMisis to update
     */
    where?: VisiMisiWhereInput
    /**
     * Limit how many VisiMisis to update.
     */
    limit?: number
  }

  /**
   * VisiMisi upsert
   */
  export type VisiMisiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * The filter to search for the VisiMisi to update in case it exists.
     */
    where: VisiMisiWhereUniqueInput
    /**
     * In case the VisiMisi found by the `where` argument doesn't exist, create a new VisiMisi with this data.
     */
    create: XOR<VisiMisiCreateInput, VisiMisiUncheckedCreateInput>
    /**
     * In case the VisiMisi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisiMisiUpdateInput, VisiMisiUncheckedUpdateInput>
  }

  /**
   * VisiMisi delete
   */
  export type VisiMisiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
    /**
     * Filter which VisiMisi to delete.
     */
    where: VisiMisiWhereUniqueInput
  }

  /**
   * VisiMisi deleteMany
   */
  export type VisiMisiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiMisis to delete
     */
    where?: VisiMisiWhereInput
    /**
     * Limit how many VisiMisis to delete.
     */
    limit?: number
  }

  /**
   * VisiMisi without action
   */
  export type VisiMisiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiMisi
     */
    select?: VisiMisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisiMisi
     */
    omit?: VisiMisiOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    phone: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    phone: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    address: number
    phone: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    email?: true
    address?: true
    phone?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    address?: true
    phone?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    email: string
    address: string
    phone: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "address" | "phone", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      address: string
      phone: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly address: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Sosmed
   */

  export type AggregateSosmed = {
    _count: SosmedCountAggregateOutputType | null
    _min: SosmedMinAggregateOutputType | null
    _max: SosmedMaxAggregateOutputType | null
  }

  export type SosmedMinAggregateOutputType = {
    id: string | null
    sosmedName: string | null
    sosmedUrl: string | null
  }

  export type SosmedMaxAggregateOutputType = {
    id: string | null
    sosmedName: string | null
    sosmedUrl: string | null
  }

  export type SosmedCountAggregateOutputType = {
    id: number
    sosmedName: number
    sosmedUrl: number
    _all: number
  }


  export type SosmedMinAggregateInputType = {
    id?: true
    sosmedName?: true
    sosmedUrl?: true
  }

  export type SosmedMaxAggregateInputType = {
    id?: true
    sosmedName?: true
    sosmedUrl?: true
  }

  export type SosmedCountAggregateInputType = {
    id?: true
    sosmedName?: true
    sosmedUrl?: true
    _all?: true
  }

  export type SosmedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sosmed to aggregate.
     */
    where?: SosmedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sosmeds to fetch.
     */
    orderBy?: SosmedOrderByWithRelationInput | SosmedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SosmedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sosmeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sosmeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sosmeds
    **/
    _count?: true | SosmedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SosmedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SosmedMaxAggregateInputType
  }

  export type GetSosmedAggregateType<T extends SosmedAggregateArgs> = {
        [P in keyof T & keyof AggregateSosmed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSosmed[P]>
      : GetScalarType<T[P], AggregateSosmed[P]>
  }




  export type SosmedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SosmedWhereInput
    orderBy?: SosmedOrderByWithAggregationInput | SosmedOrderByWithAggregationInput[]
    by: SosmedScalarFieldEnum[] | SosmedScalarFieldEnum
    having?: SosmedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SosmedCountAggregateInputType | true
    _min?: SosmedMinAggregateInputType
    _max?: SosmedMaxAggregateInputType
  }

  export type SosmedGroupByOutputType = {
    id: string
    sosmedName: string
    sosmedUrl: string
    _count: SosmedCountAggregateOutputType | null
    _min: SosmedMinAggregateOutputType | null
    _max: SosmedMaxAggregateOutputType | null
  }

  type GetSosmedGroupByPayload<T extends SosmedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SosmedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SosmedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SosmedGroupByOutputType[P]>
            : GetScalarType<T[P], SosmedGroupByOutputType[P]>
        }
      >
    >


  export type SosmedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sosmedName?: boolean
    sosmedUrl?: boolean
  }, ExtArgs["result"]["sosmed"]>

  export type SosmedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sosmedName?: boolean
    sosmedUrl?: boolean
  }, ExtArgs["result"]["sosmed"]>

  export type SosmedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sosmedName?: boolean
    sosmedUrl?: boolean
  }, ExtArgs["result"]["sosmed"]>

  export type SosmedSelectScalar = {
    id?: boolean
    sosmedName?: boolean
    sosmedUrl?: boolean
  }

  export type SosmedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sosmedName" | "sosmedUrl", ExtArgs["result"]["sosmed"]>

  export type $SosmedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sosmed"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sosmedName: string
      sosmedUrl: string
    }, ExtArgs["result"]["sosmed"]>
    composites: {}
  }

  type SosmedGetPayload<S extends boolean | null | undefined | SosmedDefaultArgs> = $Result.GetResult<Prisma.$SosmedPayload, S>

  type SosmedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SosmedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SosmedCountAggregateInputType | true
    }

  export interface SosmedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sosmed'], meta: { name: 'Sosmed' } }
    /**
     * Find zero or one Sosmed that matches the filter.
     * @param {SosmedFindUniqueArgs} args - Arguments to find a Sosmed
     * @example
     * // Get one Sosmed
     * const sosmed = await prisma.sosmed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SosmedFindUniqueArgs>(args: SelectSubset<T, SosmedFindUniqueArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sosmed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SosmedFindUniqueOrThrowArgs} args - Arguments to find a Sosmed
     * @example
     * // Get one Sosmed
     * const sosmed = await prisma.sosmed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SosmedFindUniqueOrThrowArgs>(args: SelectSubset<T, SosmedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sosmed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedFindFirstArgs} args - Arguments to find a Sosmed
     * @example
     * // Get one Sosmed
     * const sosmed = await prisma.sosmed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SosmedFindFirstArgs>(args?: SelectSubset<T, SosmedFindFirstArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sosmed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedFindFirstOrThrowArgs} args - Arguments to find a Sosmed
     * @example
     * // Get one Sosmed
     * const sosmed = await prisma.sosmed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SosmedFindFirstOrThrowArgs>(args?: SelectSubset<T, SosmedFindFirstOrThrowArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sosmeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sosmeds
     * const sosmeds = await prisma.sosmed.findMany()
     * 
     * // Get first 10 Sosmeds
     * const sosmeds = await prisma.sosmed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sosmedWithIdOnly = await prisma.sosmed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SosmedFindManyArgs>(args?: SelectSubset<T, SosmedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sosmed.
     * @param {SosmedCreateArgs} args - Arguments to create a Sosmed.
     * @example
     * // Create one Sosmed
     * const Sosmed = await prisma.sosmed.create({
     *   data: {
     *     // ... data to create a Sosmed
     *   }
     * })
     * 
     */
    create<T extends SosmedCreateArgs>(args: SelectSubset<T, SosmedCreateArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sosmeds.
     * @param {SosmedCreateManyArgs} args - Arguments to create many Sosmeds.
     * @example
     * // Create many Sosmeds
     * const sosmed = await prisma.sosmed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SosmedCreateManyArgs>(args?: SelectSubset<T, SosmedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sosmeds and returns the data saved in the database.
     * @param {SosmedCreateManyAndReturnArgs} args - Arguments to create many Sosmeds.
     * @example
     * // Create many Sosmeds
     * const sosmed = await prisma.sosmed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sosmeds and only return the `id`
     * const sosmedWithIdOnly = await prisma.sosmed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SosmedCreateManyAndReturnArgs>(args?: SelectSubset<T, SosmedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sosmed.
     * @param {SosmedDeleteArgs} args - Arguments to delete one Sosmed.
     * @example
     * // Delete one Sosmed
     * const Sosmed = await prisma.sosmed.delete({
     *   where: {
     *     // ... filter to delete one Sosmed
     *   }
     * })
     * 
     */
    delete<T extends SosmedDeleteArgs>(args: SelectSubset<T, SosmedDeleteArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sosmed.
     * @param {SosmedUpdateArgs} args - Arguments to update one Sosmed.
     * @example
     * // Update one Sosmed
     * const sosmed = await prisma.sosmed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SosmedUpdateArgs>(args: SelectSubset<T, SosmedUpdateArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sosmeds.
     * @param {SosmedDeleteManyArgs} args - Arguments to filter Sosmeds to delete.
     * @example
     * // Delete a few Sosmeds
     * const { count } = await prisma.sosmed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SosmedDeleteManyArgs>(args?: SelectSubset<T, SosmedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sosmeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sosmeds
     * const sosmed = await prisma.sosmed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SosmedUpdateManyArgs>(args: SelectSubset<T, SosmedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sosmeds and returns the data updated in the database.
     * @param {SosmedUpdateManyAndReturnArgs} args - Arguments to update many Sosmeds.
     * @example
     * // Update many Sosmeds
     * const sosmed = await prisma.sosmed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sosmeds and only return the `id`
     * const sosmedWithIdOnly = await prisma.sosmed.updateManyAndReturn({
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
    updateManyAndReturn<T extends SosmedUpdateManyAndReturnArgs>(args: SelectSubset<T, SosmedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sosmed.
     * @param {SosmedUpsertArgs} args - Arguments to update or create a Sosmed.
     * @example
     * // Update or create a Sosmed
     * const sosmed = await prisma.sosmed.upsert({
     *   create: {
     *     // ... data to create a Sosmed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sosmed we want to update
     *   }
     * })
     */
    upsert<T extends SosmedUpsertArgs>(args: SelectSubset<T, SosmedUpsertArgs<ExtArgs>>): Prisma__SosmedClient<$Result.GetResult<Prisma.$SosmedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sosmeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedCountArgs} args - Arguments to filter Sosmeds to count.
     * @example
     * // Count the number of Sosmeds
     * const count = await prisma.sosmed.count({
     *   where: {
     *     // ... the filter for the Sosmeds we want to count
     *   }
     * })
    **/
    count<T extends SosmedCountArgs>(
      args?: Subset<T, SosmedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SosmedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sosmed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SosmedAggregateArgs>(args: Subset<T, SosmedAggregateArgs>): Prisma.PrismaPromise<GetSosmedAggregateType<T>>

    /**
     * Group by Sosmed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SosmedGroupByArgs} args - Group by arguments.
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
      T extends SosmedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SosmedGroupByArgs['orderBy'] }
        : { orderBy?: SosmedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SosmedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSosmedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sosmed model
   */
  readonly fields: SosmedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sosmed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SosmedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sosmed model
   */
  interface SosmedFieldRefs {
    readonly id: FieldRef<"Sosmed", 'String'>
    readonly sosmedName: FieldRef<"Sosmed", 'String'>
    readonly sosmedUrl: FieldRef<"Sosmed", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sosmed findUnique
   */
  export type SosmedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter, which Sosmed to fetch.
     */
    where: SosmedWhereUniqueInput
  }

  /**
   * Sosmed findUniqueOrThrow
   */
  export type SosmedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter, which Sosmed to fetch.
     */
    where: SosmedWhereUniqueInput
  }

  /**
   * Sosmed findFirst
   */
  export type SosmedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter, which Sosmed to fetch.
     */
    where?: SosmedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sosmeds to fetch.
     */
    orderBy?: SosmedOrderByWithRelationInput | SosmedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sosmeds.
     */
    cursor?: SosmedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sosmeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sosmeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sosmeds.
     */
    distinct?: SosmedScalarFieldEnum | SosmedScalarFieldEnum[]
  }

  /**
   * Sosmed findFirstOrThrow
   */
  export type SosmedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter, which Sosmed to fetch.
     */
    where?: SosmedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sosmeds to fetch.
     */
    orderBy?: SosmedOrderByWithRelationInput | SosmedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sosmeds.
     */
    cursor?: SosmedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sosmeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sosmeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sosmeds.
     */
    distinct?: SosmedScalarFieldEnum | SosmedScalarFieldEnum[]
  }

  /**
   * Sosmed findMany
   */
  export type SosmedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter, which Sosmeds to fetch.
     */
    where?: SosmedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sosmeds to fetch.
     */
    orderBy?: SosmedOrderByWithRelationInput | SosmedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sosmeds.
     */
    cursor?: SosmedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sosmeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sosmeds.
     */
    skip?: number
    distinct?: SosmedScalarFieldEnum | SosmedScalarFieldEnum[]
  }

  /**
   * Sosmed create
   */
  export type SosmedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * The data needed to create a Sosmed.
     */
    data: XOR<SosmedCreateInput, SosmedUncheckedCreateInput>
  }

  /**
   * Sosmed createMany
   */
  export type SosmedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sosmeds.
     */
    data: SosmedCreateManyInput | SosmedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sosmed createManyAndReturn
   */
  export type SosmedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * The data used to create many Sosmeds.
     */
    data: SosmedCreateManyInput | SosmedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sosmed update
   */
  export type SosmedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * The data needed to update a Sosmed.
     */
    data: XOR<SosmedUpdateInput, SosmedUncheckedUpdateInput>
    /**
     * Choose, which Sosmed to update.
     */
    where: SosmedWhereUniqueInput
  }

  /**
   * Sosmed updateMany
   */
  export type SosmedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sosmeds.
     */
    data: XOR<SosmedUpdateManyMutationInput, SosmedUncheckedUpdateManyInput>
    /**
     * Filter which Sosmeds to update
     */
    where?: SosmedWhereInput
    /**
     * Limit how many Sosmeds to update.
     */
    limit?: number
  }

  /**
   * Sosmed updateManyAndReturn
   */
  export type SosmedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * The data used to update Sosmeds.
     */
    data: XOR<SosmedUpdateManyMutationInput, SosmedUncheckedUpdateManyInput>
    /**
     * Filter which Sosmeds to update
     */
    where?: SosmedWhereInput
    /**
     * Limit how many Sosmeds to update.
     */
    limit?: number
  }

  /**
   * Sosmed upsert
   */
  export type SosmedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * The filter to search for the Sosmed to update in case it exists.
     */
    where: SosmedWhereUniqueInput
    /**
     * In case the Sosmed found by the `where` argument doesn't exist, create a new Sosmed with this data.
     */
    create: XOR<SosmedCreateInput, SosmedUncheckedCreateInput>
    /**
     * In case the Sosmed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SosmedUpdateInput, SosmedUncheckedUpdateInput>
  }

  /**
   * Sosmed delete
   */
  export type SosmedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
    /**
     * Filter which Sosmed to delete.
     */
    where: SosmedWhereUniqueInput
  }

  /**
   * Sosmed deleteMany
   */
  export type SosmedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sosmeds to delete
     */
    where?: SosmedWhereInput
    /**
     * Limit how many Sosmeds to delete.
     */
    limit?: number
  }

  /**
   * Sosmed without action
   */
  export type SosmedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sosmed
     */
    select?: SosmedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sosmed
     */
    omit?: SosmedOmit<ExtArgs> | null
  }


  /**
   * Model SchoolProfile
   */

  export type AggregateSchoolProfile = {
    _count: SchoolProfileCountAggregateOutputType | null
    _avg: SchoolProfileAvgAggregateOutputType | null
    _sum: SchoolProfileSumAggregateOutputType | null
    _min: SchoolProfileMinAggregateOutputType | null
    _max: SchoolProfileMaxAggregateOutputType | null
  }

  export type SchoolProfileAvgAggregateOutputType = {
    luasTanah: number | null
    jamAktif: number | null
    jumlahGuruStaff: number | null
    jumlahSiswa: number | null
    jumlahRombel: number | null
    jumlahPrestasi: number | null
  }

  export type SchoolProfileSumAggregateOutputType = {
    luasTanah: number | null
    jamAktif: number | null
    jumlahGuruStaff: number | null
    jumlahSiswa: number | null
    jumlahRombel: number | null
    jumlahPrestasi: number | null
  }

  export type SchoolProfileMinAggregateOutputType = {
    id: string | null
    namaSekolah: string | null
    jenisSekolah: string | null
    nss: string | null
    npsn: string | null
    tanggalBerdiri: Date | null
    akreditasi: string | null
    programJurusan: string | null
    izinOperasional: string | null
    luasTanah: number | null
    kurikulum: string | null
    jamAktif: number | null
    jumlahGuruStaff: number | null
    jumlahSiswa: number | null
    jumlahRombel: number | null
    jumlahPrestasi: number | null
    sloganSekolah: string | null
    kepsek: string | null
    nipKepsek: string | null
    masaKerja: string | null
    izinMemimpin: string | null
    statusKepegawaian: string | null
    pendidikanTerakhir: string | null
    deskripsiSekolah: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolProfileMaxAggregateOutputType = {
    id: string | null
    namaSekolah: string | null
    jenisSekolah: string | null
    nss: string | null
    npsn: string | null
    tanggalBerdiri: Date | null
    akreditasi: string | null
    programJurusan: string | null
    izinOperasional: string | null
    luasTanah: number | null
    kurikulum: string | null
    jamAktif: number | null
    jumlahGuruStaff: number | null
    jumlahSiswa: number | null
    jumlahRombel: number | null
    jumlahPrestasi: number | null
    sloganSekolah: string | null
    kepsek: string | null
    nipKepsek: string | null
    masaKerja: string | null
    izinMemimpin: string | null
    statusKepegawaian: string | null
    pendidikanTerakhir: string | null
    deskripsiSekolah: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolProfileCountAggregateOutputType = {
    id: number
    namaSekolah: number
    jenisSekolah: number
    nss: number
    npsn: number
    tanggalBerdiri: number
    akreditasi: number
    programJurusan: number
    izinOperasional: number
    luasTanah: number
    kurikulum: number
    jamAktif: number
    jumlahGuruStaff: number
    jumlahSiswa: number
    jumlahRombel: number
    jumlahPrestasi: number
    sloganSekolah: number
    kepsek: number
    nipKepsek: number
    masaKerja: number
    izinMemimpin: number
    statusKepegawaian: number
    pendidikanTerakhir: number
    deskripsiSekolah: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolProfileAvgAggregateInputType = {
    luasTanah?: true
    jamAktif?: true
    jumlahGuruStaff?: true
    jumlahSiswa?: true
    jumlahRombel?: true
    jumlahPrestasi?: true
  }

  export type SchoolProfileSumAggregateInputType = {
    luasTanah?: true
    jamAktif?: true
    jumlahGuruStaff?: true
    jumlahSiswa?: true
    jumlahRombel?: true
    jumlahPrestasi?: true
  }

  export type SchoolProfileMinAggregateInputType = {
    id?: true
    namaSekolah?: true
    jenisSekolah?: true
    nss?: true
    npsn?: true
    tanggalBerdiri?: true
    akreditasi?: true
    programJurusan?: true
    izinOperasional?: true
    luasTanah?: true
    kurikulum?: true
    jamAktif?: true
    jumlahGuruStaff?: true
    jumlahSiswa?: true
    jumlahRombel?: true
    jumlahPrestasi?: true
    sloganSekolah?: true
    kepsek?: true
    nipKepsek?: true
    masaKerja?: true
    izinMemimpin?: true
    statusKepegawaian?: true
    pendidikanTerakhir?: true
    deskripsiSekolah?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolProfileMaxAggregateInputType = {
    id?: true
    namaSekolah?: true
    jenisSekolah?: true
    nss?: true
    npsn?: true
    tanggalBerdiri?: true
    akreditasi?: true
    programJurusan?: true
    izinOperasional?: true
    luasTanah?: true
    kurikulum?: true
    jamAktif?: true
    jumlahGuruStaff?: true
    jumlahSiswa?: true
    jumlahRombel?: true
    jumlahPrestasi?: true
    sloganSekolah?: true
    kepsek?: true
    nipKepsek?: true
    masaKerja?: true
    izinMemimpin?: true
    statusKepegawaian?: true
    pendidikanTerakhir?: true
    deskripsiSekolah?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolProfileCountAggregateInputType = {
    id?: true
    namaSekolah?: true
    jenisSekolah?: true
    nss?: true
    npsn?: true
    tanggalBerdiri?: true
    akreditasi?: true
    programJurusan?: true
    izinOperasional?: true
    luasTanah?: true
    kurikulum?: true
    jamAktif?: true
    jumlahGuruStaff?: true
    jumlahSiswa?: true
    jumlahRombel?: true
    jumlahPrestasi?: true
    sloganSekolah?: true
    kepsek?: true
    nipKepsek?: true
    masaKerja?: true
    izinMemimpin?: true
    statusKepegawaian?: true
    pendidikanTerakhir?: true
    deskripsiSekolah?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolProfile to aggregate.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolProfiles
    **/
    _count?: true | SchoolProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolProfileMaxAggregateInputType
  }

  export type GetSchoolProfileAggregateType<T extends SchoolProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolProfile[P]>
      : GetScalarType<T[P], AggregateSchoolProfile[P]>
  }




  export type SchoolProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolProfileWhereInput
    orderBy?: SchoolProfileOrderByWithAggregationInput | SchoolProfileOrderByWithAggregationInput[]
    by: SchoolProfileScalarFieldEnum[] | SchoolProfileScalarFieldEnum
    having?: SchoolProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolProfileCountAggregateInputType | true
    _avg?: SchoolProfileAvgAggregateInputType
    _sum?: SchoolProfileSumAggregateInputType
    _min?: SchoolProfileMinAggregateInputType
    _max?: SchoolProfileMaxAggregateInputType
  }

  export type SchoolProfileGroupByOutputType = {
    id: string
    namaSekolah: string
    jenisSekolah: string
    nss: string | null
    npsn: string | null
    tanggalBerdiri: Date | null
    akreditasi: string | null
    programJurusan: string | null
    izinOperasional: string | null
    luasTanah: number | null
    kurikulum: string | null
    jamAktif: number | null
    jumlahGuruStaff: number | null
    jumlahSiswa: number | null
    jumlahRombel: number | null
    jumlahPrestasi: number | null
    sloganSekolah: string | null
    kepsek: string | null
    nipKepsek: string | null
    masaKerja: string | null
    izinMemimpin: string | null
    statusKepegawaian: string | null
    pendidikanTerakhir: string | null
    deskripsiSekolah: string | null
    createdAt: Date
    updatedAt: Date
    _count: SchoolProfileCountAggregateOutputType | null
    _avg: SchoolProfileAvgAggregateOutputType | null
    _sum: SchoolProfileSumAggregateOutputType | null
    _min: SchoolProfileMinAggregateOutputType | null
    _max: SchoolProfileMaxAggregateOutputType | null
  }

  type GetSchoolProfileGroupByPayload<T extends SchoolProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolProfileGroupByOutputType[P]>
        }
      >
    >


  export type SchoolProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaSekolah?: boolean
    jenisSekolah?: boolean
    nss?: boolean
    npsn?: boolean
    tanggalBerdiri?: boolean
    akreditasi?: boolean
    programJurusan?: boolean
    izinOperasional?: boolean
    luasTanah?: boolean
    kurikulum?: boolean
    jamAktif?: boolean
    jumlahGuruStaff?: boolean
    jumlahSiswa?: boolean
    jumlahRombel?: boolean
    jumlahPrestasi?: boolean
    sloganSekolah?: boolean
    kepsek?: boolean
    nipKepsek?: boolean
    masaKerja?: boolean
    izinMemimpin?: boolean
    statusKepegawaian?: boolean
    pendidikanTerakhir?: boolean
    deskripsiSekolah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolProfile"]>

  export type SchoolProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaSekolah?: boolean
    jenisSekolah?: boolean
    nss?: boolean
    npsn?: boolean
    tanggalBerdiri?: boolean
    akreditasi?: boolean
    programJurusan?: boolean
    izinOperasional?: boolean
    luasTanah?: boolean
    kurikulum?: boolean
    jamAktif?: boolean
    jumlahGuruStaff?: boolean
    jumlahSiswa?: boolean
    jumlahRombel?: boolean
    jumlahPrestasi?: boolean
    sloganSekolah?: boolean
    kepsek?: boolean
    nipKepsek?: boolean
    masaKerja?: boolean
    izinMemimpin?: boolean
    statusKepegawaian?: boolean
    pendidikanTerakhir?: boolean
    deskripsiSekolah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolProfile"]>

  export type SchoolProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaSekolah?: boolean
    jenisSekolah?: boolean
    nss?: boolean
    npsn?: boolean
    tanggalBerdiri?: boolean
    akreditasi?: boolean
    programJurusan?: boolean
    izinOperasional?: boolean
    luasTanah?: boolean
    kurikulum?: boolean
    jamAktif?: boolean
    jumlahGuruStaff?: boolean
    jumlahSiswa?: boolean
    jumlahRombel?: boolean
    jumlahPrestasi?: boolean
    sloganSekolah?: boolean
    kepsek?: boolean
    nipKepsek?: boolean
    masaKerja?: boolean
    izinMemimpin?: boolean
    statusKepegawaian?: boolean
    pendidikanTerakhir?: boolean
    deskripsiSekolah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolProfile"]>

  export type SchoolProfileSelectScalar = {
    id?: boolean
    namaSekolah?: boolean
    jenisSekolah?: boolean
    nss?: boolean
    npsn?: boolean
    tanggalBerdiri?: boolean
    akreditasi?: boolean
    programJurusan?: boolean
    izinOperasional?: boolean
    luasTanah?: boolean
    kurikulum?: boolean
    jamAktif?: boolean
    jumlahGuruStaff?: boolean
    jumlahSiswa?: boolean
    jumlahRombel?: boolean
    jumlahPrestasi?: boolean
    sloganSekolah?: boolean
    kepsek?: boolean
    nipKepsek?: boolean
    masaKerja?: boolean
    izinMemimpin?: boolean
    statusKepegawaian?: boolean
    pendidikanTerakhir?: boolean
    deskripsiSekolah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaSekolah" | "jenisSekolah" | "nss" | "npsn" | "tanggalBerdiri" | "akreditasi" | "programJurusan" | "izinOperasional" | "luasTanah" | "kurikulum" | "jamAktif" | "jumlahGuruStaff" | "jumlahSiswa" | "jumlahRombel" | "jumlahPrestasi" | "sloganSekolah" | "kepsek" | "nipKepsek" | "masaKerja" | "izinMemimpin" | "statusKepegawaian" | "pendidikanTerakhir" | "deskripsiSekolah" | "createdAt" | "updatedAt", ExtArgs["result"]["schoolProfile"]>

  export type $SchoolProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaSekolah: string
      jenisSekolah: string
      nss: string | null
      npsn: string | null
      tanggalBerdiri: Date | null
      akreditasi: string | null
      programJurusan: string | null
      izinOperasional: string | null
      luasTanah: number | null
      kurikulum: string | null
      jamAktif: number | null
      jumlahGuruStaff: number | null
      jumlahSiswa: number | null
      jumlahRombel: number | null
      jumlahPrestasi: number | null
      sloganSekolah: string | null
      kepsek: string | null
      nipKepsek: string | null
      masaKerja: string | null
      izinMemimpin: string | null
      statusKepegawaian: string | null
      pendidikanTerakhir: string | null
      deskripsiSekolah: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schoolProfile"]>
    composites: {}
  }

  type SchoolProfileGetPayload<S extends boolean | null | undefined | SchoolProfileDefaultArgs> = $Result.GetResult<Prisma.$SchoolProfilePayload, S>

  type SchoolProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolProfileCountAggregateInputType | true
    }

  export interface SchoolProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolProfile'], meta: { name: 'SchoolProfile' } }
    /**
     * Find zero or one SchoolProfile that matches the filter.
     * @param {SchoolProfileFindUniqueArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolProfileFindUniqueArgs>(args: SelectSubset<T, SchoolProfileFindUniqueArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolProfileFindUniqueOrThrowArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindFirstArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolProfileFindFirstArgs>(args?: SelectSubset<T, SchoolProfileFindFirstArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindFirstOrThrowArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolProfiles
     * const schoolProfiles = await prisma.schoolProfile.findMany()
     * 
     * // Get first 10 SchoolProfiles
     * const schoolProfiles = await prisma.schoolProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolProfileWithIdOnly = await prisma.schoolProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolProfileFindManyArgs>(args?: SelectSubset<T, SchoolProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolProfile.
     * @param {SchoolProfileCreateArgs} args - Arguments to create a SchoolProfile.
     * @example
     * // Create one SchoolProfile
     * const SchoolProfile = await prisma.schoolProfile.create({
     *   data: {
     *     // ... data to create a SchoolProfile
     *   }
     * })
     * 
     */
    create<T extends SchoolProfileCreateArgs>(args: SelectSubset<T, SchoolProfileCreateArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolProfiles.
     * @param {SchoolProfileCreateManyArgs} args - Arguments to create many SchoolProfiles.
     * @example
     * // Create many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolProfileCreateManyArgs>(args?: SelectSubset<T, SchoolProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolProfiles and returns the data saved in the database.
     * @param {SchoolProfileCreateManyAndReturnArgs} args - Arguments to create many SchoolProfiles.
     * @example
     * // Create many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolProfiles and only return the `id`
     * const schoolProfileWithIdOnly = await prisma.schoolProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolProfile.
     * @param {SchoolProfileDeleteArgs} args - Arguments to delete one SchoolProfile.
     * @example
     * // Delete one SchoolProfile
     * const SchoolProfile = await prisma.schoolProfile.delete({
     *   where: {
     *     // ... filter to delete one SchoolProfile
     *   }
     * })
     * 
     */
    delete<T extends SchoolProfileDeleteArgs>(args: SelectSubset<T, SchoolProfileDeleteArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolProfile.
     * @param {SchoolProfileUpdateArgs} args - Arguments to update one SchoolProfile.
     * @example
     * // Update one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolProfileUpdateArgs>(args: SelectSubset<T, SchoolProfileUpdateArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolProfiles.
     * @param {SchoolProfileDeleteManyArgs} args - Arguments to filter SchoolProfiles to delete.
     * @example
     * // Delete a few SchoolProfiles
     * const { count } = await prisma.schoolProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolProfileDeleteManyArgs>(args?: SelectSubset<T, SchoolProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolProfileUpdateManyArgs>(args: SelectSubset<T, SchoolProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolProfiles and returns the data updated in the database.
     * @param {SchoolProfileUpdateManyAndReturnArgs} args - Arguments to update many SchoolProfiles.
     * @example
     * // Update many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolProfiles and only return the `id`
     * const schoolProfileWithIdOnly = await prisma.schoolProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolProfile.
     * @param {SchoolProfileUpsertArgs} args - Arguments to update or create a SchoolProfile.
     * @example
     * // Update or create a SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.upsert({
     *   create: {
     *     // ... data to create a SchoolProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolProfile we want to update
     *   }
     * })
     */
    upsert<T extends SchoolProfileUpsertArgs>(args: SelectSubset<T, SchoolProfileUpsertArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileCountArgs} args - Arguments to filter SchoolProfiles to count.
     * @example
     * // Count the number of SchoolProfiles
     * const count = await prisma.schoolProfile.count({
     *   where: {
     *     // ... the filter for the SchoolProfiles we want to count
     *   }
     * })
    **/
    count<T extends SchoolProfileCountArgs>(
      args?: Subset<T, SchoolProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolProfileAggregateArgs>(args: Subset<T, SchoolProfileAggregateArgs>): Prisma.PrismaPromise<GetSchoolProfileAggregateType<T>>

    /**
     * Group by SchoolProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileGroupByArgs} args - Group by arguments.
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
      T extends SchoolProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolProfileGroupByArgs['orderBy'] }
        : { orderBy?: SchoolProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolProfile model
   */
  readonly fields: SchoolProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SchoolProfile model
   */
  interface SchoolProfileFieldRefs {
    readonly id: FieldRef<"SchoolProfile", 'String'>
    readonly namaSekolah: FieldRef<"SchoolProfile", 'String'>
    readonly jenisSekolah: FieldRef<"SchoolProfile", 'String'>
    readonly nss: FieldRef<"SchoolProfile", 'String'>
    readonly npsn: FieldRef<"SchoolProfile", 'String'>
    readonly tanggalBerdiri: FieldRef<"SchoolProfile", 'DateTime'>
    readonly akreditasi: FieldRef<"SchoolProfile", 'String'>
    readonly programJurusan: FieldRef<"SchoolProfile", 'String'>
    readonly izinOperasional: FieldRef<"SchoolProfile", 'String'>
    readonly luasTanah: FieldRef<"SchoolProfile", 'Int'>
    readonly kurikulum: FieldRef<"SchoolProfile", 'String'>
    readonly jamAktif: FieldRef<"SchoolProfile", 'Int'>
    readonly jumlahGuruStaff: FieldRef<"SchoolProfile", 'Int'>
    readonly jumlahSiswa: FieldRef<"SchoolProfile", 'Int'>
    readonly jumlahRombel: FieldRef<"SchoolProfile", 'Int'>
    readonly jumlahPrestasi: FieldRef<"SchoolProfile", 'Int'>
    readonly sloganSekolah: FieldRef<"SchoolProfile", 'String'>
    readonly kepsek: FieldRef<"SchoolProfile", 'String'>
    readonly nipKepsek: FieldRef<"SchoolProfile", 'String'>
    readonly masaKerja: FieldRef<"SchoolProfile", 'String'>
    readonly izinMemimpin: FieldRef<"SchoolProfile", 'String'>
    readonly statusKepegawaian: FieldRef<"SchoolProfile", 'String'>
    readonly pendidikanTerakhir: FieldRef<"SchoolProfile", 'String'>
    readonly deskripsiSekolah: FieldRef<"SchoolProfile", 'String'>
    readonly createdAt: FieldRef<"SchoolProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SchoolProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolProfile findUnique
   */
  export type SchoolProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile findUniqueOrThrow
   */
  export type SchoolProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile findFirst
   */
  export type SchoolProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolProfiles.
     */
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile findFirstOrThrow
   */
  export type SchoolProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolProfiles.
     */
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile findMany
   */
  export type SchoolProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter, which SchoolProfiles to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile create
   */
  export type SchoolProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a SchoolProfile.
     */
    data: XOR<SchoolProfileCreateInput, SchoolProfileUncheckedCreateInput>
  }

  /**
   * SchoolProfile createMany
   */
  export type SchoolProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolProfiles.
     */
    data: SchoolProfileCreateManyInput | SchoolProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolProfile createManyAndReturn
   */
  export type SchoolProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolProfiles.
     */
    data: SchoolProfileCreateManyInput | SchoolProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolProfile update
   */
  export type SchoolProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a SchoolProfile.
     */
    data: XOR<SchoolProfileUpdateInput, SchoolProfileUncheckedUpdateInput>
    /**
     * Choose, which SchoolProfile to update.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile updateMany
   */
  export type SchoolProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolProfiles.
     */
    data: XOR<SchoolProfileUpdateManyMutationInput, SchoolProfileUncheckedUpdateManyInput>
    /**
     * Filter which SchoolProfiles to update
     */
    where?: SchoolProfileWhereInput
    /**
     * Limit how many SchoolProfiles to update.
     */
    limit?: number
  }

  /**
   * SchoolProfile updateManyAndReturn
   */
  export type SchoolProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * The data used to update SchoolProfiles.
     */
    data: XOR<SchoolProfileUpdateManyMutationInput, SchoolProfileUncheckedUpdateManyInput>
    /**
     * Filter which SchoolProfiles to update
     */
    where?: SchoolProfileWhereInput
    /**
     * Limit how many SchoolProfiles to update.
     */
    limit?: number
  }

  /**
   * SchoolProfile upsert
   */
  export type SchoolProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the SchoolProfile to update in case it exists.
     */
    where: SchoolProfileWhereUniqueInput
    /**
     * In case the SchoolProfile found by the `where` argument doesn't exist, create a new SchoolProfile with this data.
     */
    create: XOR<SchoolProfileCreateInput, SchoolProfileUncheckedCreateInput>
    /**
     * In case the SchoolProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolProfileUpdateInput, SchoolProfileUncheckedUpdateInput>
  }

  /**
   * SchoolProfile delete
   */
  export type SchoolProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
    /**
     * Filter which SchoolProfile to delete.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile deleteMany
   */
  export type SchoolProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolProfiles to delete
     */
    where?: SchoolProfileWhereInput
    /**
     * Limit how many SchoolProfiles to delete.
     */
    limit?: number
  }

  /**
   * SchoolProfile without action
   */
  export type SchoolProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolProfile
     */
    omit?: SchoolProfileOmit<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorMinAggregateOutputType = {
    id: string | null
    postId: string | null
    visitorId: string | null
    ipAddress: string | null
    userAgent: string | null
    readAt: Date | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    visitorId: string | null
    ipAddress: string | null
    userAgent: string | null
    readAt: Date | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    postId: number
    visitorId: number
    ipAddress: number
    userAgent: number
    readAt: number
    _all: number
  }


  export type VisitorMinAggregateInputType = {
    id?: true
    postId?: true
    visitorId?: true
    ipAddress?: true
    userAgent?: true
    readAt?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    postId?: true
    visitorId?: true
    ipAddress?: true
    userAgent?: true
    readAt?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    postId?: true
    visitorId?: true
    ipAddress?: true
    userAgent?: true
    readAt?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: string
    postId: string
    visitorId: string
    ipAddress: string | null
    userAgent: string | null
    readAt: Date
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    visitorId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    readAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    visitorId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    readAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    visitorId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    readAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    postId?: boolean
    visitorId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    readAt?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "visitorId" | "ipAddress" | "userAgent" | "readAt", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      visitorId: string
      ipAddress: string | null
      userAgent: string | null
      readAt: Date
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
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
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'String'>
    readonly postId: FieldRef<"Visitor", 'String'>
    readonly visitorId: FieldRef<"Visitor", 'String'>
    readonly ipAddress: FieldRef<"Visitor", 'String'>
    readonly userAgent: FieldRef<"Visitor", 'String'>
    readonly readAt: FieldRef<"Visitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    style: 'style',
    category: 'category',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostBlockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    order: 'order',
    postId: 'postId'
  };

  export type PostBlockScalarFieldEnum = (typeof PostBlockScalarFieldEnum)[keyof typeof PostBlockScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    caption: 'caption',
    blockId: 'blockId',
    publicId: 'publicId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nip: 'nip',
    jabatan: 'jabatan',
    pesan: 'pesan',
    imageUrl: 'imageUrl',
    publicId: 'publicId'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const VisiMisiScalarFieldEnum: {
    id: 'id',
    visi: 'visi',
    misi: 'misi'
  };

  export type VisiMisiScalarFieldEnum = (typeof VisiMisiScalarFieldEnum)[keyof typeof VisiMisiScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    address: 'address',
    phone: 'phone'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SosmedScalarFieldEnum: {
    id: 'id',
    sosmedName: 'sosmedName',
    sosmedUrl: 'sosmedUrl'
  };

  export type SosmedScalarFieldEnum = (typeof SosmedScalarFieldEnum)[keyof typeof SosmedScalarFieldEnum]


  export const SchoolProfileScalarFieldEnum: {
    id: 'id',
    namaSekolah: 'namaSekolah',
    jenisSekolah: 'jenisSekolah',
    nss: 'nss',
    npsn: 'npsn',
    tanggalBerdiri: 'tanggalBerdiri',
    akreditasi: 'akreditasi',
    programJurusan: 'programJurusan',
    izinOperasional: 'izinOperasional',
    luasTanah: 'luasTanah',
    kurikulum: 'kurikulum',
    jamAktif: 'jamAktif',
    jumlahGuruStaff: 'jumlahGuruStaff',
    jumlahSiswa: 'jumlahSiswa',
    jumlahRombel: 'jumlahRombel',
    jumlahPrestasi: 'jumlahPrestasi',
    sloganSekolah: 'sloganSekolah',
    kepsek: 'kepsek',
    nipKepsek: 'nipKepsek',
    masaKerja: 'masaKerja',
    izinMemimpin: 'izinMemimpin',
    statusKepegawaian: 'statusKepegawaian',
    pendidikanTerakhir: 'pendidikanTerakhir',
    deskripsiSekolah: 'deskripsiSekolah',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolProfileScalarFieldEnum = (typeof SchoolProfileScalarFieldEnum)[keyof typeof SchoolProfileScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    visitorId: 'visitorId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    readAt: 'readAt'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'BlockType'
   */
  export type EnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType'>
    


  /**
   * Reference to a field of type 'BlockType[]'
   */
  export type ListEnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    style?: IntFilter<"Post"> | number
    category?: EnumCategoryFilter<"Post"> | $Enums.Category
    author?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    blocks?: PostBlockListRelationFilter
    visitors?: VisitorListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    style?: SortOrder
    category?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    blocks?: PostBlockOrderByRelationAggregateInput
    visitors?: VisitorOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    style?: IntFilter<"Post"> | number
    category?: EnumCategoryFilter<"Post"> | $Enums.Category
    author?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    blocks?: PostBlockListRelationFilter
    visitors?: VisitorListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    style?: SortOrder
    category?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    style?: IntWithAggregatesFilter<"Post"> | number
    category?: EnumCategoryWithAggregatesFilter<"Post"> | $Enums.Category
    author?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostBlockWhereInput = {
    AND?: PostBlockWhereInput | PostBlockWhereInput[]
    OR?: PostBlockWhereInput[]
    NOT?: PostBlockWhereInput | PostBlockWhereInput[]
    id?: StringFilter<"PostBlock"> | string
    type?: EnumBlockTypeFilter<"PostBlock"> | $Enums.BlockType
    content?: StringNullableFilter<"PostBlock"> | string | null
    order?: IntFilter<"PostBlock"> | number
    postId?: StringFilter<"PostBlock"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type PostBlockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type PostBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostBlockWhereInput | PostBlockWhereInput[]
    OR?: PostBlockWhereInput[]
    NOT?: PostBlockWhereInput | PostBlockWhereInput[]
    type?: EnumBlockTypeFilter<"PostBlock"> | $Enums.BlockType
    content?: StringNullableFilter<"PostBlock"> | string | null
    order?: IntFilter<"PostBlock"> | number
    postId?: StringFilter<"PostBlock"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type PostBlockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    postId?: SortOrder
    _count?: PostBlockCountOrderByAggregateInput
    _avg?: PostBlockAvgOrderByAggregateInput
    _max?: PostBlockMaxOrderByAggregateInput
    _min?: PostBlockMinOrderByAggregateInput
    _sum?: PostBlockSumOrderByAggregateInput
  }

  export type PostBlockScalarWhereWithAggregatesInput = {
    AND?: PostBlockScalarWhereWithAggregatesInput | PostBlockScalarWhereWithAggregatesInput[]
    OR?: PostBlockScalarWhereWithAggregatesInput[]
    NOT?: PostBlockScalarWhereWithAggregatesInput | PostBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostBlock"> | string
    type?: EnumBlockTypeWithAggregatesFilter<"PostBlock"> | $Enums.BlockType
    content?: StringNullableWithAggregatesFilter<"PostBlock"> | string | null
    order?: IntWithAggregatesFilter<"PostBlock"> | number
    postId?: StringWithAggregatesFilter<"PostBlock"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    caption?: StringNullableFilter<"Image"> | string | null
    blockId?: StringFilter<"Image"> | string
    publicId?: StringNullableFilter<"Image"> | string | null
    block?: XOR<PostBlockScalarRelationFilter, PostBlockWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    blockId?: SortOrder
    publicId?: SortOrderInput | SortOrder
    block?: PostBlockOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blockId?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    caption?: StringNullableFilter<"Image"> | string | null
    publicId?: StringNullableFilter<"Image"> | string | null
    block?: XOR<PostBlockScalarRelationFilter, PostBlockWhereInput>
  }, "id" | "blockId">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    blockId?: SortOrder
    publicId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    caption?: StringNullableWithAggregatesFilter<"Image"> | string | null
    blockId?: StringWithAggregatesFilter<"Image"> | string
    publicId?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    nip?: StringNullableFilter<"Teacher"> | string | null
    jabatan?: StringFilter<"Teacher"> | string
    pesan?: StringFilter<"Teacher"> | string
    imageUrl?: StringNullableFilter<"Teacher"> | string | null
    publicId?: StringNullableFilter<"Teacher"> | string | null
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrderInput | SortOrder
    jabatan?: SortOrder
    pesan?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nip?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    jabatan?: StringFilter<"Teacher"> | string
    pesan?: StringFilter<"Teacher"> | string
    imageUrl?: StringNullableFilter<"Teacher"> | string | null
    publicId?: StringNullableFilter<"Teacher"> | string | null
  }, "id" | "nip">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrderInput | SortOrder
    jabatan?: SortOrder
    pesan?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    nip?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    jabatan?: StringWithAggregatesFilter<"Teacher"> | string
    pesan?: StringWithAggregatesFilter<"Teacher"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    publicId?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type VisiMisiWhereInput = {
    AND?: VisiMisiWhereInput | VisiMisiWhereInput[]
    OR?: VisiMisiWhereInput[]
    NOT?: VisiMisiWhereInput | VisiMisiWhereInput[]
    id?: StringFilter<"VisiMisi"> | string
    visi?: StringFilter<"VisiMisi"> | string
    misi?: StringFilter<"VisiMisi"> | string
  }

  export type VisiMisiOrderByWithRelationInput = {
    id?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
  }

  export type VisiMisiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisiMisiWhereInput | VisiMisiWhereInput[]
    OR?: VisiMisiWhereInput[]
    NOT?: VisiMisiWhereInput | VisiMisiWhereInput[]
    visi?: StringFilter<"VisiMisi"> | string
    misi?: StringFilter<"VisiMisi"> | string
  }, "id">

  export type VisiMisiOrderByWithAggregationInput = {
    id?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
    _count?: VisiMisiCountOrderByAggregateInput
    _max?: VisiMisiMaxOrderByAggregateInput
    _min?: VisiMisiMinOrderByAggregateInput
  }

  export type VisiMisiScalarWhereWithAggregatesInput = {
    AND?: VisiMisiScalarWhereWithAggregatesInput | VisiMisiScalarWhereWithAggregatesInput[]
    OR?: VisiMisiScalarWhereWithAggregatesInput[]
    NOT?: VisiMisiScalarWhereWithAggregatesInput | VisiMisiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisiMisi"> | string
    visi?: StringWithAggregatesFilter<"VisiMisi"> | string
    misi?: StringWithAggregatesFilter<"VisiMisi"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    address?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    email?: StringFilter<"Contact"> | string
    address?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    address?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type SosmedWhereInput = {
    AND?: SosmedWhereInput | SosmedWhereInput[]
    OR?: SosmedWhereInput[]
    NOT?: SosmedWhereInput | SosmedWhereInput[]
    id?: StringFilter<"Sosmed"> | string
    sosmedName?: StringFilter<"Sosmed"> | string
    sosmedUrl?: StringFilter<"Sosmed"> | string
  }

  export type SosmedOrderByWithRelationInput = {
    id?: SortOrder
    sosmedName?: SortOrder
    sosmedUrl?: SortOrder
  }

  export type SosmedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SosmedWhereInput | SosmedWhereInput[]
    OR?: SosmedWhereInput[]
    NOT?: SosmedWhereInput | SosmedWhereInput[]
    sosmedName?: StringFilter<"Sosmed"> | string
    sosmedUrl?: StringFilter<"Sosmed"> | string
  }, "id">

  export type SosmedOrderByWithAggregationInput = {
    id?: SortOrder
    sosmedName?: SortOrder
    sosmedUrl?: SortOrder
    _count?: SosmedCountOrderByAggregateInput
    _max?: SosmedMaxOrderByAggregateInput
    _min?: SosmedMinOrderByAggregateInput
  }

  export type SosmedScalarWhereWithAggregatesInput = {
    AND?: SosmedScalarWhereWithAggregatesInput | SosmedScalarWhereWithAggregatesInput[]
    OR?: SosmedScalarWhereWithAggregatesInput[]
    NOT?: SosmedScalarWhereWithAggregatesInput | SosmedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sosmed"> | string
    sosmedName?: StringWithAggregatesFilter<"Sosmed"> | string
    sosmedUrl?: StringWithAggregatesFilter<"Sosmed"> | string
  }

  export type SchoolProfileWhereInput = {
    AND?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    OR?: SchoolProfileWhereInput[]
    NOT?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    id?: StringFilter<"SchoolProfile"> | string
    namaSekolah?: StringFilter<"SchoolProfile"> | string
    jenisSekolah?: StringFilter<"SchoolProfile"> | string
    nss?: StringNullableFilter<"SchoolProfile"> | string | null
    npsn?: StringNullableFilter<"SchoolProfile"> | string | null
    tanggalBerdiri?: DateTimeNullableFilter<"SchoolProfile"> | Date | string | null
    akreditasi?: StringNullableFilter<"SchoolProfile"> | string | null
    programJurusan?: StringNullableFilter<"SchoolProfile"> | string | null
    izinOperasional?: StringNullableFilter<"SchoolProfile"> | string | null
    luasTanah?: IntNullableFilter<"SchoolProfile"> | number | null
    kurikulum?: StringNullableFilter<"SchoolProfile"> | string | null
    jamAktif?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahGuruStaff?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahSiswa?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahRombel?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahPrestasi?: IntNullableFilter<"SchoolProfile"> | number | null
    sloganSekolah?: StringNullableFilter<"SchoolProfile"> | string | null
    kepsek?: StringNullableFilter<"SchoolProfile"> | string | null
    nipKepsek?: StringNullableFilter<"SchoolProfile"> | string | null
    masaKerja?: StringNullableFilter<"SchoolProfile"> | string | null
    izinMemimpin?: StringNullableFilter<"SchoolProfile"> | string | null
    statusKepegawaian?: StringNullableFilter<"SchoolProfile"> | string | null
    pendidikanTerakhir?: StringNullableFilter<"SchoolProfile"> | string | null
    deskripsiSekolah?: StringNullableFilter<"SchoolProfile"> | string | null
    createdAt?: DateTimeFilter<"SchoolProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolProfile"> | Date | string
  }

  export type SchoolProfileOrderByWithRelationInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    jenisSekolah?: SortOrder
    nss?: SortOrderInput | SortOrder
    npsn?: SortOrderInput | SortOrder
    tanggalBerdiri?: SortOrderInput | SortOrder
    akreditasi?: SortOrderInput | SortOrder
    programJurusan?: SortOrderInput | SortOrder
    izinOperasional?: SortOrderInput | SortOrder
    luasTanah?: SortOrderInput | SortOrder
    kurikulum?: SortOrderInput | SortOrder
    jamAktif?: SortOrderInput | SortOrder
    jumlahGuruStaff?: SortOrderInput | SortOrder
    jumlahSiswa?: SortOrderInput | SortOrder
    jumlahRombel?: SortOrderInput | SortOrder
    jumlahPrestasi?: SortOrderInput | SortOrder
    sloganSekolah?: SortOrderInput | SortOrder
    kepsek?: SortOrderInput | SortOrder
    nipKepsek?: SortOrderInput | SortOrder
    masaKerja?: SortOrderInput | SortOrder
    izinMemimpin?: SortOrderInput | SortOrder
    statusKepegawaian?: SortOrderInput | SortOrder
    pendidikanTerakhir?: SortOrderInput | SortOrder
    deskripsiSekolah?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    OR?: SchoolProfileWhereInput[]
    NOT?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    namaSekolah?: StringFilter<"SchoolProfile"> | string
    jenisSekolah?: StringFilter<"SchoolProfile"> | string
    nss?: StringNullableFilter<"SchoolProfile"> | string | null
    npsn?: StringNullableFilter<"SchoolProfile"> | string | null
    tanggalBerdiri?: DateTimeNullableFilter<"SchoolProfile"> | Date | string | null
    akreditasi?: StringNullableFilter<"SchoolProfile"> | string | null
    programJurusan?: StringNullableFilter<"SchoolProfile"> | string | null
    izinOperasional?: StringNullableFilter<"SchoolProfile"> | string | null
    luasTanah?: IntNullableFilter<"SchoolProfile"> | number | null
    kurikulum?: StringNullableFilter<"SchoolProfile"> | string | null
    jamAktif?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahGuruStaff?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahSiswa?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahRombel?: IntNullableFilter<"SchoolProfile"> | number | null
    jumlahPrestasi?: IntNullableFilter<"SchoolProfile"> | number | null
    sloganSekolah?: StringNullableFilter<"SchoolProfile"> | string | null
    kepsek?: StringNullableFilter<"SchoolProfile"> | string | null
    nipKepsek?: StringNullableFilter<"SchoolProfile"> | string | null
    masaKerja?: StringNullableFilter<"SchoolProfile"> | string | null
    izinMemimpin?: StringNullableFilter<"SchoolProfile"> | string | null
    statusKepegawaian?: StringNullableFilter<"SchoolProfile"> | string | null
    pendidikanTerakhir?: StringNullableFilter<"SchoolProfile"> | string | null
    deskripsiSekolah?: StringNullableFilter<"SchoolProfile"> | string | null
    createdAt?: DateTimeFilter<"SchoolProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolProfile"> | Date | string
  }, "id">

  export type SchoolProfileOrderByWithAggregationInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    jenisSekolah?: SortOrder
    nss?: SortOrderInput | SortOrder
    npsn?: SortOrderInput | SortOrder
    tanggalBerdiri?: SortOrderInput | SortOrder
    akreditasi?: SortOrderInput | SortOrder
    programJurusan?: SortOrderInput | SortOrder
    izinOperasional?: SortOrderInput | SortOrder
    luasTanah?: SortOrderInput | SortOrder
    kurikulum?: SortOrderInput | SortOrder
    jamAktif?: SortOrderInput | SortOrder
    jumlahGuruStaff?: SortOrderInput | SortOrder
    jumlahSiswa?: SortOrderInput | SortOrder
    jumlahRombel?: SortOrderInput | SortOrder
    jumlahPrestasi?: SortOrderInput | SortOrder
    sloganSekolah?: SortOrderInput | SortOrder
    kepsek?: SortOrderInput | SortOrder
    nipKepsek?: SortOrderInput | SortOrder
    masaKerja?: SortOrderInput | SortOrder
    izinMemimpin?: SortOrderInput | SortOrder
    statusKepegawaian?: SortOrderInput | SortOrder
    pendidikanTerakhir?: SortOrderInput | SortOrder
    deskripsiSekolah?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolProfileCountOrderByAggregateInput
    _avg?: SchoolProfileAvgOrderByAggregateInput
    _max?: SchoolProfileMaxOrderByAggregateInput
    _min?: SchoolProfileMinOrderByAggregateInput
    _sum?: SchoolProfileSumOrderByAggregateInput
  }

  export type SchoolProfileScalarWhereWithAggregatesInput = {
    AND?: SchoolProfileScalarWhereWithAggregatesInput | SchoolProfileScalarWhereWithAggregatesInput[]
    OR?: SchoolProfileScalarWhereWithAggregatesInput[]
    NOT?: SchoolProfileScalarWhereWithAggregatesInput | SchoolProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolProfile"> | string
    namaSekolah?: StringWithAggregatesFilter<"SchoolProfile"> | string
    jenisSekolah?: StringWithAggregatesFilter<"SchoolProfile"> | string
    nss?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    npsn?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    tanggalBerdiri?: DateTimeNullableWithAggregatesFilter<"SchoolProfile"> | Date | string | null
    akreditasi?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    programJurusan?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    izinOperasional?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    luasTanah?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    kurikulum?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    jamAktif?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    jumlahGuruStaff?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    jumlahSiswa?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    jumlahRombel?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    jumlahPrestasi?: IntNullableWithAggregatesFilter<"SchoolProfile"> | number | null
    sloganSekolah?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    kepsek?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    nipKepsek?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    masaKerja?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    izinMemimpin?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    statusKepegawaian?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    pendidikanTerakhir?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    deskripsiSekolah?: StringNullableWithAggregatesFilter<"SchoolProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SchoolProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolProfile"> | Date | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: StringFilter<"Visitor"> | string
    postId?: StringFilter<"Visitor"> | string
    visitorId?: StringFilter<"Visitor"> | string
    ipAddress?: StringNullableFilter<"Visitor"> | string | null
    userAgent?: StringNullableFilter<"Visitor"> | string | null
    readAt?: DateTimeFilter<"Visitor"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    visitorId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    readAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_visitorId?: VisitorPostIdVisitorIdCompoundUniqueInput
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    postId?: StringFilter<"Visitor"> | string
    visitorId?: StringFilter<"Visitor"> | string
    ipAddress?: StringNullableFilter<"Visitor"> | string | null
    userAgent?: StringNullableFilter<"Visitor"> | string | null
    readAt?: DateTimeFilter<"Visitor"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_visitorId">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    visitorId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    readAt?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visitor"> | string
    postId?: StringWithAggregatesFilter<"Visitor"> | string
    visitorId?: StringWithAggregatesFilter<"Visitor"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    readAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    blocks?: PostBlockCreateNestedManyWithoutPostInput
    visitors?: VisitorCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    blocks?: PostBlockUncheckedCreateNestedManyWithoutPostInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: PostBlockUpdateManyWithoutPostNestedInput
    visitors?: VisitorUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: PostBlockUncheckedUpdateManyWithoutPostNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostBlockCreateInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    post: PostCreateNestedOneWithoutBlocksInput
    image?: ImageCreateNestedOneWithoutBlockInput
  }

  export type PostBlockUncheckedCreateInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    postId: string
    image?: ImageUncheckedCreateNestedOneWithoutBlockInput
  }

  export type PostBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutBlocksNestedInput
    image?: ImageUpdateOneWithoutBlockNestedInput
  }

  export type PostBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    image?: ImageUncheckedUpdateOneWithoutBlockNestedInput
  }

  export type PostBlockCreateManyInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    postId: string
  }

  export type PostBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PostBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    caption?: string | null
    publicId?: string | null
    block: PostBlockCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    caption?: string | null
    blockId: string
    publicId?: string | null
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    block?: PostBlockUpdateOneRequiredWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blockId?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    caption?: string | null
    blockId: string
    publicId?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blockId?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    nip?: string | null
    jabatan: string
    pesan: string
    imageUrl?: string | null
    publicId?: string | null
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    nip?: string | null
    jabatan: string
    pesan: string
    imageUrl?: string | null
    publicId?: string | null
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    nip?: string | null
    jabatan: string
    pesan: string
    imageUrl?: string | null
    publicId?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiMisiCreateInput = {
    id?: string
    visi: string
    misi: string
  }

  export type VisiMisiUncheckedCreateInput = {
    id?: string
    visi: string
    misi: string
  }

  export type VisiMisiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visi?: StringFieldUpdateOperationsInput | string
    misi?: StringFieldUpdateOperationsInput | string
  }

  export type VisiMisiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visi?: StringFieldUpdateOperationsInput | string
    misi?: StringFieldUpdateOperationsInput | string
  }

  export type VisiMisiCreateManyInput = {
    id?: string
    visi: string
    misi: string
  }

  export type VisiMisiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visi?: StringFieldUpdateOperationsInput | string
    misi?: StringFieldUpdateOperationsInput | string
  }

  export type VisiMisiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visi?: StringFieldUpdateOperationsInput | string
    misi?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    email: string
    address: string
    phone: string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    email: string
    address: string
    phone: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    email: string
    address: string
    phone: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type SosmedCreateInput = {
    id?: string
    sosmedName: string
    sosmedUrl?: string
  }

  export type SosmedUncheckedCreateInput = {
    id?: string
    sosmedName: string
    sosmedUrl?: string
  }

  export type SosmedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sosmedName?: StringFieldUpdateOperationsInput | string
    sosmedUrl?: StringFieldUpdateOperationsInput | string
  }

  export type SosmedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sosmedName?: StringFieldUpdateOperationsInput | string
    sosmedUrl?: StringFieldUpdateOperationsInput | string
  }

  export type SosmedCreateManyInput = {
    id?: string
    sosmedName: string
    sosmedUrl?: string
  }

  export type SosmedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sosmedName?: StringFieldUpdateOperationsInput | string
    sosmedUrl?: StringFieldUpdateOperationsInput | string
  }

  export type SosmedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sosmedName?: StringFieldUpdateOperationsInput | string
    sosmedUrl?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolProfileCreateInput = {
    id?: string
    namaSekolah: string
    jenisSekolah: string
    nss?: string | null
    npsn?: string | null
    tanggalBerdiri?: Date | string | null
    akreditasi?: string | null
    programJurusan?: string | null
    izinOperasional?: string | null
    luasTanah?: number | null
    kurikulum?: string | null
    jamAktif?: number | null
    jumlahGuruStaff?: number | null
    jumlahSiswa?: number | null
    jumlahRombel?: number | null
    jumlahPrestasi?: number | null
    sloganSekolah?: string | null
    kepsek?: string | null
    nipKepsek?: string | null
    masaKerja?: string | null
    izinMemimpin?: string | null
    statusKepegawaian?: string | null
    pendidikanTerakhir?: string | null
    deskripsiSekolah?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolProfileUncheckedCreateInput = {
    id?: string
    namaSekolah: string
    jenisSekolah: string
    nss?: string | null
    npsn?: string | null
    tanggalBerdiri?: Date | string | null
    akreditasi?: string | null
    programJurusan?: string | null
    izinOperasional?: string | null
    luasTanah?: number | null
    kurikulum?: string | null
    jamAktif?: number | null
    jumlahGuruStaff?: number | null
    jumlahSiswa?: number | null
    jumlahRombel?: number | null
    jumlahPrestasi?: number | null
    sloganSekolah?: string | null
    kepsek?: string | null
    nipKepsek?: string | null
    masaKerja?: string | null
    izinMemimpin?: string | null
    statusKepegawaian?: string | null
    pendidikanTerakhir?: string | null
    deskripsiSekolah?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    jenisSekolah?: StringFieldUpdateOperationsInput | string
    nss?: NullableStringFieldUpdateOperationsInput | string | null
    npsn?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalBerdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    programJurusan?: NullableStringFieldUpdateOperationsInput | string | null
    izinOperasional?: NullableStringFieldUpdateOperationsInput | string | null
    luasTanah?: NullableIntFieldUpdateOperationsInput | number | null
    kurikulum?: NullableStringFieldUpdateOperationsInput | string | null
    jamAktif?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahGuruStaff?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahSiswa?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahRombel?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahPrestasi?: NullableIntFieldUpdateOperationsInput | number | null
    sloganSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    kepsek?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepsek?: NullableStringFieldUpdateOperationsInput | string | null
    masaKerja?: NullableStringFieldUpdateOperationsInput | string | null
    izinMemimpin?: NullableStringFieldUpdateOperationsInput | string | null
    statusKepegawaian?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikanTerakhir?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsiSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    jenisSekolah?: StringFieldUpdateOperationsInput | string
    nss?: NullableStringFieldUpdateOperationsInput | string | null
    npsn?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalBerdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    programJurusan?: NullableStringFieldUpdateOperationsInput | string | null
    izinOperasional?: NullableStringFieldUpdateOperationsInput | string | null
    luasTanah?: NullableIntFieldUpdateOperationsInput | number | null
    kurikulum?: NullableStringFieldUpdateOperationsInput | string | null
    jamAktif?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahGuruStaff?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahSiswa?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahRombel?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahPrestasi?: NullableIntFieldUpdateOperationsInput | number | null
    sloganSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    kepsek?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepsek?: NullableStringFieldUpdateOperationsInput | string | null
    masaKerja?: NullableStringFieldUpdateOperationsInput | string | null
    izinMemimpin?: NullableStringFieldUpdateOperationsInput | string | null
    statusKepegawaian?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikanTerakhir?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsiSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileCreateManyInput = {
    id?: string
    namaSekolah: string
    jenisSekolah: string
    nss?: string | null
    npsn?: string | null
    tanggalBerdiri?: Date | string | null
    akreditasi?: string | null
    programJurusan?: string | null
    izinOperasional?: string | null
    luasTanah?: number | null
    kurikulum?: string | null
    jamAktif?: number | null
    jumlahGuruStaff?: number | null
    jumlahSiswa?: number | null
    jumlahRombel?: number | null
    jumlahPrestasi?: number | null
    sloganSekolah?: string | null
    kepsek?: string | null
    nipKepsek?: string | null
    masaKerja?: string | null
    izinMemimpin?: string | null
    statusKepegawaian?: string | null
    pendidikanTerakhir?: string | null
    deskripsiSekolah?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    jenisSekolah?: StringFieldUpdateOperationsInput | string
    nss?: NullableStringFieldUpdateOperationsInput | string | null
    npsn?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalBerdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    programJurusan?: NullableStringFieldUpdateOperationsInput | string | null
    izinOperasional?: NullableStringFieldUpdateOperationsInput | string | null
    luasTanah?: NullableIntFieldUpdateOperationsInput | number | null
    kurikulum?: NullableStringFieldUpdateOperationsInput | string | null
    jamAktif?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahGuruStaff?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahSiswa?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahRombel?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahPrestasi?: NullableIntFieldUpdateOperationsInput | number | null
    sloganSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    kepsek?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepsek?: NullableStringFieldUpdateOperationsInput | string | null
    masaKerja?: NullableStringFieldUpdateOperationsInput | string | null
    izinMemimpin?: NullableStringFieldUpdateOperationsInput | string | null
    statusKepegawaian?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikanTerakhir?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsiSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    jenisSekolah?: StringFieldUpdateOperationsInput | string
    nss?: NullableStringFieldUpdateOperationsInput | string | null
    npsn?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalBerdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    programJurusan?: NullableStringFieldUpdateOperationsInput | string | null
    izinOperasional?: NullableStringFieldUpdateOperationsInput | string | null
    luasTanah?: NullableIntFieldUpdateOperationsInput | number | null
    kurikulum?: NullableStringFieldUpdateOperationsInput | string | null
    jamAktif?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahGuruStaff?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahSiswa?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahRombel?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahPrestasi?: NullableIntFieldUpdateOperationsInput | number | null
    sloganSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    kepsek?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepsek?: NullableStringFieldUpdateOperationsInput | string | null
    masaKerja?: NullableStringFieldUpdateOperationsInput | string | null
    izinMemimpin?: NullableStringFieldUpdateOperationsInput | string | null
    statusKepegawaian?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikanTerakhir?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsiSekolah?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateInput = {
    id?: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
    post: PostCreateNestedOneWithoutVisitorsInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: string
    postId: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
  }

  export type VisitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutVisitorsNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateManyInput = {
    id?: string
    postId: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
  }

  export type VisitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type PostBlockListRelationFilter = {
    every?: PostBlockWhereInput
    some?: PostBlockWhereInput
    none?: PostBlockWhereInput
  }

  export type VisitorListRelationFilter = {
    every?: VisitorWhereInput
    some?: VisitorWhereInput
    none?: VisitorWhereInput
  }

  export type PostBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    style?: SortOrder
    category?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    style?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    style?: SortOrder
    category?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    style?: SortOrder
    category?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    style?: SortOrder
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

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type PostBlockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    postId?: SortOrder
  }

  export type PostBlockAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PostBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    postId?: SortOrder
  }

  export type PostBlockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    postId?: SortOrder
  }

  export type PostBlockSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
  }

  export type PostBlockScalarRelationFilter = {
    is?: PostBlockWhereInput
    isNot?: PostBlockWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    blockId?: SortOrder
    publicId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    blockId?: SortOrder
    publicId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    blockId?: SortOrder
    publicId?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    pesan?: SortOrder
    imageUrl?: SortOrder
    publicId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    pesan?: SortOrder
    imageUrl?: SortOrder
    publicId?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    pesan?: SortOrder
    imageUrl?: SortOrder
    publicId?: SortOrder
  }

  export type VisiMisiCountOrderByAggregateInput = {
    id?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
  }

  export type VisiMisiMaxOrderByAggregateInput = {
    id?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
  }

  export type VisiMisiMinOrderByAggregateInput = {
    id?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type SosmedCountOrderByAggregateInput = {
    id?: SortOrder
    sosmedName?: SortOrder
    sosmedUrl?: SortOrder
  }

  export type SosmedMaxOrderByAggregateInput = {
    id?: SortOrder
    sosmedName?: SortOrder
    sosmedUrl?: SortOrder
  }

  export type SosmedMinOrderByAggregateInput = {
    id?: SortOrder
    sosmedName?: SortOrder
    sosmedUrl?: SortOrder
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

  export type SchoolProfileCountOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    jenisSekolah?: SortOrder
    nss?: SortOrder
    npsn?: SortOrder
    tanggalBerdiri?: SortOrder
    akreditasi?: SortOrder
    programJurusan?: SortOrder
    izinOperasional?: SortOrder
    luasTanah?: SortOrder
    kurikulum?: SortOrder
    jamAktif?: SortOrder
    jumlahGuruStaff?: SortOrder
    jumlahSiswa?: SortOrder
    jumlahRombel?: SortOrder
    jumlahPrestasi?: SortOrder
    sloganSekolah?: SortOrder
    kepsek?: SortOrder
    nipKepsek?: SortOrder
    masaKerja?: SortOrder
    izinMemimpin?: SortOrder
    statusKepegawaian?: SortOrder
    pendidikanTerakhir?: SortOrder
    deskripsiSekolah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileAvgOrderByAggregateInput = {
    luasTanah?: SortOrder
    jamAktif?: SortOrder
    jumlahGuruStaff?: SortOrder
    jumlahSiswa?: SortOrder
    jumlahRombel?: SortOrder
    jumlahPrestasi?: SortOrder
  }

  export type SchoolProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    jenisSekolah?: SortOrder
    nss?: SortOrder
    npsn?: SortOrder
    tanggalBerdiri?: SortOrder
    akreditasi?: SortOrder
    programJurusan?: SortOrder
    izinOperasional?: SortOrder
    luasTanah?: SortOrder
    kurikulum?: SortOrder
    jamAktif?: SortOrder
    jumlahGuruStaff?: SortOrder
    jumlahSiswa?: SortOrder
    jumlahRombel?: SortOrder
    jumlahPrestasi?: SortOrder
    sloganSekolah?: SortOrder
    kepsek?: SortOrder
    nipKepsek?: SortOrder
    masaKerja?: SortOrder
    izinMemimpin?: SortOrder
    statusKepegawaian?: SortOrder
    pendidikanTerakhir?: SortOrder
    deskripsiSekolah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileMinOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    jenisSekolah?: SortOrder
    nss?: SortOrder
    npsn?: SortOrder
    tanggalBerdiri?: SortOrder
    akreditasi?: SortOrder
    programJurusan?: SortOrder
    izinOperasional?: SortOrder
    luasTanah?: SortOrder
    kurikulum?: SortOrder
    jamAktif?: SortOrder
    jumlahGuruStaff?: SortOrder
    jumlahSiswa?: SortOrder
    jumlahRombel?: SortOrder
    jumlahPrestasi?: SortOrder
    sloganSekolah?: SortOrder
    kepsek?: SortOrder
    nipKepsek?: SortOrder
    masaKerja?: SortOrder
    izinMemimpin?: SortOrder
    statusKepegawaian?: SortOrder
    pendidikanTerakhir?: SortOrder
    deskripsiSekolah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileSumOrderByAggregateInput = {
    luasTanah?: SortOrder
    jamAktif?: SortOrder
    jumlahGuruStaff?: SortOrder
    jumlahSiswa?: SortOrder
    jumlahRombel?: SortOrder
    jumlahPrestasi?: SortOrder
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

  export type VisitorPostIdVisitorIdCompoundUniqueInput = {
    postId: string
    visitorId: string
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    visitorId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    readAt?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    visitorId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    readAt?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    visitorId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    readAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostBlockCreateNestedManyWithoutPostInput = {
    create?: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput> | PostBlockCreateWithoutPostInput[] | PostBlockUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBlockCreateOrConnectWithoutPostInput | PostBlockCreateOrConnectWithoutPostInput[]
    createMany?: PostBlockCreateManyPostInputEnvelope
    connect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
  }

  export type VisitorCreateNestedManyWithoutPostInput = {
    create?: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput> | VisitorCreateWithoutPostInput[] | VisitorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPostInput | VisitorCreateOrConnectWithoutPostInput[]
    createMany?: VisitorCreateManyPostInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type PostBlockUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput> | PostBlockCreateWithoutPostInput[] | PostBlockUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBlockCreateOrConnectWithoutPostInput | PostBlockCreateOrConnectWithoutPostInput[]
    createMany?: PostBlockCreateManyPostInputEnvelope
    connect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
  }

  export type VisitorUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput> | VisitorCreateWithoutPostInput[] | VisitorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPostInput | VisitorCreateOrConnectWithoutPostInput[]
    createMany?: VisitorCreateManyPostInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type PostBlockUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput> | PostBlockCreateWithoutPostInput[] | PostBlockUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBlockCreateOrConnectWithoutPostInput | PostBlockCreateOrConnectWithoutPostInput[]
    upsert?: PostBlockUpsertWithWhereUniqueWithoutPostInput | PostBlockUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostBlockCreateManyPostInputEnvelope
    set?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    disconnect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    delete?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    connect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    update?: PostBlockUpdateWithWhereUniqueWithoutPostInput | PostBlockUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostBlockUpdateManyWithWhereWithoutPostInput | PostBlockUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostBlockScalarWhereInput | PostBlockScalarWhereInput[]
  }

  export type VisitorUpdateManyWithoutPostNestedInput = {
    create?: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput> | VisitorCreateWithoutPostInput[] | VisitorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPostInput | VisitorCreateOrConnectWithoutPostInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutPostInput | VisitorUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VisitorCreateManyPostInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutPostInput | VisitorUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutPostInput | VisitorUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type PostBlockUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput> | PostBlockCreateWithoutPostInput[] | PostBlockUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBlockCreateOrConnectWithoutPostInput | PostBlockCreateOrConnectWithoutPostInput[]
    upsert?: PostBlockUpsertWithWhereUniqueWithoutPostInput | PostBlockUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostBlockCreateManyPostInputEnvelope
    set?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    disconnect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    delete?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    connect?: PostBlockWhereUniqueInput | PostBlockWhereUniqueInput[]
    update?: PostBlockUpdateWithWhereUniqueWithoutPostInput | PostBlockUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostBlockUpdateManyWithWhereWithoutPostInput | PostBlockUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostBlockScalarWhereInput | PostBlockScalarWhereInput[]
  }

  export type VisitorUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput> | VisitorCreateWithoutPostInput[] | VisitorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPostInput | VisitorCreateOrConnectWithoutPostInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutPostInput | VisitorUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VisitorCreateManyPostInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutPostInput | VisitorUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutPostInput | VisitorUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutBlocksInput = {
    create?: XOR<PostCreateWithoutBlocksInput, PostUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: PostCreateOrConnectWithoutBlocksInput
    connect?: PostWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutBlockInput = {
    create?: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
    connectOrCreate?: ImageCreateOrConnectWithoutBlockInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedOneWithoutBlockInput = {
    create?: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
    connectOrCreate?: ImageCreateOrConnectWithoutBlockInput
    connect?: ImageWhereUniqueInput
  }

  export type EnumBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.BlockType
  }

  export type PostUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<PostCreateWithoutBlocksInput, PostUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: PostCreateOrConnectWithoutBlocksInput
    upsert?: PostUpsertWithoutBlocksInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutBlocksInput, PostUpdateWithoutBlocksInput>, PostUncheckedUpdateWithoutBlocksInput>
  }

  export type ImageUpdateOneWithoutBlockNestedInput = {
    create?: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
    connectOrCreate?: ImageCreateOrConnectWithoutBlockInput
    upsert?: ImageUpsertWithoutBlockInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutBlockInput, ImageUpdateWithoutBlockInput>, ImageUncheckedUpdateWithoutBlockInput>
  }

  export type ImageUncheckedUpdateOneWithoutBlockNestedInput = {
    create?: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
    connectOrCreate?: ImageCreateOrConnectWithoutBlockInput
    upsert?: ImageUpsertWithoutBlockInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutBlockInput, ImageUpdateWithoutBlockInput>, ImageUncheckedUpdateWithoutBlockInput>
  }

  export type PostBlockCreateNestedOneWithoutImageInput = {
    create?: XOR<PostBlockCreateWithoutImageInput, PostBlockUncheckedCreateWithoutImageInput>
    connectOrCreate?: PostBlockCreateOrConnectWithoutImageInput
    connect?: PostBlockWhereUniqueInput
  }

  export type PostBlockUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<PostBlockCreateWithoutImageInput, PostBlockUncheckedCreateWithoutImageInput>
    connectOrCreate?: PostBlockCreateOrConnectWithoutImageInput
    upsert?: PostBlockUpsertWithoutImageInput
    connect?: PostBlockWhereUniqueInput
    update?: XOR<XOR<PostBlockUpdateToOneWithWhereWithoutImageInput, PostBlockUpdateWithoutImageInput>, PostBlockUncheckedUpdateWithoutImageInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostCreateNestedOneWithoutVisitorsInput = {
    create?: XOR<PostCreateWithoutVisitorsInput, PostUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: PostCreateOrConnectWithoutVisitorsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutVisitorsNestedInput = {
    create?: XOR<PostCreateWithoutVisitorsInput, PostUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: PostCreateOrConnectWithoutVisitorsInput
    upsert?: PostUpsertWithoutVisitorsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutVisitorsInput, PostUpdateWithoutVisitorsInput>, PostUncheckedUpdateWithoutVisitorsInput>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
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

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
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

  export type PostBlockCreateWithoutPostInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    image?: ImageCreateNestedOneWithoutBlockInput
  }

  export type PostBlockUncheckedCreateWithoutPostInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    image?: ImageUncheckedCreateNestedOneWithoutBlockInput
  }

  export type PostBlockCreateOrConnectWithoutPostInput = {
    where: PostBlockWhereUniqueInput
    create: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput>
  }

  export type PostBlockCreateManyPostInputEnvelope = {
    data: PostBlockCreateManyPostInput | PostBlockCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type VisitorCreateWithoutPostInput = {
    id?: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
  }

  export type VisitorUncheckedCreateWithoutPostInput = {
    id?: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
  }

  export type VisitorCreateOrConnectWithoutPostInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput>
  }

  export type VisitorCreateManyPostInputEnvelope = {
    data: VisitorCreateManyPostInput | VisitorCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostBlockUpsertWithWhereUniqueWithoutPostInput = {
    where: PostBlockWhereUniqueInput
    update: XOR<PostBlockUpdateWithoutPostInput, PostBlockUncheckedUpdateWithoutPostInput>
    create: XOR<PostBlockCreateWithoutPostInput, PostBlockUncheckedCreateWithoutPostInput>
  }

  export type PostBlockUpdateWithWhereUniqueWithoutPostInput = {
    where: PostBlockWhereUniqueInput
    data: XOR<PostBlockUpdateWithoutPostInput, PostBlockUncheckedUpdateWithoutPostInput>
  }

  export type PostBlockUpdateManyWithWhereWithoutPostInput = {
    where: PostBlockScalarWhereInput
    data: XOR<PostBlockUpdateManyMutationInput, PostBlockUncheckedUpdateManyWithoutPostInput>
  }

  export type PostBlockScalarWhereInput = {
    AND?: PostBlockScalarWhereInput | PostBlockScalarWhereInput[]
    OR?: PostBlockScalarWhereInput[]
    NOT?: PostBlockScalarWhereInput | PostBlockScalarWhereInput[]
    id?: StringFilter<"PostBlock"> | string
    type?: EnumBlockTypeFilter<"PostBlock"> | $Enums.BlockType
    content?: StringNullableFilter<"PostBlock"> | string | null
    order?: IntFilter<"PostBlock"> | number
    postId?: StringFilter<"PostBlock"> | string
  }

  export type VisitorUpsertWithWhereUniqueWithoutPostInput = {
    where: VisitorWhereUniqueInput
    update: XOR<VisitorUpdateWithoutPostInput, VisitorUncheckedUpdateWithoutPostInput>
    create: XOR<VisitorCreateWithoutPostInput, VisitorUncheckedCreateWithoutPostInput>
  }

  export type VisitorUpdateWithWhereUniqueWithoutPostInput = {
    where: VisitorWhereUniqueInput
    data: XOR<VisitorUpdateWithoutPostInput, VisitorUncheckedUpdateWithoutPostInput>
  }

  export type VisitorUpdateManyWithWhereWithoutPostInput = {
    where: VisitorScalarWhereInput
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyWithoutPostInput>
  }

  export type VisitorScalarWhereInput = {
    AND?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    OR?: VisitorScalarWhereInput[]
    NOT?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    id?: StringFilter<"Visitor"> | string
    postId?: StringFilter<"Visitor"> | string
    visitorId?: StringFilter<"Visitor"> | string
    ipAddress?: StringNullableFilter<"Visitor"> | string | null
    userAgent?: StringNullableFilter<"Visitor"> | string | null
    readAt?: DateTimeFilter<"Visitor"> | Date | string
  }

  export type PostCreateWithoutBlocksInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    visitors?: VisitorCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutBlocksInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    visitors?: VisitorUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutBlocksInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutBlocksInput, PostUncheckedCreateWithoutBlocksInput>
  }

  export type ImageCreateWithoutBlockInput = {
    id?: string
    url: string
    caption?: string | null
    publicId?: string | null
  }

  export type ImageUncheckedCreateWithoutBlockInput = {
    id?: string
    url: string
    caption?: string | null
    publicId?: string | null
  }

  export type ImageCreateOrConnectWithoutBlockInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
  }

  export type PostUpsertWithoutBlocksInput = {
    update: XOR<PostUpdateWithoutBlocksInput, PostUncheckedUpdateWithoutBlocksInput>
    create: XOR<PostCreateWithoutBlocksInput, PostUncheckedCreateWithoutBlocksInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutBlocksInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutBlocksInput, PostUncheckedUpdateWithoutBlocksInput>
  }

  export type PostUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: VisitorUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: VisitorUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ImageUpsertWithoutBlockInput = {
    update: XOR<ImageUpdateWithoutBlockInput, ImageUncheckedUpdateWithoutBlockInput>
    create: XOR<ImageCreateWithoutBlockInput, ImageUncheckedCreateWithoutBlockInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutBlockInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutBlockInput, ImageUncheckedUpdateWithoutBlockInput>
  }

  export type ImageUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostBlockCreateWithoutImageInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    post: PostCreateNestedOneWithoutBlocksInput
  }

  export type PostBlockUncheckedCreateWithoutImageInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
    postId: string
  }

  export type PostBlockCreateOrConnectWithoutImageInput = {
    where: PostBlockWhereUniqueInput
    create: XOR<PostBlockCreateWithoutImageInput, PostBlockUncheckedCreateWithoutImageInput>
  }

  export type PostBlockUpsertWithoutImageInput = {
    update: XOR<PostBlockUpdateWithoutImageInput, PostBlockUncheckedUpdateWithoutImageInput>
    create: XOR<PostBlockCreateWithoutImageInput, PostBlockUncheckedCreateWithoutImageInput>
    where?: PostBlockWhereInput
  }

  export type PostBlockUpdateToOneWithWhereWithoutImageInput = {
    where?: PostBlockWhereInput
    data: XOR<PostBlockUpdateWithoutImageInput, PostBlockUncheckedUpdateWithoutImageInput>
  }

  export type PostBlockUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type PostBlockUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutVisitorsInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    blocks?: PostBlockCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVisitorsInput = {
    id?: string
    title: string
    style: number
    category: $Enums.Category
    author?: string
    createdAt?: Date | string
    blocks?: PostBlockUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutVisitorsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVisitorsInput, PostUncheckedCreateWithoutVisitorsInput>
  }

  export type PostUpsertWithoutVisitorsInput = {
    update: XOR<PostUpdateWithoutVisitorsInput, PostUncheckedUpdateWithoutVisitorsInput>
    create: XOR<PostCreateWithoutVisitorsInput, PostUncheckedCreateWithoutVisitorsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutVisitorsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutVisitorsInput, PostUncheckedUpdateWithoutVisitorsInput>
  }

  export type PostUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: PostBlockUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    style?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: PostBlockUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostBlockCreateManyPostInput = {
    id?: string
    type: $Enums.BlockType
    content?: string | null
    order: number
  }

  export type VisitorCreateManyPostInput = {
    id?: string
    visitorId: string
    ipAddress?: string | null
    userAgent?: string | null
    readAt?: Date | string
  }

  export type PostBlockUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    image?: ImageUpdateOneWithoutBlockNestedInput
  }

  export type PostBlockUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    image?: ImageUncheckedUpdateOneWithoutBlockNestedInput
  }

  export type PostBlockUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
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