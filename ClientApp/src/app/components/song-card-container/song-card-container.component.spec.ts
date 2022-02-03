import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardContainerComponent } from './song-card-container.component';

describe('SongCardContainerComponent', () => {
  let component: SongCardContainerComponent;
  let fixture: ComponentFixture<SongCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
