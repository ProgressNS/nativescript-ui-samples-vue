import { PropertyConverter } from 'nativescript-ui-dataform';

export class BaseUser {
  public username: string = '';
  public password: string = '';
  public email: string = '';

  constructor() {
  }
}

export class RegisteringUser extends BaseUser {
  public password2: string = '';
  public age: number = 0;
  public agreeTerms: boolean = false;

  constructor() {
      super();
  }
}

export class AdvancedUser extends BaseUser {
  public phoneNumber: string = "";
  public id: number = 0;
  public pin: string = "";
  public agreeTerms: boolean = false;

  constructor() {
      super();
  }
}

export class PersonBase {
  public name: string;
  public age: number;
  public birthDate: string;

  constructor(name, age, birthDate) {
      this.name = name;
      this.age = age;
      this.birthDate = birthDate;
  }
}

export class Person {
  public name: string;
  public age: number;
  public email: string;
  public city: string;
  public street: string;
  public streetNumber: number;

  constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.city = city;
      this.street = street;
      this.streetNumber = streetNumber;
  }
}

export class PersonExtended {
  public name: string;
  public age: number;
  public email: string;
  public city: string;
  public street: string;
  public streetNumber: number;
  public country: string;
  public bankName: string;
  public bankId: string;
  public bankVerificationCode: number;
  public bankExpirationDate: string;

  constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number, country: string, bankName: string, bankId: string, bankVerificationCode: number, bankExpirationDate: string) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.city = city;
      this.street = street;
      this.streetNumber = streetNumber;
      this.country = country;
      this.bankName = bankName;
      this.bankId = bankId;
      this.bankVerificationCode = bankVerificationCode;
      this.bankExpirationDate = bankExpirationDate;
  }
}

export class TicketOrder {
  public movie: number = 123;
  public date: string = '2016-04-06';
  public time: string = '20:00';
  public type: string = '2D';
  public price: number = 9.50;
  public numberOfTickets: number = 2;
  public contactName: string = null;
  public contactPhone: string = null;
  public contactEmail: string = null;
  public agreeTerms: boolean = false;

  constructor() {
  }
}
// >> dataform-data-converter-vue
export class Movie {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
  }
}

export class MovieConverter implements PropertyConverter {
  constructor(private _movies: Array<Movie>) { }

  convertFrom(id: number) {
      return this._movies.filter((movie: Movie) => movie.id === id)[0].name;
  }

  convertTo(name: string) {
      return this._movies.filter((movie: Movie) => movie.name === name)[0].id;
  }
}

export const getMovies = () => {
  let movies = new Array<Movie>();
  movies.push(new Movie(123, 'Zootopia'));
  movies.push(new Movie(217, 'Captain America'));
  movies.push(new Movie(324, 'The Jungle Book'));
  return movies;
};
// << dataform-data-converter-vue
export class Booking {
  // Next line would raise an error because a core issue
  // See https://github.com/NativeScript/nativescript-ui-feedback/issues/921
  // public from: Array<String> = new Array('Belfast City, BHD', 'City of Derry, LDY');
  public from: string = '';
  public to: string = '';

  constructor() {
  }
}
