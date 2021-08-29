import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListingComponent } from './players-listing.component';

describe('PlayersListingComponent', () => {
  let component: PlayersListingComponent;
  let fixture: ComponentFixture<PlayersListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
