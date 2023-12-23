class Trienode {
    constructor() {
        this.child = {}
        this.end = false
    }
}


class Trie {
    constructor() {
        this.root = new Trienode()
    }

    insert(word) {
        let node = this.root
        for (const char of word) {
            if (!node.child[char]) {
                node.child[char] = new Trienode()
            }
            node = node.child[char]
        }
        node.end = true
    }

    search(word) {
        let node = this.root
        for (const char of word) {
            if (!node.child[char]) {
                console.log(`not found ${word}`);
                return
            }
            node = node.child[char]
        }
        console.log(` found ${word}`);
    }

    startwith(prefix) {
        let node = this.root
        for (const char of prefix) {
            if (!node.child[char]) {
                console.log(`not found ${prefix}`);
                return
            }
            node = node.child[char]
        }
        this.print(node, prefix)
    }

    print(node, currentWord) {
        if (node.end) {
            console.log(currentWord);
        }

        for (const char in node.child) {
            this.print(node.child[char], currentWord + char)
        }
    }
}


const trie = new Trie()

trie.insert('nikhil')
trie.insert('name')
trie.insert('nazerne')
trie.insert('nik')
trie.search('n')
trie.startwith('n')