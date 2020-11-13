学习笔记

### 盒模型

box-sizing: 
   - content-box
   - border-box

padding 影响盒内的排版，决定盒内部 content的区域大小
margin 影响盒本身的排版，决定盒周围空白区域的大小

盒模型，受box-sizing,padding,border,margin属性影响


### CSS排版

- 正常流

block level box

line box

   - 行级排布

行内inline-block 的基线随自己里面的文字去变化的

  - 块级排布

  float
  
  clear: 找一个干净的空间执行浮动

  BFC margin折叠

  - BFC 合并

  设立 BFC

    - floats
    - absolutely

  - flex 排版

      - 收集盒进行
      - 计算盒在主轴方向的排布
      - 计算盒在交叉轴方向的排布

   - 分行

     - 根据主轴尺寸，把元素分进行
     - 若设置了no-wrap，则强行分配进第一行

   - 计算主轴方向

   - 动画

      Animation

         - @keyframes定义
         - animation:使用

      - animation-name
      - animation-duration
      - animation-timing-function
      - animation-delay
      - animation-iteration-count
      - animation-direction


      Transtion

   - 颜色

      RGB & CMYK

      HSL & HSV

   - 绘制