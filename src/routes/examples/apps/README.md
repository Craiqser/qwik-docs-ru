# Примеры Qwik

## Добавление нового примера

Текущая папка включает в себя все примеры, представленные в: http://qwik.builder.io/examples/introduction/hello-world

### 1. Категория примера

Первый уровень папок - это категории. Не стесняйтесь добавлять новую папку корневого уровня для создания новой категории, если ваш новый пример не подходит ни к одной из существующих категорий.

### 2. Создайте новую папку примера

Самый простой способ создать новый пример - скопировать папку `hello-world` внутри папки `introduction` и переименовать её в соответствии с названием вашего нового приложения.

```
cp -r introduction/hello-world introduction/my-new-example
```

### 3. Добавить новые метаданные примера

Откройте `examples-menu.json` и добавьте свой новый пример в правый раздел:

```diff
[
  {
    "id": "introduction",
    "title": "Introduction",
    "apps": [
      {
        "id": "hello-world",
        "title": "Hello World",
        "description": "The simplest Qwik app.",
        "icon": "🌎"
      },
+      {
+        "id": "my-new-example",
+        "title": "New demo",
+        "description": "Just some text.",
+        "icon": "🙊"
+      }
    ]
  },
```

### 4. Форматирование

В корне репозитория qwik запустите:

```shell
yarn
yarn build
yarn lint
```
