import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any
  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
    let users = this.storage.retrieve('users')
    console.log(users)
    if (users == undefined) {
      let users = [
        { email: 'govindnarute@gmail.com', password: 'qwerty' },
        { email: 'govindnarute123@gmail.com', password: 'qwerty' }
      ]
      this.storage.store('users', users)
      this.users = this.storage.retrieve('users')
    } else {
      this.users = this.storage.retrieve('users')
    }
  }
}
