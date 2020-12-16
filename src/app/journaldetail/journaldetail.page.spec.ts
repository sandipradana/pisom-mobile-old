import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournaldetailPage } from './journaldetail.page';

describe('JournaldetailPage', () => {
  let component: JournaldetailPage;
  let fixture: ComponentFixture<JournaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournaldetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
