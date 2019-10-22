import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataproductsComponent } from './dataproducts.component';

describe('DataproductsComponent', () => {
  let component: DataproductsComponent;
  let fixture: ComponentFixture<DataproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
