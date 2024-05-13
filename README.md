==================
FrontEnd
==================

---

## Загальна інформація

" - Точки перелому:
• mobile: верстка гумова від 320 px, стає адаптивною з 375 px;
• tablet: з 768 px;
• desktop: з 1440 рх

- Верстка семантична

✔ Здійснити підключення шрифтів
✔ Забезпечити оптимізацію розмірів статичної векторної та растрової графіки
✔ Забезпечити підтримку відображення статичних зображень для retina-екранів
✔ Оптимізувати завантаження зображень
✔ Всі svg-іконки підʼєднати через sprite
✔ Додати відображення фавікон сторінки"

---

## SharedLayout

Компонент відмальовується на маршруті "/" і обгортає вкладені маршрути з їх відповідними сторінками
HomePage - публічний обмежений маршрут "/"
"Сторінка містить:

- WelcomeSection
- AdvantagesSection"

---

## WelcomeSection

"Компонент містить:

- Logo
- підзаголовок застосунку
- основний заголовок застосунку
- посилання Try tracker, що перенаправляє користувача на сторінку SignUpPage
- посилання Sign In, що перенаправляє користувача на сторінку SignInPage"

## Logo

Універсальний компонент, який відображає логотип компанії та використовується на різних сторінках застосунку Logo

## AdvantagesSection

"Компонент містить:

- фонове зображення
- статичні переваги застосунку"

========================================================
SignUpPage - публічний обмежений маршрут "/signup"
========================================================

"Сторінка містить:

- Logo
- SignUpForm
- посилання Sign In, що перенаправляє користувача на сторінку SignInPage"

---

## Logo

Універсальний компонент, який відображає логотип компанії та використовується на різних сторінках застосунку

## SignUpForm

"Компонент, що містить форму, яка складається з input-ів Email, Password, Repeat Password та кнопки типу ""submit"" - Sign Up.

Усі дані, зазначені користувачем у формі, мають бути провалідовані за допомогою бібліотек react-hook-form (для управління станом форми) + Yup (для валідації форми). Усі поля є обовʼязковими до заповнення і мають відповідати вимогам валідації. Поле Repeat Password перевіряється на співпадіння зі значенням поля Password. Якщо значення в полі Repeat Password не співпадає зі значенням поля Password, значення в полі Password слід вважати не валідним.

У разі наявності не валідних значень, причина помилки повинна бути відображена користувачеві, а дані - не відправлятися на backend.
У разі, якщо всі значення валідні, - на backend слід відправити відповідний запит для реєстрації користувача.

Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді спливаючого віконечка-notification.
Якщо запит на backend пройшов успішно та token для користувача сформовано - необхідно реалізувати автоматичну авторизацію. Після чого користувача слід перенаправити на сторінку TrackerPage.

=======================================================
SignInPage - публічний обмежений маршрут "/signin"
=======================================================
"Сторінка містить:

- Logo
- SignInForm
- посилання Sign Up, що перенаправляє користувача на сторінку SignUpPage"

---

## Logo

Універсальний компонент, який відображає логотип компанії та використовується на різних сторінках застосунку

---

## SignInForm

---

"Компонент, що містить форму, яка складається з input-ів Email, Password та кнопки типу ""submit"" - Sign In

Усі дані, зазначені користувачем у формі, мають бути провалідовані за допомогою бібліотек react-hook-form (для управління станом форми) + Yup (для валідації форми). Усі поля є обовʼязковими до заповнення і мають відповідати вимогам валідації.

У разі наявності не валідних значень, причина помилки повинна бути відображена користувачеві, а дані - не відправлятися на backend.
У разі, якщо всі значення валідні, - на backend слід відправити відповідний запит для авторизації користувача.

Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді спливаючого вікна-notification.
Якщо запит на backend пройшов успішно та token для користувача сформовано - необхідно реалізувати автоматичну авторизацію. Після чого користувача слід перенаправити на сторінку TrackerPage.

==============================================================
TrackerPage - приватний обмежений маршрут "/tracker"
==============================================================
"Сторінка містить:

- WaterMainInfo
- WaterDetailedInfo"

---

## WaterMainInfo

"Компонент містить головну інформацію щодо спожитої користувачем води за день та його денної норми споживання води; та складається з:

- WaterDailyNorma
- WaterProgressBar
- AddWaterBtn"

---

## WaterDailyNorma

Компонент, що містить актуальну денну норму споживання води для користувача

---

## WaterProgressBar

