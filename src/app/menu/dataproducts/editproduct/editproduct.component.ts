import { GetservService } from '../../../services/getserv.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Inject } from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  @ViewChild('f',{static:false}) form:NgForm;
  id: number;
  name: string = "";
  desc: string = "";
  price: number;
  qty: number;
  mfg: string = "";
  img: string = "";
  taskreactive: FormGroup;
  constructor(
    private _act: ActivatedRoute,
    private _data: GetservService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {}

  ngOnInit() {
    console.log(this.data.dataKey);
    console.log("Id"+ this.data);
 //   this.id = this._act.snapshot.params["pro_id"];

    this._data.getProductById(this.data.dataKey).subscribe(
      (data: Product[]) => {
        console.log(data);
        this.name=data[0].pro_name;
        this.price=data[0].pro_price;
        this.desc=data[0].pro_desc;
        this.mfg=data[0].pro_mfg;
        this.qty=data[0].pro_qty;
        this.img=data[0].pro_img;
    });
  }
  onEditProduct(f){
      this._data.editProduct(this.data.dataKey,f.value).subscribe(
        (data:any)=>{
          this.dialogRef.close(f.value);
          window.location.reload();
          alert('updated');
        }
      );
  }

}
