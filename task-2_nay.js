class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const fox = new User({
  name: 'fox',
  age: 13,
  followers: 2,
});

fox.getInfo();

const Yarik = new User({
  name: 'Yarik',
  age: 11,
  followers: 0,
});

Yarik.getInfo();

// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers