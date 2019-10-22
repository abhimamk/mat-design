import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductresolverComponent } from './productresolver.component';

describe('ProductresolverComponent', () => {
  let component: ProductresolverComponent;
  let fixture: ComponentFixture<ProductresolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductresolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductresolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
