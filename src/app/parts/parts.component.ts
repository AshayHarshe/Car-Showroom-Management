import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  partsform: FormGroup;
  isEditClicked = false;

  constructor(private formBuilder:FormBuilder) {

    this.partsform = this.formBuilder.group({
      name: [' '],
      Part: [' '],
      Price: [' ']
    })  
  }

  
openPartsModal(Partstemplate: TemplateRef<any>,  index:any,) {

  if(index !='null'){
    this.carname = this.PartsOfCar[index].name;
    this.carPart = this.PartsOfCar[index].Part;
    this.carPrice = this.PartsOfCar[index].Price;

    this.selectedPartIndex = index;
  }


  // this.modalRef = this.modalService.show(Partstemplate);
}



PartsOfCar:any = [
  {
    name: "Honda City",
    Part: "Battery",
    Price: "7000",
  },

  {
    name: "Amaze",
    Part: "Radiator",
    Price: "3000",
  },
]

carname = "";
carPart = "";
carPrice = "";


selectedPartIndex = "";



submitPart(){
  // let Part = {
  //   name: this.carname,
  //   Part: this.carPart,
  //   Price: this.carPrice,
  // }

  // console.log('this.PartsOfCar',this.PartsOfCar)
  // this.PartsOfCar.push(Part);
  // this.carname = "";
  // this.carPart = "";
  // this.carPrice = "";

  // this.modalRef?.hide();


  console.log("You have entered",this.partsform.value)
  this.PartsOfCar.push(this.partsform.value);

  this.partsform.reset();
}

editPart(i:any){
  // this.PartsOfCar[this.selectedPartIndex].name = this.carname;
  // this.PartsOfCar[this.selectedPartIndex].Part = this.carPart;
  // this.PartsOfCar[this.selectedPartIndex].Price = this.carPrice;

  // this.carname = "";
  // this.carPart = "";
  // this.carPrice = "";


  // this.modalRef?.hide();


  this.isEditClicked = true;

  this.selectedPartIndex = i;

  this.partsform.patchValue({
    name: this.PartsOfCar[i].name,
    Part: this.PartsOfCar[i].Part,
    Price: this.PartsOfCar[i].Price
  })
}

update(){
  console.log('this.partsform.value',this.partsform.value)

  this.PartsOfCar[this.selectedPartIndex].name = this.partsform.value.name;
  this.PartsOfCar[this.selectedPartIndex].Part = this.partsform.value.Part;
  this.PartsOfCar[this.selectedPartIndex].Price = this.partsform.value.Price;

  this.isEditClicked = false;
  this.partsform.reset();
}

DeletePart(i:any){
  this.PartsOfCar.splice(i,1);
}

partclose(){
  this.carname = "";
  this.carPart = "";
  this.carPrice = "";

  // this.modalRef?.hide();
}

resePart(){
  // this.carname = "";
  // this.carPart = "";
  // this.carPrice = "";

  this.partsform.reset();
}





}
