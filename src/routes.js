export default {
  path: "/",
  component: require("./app").default,
  indexRoute:{
    getComponents:(a, cb) =>
      require.ensure([],
        require => {
          cb(null, require("./pages/PageOne").default);
        })
  },
};
