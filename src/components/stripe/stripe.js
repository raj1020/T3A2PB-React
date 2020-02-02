const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_ymw4NkCgqTmepxPMXwR1S7mc00ohOZj6l4';
export default STRIPE_PUBLISHABLE;