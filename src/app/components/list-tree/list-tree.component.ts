import { Component, OnInit } from '@angular/core';

import { Tree } from '../../tree';
import { TreeService } from '../../../services/tree.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-list-tree',
  templateUrl: './list-tree.component.html',
  styleUrls: ['./list-tree.component.css']
})
export class ListTreeComponent implements OnInit {

  selectedTree: Tree;

  trees: Tree[];

  constructor(private treeService: TreeService, private messageService: MessageService) { }

  ngOnInit() {
    this.getTrees();
  }

  onSelect(tree: Tree): void {
    this.selectedTree = tree;
    this.messageService.add(`ListTreeComponent: Selected tree id=${tree._id}`);
  }

  getTrees(): void {
    this.treeService.getAll()
        .subscribe(trees => this.trees = trees);
  }
}
