import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlljournalstatsPage } from './alljournalstats.page';

describe('AlljournalstatsPage', () => {
  let component: AlljournalstatsPage;
  let fixture: ComponentFixture<AlljournalstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljournalstatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlljournalstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
