import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dot5.Container.Tag.TsComponent } from './dot5.container.tag.ts.component';

describe('Dot5.Container.Tag.TsComponent', () => {
  let component: Dot5.Container.Tag.TsComponent;
  let fixture: ComponentFixture<Dot5.Container.Tag.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dot5.Container.Tag.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dot5.Container.Tag.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
