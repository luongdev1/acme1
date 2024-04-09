/** @type {import('next').NextConfig} */
const nextConfig = {
     env: {
          POSTGRES_URL: "postgres://default:Z5u9HrIplNaX@ep-square-flower-a1ffpj3o-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
          , POSTGRES_PRISMA_URL: "postgres://default:Z5u9HrIplNaX@ep-square-flower-a1ffpj3o-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
          , POSTGRES_URL_NO_SSL: "postgres://default:Z5u9HrIplNaX@ep-square-flower-a1ffpj3o-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb"
          , POSTGRES_URL_NON_POOLING: "postgres://default:Z5u9HrIplNaX@ep-square-flower-a1ffpj3o.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
          , POSTGRES_USER: "default"
          , POSTGRES_HOST: "ep-square-flower-a1ffpj3o-pooler.ap-southeast-1.aws.neon.tech"
          , POSTGRES_PASSWORD: "Z5u9HrIplNaX"
          , POSTGRES_DATABASE: "verceldb"
     }
};

module.exports = nextConfig;
