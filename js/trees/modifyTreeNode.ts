const iptNodes = ['A', 'B', 'C', 'D', 'E', null, null, "G", "H"];

class TreeNode {
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: string) {
    this.val = val;
  }
}

// root
/* dfs,
  把一个节点的右兄弟节点变成右孩子
  parent.left = parent.right,
  parent.right = null
 */
const root = new TreeNode(iptNodes[0]!);
const parentNodes: (TreeNode | null)[] = [root];
// 建立一棵树
iptNodes.slice(1).forEach(node => {
      const newNode = node === null ? null : new TreeNode(node)
      let pNode = parentNodes[0];
      if (pNode!.left === undefined) {
        pNode!.left = newNode;
      } else if (pNode!.right == undefined) {
        pNode!.right = newNode;
        parentNodes.shift();
      }
      if (newNode !== null) parentNodes.push(newNode);
})

// 深度遍历树，left，parent，right
let curNode = root;
function dfs(curNode: TreeNode) {
  if (!curNode || !curNode.left || curNode.left.left === null) return null;
  dfs(curNode.left)

  curNode.left.right = curNode.right;
  curNode.right = null;
}
dfs(root)

const q: (TreeNode | null) [] = [];
q.push(root);
const res: (string | null) [] = [];
res.push(root === null ? null : root.val);

while (q.length > 0) {
  const pNode =q.shift();
  if (pNode?.left) {
    res.push(pNode.left === null ? null : pNode.left.val)
    q.push(pNode?.left)
  }
  if (pNode?.right) {
    res.push(pNode.right === null ? null : pNode.right.val)
    q.push(pNode?.right)
  }
}
console.log(res)