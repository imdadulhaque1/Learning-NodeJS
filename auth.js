const register = function (username) {
          console.log(`User ${username} has been registered!`);
}

const login = function(username, password){
          console.log(`User ${username} is logged in! `);
}
// export default register;
// module.exports = register;
// module.exports = login;     // for using two times of exports, it have possible to override so use the below techniques
module.exports = {
          register,
          login
}