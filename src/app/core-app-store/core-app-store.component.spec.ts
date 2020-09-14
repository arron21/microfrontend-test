import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppStoreComponent } from './core-app-store.component';

describe('CoreAppStoreComponent', () => {
  let component: CoreAppStoreComponent;
  let fixture: ComponentFixture<CoreAppStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAppStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
