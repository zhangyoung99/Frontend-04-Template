学习笔记

## 寻路

- BFS 广度优先搜索

> 即队列的遍历方法，先入先出

```
  function path() {
      let queue = [start]

      while(queue.length) {
          let [x,y] = queue.shift() // 出队
          // code
          queue.push('xxx') // 入队
      }
  }
```
数组的 `push` 和 `shift` 方法结合生成队列操作

- 启发式搜索

在寻找的过程，每次在队列中找到最优的一个点。

```
 sort 比较
  let sort = sort((a, b) => a-b)
```

封装成`Sorted`类

```
    class Sorted {
        constructor(data, compare) {
            this.data = data.slice();
            this.compare = compare || ((a,b) => a - b);
        }
        take() {
            if(!this.data.length) 
                return;
            let min = this.data[0];
            let minIndex = 0;

            for(let i = 1; i < this.data.length; i++) {
                if(this.compare(this.data[i], min) < 0) {
                    min = this.data[i];
                    minIndex = i;
                }
            }

            this.data[minIndex] = this.data[this.data.length - 1];
            this.data.pop();
            return min;
        }
        give(v) {
            this.data.push(v)
        }
    }
```
寻找距离终点最短的距离，就是起点到终点距离的平方，即两点之间的直线距离。
```
    function distance(point) {
        return (point[0] - end[0]) ** 2 + (point[1] - end[1]) ** 2
    }
```

## LL-AST

  - 词法分析

  通过正则`exec`, 重复解析`token`词,同时做一个字典表，标识每一个`token`类型。
