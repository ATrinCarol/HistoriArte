import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://bloghistoriarte.herokuapp.com/usuarios/cadastrar', usuario)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://bloghistoriarte.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://bloghistoriarte.herokuapp.com/usuarios/${id}`)
  }

  recadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://bloghistoriarte.herokuapp.com/usuarios/atualizar', usuario)
  }

  logado() {

    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

  adm(){
    let ok: boolean = false

    if (environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }
  
}
