# fullclone

With fullclone, you can create a completely separate instance of your object with typescript or javascript.

### Installation

Install the dependency.

```npm
$ npm install @rosokht/fullclone --save
```

# Features!

  - Simple types cloning
  - Arrays cloning
  - Simple objects cloning or simple instance of classes cloning
  - Deep in objects or instance of classes Full cloning (Complete seperate and create new object as you need by deep =D)
  
# How to use it ??

It's very simple ... Let's see =)

### - Simple types cloning

simple types: boolean, number, string, ...

*Example:*

```ts
const { clone } = require('@rosokht/fullclone')

// boolean
const a = true
clone(a) // output => true

// number
const b = 12
clone(b) // output => 12

// string
const c = "Hi Rosokht :)"
clone(c) // output => "Hi Rosokht :)"
```

### - Arrays cloning

**Note:** The type of children does not matter!

*Example:*

```ts
const { clone } = require('@rosokht/fullclone')

// Simple class
class Simple {}

// Array
const arr = [ true, 12, 'Hi Rosokht :)', { key: 'value' }, [Symbol('fullclone')], Simple, ... ]
clone(arr)
// output => [ true, 12, 'Hi Rosokht :)', { key: 'value' }, [Symbol('fullclone')], Simple, ... ]
```

### - Simple objects cloning or simple instance of classes cloning

**Note:** The type of keys and values or properties and methods does not matter!

*Example:*

```ts
const { clone } = require('@rosokht/fullclone')

// Simple class
class Simple {}

// Object
const object = {
    a: true,
    b: 12,
    c: 'Hi Rosokht :)',
    d: { key: 'value' }, 
    [Symbol('fullclone')]: 'rosokht',
    Simple,
    ...
}
clone(object)
// output => {
//     a: true,
//     b: 12,
//     c: 'Hi Rosokht :)',
//     d: { key: 'value' }, 
//     [Symbol('fullclone')]: 'rosokht',
//     Simple,
//     ...
// }
```

### - Deep in objects or instance of classes Full cloning (Complete seperate and create new object as you need by deep =D)

**Note:** The type of keys and values or properties and methods does not matter!

**Introduction (deep)-parameter and how can you use it?**
deep is the second parameter in the clone function.
With the deep parameter, we can specify how many layers to go inside the object and try to clone it
Type of the (deep)-parameter is *number*.

*Example:*

```ts
const { clone } = require('@rosokht/fullclone')

// Parent of class B
class A {
    protected const num = 12
}

// Parent of class C and Child of Class A
class B extends A {
    private const a = new A()
}

// Child of class B
class C extends B {
    private const b = new B()
}

const ins = new C()

// Object
const object = {
    a: {
        first: {
            second: {
                third: '',
            }
        },
    }, 
    [Symbol('fullclone')]: 'rosokht',
    ins,
    ...
}

clone(object, 2)
// output => {
//    a: { // can inside to this layer and clone it
//        first: { // can inside to this layer and clone it
//            second: { // !!! can not inside to this layer and clone it
//                third: '', // !!! can not inside to this layer and clone it
//            }
//        },
//    }, 
//    [Symbol('fullclone')]: 'rosokht', // can inside to this layer and clone it
//
//    can inside to below layer and clone it
//    ins // output => [C] {
//        //     can inside to below layer and clone it
//        //     b: [B] {
//        //         // !!! can not inside to this layer and clone it
//        //         a: [A] { num: 12 }
//        //     }
//        // }
//    ...
// }
```

### Footnote

We hope this package works for you =D
Hoping for good and beautiful days for everyone ...

License
----

MIT