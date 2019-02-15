import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroatianLeagueComponent } from './croatian-league.component';

describe('CroatianLeagueComponent', () => {
  let component: CroatianLeagueComponent;
  let fixture: ComponentFixture<CroatianLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroatianLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroatianLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
