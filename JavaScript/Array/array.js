

class MyArray {
    constructor(){
        this.value = new Array(0);
    }

    addItemAtBeginning(item){
        const arr = new Array(this.value.length+1);
        arr[0] = item;
        for (let i=0; i< this.value.length; i++){
            arr[i+1] = this.value[i];
        }
        this.value = arr;
    }

    addItemAtEnd(item){
        const arr = new Array(this.value.length+1);
        arr[arr.length-1] = item;
        for (let i=0; i< this.value.length; i++){
            arr[i] = this.value[i];
        }
        this.value = arr;
    }

        removeItemAtBeginning(){
            if(this.value.length ===0){
                return;
            }else {
                const arr = new Array(this.value.length -1);
                for (let i = 1; i <this.value.length-1; i++){
                    arr[i] = this.value[i];
                }
                this.value = arr;
            }
            
        
    }

    removeItemAtEnd(){
        if (this.value.length ===0){
            return;
        }else {
            const arr = new Array(this.value.length+1);
            for ( let i = 0 ; i < this.value.length; i++){
                arr[i-1] = this.value[i];
            }
            this.value = arr;
        }
        
    }

}

       


const myArray = new MyArray();
console.log(myArray.value);
myArray.addItemAtBeginning('a');
console.log(myArray.value);
myArray.addItemAtBeginning('a');
console.log(myArray.value);
myArray.addItemAtEnd('b');
console.log(myArray.value);
myArray.removeItemAtBeginning()
console.log(myArray.value);
myArray.removeItemAtEnd()
console.log(myArray.value);
myArray.removeItemAtEnd()
console.log(myArray.value);
myArray.removeItemAtEnd()
console.log(myArray.value);
myArray.removeItemAtEnd()
console.log(myArray.value);