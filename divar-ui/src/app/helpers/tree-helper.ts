import {TaminTreeNodeModel} from '../components/tamin-tree-view/tamin-tree-view.component';

export type TreeTraverseCallback = (node: TaminTreeNodeModel) => void;

export class TreeHelper {

  static findById(id: string, source: TaminTreeNodeModel): TaminTreeNodeModel {
    if (source.id === id) {
      return source;
    }

    for (const child of source.children) {
      const res = this.findById(id, child);
      if (res) {
        return res;
      }
    }
  }

  private static findByName(name: string, source: TaminTreeNodeModel): TaminTreeNodeModel {
    const cleanString = name.replace(/[\\|&;$%@"<>()+,]/g, '');
    if (source.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
      return source;
    }

    for (const child of source.children) {
      const res = this.findByName(name, child);
      if (res) {
        return res;
      }
    }
  }

  static setVisibleByName(searchValue: string, source: TaminTreeNodeModel, exact: boolean = false): void {
    this.traverse(source, node => {
      node.tag = false;
    });

    source.children.forEach(child => {
      if (this.findByName(searchValue, child)) {
        this.traverse(child, node => {
          node.tag = true;
        });
      }
    });

    this.traverse(source, node => {
      node.visible = node.expanded = node.tag;
    });
    source.expanded = source.visible = true;
  }

  static setVisibleById(searchValue: string, source: TaminTreeNodeModel, exact: boolean = false): void {
    this.traverse(source, node => {
      node.tag = false;
    });

    source.children.forEach(child => {
      if (this.findById(searchValue, child)) {
        this.traverse(child, node => {
          node.tag = true;
        });
      }
    });

    this.traverse(source, node => {
      node.visible = node.expanded = node.tag;
    });
    source.expanded = source.visible = true;
  }







  static traverse(source: TaminTreeNodeModel, callback: TreeTraverseCallback): void {
    callback(source);
    for (const child of source.children) {
      this.traverse(child, callback);
    }
  }

  static addNode(parentId: string, node: TaminTreeNodeModel, source: TaminTreeNodeModel) {
    try {
      if (!parentId || parentId.length === 0) {
        throw new Error('parentId is not provided.');
      }
      const self = this.findById(node.id, source);
      if (self) {
        return;
      }
      const parent = this.findById(parentId, source);
      if (parent) {
        if (!parent.children) {
          parent.children = [];
        }
        node.parentId = parent.id;
        parent.children.push(node);
      } else {
        if (!source.children) {
          source.children = [];
        }
        node.parentId = source.id;
        source.children.push(node);
      }
    } catch (e) {
      console.error(e);
    }
  }

  static forwardSelect(node: TaminTreeNodeModel) {
    node.expanded = true;
    node.children.forEach(child => {
      child.selected = node.selected;
      child.expanded = true;
      this.forwardSelect(child);
    });
  }

  static backwardSelect(node: TaminTreeNodeModel, root: TaminTreeNodeModel) {
    if (!node.parentId) {
      return;
    }
    const parent = this.findById(node.parentId, root);
    let result = false;
    parent.children.forEach(child => {
      result = result && child.selected;
    });
    parent.selected = result;
    this.backwardSelect(parent, root);
  }
}
