import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfBestComponent } from './best-of-best.component';

describe('BestOfBestComponent', () => {
  let component: BestOfBestComponent;
  let fixture: ComponentFixture<BestOfBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOfBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
