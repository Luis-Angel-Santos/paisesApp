import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.deBouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
    })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;
  @Input() placeholder: string = ''
 
  deBouncer: Subject<string> = new Subject();
  termino:string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.deBouncer.next(this.termino);
    
  }

}
