import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomstatsPage } from './symptomstats.page';

describe('SymptomstatsPage', () => {
  let component: SymptomstatsPage;
  let fixture: ComponentFixture<SymptomstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomstatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
