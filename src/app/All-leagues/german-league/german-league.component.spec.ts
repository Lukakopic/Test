import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanLeagueComponent } from './german-league.component';

describe('GermanLeagueComponent', () => {
  let component: GermanLeagueComponent;
  let fixture: ComponentFixture<GermanLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
