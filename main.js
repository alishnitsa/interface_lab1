let g_counter = 0;

const start = () => {
   let lenght_array = 6;//Количество чисел

   let word; //Словесная форма или пиктограммы
   let column_row; //В столбик или в колонку
   let output; //Вывод 
   let size; //Размер

   word = document.getElementById("word-form").value;
   column_row = document.getElementById("column-row-form").value;
   size = document.getElementById("size").value;

   let nums_arr = generate(lenght_array);

   /*----------- Условия вывода ---------*/
   if (word == "Словесная форма") {
      if (column_row == "Строка") {
         output = nums_arr.map(verbal_form).join(' ');
         document.getElementById("output").innerHTML = output;
      }
      else if (column_row == "Колонка") {
         output = nums_arr.map(verbal_form).join('<br>');
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
         output = nums_arr.map(pictogram_form).join(' ');
         document.getElementById("output").innerHTML = output;
      }
      else if (column_row == "Колонка") {
         output = nums_arr.map(pictogram_form).join('<br>');
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

   setTimeout(clear, 5000, nums_arr);

}


function clear(nums_arr) { //Очистка output и добавление поля ввода и кнопки
   document.getElementById("output").innerHTML = '';
   document.getElementById("output").innerHTML = "<input type='number' id='input' >";
   inp = document.getElementById("input");
   // inp = document.createElement('input');
   // inp.id = 'input';

   //document.createElement("<input type='number' id='input'>");

   document.getElementById('output').appendChild(inp);
   var btn = document.createElement('button');
   var textInBtn = document.createTextNode('Проверить');
   btn.appendChild(textInBtn);
   btn.onclick = btnClick.bind(btn, nums_arr);
   document.getElementById('output').appendChild(btn);
}

function btnClick(nums_arr) { //Вывод ошибок и очистка output
   let answer = document.getElementById("input").value.split('');
   if (answer.length != 6) {
      alert("Неверно введены данные")
      return;

   }

   for (let i = 0; i < answer.length; i++) {
      if (nums_arr.indexOf(Number.parseInt(answer[i])) != i) {
         g_counter++;
      }
   }
   document.getElementById("output").innerHTML = '';
   document.getElementById("counter").innerHTML = "Ошибок: " + g_counter;
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
