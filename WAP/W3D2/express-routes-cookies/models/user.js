const users = [
  { username: 'geoffrey', password: 'qwerty', role: 'admin' },
  { username: 'brio', password: '123456', role: 'user' },
];
module.exports = class User {
  constructor(username, password, role = 'admin') {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  save() {
    users.push(this);
  }

  static fetchAll() {
    return users;
  }
};