Компонент, що містить шкалу, що відображає співвідношення фактично спожитої користувачем води за день до його денної норми споживання води

---

## AddWaterBtn

Компонент містить кнопку типу "button" Add water, при натисканні на яку має відкриватись модальне вікно WaterModal

---

## WaterDetailedInfo

"Компонент містить детальну інформацію щодо спожитої користувачем води за обраний день та місяць. Компонент складається з:

- UserPanel
- DailyInfo
- MonthInfo"

---

## UserPanel

"Компонент складається з:

- заголовка-вітання з використанням імʼя користувача
- UserBar"

---

## UserBar

Компонент має бути реалізований у вигляді кнопки типу "button", що містить імʼя та аватарку користувача, при натисканні на яку відкривається спливаюче вікно (popover) UserBarPopover

---

## DailyInfo

"Компонент містить:

- кнопку типу ""button"" Settings, при натисканні на яку відкривається модальне вікно UserSettingsModal
- кнопку типу ""button"" Log out, при натисканні на яку відкривається модальне вікно LogOutModal

Компонент має бути спозиціонований відносно UserBar з урахуванням його розташування в межах екрана. Якщо компонент з'являється біля краю екрана, де немає достатньо місця, він має автоматично змінювати своє положення, щоб не виходити за межі екрана.

Компонент можна закрити, натиснувши за межами його області. Також його можна закрити, натиснувши знову на кнопку, яка викликала його відображення UserBar" UserBarPopover
"Компонент містить:

- ChooseDate
- AddWaterBtn
- WaterList"

---

## ChooseDate

Компонент містить обрану користувачем дату у MonthInfo. За замовчуванням обраною датою є поточна

---

## AddWaterBtn

Компонент містить кнопку типу "button" Add water, при натисканні на яку має відкриватись модальне вікно WaterModal

---

## WaterList

Компонент містить список з порціями спожитої користувачем води за обрану дату (WaterItem). У випадку перевищення кількості порцій, які вміщуються в контейнер відповідного брейкпоінта, автоматично з'являється горизонтальний скрол.

## WaterItem

"Компонент містить інформацію про кількість спожитої води, час її споживання, а також:

- кнопку типу ""button"" у вигляді іконки-олівця, при натисканні на яку відкривається модальне вікно WaterModal
- кнопку типу ""button"" у вигляді іконки-смітника, при натисканні на яку відкривається модальне вікно DeleteWaterModal"

## MonthInfo

"Компонент складається з:

- заголовку
- CalendarPagination
- Calendar

## CalendarPagination

"Компонент відображає обрану користувачем дату у форматі month, YYYY. По замовчуванню обрана дата дорівнює поточному місяцю.

При натисканні на кнопку типу ""button"" у вигляді іконки-""<"" поточна дата має змінюватись на дату попереднього місяця.
При натисканні на кнопку типу ""button"" у вигляді іконки-"">"" поточна дата має змінюватись на дату наступного місяця."

## Calendar

Компонент містить перелік днів обраного користувачем місяця (CalendarItem).

## CalendarItem

"Компонент має бути реалізований у вигляді кнопки типу ""button"", що містить головну інформацію щодо спожитої користувачем води за день, а саме:

- число обраного місяця, яке слід стилізувати в залежності від кількості спожитої користувачем кількості води в цей день відносно його денної норми
- співвідношення у відсотках фактично спожитої користувачем води за цей день до його денної норми

При натисканні на компонент має відправлятись запит на backend задля отримання детальної інформації щодо спожитої користувачем води за обрану дату. Після отримання такої інформації - ChooseDate та WaterList мають бути актуалізовані"

=========================
Modals
===========================

## Modal

Універсальний компонент, що відмальовує у модальному вікні контент, переданий в якості children, та 1 функціональну кнопку типу "button" для її закриття. Модальне вікно повинно закриватись при натисканні на кнопку-іконку закриття, при натисканні по backdrop-у, а також по натисканню на клавішу Escape.

## WaterForm

Компонент містить:

- заголовок, зміст якого залежить від отриманих props, що мають містити інформацію щодо типу операції ""add"" або ""edit""
- WaterForm" WaterModal
  "Компонент cкладається з:
- лічильника для покрокового вводу значення спожитої користувачем води за допомогою кнопок типу ""button"" у вигляді іконки-""+"" | іконки ""-"" та панелі, що відображає поточне його значення (за замовчуванням - 50ml)
- поля для вводу значення часу в hh:mm, коли була спожита вода (за замовчуванням - поточний час)
- поля для вводу значення кількості спожитої води з клавіатури (за замовчуванням - 50ml)
- кнопки типу ""submit"" Save

