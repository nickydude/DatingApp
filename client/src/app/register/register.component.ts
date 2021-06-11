import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountsService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountsService.register(this.model).subscribe(response => {
      this.cancel();
      this.router.navigateByUrl('/members')
    }, error => {
      this.toastr.error(error.error);
    });
  } 
  cancel() {
    console.log("cancel");
    this.cancelRegister.emit(false);
  } 


}
