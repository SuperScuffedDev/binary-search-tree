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

    includes(value) {}

    insert(value) {}

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