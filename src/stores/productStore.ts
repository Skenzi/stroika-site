import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
    const products = ref([
        {
            "id": "001",
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "002",
            "description": "Product B",
            "price": 9.99,
            "discount": 10,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "003",
            "description": "Product C",
            "price": 24.99,
            "discount": 20,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "004",
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "005",
            "description": "Product B",
            "price": 9.99,
            "discount": 10,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "006",
            "description": "Product C",
            "price": 24.99,
            "discount": 20,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "007",
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "008",
            "description": "Product B",
            "price": 9.99,
            "discount": 10,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "009",
            "description": "Product C",
            "price": 24.99,
            "discount": 20,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "010",
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "011",
            "description": "Product B",
            "price": 9.99,
            "discount": 10,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        },
        {
            "id": "012",
            "description": "Product C",
            "price": 24.99,
            "discount": 20,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    ]);
    const categories = ref({
        'plumbing': {
            name: 'Сантехника',
            subcategories: [
                'Ванны', 'Комплектующие для ванн', 'Душевые', 'Унитазы и биде', 'Смесители', 'Душевое оборудование', 'Раковины', 'Пьедесталы для раковин'
            ]
        },
        'building-materials': {
            name: 'Стройматериалы',
            subcategories: [
                'Сухие смеси', 'Пиломатериалы', 'Гипсокартон', 'Профиль для гипсокартона', 'Изоляционные материалы', 'Армирующие материалы', 'Кровля', 'Ленты строительные'
            ]
        },
        'floor-coverings': {
            name: 'Напольные покрытия',
            subcategories: [
                'Линолеум', 'Ламинат', 'Ковролин', 'Плинтус напольный', 'Пороги', 'Подложки', 'Ковровые дорожки', 'Плитка ПВХ, виниловый ламинат'
            ]
        },
        'wall-and-ceiling': {
            name: 'Отделка стен и потолка',
            subcategories: [
                'Обои',
                'Стеновые панели',
                'Плинтус потолочный',
                'Углы к потолочному плинтусу',
                'Потолочная плитка',
                'Профили алюминиевые',
                'Декоративные молдинги, багеты',
                'Пленки самоклеящиеся'
            ]
        },
        'ceramic-tiles': {
            name: 'Керамическая плитка',
            subcategories: [
                'Настенная плитка',
                'Напольная плитка',
                'Керамогранит',
                'Декоративная плитка',
                'Системы выравнивания плитки',
                'Уголки и профили для плитки',
                'Керамический плинтус',
                'Мозаика'
            ]
        },
        'doors-and-windows': {
            name: 'Двери и окна',
            subcategories: [
                'Межкомнатные двери',
                'Входные двери',
                'Дверные коробки',
                'Арки',
                'Дверные наличники',
                'Дверные доборы',
                'Раздвижные двери',
                'Скобяные изделия',
            ]
        },
        'paintwork-material': {
            name: 'Лакокрасочные материалы',
            subcategories: [
                'Краски',
                'Эмали',
                'Грунтовки',
                'Монтажные пены',
                'Герметики',
                'Клеи',
                'Покрытия для дерева',
                'Лаки',
            ]
        },
        'climate-and-heating': {
            name: 'Климат и отопление',
            subcategories: [
                'Радиаторы отопления',
                'Теплый пол',
                'Электрические камины',
                'Вентиляция',
                'Тепловое оборудование',
                'Котлы отопительные',
                'Расширительные баки',
                'Насосы циркуляционные',
            ]
        },
        'tools': {
            name: 'Инструменты',
            subcategories: [
                'Электроинструмент',
                'Расходные материалы',
                'Малярный инструмент',
                'Штукатурный инструмент',
                'Шлифовальный инструмент',
                'Измерительный инструмент',
                'Шпатели',
                'Спецодежда и средства защиты',
            ]
        },
        'fasteners-and-accessories': {
            name: 'Крепеж и фурнитура',
            subcategories: [
                'Саморезы',
                'Дюбель',
                'Гвозди',
                'Анкер',
                'Болты',
                'Гайки',
                'Шуруп',
                'Шайбы',
            ]
        },
        'lighting': {
            name: 'Освещение',
            subcategories: [
                'Лампы',
                'Люстры',
                'Потолочные светильники',
                'Светодиодные светильники',
                'Подвесные светильники',
                'Светодиодные панели',
                'Бра',
                'Настольные лампы',
            ]
        },
        'electrical-goods': {
            name: 'Электротовары',
            subcategories: [
                'Розетки и выключатели',
                'Кабели и комплектующие',
                'Телекоммуникации',
                'Счетчики электроэнергии',
                'Автоматические выключатели',
                'Электрические щитки',
                'Тройники для розетки',
                'Удлинители электрические',
            ]
        }
    })
    function setProductToCart(item: string, count: number) {

    }
    function getProductCount(item: string) {

    }
    return { products, categories, getProductCount }
})
