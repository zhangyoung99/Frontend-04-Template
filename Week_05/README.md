学习笔记

## JS 表达式

类型转换

- 双等号 `==`的类型转换

转换规则较为复杂，建议使用`===`来做类型转换处理

- 拆箱转换（unboxing）

在 JavaScript 标准中，规定了 ToPrimitive 函数，它是**对象类型**到**基本类型**的转换（即拆箱转换）。

对象到 `String` 和 `Number` 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 `String` 或者 `Number`。


- 装箱转换(boxing)

每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。

string ===> new String('a') ===> 'a'

number ===> new Number(1)  ===> 1

Boolean ===> new Boolean(true) ===> true

Symbol ===> new Object(Symbol('a'))  ===> Symbol('a')


## JS 语句

- Completion Record

   - [[type]] normal break continue return throw
   - [[value]] 基本类型
   - [[target]] label

- Lexical Environment(ES5)

  词法环境，获取变量时使用

- 简单语句 和 复合语句

  简单语句
  - expressionStatement
  - EmptyStatement
  - DebuggerStatement
  - ThrowStatement
  - ContinueStatement
        
      `continue` 语句用于结束本次循环并继续循环。
  - BreakStatement

     `break` 语句用于跳出循环语句或者 `switch` 语句
  - ReturnStatement

      return 语句用于函数中，它终止函数的执行，并且指定函数的返回值，

  复合语句
    - BlockStatement
    ```
    {  
      // xxx
    }
    ```
    - IfStatement
    - SwitchStatement
    - IterationStatement

       #### while 和 do while
    ```
      let a = 10;
      while(a--) {
          console.log('a')
      }

      let a = 11;
      do{
          console.log(a)
      } while {
          a < 11
      }
     
    ```
     do while循环无论如何至少循环一次

     #### 普通for循环

     #### for in 循环
     循环枚举对象的属性
     ```

        let o = { a: 10, b: 20}
        Object.defineProperty(o, "c", {enumerable:false, value:30})

        for(let p in o)
            console.log(p);  // a,b  enumerable改为true，打印出 a,b,c

     ```

     #### for of 循环 和 for await of 循环
    
    ```
        let array = [1,2,3,4,5]
        for(let e of array)
            console.log(e);
    ```


    - WithStatement
    - LabelledStatement
    - TryStatement

- 声明
   
   - Function
   - Generator
   - AsyncFunction
   - AsyncGenerator
   - VariableStatment
   - Class
   - Lexical

   

   ```
   //作用范围只认 Fuction 作用域

    function 
    function *
    async function 
    async function *
    var

    // 块级作用域 ，声明不能提升
    class
    const
    let
   ```

## JS结构化

- JS 执行粒度(运行时)

  - 宏任务
  - 微任务
  - 函数调用
  - 语句/声明
  - 表达式
  - 直接量/变量/this

- 宏任务与微任务

我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。

