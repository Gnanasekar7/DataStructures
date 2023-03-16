class Stack{
    constructor(){
        this.items=[]
    }

    add_last(element){
        this.items.push(element)
    }

    remove_last(){
         return this.items.pop()
    }

    size(){
        return this.items.length
    }

    last_element(){
        return  this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    
    print(){
        console.log(this.items.toString())
    }
}

let operation =new Stack()

console.log(operation.isEmpty())

operation.add_last(20)
operation.add_last(10)
operation.add_last(30)

operation.print()

console.log(operation.size())

console.log(operation.remove_last())

console.log(operation.last_element())


