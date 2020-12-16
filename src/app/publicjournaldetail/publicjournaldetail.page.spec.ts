import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicjournaldetailPage } from './publicjournaldetail.page';

describe('PublicjournaldetailPage', () => {
  let component: PublicjournaldetailPage;
  let fixture: ComponentFixture<PublicjournaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicjournaldetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicjournaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
