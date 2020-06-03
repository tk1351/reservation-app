const User = require('./model/user');

class UserDb {
  constructor(){
    this.users = [
      {
        username: "鈴木太郎",
        email: "suzuki@gmail.com",
        password: "abcde"
      }
    ]
  }

  async initDb() {
    await this.cleanDb();
    this.pushUsersToDb();
  }

  async cleanDb() {
    await User.deleteMany({});
  }

  pushUsersToDb() {
    this.users.forEach(
      (user) => {
        const newUser = new User(user);
        newUser.save();
      }
    )
  }

  seeDb() {
    this.pushUsersToDb();
  }
}

module.exports = UserDb;