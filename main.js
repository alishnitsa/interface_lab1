const start = () => {
   let lenght_array = 6;//Количество чисел

   let word; //Словесная форма или пиктограммы
   let column_row; //В столбик или в колонку
   let output; //Вывод 
   let size; //Размер

   word = document.getElementById("word-form").value;
   column_row = document.getElementById("column-row-form").value;
   size = document.getElementById("size").value;

   /*----------- Условия вывода ---------*/
   if (word == "Словесная форма") {
      if (column_row == "Строка") {
         output = generate(lenght_array).map(verbal_form).join(' ');
         document.getElementById("output").innerHTML = output;
      }
      else if (column_row == "Колонка") {
         output = generate(lenght_array).map(verbal_form).join('<br>');
         document.getElementById("output").innerHTML = output;
      }
      switch (size) {
         case "m":
            document.getElementById("output").style.fontSize = "8px";
            break;
         case "s":
            document.getElementById("output").style.fontSize = "16px";
            break;
         case "b":
            document.getElementById("output").style.fontSize = "24px";
            break;
      }
   }

   else if (word == "Пиктограммы") {
      if (column_row == "Строка") {
         output = generate(lenght_array).map(pictogram_form).join(' ');
         document.getElementById("output").innerHTML = output;
      }
      else if (column_row == "Колонка") {
         output = generate(lenght_array).map(pictogram_form).join('<br>');
         document.getElementById("output").innerHTML = output;
      }
      switch (size) {
         case "m":
            for (let i = 0; i < lenght_array; i++) {
               document.getElementsByTagName("img")[i].style.height = "40px";
            }
            break;
         case "s":
            for (let i = 0; i < lenght_array; i++) {
               document.getElementsByTagName("img")[i].style.height = "80px";
            } break;
         case "b":
            for (let i = 0; i < lenght_array; i++) {
               document.getElementsByTagName("img")[i].style.height = "120px";
            } break;
      }
   }
   /*------------------------*/

   setTimeout(clear, 10000); //Очистка блока output через 10 сек 

   setTimeout(return_back, 20000); //Возвращение блока output через 20 сек

}

const clear = () => { //Очистка блока output
   document.getElementById("output").style.display = 'none';
}

const return_back = () => { //Возвращение блока output
   document.getElementById("output").style.display = 'block';
}

const generate = (lenght_array) => { // Генерация массива чисел
   let numbers_array = [];
   for (let i = 1; i < lenght_array + 1; i++) numbers_array.push(i);
   numbers_array.sort(function () { return Math.random() - 0.5 });
   return numbers_array;
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max)); //Генерация рандомного числа

const verbal_form = (num) => { //Перевод числа в словесную форму
   switch (num) {
      case 1:
         num = "Один";
         break;
      case 2:
         num = "Два";
         break;
      case 3:
         num = "Три";
         break;
      case 4:
         num = "Четыре";
         break;
      case 5:
         num = "Пять"
         break;
      case 6:
         num = "Шесть";
         break;
   }
   return num;
}

const pictogram_form = (num) => { //Перевод числа в пиктограмму
   switch (num) {
      case 1:
         num = "<img src='img/cube1.png'>";
         break;
      case 2:
         num = "<img src='img/cube2.png'>";
         break;
      case 3:
         num = "<img src='img/cube3.png'>";
         break;
      case 4:
         num = "<img src='img/cube4.png'>";
         break;
      case 5:
         num = "<img src='img/cube5.png'>";
         break;
      case 6:
         num = "<img src='img/cube6.png'>";
         break;
   }
   return num;
}
