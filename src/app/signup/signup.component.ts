import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: any
  lastName: any
  email: any
  users: any
  errors = []
  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
    this.showUserList()
  }

  saveRegistration() {
    this.errors = []
    if (this.firstName == '' || this.firstName == undefined) {
      this.errors.push('Please enter the First Name')
    }
    if (this.lastName == '' || this.lastName == undefined) {
      this.errors.push('Please enter the Last Name')
    }
    if (this.email == '' || this.email == undefined) {
      this.errors.push('Please enter the email Name')
    }
    if (this.errors.length) {
      return
    }

    let users = this.storage.retrieve('registerUsers')
    if (users == undefined) {
      let users = [
        {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        }
      ]
      this.storage.store('registerUsers', users)
      console.log('INSIDE IF')
      this.clearForm()
      this.showUserList()
    } else {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
      let users: any = this.storage.retrieve('registerUsers')
      users.push(user)
      console.log(users)
      this.storage.store('registerUsers', users)
      this.showUserList()
      this.clearForm()
    }
  }

  showUserList() {
    console.log('INSIDE THE SHOW LIST')
    this.users = this.storage.retrieve('registerUsers')
  }
  clearForm() {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
  }
}
