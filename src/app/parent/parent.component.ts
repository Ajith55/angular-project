import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {

  parentName : string = 'Ajith';

  constructor() {
    console.log("parent const executed");
   }

  ngOnInit(): void {
    console.log('parent ngonit executed');
  }

  ngOnDestroy() : void{
    console.log('parent ngondestroy executed');

  }

}
