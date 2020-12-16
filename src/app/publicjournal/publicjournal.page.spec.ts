import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicjournalPage } from './publicjournal.page';

describe('PublicjournalPage', () => {
  let component: PublicjournalPage;
  let fixture: ComponentFixture<PublicjournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicjournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicjournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
