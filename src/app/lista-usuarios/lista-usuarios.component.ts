import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user/user.component';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  
  usersList: User[];
  //collection = {count: 10, data: []};

  constructor(public usuariosService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    //this.populateUsers();
    this.getUser();
  }

  getUser(){
    this.usuariosService.getUser().subscribe(
      userData => {
        this.usersList = userData;
        console.log(userData);
      },
      error => {
        this.usersList = [];
        console.log(error);
      }
    );
  }

  /*populateUsers() {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        email: 'email' + i + '@contactura.com',
        name: 'nome ' + i,
        senha: "**",
        admin: 'yes/no',

      });*/
      
      //this.usersList = this.collection.data;
      //const element = array[i];
     // console.log(this.usersList);
      
     
    //}
  //}

  
  editUsuarios(usuarios:User) {
    console.log('edit está funcionando!',usuarios);
    this.usuariosService.getUsersList(usuarios);
    this.router.navigate(['/cadastro-usuarios']);
  }

  deleteUser(usuarios: User){
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.deleteUser(usuarios.id).subscribe(
          data => {
            Swal.fire(
              String(data),
            );
            this.getUser();
          }
        );
      }
    });
  }

}