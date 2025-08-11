import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberMich } from './ueber-mich';

describe('UeberMich', () => {
  let component: UeberMich;
  let fixture: ComponentFixture<UeberMich>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UeberMich]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeberMich);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
