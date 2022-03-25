// productionのときsample-next-app-38ame0dhc-kenta0202.vercel.app
// developmentのときhttp://localhost:3000
const dev = process.env.NODE_ENV === 'production';

export const server = dev
  ? 'sample-next-app-38ame0dhc-kenta0202.vercel.app'
  : 'http://localhost:3000';
