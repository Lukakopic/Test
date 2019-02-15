import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishLeagueComponent } from './spanish-league.component';

describe('SpanishLeagueComponent', () => {
  let component: SpanishLeagueComponent;
  let fixture: ComponentFixture<SpanishLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
