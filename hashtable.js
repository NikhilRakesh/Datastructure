class Hashtable {
    constructor(size){
        this.table = new Array(size).fill(null).map(() => []);
        this.size = size
    }

    hashkey(key){
        let total= 0
        for (let i = 0; i < key.length; i++) {
             total += key.charCodeAt(i);
            
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hashkey(key)
        // this.table[index]= value;
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
            if(bucket[i].key === key){
                return bucket[i].value
            }
        }
        return null;
    }

    remove(key){
        const index  = this.hashkey(key)
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
            if (this.table[i].length > 0) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new Hashtable(100)

table.set('name','Nikhil')
table.set('age',23)
table.set('eman','Nithin')
table.remove('age')
console.log(table.get('age'));

table.display()