import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundLogoutComponent } from './not-found-logout.component';

describe('NotFoundLogoutComponent', () => {
  let component: NotFoundLogoutComponent;
  let fixture: ComponentFixture<NotFoundLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
