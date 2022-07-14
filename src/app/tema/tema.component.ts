import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listTema: Tema[]
  
  constructor(
    private router: Router,
    private temaService: TemaService, 
    private alertas: AlertasService,
  ) { }

  ngOnInit() { 
    if(environment.token == ''){
      alert ('Sua sessão expirou. Faça o login novamente!')
       this.router.navigate(['/entrar'])
     }

     if(environment.tipo != 'adm'){
      this.alertas.showAlertDanger('Você precisa ser adm para acessar essa sessão do site')
      this.router.navigate(['/inicio'])
    }

     this.findAllTema()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('O tema foi cadastrado com sucesso')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listTema = resp
    })
  }

} 
