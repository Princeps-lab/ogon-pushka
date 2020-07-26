const products = [
  {
    title: 'Верх',
    id: 0,
    categories: [
      {
        id: 0,
        title: 'футболки',
        parentId: 0,
        products: [
          {
            id: 0,
            title: 'Футболка Flame',
            parentId: 0,
            price: 230,
            url: "/images/catalog/item4.jpg",
            size: [
              'M', 'S', 'L'
            ],
            colors: [
              {
                id: 0,
                colorTitle: "D5C0A9",
                url: "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: "A9D5C8",
                url: "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: "CCCCCC",
                url: "./images/catalog/item3.jpg"
              },
              {
                id: 3,
                colorTitle: "979797",
                url: "./images/catalog/item4.jpg"
              }
            ],
          },
          {
            id: 1,
            title: 'Футболка Play',
            parentId: 0,
            price: 250,
            url: "/images/catalog/item2.jpg",
            size: [
              'M', 'S', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: "D5C0A9",
                url: "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: "A9D5C8",
                url: "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: "CCCCCC",
                url: "./images/catalog/item3.jpg"
              },
            ],
          },

        ]
      },
      {
        id: 1,
        title: 'худи',
        parentId: 0,
        products: [
          {
            id: 0,
            title: 'Худи Basic',
            parentId: 1,
            price: 400,
            url: "/images/catalog/item2.jpg",
            size: [
              'XS', 'S', 'M', 'L',
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'D5C0A9',
                url: "./images/catalog/item1.jpg"
              },
              {
              id: 1,
              colorTitle: 'A9D5C8',
              url: "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '979797',
                url: "./images/catalog/item3.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Худи Twins',
            parentId: 1,
            price: 450,
            url: "/images/catalog/item2.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'D5C0A9',
                url: "./images/catalog/item1.jpg"
              },
              {
              id: 1,
              colorTitle: 'A9D5C8',
              url: "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '979797',
                url: "./images/catalog/item3.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Худи Flame',
            parentId: 1,
            price: 450,
            url: "/images/catalog/item3.jpg",
            size: [
              'S', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'D5C0A9',
                url: "./images/catalog/item1.jpg"
              },
              {
              id: 1,
              colorTitle: 'A9D5C8',
              url: "./images/catalog/item5.jpg"
              },
              {
                id: 2,
                colorTitle: '979797',
                url: "./images/catalog/item3.jpg"
              }
            ]
          }
        ],
      },
      {
        id: 2,
        title: 'Свитшоты',
        parentId: 0,
        products: [
          {
            id: 0,
            title: 'Свитшот 0309',
            parentId: 2,
            price: 500,
            url: "/images/catalog/item4.jpg",
            size: [
              'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'ffd800',
                url:  "./images/catalog/item2.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Свитшот Mate',
            parentId: 2,
            price: 500,
            url: "/images/catalog/item4.jpg",
            size: [
              'XS', 'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item7.jpg"
              },
              {
                id: 1,
                colorTitle: 'ffd800',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '000000',
                url:  "./images/catalog/item3.jpg"
              },
              {
                id: 3,
                colorTitle: '00b699',
                url:  "./images/catalog/item4.jpg"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'ветровки',
        parentId: 0,
        products: [
          {
            id: 0,
            title: 'Ветровка OST',
            parentId: 3,
            price: 600,
            url: "/images/catalog/item3.jpg",
            size: [
              'XS', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Ветровка Wildscar',
            parentId: 3,
            price: 600,
            url: "/images/catalog/item5.jpg",
            size: [
              'XS', 'M', 'L', 'XL'
            ],
            colorTitle: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Ветровка Zakuda',
            parentId: 3,
            price: 700,
            url: "/images/catalog/item7.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colorTitle: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'куртки',
        parentId: 0,
        products: [
          {
            id: 0,
            title: 'куртка Borra',
            parentId: 4,
            price: 1500,
            url: "/images/catalog/item1.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '99ff0b',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item2.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Куртка Frost',
            parentId: 4,
            price: 1500,
            url: "/images/catalog/item2.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Куртка Reflective',
            parentId: 4,
            price: 1500,
            url: "/images/catalog/item7.jpg",
            size: [
              'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'EEEEEE',
                url:  "./images/catalog/item2.jpg"
              }
            ]
          }
        ]
      },
    ]
  },
  {
    title: 'Низ',
    id: 1,
    categories: [
      {
        id: 5,
        title: 'шорты',
        parentId: 1,
        products: [
          {
            id: 0,
            title: 'Breet',
            parentId: 5,
            price: 300,
            url: "/images/catalog/item2.jpg",
            size: [
              'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'ffdcae',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'e90300',
                url:  "./images/catalog/item2.jpg",
              },
              {
                id: 2,
                colorTitle: '00bc71',
                url:  "./images/catalog/item3.jpg",
              }
            ]
          },
          {
            id: 1,
            title: 'Pants',
            parentId: 5,
            price: 400,
            url: "/images/catalog/item1.jpg",
            size: [
              'S', 'M' , 'L'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Prozo',
            parentId: 5,
            price: 350,
            url: "/images/catalog/item4.jpg",
            size: [
              'S', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          }
        ]
      },
      {
        id: 6,
        title: 'спортивные штаны',
        parentId: 1,
        products: [
          {
            id: 0,
            title: 'Flare',
            parentId: 6,
            price: 400,
            url: "/images/catalog/item6.jpg",
            size: [
              'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Joker',
            parentId: 6,
            price: 400,
            url: "/images/catalog/item3.jpg",
            size: [
              'S', 'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'fc0000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Wline',
            parentId: 6,
            price: 500,
            url: "/images/catalog/item2.jpg",
            size: [
              'S', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: 'fc0000',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 0,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item3.jpg"
              }
            ]
          }
        ]
      },
      {
        id: 7,
        title: 'брюки',
        parentId: 1,
        products: [
          {
            id: 0,
            title: 'Angry Flash',
            parentId: 7,
            price: 700,
            url: "/images/catalog/item3.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Zuran',
            parentId: 7,
            price: 600,
            url: "/images/catalog/item7.jpg",
            size: [
              'S', 'M', 'L'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'EEEEEE',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '01005c',
                url:  "./images/catalog/item3.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Brave',
            parentId: 7,
            price: 700,
            url: "/images/catalog/item3.jpg",
            size: [
              'M', 'L', 'XL'
            ],
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          }
        ]
      },
    ]
  },
  {
    title: 'Аксессуары',
    id: 2,
    categories: [
      {
        id: 8,
        title: 'сумки',
        parentId: 1,
        products: [
          {
            id: 0,
            title: 'Кобура',
            parentId: 8,
            price: 300,
            url: "/images/catalog/item3.jpg",
            colors: [
              {
                id: 0,
                colorTitle: '000000',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          },
          {
            id: 1,
            title: 'Месенджер Combo',
            parentId: 8,
            price: 500,
            url: "/images/catalog/item2.jpg",
            colors: [
              {
                id: 0,
                colorTitle: 'fc0000',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'e9e200',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '00a039',
                url:  "./images/catalog/item3.jpg"
              },
              {
                id: 3,
                colorTitle: '0054ab',
                url:  "./images/catalog/item4.jpg"
              },
              {
                id: 4,
                colorTitle: '000000',
                url:  "./images/catalog/item5.jpg"
              }
            ]
          },
          {
            id: 2,
            title: 'Месенджер Sample',
            parentId: 8,
            price: 550,
            url: "/images/catalog/item4.jpg",
            colors: [
              {
                id: 2,
                colorTitle: '00a039',
                url:  "./images/catalog/item3.jpg"
              },
              {
                id: 3,
                colorTitle: '0054ab',
                url:  "./images/catalog/item4.jpg"
              },
              {
                id: 4,
                colorTitle: '000000',
                url:  "./images/catalog/item5.jpg"
              }
            ]
          }
        ]
      },
      {
        id: 9,
        title: 'носки',
        parentId: 1,
        products: [
          {
            id: 0,
            title: 'Огонь',
            parentId: 9,
            price: 100,
            url: "/images/catalog/item7.jpg",
            colors: [
              {
                id: 0,
                colorTitle: '8c5cff',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'ff701c',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: '000000',
                url:  "./images/catalog/item3.jpg"
              },
            ]
          },
          {
            id: 1,
            title: 'Шальная Императрица',
            parentId: 9,
            price: 100,
            url: "/images/catalog/item1.jpg",
            colors: [
              {
                id: 0,
                colorTitle: 'f200f7',
                url:  "./images/catalog/item1.jpg"
              },
              {
                id: 1,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item2.jpg"
              },
              {
                id: 2,
                colorTitle: 'e6cdff',
                url:  "./images/catalog/item3.jpg"
              },
            ]
          },
          {
            id: 2,
            title: 'Пицца',
            parentId: 9,
            price: 100,
            url: "/images/catalog/item4.jpg",
            colors: [
              {
                id: 0,
                colorTitle: 'FFFFFF',
                url:  "./images/catalog/item1.jpg"
              }
            ]
          }
        ]
      },
    ]
  },
]

export default products;