import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTaskComponent } from './menu-task.component';

describe('MenuTaskComponent', () => {
  let component: MenuTaskComponent;
  let fixture: ComponentFixture<MenuTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
