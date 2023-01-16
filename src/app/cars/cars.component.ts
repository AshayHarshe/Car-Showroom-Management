import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }




  carsform: FormGroup;
  isEditClicked = false;

  constructor(private formBuilder:FormBuilder) {

    this.carsform = this.formBuilder.group({
      Name: [' '],
      Varient: [' '],
      Fuel: [' ']
    })  
  }




  openModalWithComponentCarDetails(templateCarDetails: TemplateRef<any>,  index:any,) {

    if(index !='null'){
      this.CarName = this.DetailsOfCar[index].Name;
      this.CarVarient = this.DetailsOfCar[index].Varient;
      this.CarFuel = this.DetailsOfCar[index].Fuel;
  
      this.selectedCarIndex = index;
    }
  
    // this.modalRef = this.modalService.show(templateCarDetails);
  }
  
  
  
  
  
  DetailsOfCar:any = [
    {
      Name: "Accord",
      Varient: "Top Varient",
      Fuel: "Petrol",
    },
  
    {
      Name: "Jazz",
      Varient: "Base Varient",
      Fuel: "Diesel",
    },
  ]
  
  CarName = "";
  CarVarient = "";
  CarFuel = "";
  
  selectedCarIndex = "";
  
  
  submitCars(){
    // let Cars = {
    //   Name: this.CarName,
    //   Varient: this.CarVarient,
    //   Fuel: this.CarFuel,
    // }
  
    // console.log('this.DetailsOfCar',this.DetailsOfCar)
    // this.DetailsOfCar.push(Cars);
    
    // this.CarName = "";
    // this.CarVarient = "";
    // this.CarFuel = "";
  
    // this.modalRef?.hide();

    console.log("You have entered",this.carsform.value)
    this.DetailsOfCar.push(this.carsform.value);

    this.carsform.reset();
  }
  
  editCarDetails(i:any){
    // this.DetailsOfCar[this.selectedCarIndex].Name = this.CarName;
    // this.DetailsOfCar[this.selectedCarIndex].Varient = this.CarVarient;
    // this.DetailsOfCar[this.selectedCarIndex].Fuel = this.CarFuel;
  
    // this.CarName = "";
    // this.CarVarient = "";
    // this.CarFuel = "";
  
    // this.modalRef?.hide();

    this.isEditClicked = true;

    this.selectedCarIndex = i;

    this.carsform.patchValue({
      Name: this.DetailsOfCar[i].Name,
      Varient: this.DetailsOfCar[i].Varient,
      Fuel: this.DetailsOfCar[i].Fuel
    })

  }

  update(){
    console.log('this.carsform.value',this.carsform.value)

    this.DetailsOfCar[this.selectedCarIndex].Name = this.carsform.value.Name;
    this.DetailsOfCar[this.selectedCarIndex].Varient = this.carsform.value.Varient;
    this.DetailsOfCar[this.selectedCarIndex].Fuel = this.carsform.value.Fuel;

    this.isEditClicked = false;
    this.carsform.reset();
  }
  
  DeleteCar(i:any){
    this.DetailsOfCar.splice(i,1);
  }
  
  Carclose(){
    this.CarName = "";
    this.CarVarient = "";
    this.CarFuel = "";
  
    // this.modalRef?.hide();
  }
  
  resetCar(){
    // this.CarName = "";
    // this.CarVarient = "";
    // this.CarFuel = "";

    this.carsform.reset();
  }
  

}
