import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewPage } from './new.page';

describe('NewPage', () => {
  let component: NewPage;
  let fixture: ComponentFixture<NewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
