import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test check', () => {
    expect(20).toEqual(20);
  });

  it('Проверка тестового свойства параграфа Hello', () => {
    let pElem = fixture.nativeElement.querySelector('p');
    expect(pElem.textContent).toEqual('Hello');
  });

  it('Проверка счетчика', ()=> {
    let btnElem = fixture.nativeElement.querySelector('button');

    btnElem.click();
    expect(component.count).toEqual(1);
  }

)
});
