## Выбор решения, мысли

1. В начале хотел сделать все на React, но подумал, что для такой задачи вполне подойдет обычная
Webpack сборка Javascript + SCSS, поскольку проект не очень большой и стилей не много, то 
пересечения стилей можно будет избежать с помощью методологии БЭМ.
2. В качестве шаблонизатора используем обычные template literals, их достаточно.
3. Стили разбил на сервисные (утилиты, миксины), компонентные (components) (те, которые переиспользуются
в разных шаблонах) и отдельные по каждому шаблону (stories).
3. Сделал 2 Webpack-конфига, один для разработки (dev), второй для продакшена
4. Для бандлинга js используем babel-loader, для стилей используем style-loader, css-loader, 
postcss-loader и sass-loader.
5. В качестве переменных использованы CSS-переменные, они уже достаточно хорошо поддерживаются
и позволяют более удобно изменять стили в зависимости от темы.
6. Стили некоторых селекторов, в которых в зависимости от темы применяется целый ряд правил,
решил создавать с помощью миксинов с scss-оператором @at-root вместо вынесения их в css-переменные. 
7. В качестве веб-сверера использован Express.js для тестирования
8. ----- Hello
9. Level 9
