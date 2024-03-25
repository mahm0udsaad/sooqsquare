
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  phoneNumber: 'phoneNumber',
  username: 'username',
  country: 'country',
  image: 'image',
  status: 'status',
  email: 'email',
  cvUrl: 'cvUrl',
  jobTitle: 'jobTitle',
  about: 'about',
  website: 'website',
  yearsOfExperince: 'yearsOfExperince',
  age: 'age',
  skills: 'skills',
  activites: 'activites',
  languages: 'languages'
};

exports.Prisma.JobApplicationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  jobId: 'jobId',
  appliedAt: 'appliedAt',
  cvUrl: 'cvUrl',
  coverLetter: 'coverLetter',
  status: 'status'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  experienceType: 'experienceType',
  jobTitle: 'jobTitle',
  companyName: 'companyName',
  dateRange: 'dateRange',
  currentlyWorking: 'currentlyWorking',
  remote: 'remote',
  description: 'description',
  country: 'country',
  company: 'company'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  institutionName: 'institutionName',
  degree: 'degree',
  fieldOfStudy: 'fieldOfStudy',
  startDate: 'startDate',
  endDate: 'endDate',
  description: 'description'
};

exports.Prisma.CertificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  certificationName: 'certificationName',
  issuer: 'issuer',
  issueDate: 'issueDate',
  expirationDate: 'expirationDate',
  description: 'description'
};

exports.Prisma.TrainingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  trainingName: 'trainingName',
  organization: 'organization',
  startDate: 'startDate',
  endDate: 'endDate',
  description: 'description'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  endpoint: 'endpoint',
  p256dh: 'p256dh',
  auth: 'auth',
  userId: 'userId'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  phone: 'phone',
  industry: 'industry',
  city: 'city',
  logoUrl: 'logoUrl',
  userId: 'userId'
};

exports.Prisma.JobPostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  companyId: 'companyId',
  description: 'description',
  city: 'city',
  jobCategory: 'jobCategory',
  salary: 'salary',
  experience: 'experience',
  applicantsCount: 'applicantsCount',
  postedAt: 'postedAt',
  careerLevel: 'careerLevel',
  languages: 'languages',
  nationality: 'nationality',
  benefits: 'benefits',
  skills: 'skills',
  gender: 'gender',
  employmentType: 'employmentType',
  educationLevel: 'educationLevel',
  cvRequired: 'cvRequired',
  requirements: 'requirements'
};

exports.Prisma.ShopScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  shopCategory: 'shopCategory',
  shopName: 'shopName',
  city: 'city',
  bgColor: 'bgColor',
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

exports.Prisma.ChatScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  content: 'content',
  read: 'read',
  notificationId: 'notificationId',
  chatId: 'chatId',
  shopId: 'shopId',
  senderId: 'senderId',
  receiverId: 'receiverId'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  content: 'content',
  read: 'read',
  messageId: 'messageId',
  recipientId: 'recipientId'
};

exports.Prisma.FollowScalarFieldEnum = {
  id: 'id',
  followerId: 'followerId',
  followedUserId: 'followedUserId',
  followedShopId: 'followedShopId'
};

exports.Prisma.RatingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ratedUserId: 'ratedUserId',
  shopId: 'shopId',
  rating: 'rating',
  createdAt: 'createdAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  adId: 'adId',
  appartmentAdId: 'appartmentAdId'
};

exports.Prisma.AdScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  shopId: 'shopId',
  createdAt: 'createdAt',
  description: 'description',
  country: 'country',
  color: 'color',
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
  city: 'city',
  CarChassis: 'CarChassis',
  extraFeatures: 'extraFeatures',
  adStatus: 'adStatus',
  views: 'views',
  clicks: 'clicks'
};

exports.Prisma.AppartmentAdScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  shopId: 'shopId',
  createdAt: 'createdAt',
  description: 'description',
  title: 'title',
  country: 'country',
  city: 'city',
  category: 'category',
  type: 'type',
  propertyType: 'propertyType',
  payment: 'payment',
  price: 'price',
  bedrooms: 'bedrooms',
  bathrooms: 'bathrooms',
  amenities: 'amenities',
  isOwner: 'isOwner',
  buildingAge: 'buildingAge',
  designedFor: 'designedFor',
  floorsNum: 'floorsNum',
  buildingSize: 'buildingSize',
  landSize: 'landSize',
  BuildingInterface: 'BuildingInterface',
  adStatus: 'adStatus',
  views: 'views',
  clicks: 'clicks'
};

exports.Prisma.FavoriteAdScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  adId: 'adId',
  appartmentAdId: 'appartmentAdId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  User: 'User',
  JobApplication: 'JobApplication',
  WorkExperience: 'WorkExperience',
  Education: 'Education',
  Certification: 'Certification',
  Training: 'Training',
  Subscription: 'Subscription',
  Company: 'Company',
  JobPost: 'JobPost',
  Shop: 'Shop',
  Chat: 'Chat',
  Message: 'Message',
  Notification: 'Notification',
  Follow: 'Follow',
  Rating: 'Rating',
  Image: 'Image',
  Ad: 'Ad',
  AppartmentAd: 'AppartmentAd',
  FavoriteAd: 'FavoriteAd'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
