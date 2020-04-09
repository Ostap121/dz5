// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// function DescriptionTag (nameTag,action,arrAttributes) {
//     this.nameTag = nameTag;
//     this.action = action;
//     this.arrAttributes = arrAttributes;
// }
// // -a
// const a = new DescriptionTag('<a>', ' предназначен для создания ссылок', [
//     {nameAttributes:'download', actionAttributes:'Предлагает скачать указанный по ссылке файл.'},
//     {nameAttributes:'shape', actionAttributes:'Задает форму активной области ссылки для изображений.'},
//     {nameAttributes:'target', actionAttributes:'Имя окна или фрейма, куда браузер будет загружать документ.'}
// ] );
// // -div
// const div = new DescriptionTag('<div>', 'предназначен для выделения фрагмента документа', [
//     {nameAttributes:'align', actionAttributes:'Задает выравнивание содержимого '},
//     {nameAttributes:'title', actionAttributes:'Добавляет всплывающую подсказку к содержимому.'},
//     {nameAttributes:'style', actionAttributes:'Определяет инлайновый стиль для элемента.'}
// ] );
// // -h1
// const h1 = new DescriptionTag('<h1>', 'используется для самого крупного заголовка', [
//     {nameAttributes:'class', actionAttributes:'Определяет имя класса для элемента '},
//     {nameAttributes:'id', actionAttributes:'Определяет уникальный id для элемента'},
//     {nameAttributes:'align', actionAttributes:'Определяет выравнивание заголовка.'}
// ] );
// // -span
// const span = new DescriptionTag('<span>', 'предназначен для определения строчных элементов документа.', [
//     {nameAttributes:'class', actionAttributes:'Определяет имя класса для элемента '},
//     {nameAttributes:'dir', actionAttributes:'Определяет направление текста для контента в элементе'},
//     {nameAttributes:'lang', actionAttributes:'Определяет код языка для контента в элементе'}
// ] );
// // -input
// const input = new DescriptionTag('<input>', 'позволяет создавать разные элементы интерфейса и' +
//     ' обеспечить взаимодействие с пользователем', [
//     {nameAttributes:'form', actionAttributes:'Связывает поле с формой по её идентификатору. '},
//     {nameAttributes:'type', actionAttributes:'Сообщает браузеру, к какому типу относится элемент формы.'},
//     {nameAttributes:'placeholder', actionAttributes:'Выводит подсказывающий текст.'}
// ] );
// // -form
// const form = new DescriptionTag('<form>', 'Связывает поле с формой по её идентификатору.', [
//     {nameAttributes:'action', actionAttributes:'Указывает, куда отправить форму данные при отправке формы'},
//     {nameAttributes:'accept', actionAttributes:'Задает  типы файлов, которые могут быть поданы через загрузку файлов'},
//     {nameAttributes:'method', actionAttributes:'Определяет метод отправки'}
// ] );
// // -option
// const option = new DescriptionTag('<option>', 'определяет отдельные пункты списка', [
//     {nameAttributes:'disabled', actionAttributes:'Заблокировать для доступа элемент списка.\n'},
//     {nameAttributes:'label', actionAttributes:'Указание метки пункта списка.'},
//     {nameAttributes:'selected', actionAttributes:'Заранее устанавливает определенный пункт списка выделенным.'}
// ] );
// // -select
// const select = new DescriptionTag('<select>', 'позволяет создать элемент интерфейса в виде ' +
//     'раскрывающегося списка', [
//     {nameAttributes:'required', actionAttributes:'Список обязателен для выбора перед отправкой формы.'},
//     {nameAttributes:'size', actionAttributes:'Количество отображаемых строк списка.'},
//     {nameAttributes:'multiple', actionAttributes:'Позволяет одновременно выбирать сразу несколько элементов списка.'}
// ] );
//
// console.log(a,div,h1,span,input,form,option,select);

