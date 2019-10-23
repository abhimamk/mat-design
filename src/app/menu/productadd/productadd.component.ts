import { GetservService } from './../../services/getserv.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  arr: Product[] = [];
  constructor(private _data:GetservService, private dialogRef: MatDialogRef<ProductaddComponent>,) { }

  ngOnInit() {}
  onSaveProduct(f) {
    this._data.addProduct(f.value).subscribe((data: any) => {
      this.dialogRef.close(f.value);
      console.log(data);
    });
  }
}
// this.dialogRef.close(this.form.value);
