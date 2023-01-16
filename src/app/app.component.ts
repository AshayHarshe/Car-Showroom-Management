import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CarShowroomCRUD';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}



  // * * * * * * * * * * * * * * * * * * * * * * * * login form * * * * * * * * * * * * * * * * * * * * * * * *

  loginmail = "";
  loginpassword = "";

  login(){
    console.log('email',this.loginmail)
    console.log('password',this.loginpassword)
  }

  resetlogin(){
    this.loginmail = "";
    this.loginpassword = "";
  }





// * * * * * * * * * * * * * * * * * * * * * * * *  Registration Modal * * * * * * * * * * * * * * * * * * * * * * * * 




 
  openModal(template: TemplateRef<any>,  index:any,) {


    this.modalRef = this.modalService.show(template);

}

clickfullname = "";
age = "";
mobNo = "";
emailID = "";
pAddress = "";
gender = "";

signup(){
  console.log('fullname',this.clickfullname);
  console.log('age',this.age);
  console.log('Mobile',this.mobNo);
  console.log('email',this.emailID);
  console.log('address',this.pAddress);
  console.log('gender',this.gender);

  this.modalRef?.hide();
}

closeregistration(){
  this.clickfullname = "";
  this.age = "";
  this.mobNo = "";
  this.emailID = "";
  this.pAddress = "";
  this.gender = "";

  this.modalRef?.hide();
}

resetregistration(){
  this.clickfullname = "";
  this.age = "";
  this.mobNo = "";
  this.emailID = "";
  this.pAddress = "";
  this.gender = "";
}


close(){
  
}



// * * * * * * * * * * * * * * * * * * * * * * * *   Cars Details Template Start  * * * * * * * * * * * * * * * * * * * * * * * * 


















// * * * * * * * * * * * * * * * * * * * * * * * *   P A R T S Template Start  * * * * * * * * * * * * * * * * * * * * * * * * 














// * * * * * * * * * * * * * * * * * * * * * * * * S T A F F Template Start  * * * * * * * * * * * * * * * * * * * * * * * * 













// * * * * * * * * * * * * * * * * * * * * * * * * B I L L Template Start  * * * * * * * * * * * * * * * * * * * * * * * * 









}
