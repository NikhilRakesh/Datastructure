class TreiNode {
    constructor() {
        this.child = {}
        this.end = false
    }
}

class trie {
    constructor() {
        this.root = new TreiNode()
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.child[char]) {
                node.child[char] = new TreiNode()
            }
            node = node.child[char]
        }
        node.end = true
    }

    search(word) {
        let node = this.root

        for (const char of word) {
            if (!node.child[char]) {
                console.log(`Word "${word}" not found.`);
                return;
            }
            node = node.child[char]
        }
        console.log(`Word "${word}" found.`);
    }

    startwith(prefix) {
        let node = this.root

        for (const char of prefix) {
            if (!node.child[char]) {
                console.log(`Word "${prefix}" not found.`);
                return;
            }
            node = node.child[char]
        }
        this.printWords(node, prefix);
    }

    printWords(node, currentWord) {
        if (node.end) {
            console.log(currentWord);
        }

        for (const char in node.child) {
            this.printWords(node.child[char], currentWord + char)
        }
    }
}

const Trie = new trie()

Trie.insert('Nikhil')
Trie.insert('Nikhal')
Trie.insert('Nikhi')
Trie.search('Nik')
Trie.startwith('Nik') 