// ==============================================
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// class Tag {
//     constructor(nameTag,action,arrAttributes) {
//         this.nameTag = nameTag;
//         this.action = action;
//         this.arrAttributes = arrAttributes;
//     }
// }
// // Таким чином описати теги
// // -a
// const a = new Tag('<a>', ' предназначен для создания ссылок', [
//     {nameAttributes:'download', actionAttributes:'Предлагает скачать указанный по ссылке файл.'},
//     {nameAttributes:'shape', actionAttributes:'Задает форму активной области ссылки для изображений.'},
//     {nameAttributes:'target', actionAttributes:'Имя окна или фрейма, куда браузер будет загружать документ.'}
// ] );
// // -div
// const div = new Tag('<div>', 'предназначен для выделения фрагмента документа', [
//     {nameAttributes:'align', actionAttributes:'Задает выравнивание содержимого '},
//     {nameAttributes:'title', actionAttributes:'Добавляет всплывающую подсказку к содержимому.'},
//     {nameAttributes:'style', actionAttributes:'Определяет инлайновый стиль для элемента.'}
// ] );
// // -h1
// const h1 = new Tag('<h1>', 'используется для самого крупного заголовка', [
//     {nameAttributes:'class', actionAttributes:'Определяет имя класса для элемента '},
//     {nameAttributes:'id', actionAttributes:'Определяет уникальный id для элемента'},
//     {nameAttributes:'align', actionAttributes:'Определяет выравнивание заголовка.'}
// ] );
// // -span
// const span = new Tag('<span>', 'предназначен для определения строчных элементов документа.', [
//     {nameAttributes:'class', actionAttributes:'Определяет имя класса для элемента '},
//     {nameAttributes:'dir', actionAttributes:'Определяет направление текста для контента в элементе'},
//     {nameAttributes:'lang', actionAttributes:'Определяет код языка для контента в элементе'}
// ] );
// // -input
// const input = new Tag('<input>', 'позволяет создавать разные элементы интерфейса и' +
//     ' обеспечить взаимодействие с пользователем', [
//     {nameAttributes:'form', actionAttributes:'Связывает поле с формой по её идентификатору. '},
//     {nameAttributes:'type', actionAttributes:'Сообщает браузеру, к какому типу относится элемент формы.'},
//     {nameAttributes:'placeholder', actionAttributes:'Выводит подсказывающий текст.'}
// ] );
// // -form
// const form = new Tag('<form>', 'Связывает поле с формой по её идентификатору.', [
//     {nameAttributes:'action', actionAttributes:'Указывает, куда отправить форму данные при отправке формы'},
//     {nameAttributes:'accept', actionAttributes:'Задает  типы файлов, которые могут быть поданы через загрузку файлов'},
//     {nameAttributes:'method', actionAttributes:'Определяет метод отправки'}
// ] );
// // -option
// const option = new Tag('<option>', 'определяет отдельные пункты списка', [
//     {nameAttributes:'disabled', actionAttributes:'Заблокировать для доступа элемент списка.\n'},
//     {nameAttributes:'label', actionAttributes:'Указание метки пункта списка.'},
//     {nameAttributes:'selected', actionAttributes:'Заранее устанавливает определенный пункт списка выделенным.'}
// ] );
// // -select
// const select = new Tag('<select>', 'позволяет создать элемент интерфейса в виде ' +
//     'раскрывающегося списка', [
//     {nameAttributes:'required', actionAttributes:'Список обязателен для выбора перед отправкой формы.'},
//     {nameAttributes:'size', actionAttributes:'Количество отображаемых строк списка.'},
//     {nameAttributes:'multiple', actionAttributes:'Позволяет одновременно выбирать сразу несколько элементов списка.'}
// ] );
//
// console.log(a,div,h1,span,input,form,option,select);

// ==============================================
// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'Corsa',
//     manufacturer: 'Opel',
//     year: '2003',
//     maxSpeed: '150 km/h',
//     engineCapacity: '1.0',
//     driver: '',
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//     model: ${this.model},
//     manufacturer: ${this.manufacturer},
//     year: ${this.year},
//     maxSpeed: ${this.maxSpeed},
//     engineCapacity: ${this.engineCapacity},
//     driver: ${this.driver.name} `)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed
//     },
//     changeYear: function (newValue) {
//         this.year = newValue
//     },
//     addDriver: function (driver) {
//         this.driver = driver
//     }
// };
//
// car.addDriver({name:'Viktor', age:'24'});
// car.info();

