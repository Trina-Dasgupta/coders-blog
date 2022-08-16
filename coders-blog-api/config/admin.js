module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b56db72212d683024abaf1048fa98019'),
  },
});
