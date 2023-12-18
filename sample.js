// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size).fill(null).map(() => []);
//     }

//     hashKey(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.size;
//     }

//     set(key, value) {
//         const index = this.hashKey(key);
//         const bucket = this.table[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i].key === key) {
//                 bucket[i].value = value;
//                 return;
//             }
//         }

//         bucket.push({ key, value });
//     }

//     get(key) {
//         const index = this.hashKey(key);
//         const bucket = this.table[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i].key === key) {
//                 return bucket[i].value;
//             }
//         }

//         return undefined; 
//     }

//     remove(key) {
//         const index = this.hashKey(key);
//         const bucket = this.table[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i].key === key) {
//                 bucket.splice(i, 1);
//                 return;
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.size; i++) {
//             if (this.table[i].length > 0) {
//                 console.log(`Bucket ${i}:`, this.table[i]);
//             }
//         }
//     }
// }

// const myHashTable = new HashTable(100);

// myHashTable.set("name", "John");
// myHashTable.set("age", 25);
// myHashTable.set("city", "New York");

// console.log(myHashTable.get("name")); 

// myHashTable.remove("age");

// myHashTable.display();


class Hashtbale {
    constructor(size){
        this.table = new Array(size).fill(null).map(()=>[])
        this.size = size
    }

    hashkey(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total+= key.charCodeAt(i)  
        }
        return total%this.size
    }

    set(key,value){
        const index = this.hashkey(key)

        const bucket = this.table[index]

        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i].key === key){
                bucket[i].value = value
                return
            }
        }
        bucket.push({key,value})
    }

    get(key){
        const index = this.hashkey(key)
        const bucket = this.table[index]  
        
        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i].key === key ){
                return bucket[i].value
            }   
        }
    }

    remove(key){
        const index = this.hashkey(key)
        const bucket = this.table[index]  
        
        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i].key === key ){
                bucket.splice(i,1)
                return 
            }   
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i].length > 0){
                console.log(i,this.table[i]);
            }    
        }
    }
}


const hashtable = new Hashtbale(100)

hashtable.set('name','Nikhil')
hashtable.set('eman','Nithin')
hashtable.set('age',23)
hashtable.set('place','Kollam')
console.log('get',hashtable.get('place'));
hashtable.remove('place')


hashtable.display()
