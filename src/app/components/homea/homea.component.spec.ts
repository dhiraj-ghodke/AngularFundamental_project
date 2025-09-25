import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaComponent } from './homea.component';

describe('HomeaComponent', () => {
  let component: HomeaComponent;
  let fixture: ComponentFixture<HomeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeaComponent]
    });
    fixture = TestBed.createComponent(HomeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