У разі операції редагування запису про порцію спожитої води, поля форми мають бути заповнені актуальними збереженими на backend-і даними щодо такого запису про порцію спожитої води для їх подальшого редагування.

Лічильник та поле для вводу к-сті спожитої користувачем води з клавіатури повинні показувати однакове значення, що відповідає к-сті води, яку користувач хоче зберегти в даному записі.

Усі дані, зазначені користувачем у формі, мають бути провалідовані за допомогою бібліотек react-hook-form (для управління станом форми) + Yup (для валідації форми). Усі поля є обовʼязковими до заповнення і мають відповідати вимогам валідації.

У разі наявності не валідних значень, причина помилки повинна бути відображена користувачеві, а дані - не відправлятися на backend.
У разі, якщо всі значення валідні, - на backend слід відправити відповідний запит для додавання/редагування запису про порцію спожитої води.

Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді спливаючого вікна-notification.
Якщо запит на backend пройшов успішно - модальне вікно WaterModal слід закрити, а дані у WaterProgressBar, WaterList та Calendar - актуалізувати за допомогою redux

## UserSettingsModal

Компонент містить:

- заголовок
- питання
- кнопку типу ""button"" Delete, при натисканні на яку має відправлятися запит на backend, який видаляє запис про порцію спожитої води.
  Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді спливаючого вікна-notification.
  Якщо запит на backend пройшов успішно - модальне вікно DeleteWaterModal слід закрити, а дані у WaterProgressBar, WaterList та Calendar - актуалізувати за допомогою redux

- кнопку типу ""button"" Cancel, при натисканні на яку модальне вікно DeleteWaterModal має бути закрите" DeleteWaterModal
  "Компонент містить:
- заголовок
- UserSettingsForm

## UserSettingsForm

Компонент має бути реалізований за допомогою бібліотек react-hook-form (для управління станом форми) + Yup (для валідації форми), що надає можливість відредагувати дані про користувача.
Форма містить:

- input типу file для додавання аватарки користувача. Для відмалювання тимчасового файлу з аватаркою використовуйте URL.createObjectURL()
- radio-button для визначення статі користувача
- input для зміни імʼя користувача
- input для зміни email користувача
- input для зміни поточної ваги користувача
- input для зміни кількості часу на день, протягом якого користувач веде активне спортивне життя
- input для зміни денної норми споживання води користувачем

Також форма містить інформацію щодо формули розрахунку рекомендованої денної норми споживання води користувачем та безпосередньо й саму розраховану денну норму споживання води, що має рекомендаційний характер.

- кнопку типу ""submit"" Save, при натисканні на яку

  - у разі наявності не валідних значень, причина помилки повинна бути відображена користувачеві, а дані - не відправлятися на backend.
  - у разі, якщо всі значення валідні, - на backend слід відправити відповідний запит для редагування даних про користувача у вигляді обʼєкту FormData
  - якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді спливаючого вікна-notification
  - якщо запит на backend пройшов успішно, модальне вікно UserSettingsModal слід закрити, а дані у UserPanel, WaterDailyNorma, WaterProgressBar, WaterList та Calendar - актуалізувати

  ## LogOutModal

  "Компонент містить:

- заголовок
- питання
- кнопку типу ""button"" LogOut, при натисканні на яку має відправлятися запит на backend, який видаляє активну сесію користувача. Незалежно від відповіді backenda, користувача слід деавторизувати ""на клієнті"", очистивши при цьому повністю redux store та localStorage. Після чого користувача має переадресувати на публічну сторінку HomePage
- кнопку типу ""button"" Cancel, при натисканні на яку модальне вікно LogOutModal має бути закрите

===================================
Додаткові завдання
===================================
реалізувати функціонал отримання інформації з backend-а щодо загальної кількості зареєстрованих у застосунку користувачів для відмалювання її в AdvantagesSection
реалізувати функціонал міжнародної локалізації за допомогою бібліотеки
реалізувати функціонал онбордінгу для нових користувачів за допомогою бібліотеки
реалізувати функціонал візуалізації статистичних даних споживання води за тиждень за допомогою бібліотеки
реалізувати авторизацію через Google
реалізувати функціонал зміни пароля користувача в разі, якщо він забув свій пароль
реалізувати функціонал верифікації електронної пошти користувача з подальшим його перенаправленням на живу сторінку
