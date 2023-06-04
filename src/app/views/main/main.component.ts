import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {delay, observable, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit{

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>

  closeResult = '';
  private subscription: Subscription | null = null;
  private observable: Observable<void> = new Observable<void>((observer) => observer.next());
  isShowModal: boolean = true;

  constructor(private router: Router, private modalService: NgbModal) {

  }

  ngAfterViewInit() {
    this.subscription = this.observable.pipe(delay(2000)).subscribe(() => {
    this.modalService.open(this.popup,{})
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  getCatalog() {
    this.router.navigate(['/catalog'])
  }

  modalClose() {
   this.isShowModal = false
  }

}
