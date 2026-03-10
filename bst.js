class Node {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = this.data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class Tree {
    constructor(arr) {
        this.root = this.#buildTree(arr, 0, arr.length - 1);
    }

    #buildTree(arr, start, end) {
        const arrMid = start + Math.floor((end - start) / 2);
        const root = new node(arr[arrMid]);

        root.leftNode = this.#buildTree(arr.slice(start, arrMid - 1), start, arrMid - 1);
        root.rightNode = this.#buildTree(arr.slice(arrMid + 1, end), arrMid + 1, end);

        return root;
    }


}

module.exports = Tree;