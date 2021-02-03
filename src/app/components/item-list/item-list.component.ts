// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';

// @Component({
//   selector: 'app-item-list',
//   templateUrl: './item-list.component.html',
//   styleUrls: ['./item-list.component.scss']
// })
// export class ItemListComponent implements OnInit {
//   @Input() targetTree;

//   constructor(private route: ActivatedRoute) { }


// ngOnInit() {
//   this.heroes$ = this.route.paramMap.pipe(
//     switchMap(params => {
//       this.selectedId = Number(params.get('id'));
//       return this.service.getHeroes();
//     })
//   );
// }
// }
