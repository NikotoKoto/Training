class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    addFirst(value){
        let current = this.head;
        if(!current){
            this.head = new Node()
        }
    }


    addLast(){

    }

    add(){

    }
}

