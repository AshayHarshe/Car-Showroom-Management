import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }




  billform: FormGroup;
  isEditClicked = false;

  constructor(private formBuilder:FormBuilder) {

    this.billform = this.formBuilder.group({
      name: [' '],
      mobile: [' '],
      product: [' '],
      amount: [' '],
    })  
  }


  openBillModal(Billtemplate: TemplateRef<any>,  index:any,) {

    if(index !='null'){
      this.BillName = this.BillOfCar[index].name;
      this.BillMobile = this.BillOfCar[index].mobile;
      this.BillProduct = this.BillOfCar[index].product;
      this.BillAmount = this.BillOfCar[index].amount;
  
      this.selectedBillIndex = index;
    }
    
  
    // this.modalRef = this.modalService.show(Billtemplate);
  }
  
  BillOfCar:any = [
    {
      name: "Mr. OLIVER",
      mobile: "333",
      product: "Radiator",
      amount:"3000",
    },
  
    {
      name: "Mr. MONK",
      mobile: "444",
      product: "Susspension",
      amount: "2000",
    },
  ]
  
  BillName = "";
  BillMobile = "";
  BillProduct = "";
  BillAmount = "";
  
  
  selectedBillIndex = "";
  
  
  submitBill(){
    // let Bill = {
    //   name: this.BillName,
    //   mobile: this.BillMobile,
    //   product: this.BillProduct,
    //   amount: this.BillAmount,
    // }
  
    // console.log('this.BillOfCar',this.BillOfCar)
    // this.BillOfCar.push(Bill);
    // this.BillName = "";
    // this.BillMobile = "";
    // this.BillProduct = "";
    // this.BillAmount = "";
  
    // this.modalRef?.hide();


    console.log("You have entered",this.billform.value)
    this.BillOfCar.push(this.billform.value);

    this.billform.reset();
  }
  
  editBill(i:any){
    // this.BillOfCar[this.selectedBillIndex].name = this.BillName;
    // this.BillOfCar[this.selectedBillIndex].mobile = this.BillMobile;
    // this.BillOfCar[this.selectedBillIndex].product = this.BillProduct;
    // this.BillOfCar[this.selectedBillIndex].amount = this.BillAmount;
  
    // this.BillName = "";
    // this.BillMobile = "";
    // this.BillProduct = "";
    // this.BillAmount = "";
     
    // this.modalRef?.hide();


    this.isEditClicked = true;

    this.selectedBillIndex = i;

    this.billform.patchValue({
      name: this.BillOfCar[i].name,
      mobile: this.BillOfCar[i].mobile,
      product: this.BillOfCar[i].product,
      amount: this.BillOfCar[i].amount,
    })
  }

  update(){
    console.log('this.billform.value',this.billform.value)

    this.BillOfCar[this.selectedBillIndex].name = this.billform.value.name;
    this.BillOfCar[this.selectedBillIndex].mobile = this.billform.value.mobile;
    this.BillOfCar[this.selectedBillIndex].product = this.billform.value.product;
    this.BillOfCar[this.selectedBillIndex].amount = this.billform.value.amount;

    this.isEditClicked = false;
    this.billform.reset();
  }
  
  DeleteBill(i:any){
    this.BillOfCar.splice(i,1);
  }
  
  Billclose(){
    this.BillName = "";
    this.BillMobile = "";
    this.BillProduct = "";
    this.BillAmount = "";
  
    // this.modalRef?.hide();
  }
  
  resetBill(){
    // this.BillName = "";
    // this.BillMobile = "";
    // this.BillProduct = "";
    // this.BillAmount = "";

    this.billform.reset();
  }
  

}
