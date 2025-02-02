module.exports = {
 
   webpack: (config, { isServer }) => {
     if (!isServer) {
       config.resolve.fallback.fs = false;
       config.resolve.fallback.net = false;
     }
     return config;

     
   },

   async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,PATCH,OPTIONS,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-Custom-Header, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
},
reactStrictMode: true,
  env: {
    API: process.env.API,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path',
  //       destination: 'https://pegascapital.herokuapp.com/:path',
  //     },
  //   ]
  // },
 }
 