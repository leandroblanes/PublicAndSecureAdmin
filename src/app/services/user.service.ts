import { User } from "./user";

export class UserService {
  authUser: User;

  isLogged(): boolean {
    return sessionStorage.getItem('access-token') !== null;
  }

  login(login: string, senha: string): Promise<User> {
    if (login == "admin" && senha == "123")
    {
      sessionStorage.setItem('access-token', '123');
      this.authUser = new User();
      this.authUser.nome = "Admin";
      this.authUser.login = login;
      this.authUser.senha = senha;

      return Promise.resolve(this.authUser);
    }

    return Promise.reject(null);
  }

  logout() : void {
    sessionStorage.removeItem('access-token');
    this.authUser = null;
  }
}