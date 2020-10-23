学习笔记

第9周 重学 CSS 

### CSS 总体结构

- @charset
- @import
- rules
   - @media
   - page
   - rule


### CSS 选择器

#### 选择器语法

- 简单选择器

   - \*
   - div svg|a
   - .cls
   - #id
   - [attr=value]
   - :hover
   - ::before

- 复合选择器

- 复杂选择器
 
    - 空格：后代
    - ">"：子代
    - "~"
    - "+"
    - "||"


    常用的连接方式是“空格”和“>”。

- 选择器优先级

CSS 标准用一个三元组 (a, b, c) 来构成一个复杂选择器的优先级。

- “*” 不影响优先级。
- **id 选择器**的数目记为 a；
- **class 选择器**和**伪类选择器**的数目记为 b；
- **标签选择器**和**伪元素选择器**数目记为 c；

```
 #id div.a#id {
     ...
 }

 // 换算为
  [0,2,1,1]
  s = 0 * N^3 + 2 * N^2 + 1 * N^1 + 1 
  取N = 1000000
```

 其他优先级规则

  - 行内属性的优先级永远高于 CSS 规则。
  - !important > 行内属性。它相当于一个新的优先级（慎用）。
  - 同一优先级的选择器遵循“后面的覆盖前面的”原则





#### 伪类

链接/行为

- :any-link,任意的链接，包括 a、area 和 link 标签都可能匹配到这个伪类
- :link
- :visited
- :hover
- :active
- :focus
- :target

css 定义a链接有先后顺序，顺序分别是 link visted hover active(L-V-H-A)

树结构

- :empty
- :nth-child()
- :nth-last-child()
- first-child:last-child:only-child

逻辑性
- :not伪类
- :where :has

#### 伪元素

- ::before
- ::after

> ::before 表示在元素内容之前插入一个虚拟的元素，::after 则表示在元素内容之后插入。

- ::first-line
- ::first-letter

> CSS 标准规定了 ::first-line 必须出现在最内层的块级元素之内。</br>
::first-letter 的行为又有所不同，它的位置在所有标签之内
