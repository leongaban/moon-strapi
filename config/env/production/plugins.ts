export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('MOON_STRAPI_SENDGRID_KEY'),
      },
      settings: {
        defaultFrom: 'hello@moonportfolio.xyz',
        defaultReplyTo: 'hello@moonportfolio.xyz',
        testAddress: 'hello@moonportfolio.xyz',
      },
    },
  },
  'strapi-google-auth': {
    enabled: true,
  },
});
