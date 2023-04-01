function createStack() {
    return {
    items:[],
    push(item) {
    this.items.push(item)
    },
    pop() {
    return this.items.pop()
    }
    }
    }
    
    const stack=createStack()
    console.log(stack)

    //Program to push() and pop() items into an array

        let list=[]
        list.push('a')
        console.log(list)
        list.push('b')
        console.log(list)
        list.push('c')
        console.log(list)
        list.push('d')
        console.log(list)
        list.push('e')
        console.log(list)
        console.log('Pop()')
        list.pop()
        console.log(list)
        list.pop()
        console.log(list)
        list.pop()
        console.log(list)
        list.pop()
        console.log(list)
        list.pop()
        console.log(list)
