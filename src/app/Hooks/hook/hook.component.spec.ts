import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookComponent } from './hook.component';

describe('HookComponent', () => {
  let component: HookComponent;
  let fixture: ComponentFixture<HookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HookComponent]
    });
    fixture = TestBed.createComponent(HookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
