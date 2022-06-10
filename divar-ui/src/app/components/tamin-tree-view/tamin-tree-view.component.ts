import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {TreeHelper} from '../../helpers/tree-helper';


@Component({
  selector: 'app-tamin-tree-view',
  templateUrl: './tamin-tree-view.component.html',
  styleUrls: ['./tamin-tree-view.component.scss']
})
export class TaminTreeViewComponent implements OnInit {
  public selectedTreeNode: TaminTreeNodeModel | null;

  @Output() selectionChanged = new EventEmitter<any>();
  @Output() forwardSelection = true;
  @Output() backwardSelection = true;
  @Output() collapsingChanged = new EventEmitter<any>();
  @Input() dataSource: TaminTreeNodeModel;
  @Input() height = '400px';
  @ViewChild('treeElement') treeElement: ElementRef;
  // treeControl = new NestedTreeControl<TaminTreeNodeModel>(node => node.children);
  // hasChild = (_: number, node: TaminTreeNodeModel) => !!node.children && node.children.length > 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  public selectNode(node: TaminTreeNodeModel): void {
    this.selectedTreeNode = node;
  }


  ngOnInit(): void {
  }

  /*
    highlight(text) {
      const cleanString = text.replace(/[\\|&;$%@"<>()+,]/g, '');
      this.treeElement.nativeElement.innerHTML = this.treeElement.nativeElement.innerHTML.replace(
        new RegExp('<mark>', 'g'), ''
      );
      this.treeElement.nativeElement.innerHTML = this.treeElement.nativeElement.innerHTML.replace(
        new RegExp('</mark>', 'g'), ''
      );
      this.treeElement.nativeElement.innerHTML = this.treeElement.nativeElement.innerHTML.replace(
        new RegExp(cleanString, 'g'),
        '<mark>' + cleanString + '</mark>'
      );
    }
  */

  onSelection(node: TaminTreeNodeModel) {
    node.selected = !node.selected;
    if (this.forwardSelection) {
      TreeHelper.forwardSelect(node);
    }
    if (this.backwardSelection) {
      TreeHelper.backwardSelect(node, this.dataSource);
    }
  }

}

export class TaminTreeNodeModel {
  id: string;
  name: string;
  visible: boolean;
  selected: boolean;
  parentId: string;
  expanded: boolean;
  selectable: boolean;
  children?: TaminTreeNodeModel[];
  tag: any;
  data: any;
}
