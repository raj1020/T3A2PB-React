const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:3005/payment'
  : 'http://localhost:3005/payment';
export default PAYMENT_SERVER_URL;