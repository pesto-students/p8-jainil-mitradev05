function createStack() {
    return {
    items:[],
    push(item) {
    this.items.push(item)
    }
  pop() {
    return this.items.pop()
    }
    }
    }
    
    const stack=createStack()
    console.log(stack)
    