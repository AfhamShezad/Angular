import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngcmpComponent } from './angcmp.component';

describe('AngcmpComponent', () => {
  let component: AngcmpComponent;
  let fixture: ComponentFixture<AngcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngcmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
