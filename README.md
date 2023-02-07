# FAQx81
FAQx81 — это фанатская энциклопедия по обслуживанию [Toyota Mark II](https://ru.wikipedia.org/wiki/Toyota_Mark_II#6_поколение) в кузовах 80-й серии: `LX80`, `GX81`, `JZX81` и прочих `*X8*`.  
Наша цель — сделать понятным и предсказуемым владение олдовым марковником,)  

## Как устроен faq
Этот репозиторий содержит 
- [тексты](https://github.com/daks01/FAQx81/blob/master/index.md) фака
- схемы подвески [1](https://github.com/daks01/FAQx81/blob/master/jzx-suspension-front.png), [2](https://github.com/daks01/FAQx81/blob/master/jzx-suspension-rear.png)
- блоговый движок [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- и [выгрузку](https://daks01.github.io/FAQx81/heatmapdata-external-clicks.json) кликов из [Я.Метрики](https://metrika.yandex.ru/dashboard?id=51819752) для подсветки популярных ссылкок огоньком 🔥

## Внесите свой вклад
FAQx81 постоянно развивается.  
Вы можете быть автором статей на [drive2](https://www.drive2.ru/) и в группе Vk [x81squad](https://vk.com/x81squad).  
Вы можете актуализировать текущую базу знаний  
Или раскуривать оригинальные японские каталоги...  
Вы можете заводить новые issue или помогать мерджить 3 фака разных эпох в один.  
Вы можете все! Во славу опенсурса!

## Планы
- [x] подсветить горячие ссылки
- [ ] при переходе из поисковиков сделать промотку к стопслову
- [ ] актуализировать битые ссылки
- [ ] закрыть все активные [issues](https://github.com/daks01/FAQx81/issues)
- [ ] смерджить faq на [drive2](https://drive2.ru/c/574975/), старую ветку на [tourerv.ru](http://tourerv.ru/forum/forumdisplay.php?f=80) и этот [FAQx81](https://daks01.github.io/FAQx81)

### Структура проекта
- `_layouts/default.html` - шаблон
- `_includes/toc.htm` - генератор оглавления
- `assets/css/style.scss` -  стили
- `_includes_/scripts.html` -  js
- `index.md` - контент FAQ'а в [маркдауне](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
- `heatmapdata-internal-clicks.json` - статистика внутренних переходов
- `heatmapdata-external-clicks.json` - статистика внешних переходов
- `README.md` - сие ридми
- `_config.yml` - конфиг GithubPages


### Обновление статистики по кликам
**внешние переходы:**
- [Яндекс.Метрика](https://metrika.yandex.ru/stat/links?group=day&period=year&id=51819752&stateHash=5c52cc5b995fb633e5cbc505)
- экспорт cтатистики в csv
- переименовать клонку 'Адрес' в 'url'
- переименовать клонку 'Просмотры' в 'value'
- конвертонуть в json https://www.csvjson.com/csv2json
- удалить первый объект
- обновить json `heatmapdata-external-clicks.json`

**внутрение:**
- [Яндекс.Метрика](https://metrica.yandex.com/stat/popular?period=year&id=51819752&stateHash=5c52cbe5c21f174034394045)
- экспорт cтатистики в csv
- переименовать клонку 'Адрес' в 'url'
- переименовать клонку 'Просмотры' в 'value'
- конвертонуть в json https://www.csvjson.com/csv2json
- удалить первый объект
- добавить в json-файл `heatmapdata-internal-clicks.json`
