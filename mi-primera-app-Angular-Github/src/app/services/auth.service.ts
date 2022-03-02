import { ParseSourceFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://efecear.github.io/Angular/api';
  token;

  constructor(private http: HttpClient, private router: Router) { }

  login(email:string, password:string){
    this.http.post(this.uri + '/authenticate', {email:email, password: password})
    .subrscribe((resp: any) => {
      //redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      // Guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    })
  };

// para cerrar sesión eliminamos el token del localStorage
logout() {
  localStorage.removeItem('token');
}

// Un servicio para verificar si existe la sesión
public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}



}
