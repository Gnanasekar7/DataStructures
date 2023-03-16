class queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }

    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }

    dequeue(){
        let item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear-this.front===0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear-this.front
    }

    print(){
        console.log(this.items)
    }

}

let instance=new queue()

console.log(instance.isEmpty())

instance.enqueue(10)
instance.enqueue(20)
instance.enqueue(30)

console.log(instance.size())

instance.print()

instance.dequeue()
console.log(instance.peek())

instance.print()