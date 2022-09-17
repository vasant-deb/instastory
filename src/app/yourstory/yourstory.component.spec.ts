import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourstoryComponent } from './yourstory.component';

describe('YourstoryComponent', () => {
  let component: YourstoryComponent;
  let fixture: ComponentFixture<YourstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
