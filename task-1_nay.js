function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  console.log(Account.prototype.getInfo);
  
  const fox = new Account({
    login: 'fox2411',
    email: 'geoorgiy2411@mail.com',
  });
  
  fox.getInfo();
  
  const Yarik = new Account({
    login: 'Stalker',
    email: 'Stalker@mail.com',
  });
  
  Yarik.getInfo();

  // Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
  // В prototype функції-конструктора добав метод getInfo(),
  // який виводить в консоль значення полів login і email об'єкта який його викликав.