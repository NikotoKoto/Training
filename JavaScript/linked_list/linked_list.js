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
            this.head = new Node(value);
        }else{
            this.head = new Node(value, current);
        }
        this.size++
    }


    addLast(value){
        let current = this.head;
        if(!current){
            this.head = new Node(value)
        }else{
            while(current.next){
                current = current.next;
            }
            current.next = new Node(value)
        }
        this.size++
    }

    removeFirst(){
        let current = this.head;
        if(!current){
            return null;
        }else{
            this.head = current.next;
            this.size--;
            return current;
        }
    }


    removeLast (){
        let current = this.head;
        if(!current){
            return null;
        }else if(!current.next){
            this.head = null;
            this.size--;
            return current.value
        }else{
            while(current.next.next){
                current = current.next;
            }
            const nodeValue = current.next.value;
            current.next = null;
            this.size--;
            return nodeValue;
        }
    }

    add(value,position){
        if(position < 0 || position > this.size-1){
            throw new Error('wrong position');
        }else if ( position ===0 ){
            this.head = new Node(value,this.head);
        }else{
            let current = this.head;
            while ( position -1){
                current = current.next;
                position --;
            }
            current.next = new Node(value, current.next);
        }
        this.size++

    }

    remove(position){
        if(position < 0 || position > this.size -1){
            throw new Error ("Wrong position");
        }else{
            let current = this.head;
            while (position -1){
                current = current.next;
                position --;
            }
            const nodeValue = current.next.value;
            current.next = current.next.next
            return nodeValue;

        }
    }
    print(){
        let current = this.head;
        while(current){
            process.stdout.write(`${current.value} ->`)
            current = current.next
        }
        console.log('null')
    }
}

const linkedList = new LinkedList();

linkedList.addFirst('a')
linkedList.print();
linkedList.addFirst('b')
linkedList.print();
linkedList.addLast('c')
linkedList.print();
linkedList.add('d',0)
linkedList.print();
linkedList.removeFirst();
linkedList.print();
linkedList.removeLast();
linkedList.print();
linkedList.remove(1);
linkedList.print();