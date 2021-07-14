import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspisodeComponent } from './list-espisode.component';

describe('ListEspisodeComponent', () => {
  let component: ListEspisodeComponent;
  let fixture: ComponentFixture<ListEspisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEspisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEspisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
