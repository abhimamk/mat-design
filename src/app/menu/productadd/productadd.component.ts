import { Product } from './../../classes/product';
import { GetservService } from './../../services/getserv.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  arr: Product[] = [];
  y:Product[]=[];
  @Output() emit1=new EventEmitter();
  constructor(private _data:GetservService, private dialogRef: MatDialogRef<ProductaddComponent>,) { }

  ngOnInit() {}
  onSaveProduct(f) {
    this._data.addProduct(f.value).subscribe((data: any) => {
      this.dialogRef.close(f.value);
       window.location.reload();
      console.log(data);
      // this._data.getAllProducts().subscribe((x:any)=>{
      //   this.y=x;
      //   this.emit1.emit(this.y);
      //   console.log(this.y);
      // })
    });
  }
}
// this.dialogRef.close(this.form.value);
