import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTabComponent } from './claim-tab.component';

describe('ClaimTabComponent', () => {
  let component: ClaimTabComponent;
  let fixture: ComponentFixture<ClaimTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
