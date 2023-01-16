import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }



  staffform: FormGroup;
  isEditClicked = false;

  constructor(private formBuilder:FormBuilder) {

    this.staffform = this.formBuilder.group({
      name: [' '],
      age: [' '],
      mobile: [' '],
      designation: [' ']
    }) 
  }


  openStaffModal(Stafftemplate: TemplateRef<any>,  index:any,) {

    if(index !='null'){
      this.staffName = this.StaffOfCar[index].name;
      this.staffAge = this.StaffOfCar[index].age;
      this.staffMobile = this.StaffOfCar[index].mobile;
      this.staffDesignation = this.StaffOfCar[index].designation;
  
      this.selectedStaffIndex = index;
    }
    
  
    // this.modalRef = this.modalService.show(Stafftemplate);
  }
  
  StaffOfCar:any = [
    {
      name: "Mr. DOM",
      age: "23",
      mobile: "111",
      designation:"Receptionist",
    },
  
    {
      name: "Mr. PAUL",
      age: "27",
      mobile: "222",
      designation: "Accountant",
    },
  ]
  
  staffName = "";
  staffAge = "";
  staffMobile = "";
  staffDesignation = "";
  
  
  selectedStaffIndex = "";
  
  submitStafft(){
    // let Staff = {
    //   name: this.staffName,
    //   age: this.staffAge,
    //   mobile: this.staffMobile,
    //   designation: this.staffDesignation,
    // }
  
    // console.log('this.StaffOfCar',this.StaffOfCar)
    // this.StaffOfCar.push(Staff);
    // this.staffName = "";
    // this.staffAge = "";
    // this.staffMobile = "";
    // this.staffDesignation = "";
  
    // this.modalRef?.hide();



    console.log("You have entered",this.staffform.value)
    this.StaffOfCar.push(this.staffform.value);

    this.staffform.reset();
  }
  
  editStaff(i:any){
    // this.StaffOfCar[this.selectedStaffIndex].name = this.staffName;
    // this.StaffOfCar[this.selectedStaffIndex].age = this.staffAge;
    // this.StaffOfCar[this.selectedStaffIndex].mobile = this.staffMobile;
    // this.StaffOfCar[this.selectedStaffIndex].designation = this.staffDesignation;
  
    // this.staffName = "";
    // this.staffAge = "";
    // this.staffMobile = "";
    // this.staffDesignation = ""; 
   
    // this.modalRef?.hide();


    this.isEditClicked = true;

    this.selectedStaffIndex = i;

    this.staffform.patchValue({
      name: this.StaffOfCar[i].name,
      age: this.StaffOfCar[i].age,
      mobile: this.StaffOfCar[i].mobile,
      designation: this.StaffOfCar[i].designation
    })
  }

  update(){
    console.log('this.carsform.value',this.staffform.value)

    this.StaffOfCar[this.selectedStaffIndex].name = this.staffform.value.name;
    this.StaffOfCar[this.selectedStaffIndex].age = this.staffform.value.age;
    this.StaffOfCar[this.selectedStaffIndex].mobile = this.staffform.value.mobile;
    this.StaffOfCar[this.selectedStaffIndex].designation = this.staffform.value.designation;

    this.isEditClicked = false;
    this.staffform.reset();
  }
  
  DeleteStaff(i:any){
    this.StaffOfCar.splice(i,1);
  }
  
  staffclose(){
    this.staffName = "";
    this.staffAge = "";
    this.staffMobile = "";
    this.staffDesignation = "";
  
    // this.modalRef?.hide();
  }
  
  resetStaff(){
    // this.staffName = "";
    // this.staffAge = "";
    // this.staffMobile = "";
    // this.staffDesignation = "";

    this.staffform.reset();
  }
  
  
  
  
  

}
