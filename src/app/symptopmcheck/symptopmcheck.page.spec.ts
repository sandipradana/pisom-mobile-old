import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptopmcheckPage } from './symptopmcheck.page';

describe('SymptopmcheckPage', () => {
  let component: SymptopmcheckPage;
  let fixture: ComponentFixture<SymptopmcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptopmcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptopmcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
