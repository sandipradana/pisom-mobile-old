import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalstatsPage } from './journalstats.page';

describe('JournalstatsPage', () => {
  let component: JournalstatsPage;
  let fixture: ComponentFixture<JournalstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalstatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
