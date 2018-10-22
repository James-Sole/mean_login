export class User {
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.username = "";
    this.password = "";
  }
}