// ==============================================
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed , engineCapacity, driver ){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.driver = driver;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//      };
//     this.info = function () {
//         `model: ${this.model},
//          manufacturer: ${this.manufacturer},
//          year: ${this.year},
//          maxSpeed: ${this.maxSpeed},
//          engineCapacity: ${this.engineCapacity},
//          driver: ${this.driver.name} `
//      };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let opel = new Car('Corsa','Opel', '2003', '150', '1.0','Viktor');
// console.log(opel);

// ==============================================
// ==============================================
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, maxSpeed , engineCapacity, driver) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.driver = driver;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//      };
//     info  () {
//         `model: ${this.model},
//          manufacturer: ${this.manufacturer},
//          year: ${this.year},
//          maxSpeed: ${this.maxSpeed},
//          engineCapacity: ${this.engineCapacity},
//          driver: ${this.driver.name} `
//      };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//     };
//     changeYear(newValue) {
//         this.year = newValue
//     };
//     addDriver (driver) {
//         this.driver = driver
//     }
// }

// ==============================================
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let popelushka1 = new Popelushka('Magdaluna','17','38');
// let popelushka2 = new Popelushka('Danuta','28','37');
// let popelushka3 = new Popelushka('Dorotta','40','41');
// let popelushka4 = new Popelushka('Agneshka','16','35');
// let popelushka5 = new Popelushka('Kaya','15','34');
// let popelushka6 = new Popelushka('Malanka','23','39');
// let popelushka7 = new Popelushka('Ira','28','40');
// let popelushka8 = new Popelushka('Oksana','20','37.5');
// let popelushka9 = new Popelushka('Marusya','60','39.5');
// let popelushka10 = new Popelushka('Karmen','17','36');
//
// let popelushkuArr = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5, popelushka6, popelushka7,popelushka8,
//     popelushka9,popelushka10];
//
//
// class Prince {
//     constructor(name, age, searchFootSize) {
//         this.name = name;
//         this.age = age;
//         this.searchFootSize = searchFootSize;
//     }
// }
//
// let prince = new Prince('Lucash','24','38');
// for (const popelushka of popelushkuArr) {
//     if (prince.searchFootSize === popelushka.footSize && popelushka.age > 18){
//         console.log(`Принц ${prince.name} знайшов туфельку ${popelushka.name}.Урааааа ми одружимось... `)
//     } else if (prince.searchFootSize === popelushka.footSize && popelushka.age < 18) {
//         console.log(` ${prince.name}, братан тікай з села, тобі пі*** `)
//     }
// }



// ==============================================
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//  function Popelushka (name, age, footSize){
//      this.name = name;
//      this.age = age;
//      this.footSize = footSize;
//  }
//
//
//
// let popelushka1 = new Popelushka('Magdaluna','17','38');
// let popelushka2 = new Popelushka('Danuta','28','37');
// let popelushka3 = new Popelushka('Dorotta','40','41');
// let popelushka4 = new Popelushka('Agneshka','16','35');
// let popelushka5 = new Popelushka('Kaya','15','34');
// let popelushka6 = new Popelushka('Malanka','23','39');
// let popelushka7 = new Popelushka('Ira','28','40');
// let popelushka8 = new Popelushka('Oksana','20','37.5');
// let popelushka9 = new Popelushka('Marusya','60','39.5');
// let popelushka10 = new Popelushka('Karmen','17','36');
//
// let popelushkuArr = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5, popelushka6, popelushka7,popelushka8,
//     popelushka9,popelushka10];
//
//
// class Prince {
//     constructor(name, age, searchFootSize) {
//         this.name = name;
//         this.age = age;
//         this.searchFootSize = searchFootSize;
//     }
// }
//
// let prince = new Prince('Lucash','24','38');
// for (const popelushka of popelushkuArr) {
//     if (prince.searchFootSize === popelushka.footSize && popelushka.age > 18){
//         console.log(`Принц ${prince.name} знайшов туфельку ${popelushka.name}.Урааааа ми одружимось... `)
//     } else if (prince.searchFootSize === popelushka.footSize && popelushka.age < 18) {
//         console.log(` ${prince.name}, братан тікай з села, тобі пі*** `)
//     }
// }