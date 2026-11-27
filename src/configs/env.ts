const env = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000/api',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000',
};

export default env;
