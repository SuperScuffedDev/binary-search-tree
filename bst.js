class Node {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class Tree {
    constructor(arr) {
        const dedupeArr = arr.filter((item, index) => {
            return item !== arr[index - 1]
        })
        this.root = this.#buildTree(dedupeArr, 0, dedupeArr.length - 1);
    }
    
    #buildTree(arr, start, end) {
        if (start > end) return null;
        
        const arrMid = start + Math.floor((end - start) / 2);
        const root = new Node(arr[arrMid]);

        root.leftNode = this.#buildTree(arr, start, arrMid - 1);
        root.rightNode = this.#buildTree(arr, arrMid + 1, end);

        return root;
    }

    includes(value) {
        const topNode = this.root;
        
        function checkValue(node) {
            console.log(node.data)
            if (node.data === value)
                return true;
            else {
                if (node.leftNode !== null)
                    if (checkValue(node.leftNode)) return true;

                if (node.rightNode !== null)
                    if (checkValue(node.rightNode)) return true;
            };
            return false;
        };

        return checkValue(topNode);
    }

    insert(value) {
        const topRoot = this.root;

        function compareValues(node) {
            if (node.data === value) return;

            if (value < node.data) {
                if (node.leftNode !== null)
                    compareValues(node.leftNode);
                else {
                    const newNode = new Node(value);
                    node.leftNode = newNode;
                }
            } else if (value > node.data) {
                if (node.rightNode !== null)
                    compareValues(node.rightNode);
                else {
                    const newNode = new Node(value);
                    node.rightNode = newNode;
                }
            }
        }

        compareValues(topRoot);
    }

    deleteItem(value) {}

    levelOrderForEach(callback) {}

    preOrderForEach(callback) {}

    inOrderForEach(callback) {}

    postOrderForEach(callback) {}

    height(value) {}

    depth() {}

    isBalanced() {}

    rebalance() {}
}

module.exports = Tree;