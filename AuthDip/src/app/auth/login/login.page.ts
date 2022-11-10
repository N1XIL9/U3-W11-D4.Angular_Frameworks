import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.form.value).subscribe(
      data => {
        console.log(data)
        this.error = undefined;
        localStorage.setItem('userLogin', JSON.stringify(data));
        //this.router.navigate(['/login'])
      },
      err => {
        console.log(err)
        this.error = err.error
      });
  }

}
