const Birthday = new Date("02/12/2005");

const monthbday = Date.now() - Birthday.getTime();

const Age = new Date(monthbday);

const yearUTC = Age.getUTCFullYear();

console.log(Math.abs(yearUTC - 2005));
