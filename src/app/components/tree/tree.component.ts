import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '../../tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() tree: Tree;
  constructor() { }

  ngOnInit() {
    
  }
}
