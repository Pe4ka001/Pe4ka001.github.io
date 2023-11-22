document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('cont');

  const products = [
    {
      name: 'Спатифиллум',
      description: 'Блестящие зеленые листья, белые цветы.',
      price: '950 рублей',
      image: 'img/spathiphyllum.png',
    },
    {
      name: 'Кактус',
      description: 'Прост в уходе, разнообразные формы.',
      price: '400 рублей',
      image: 'img/cactus.png',
    },
    {
      name: 'Роза',
      description: 'Кустарник с красивыми розовыми цветами.',
      price: '1300 рублей',
      image: 'img/rose.png',
    },
    {
      name: 'Фикус',
      description: 'Темно-зеленые листья, воздушные корни.',
      price: '700 рублей',
      image: 'img/ficus.png',
    },
    {
      name: 'Пальма',
      description: 'Изящные перистые листья. Тропическая атмосфера.',
      price: '1100 рублей',
      image: 'img/palm.png',
    },
    {
      name: 'Суккулент',
      description: 'Маленькие сочные розетки. Идеальны для подарков.',
      price: '550 рублей',
      image: 'img/succulent.png',
    },
    {
      name: 'Орхидея',
      description: 'Красивые цветы, элегантный вид. Легкий уход.',
      price: '1800 рублей',
      image: 'img/orchid.png',
    },
    {
      name: 'Антуриум',
      description: 'Яркие красные и розовые цветы. Эффектный декор.',
      price: '1000 рублей',
      image: 'img/anthurium.png',
    },
    {
      name: 'Цикламен',
      description: 'Цветы в форме бабочек. Украшают интерьер.',
      price: '800 рублей',
      image: 'img/cyclamen.png',
    },
    {
      name: 'Драцена',
      description: 'Длинные листья, полосатый узор. Очищает воздух.',
      price: '600 рублей',
      image: 'img/dracaena.png',
    },
    {
      name: 'Замокулька',
      description: 'Круглые листья, необычная форма. Устойчива к тени.',
      price: '450 рублей',
      image: 'img/zzplant.png',
    },
    {
      name: 'Фаллениопсис',
      description: 'Разнообразные окраски цветов. Идеальна для подарков.',
      price: '1400 рублей',
      image: 'img/phalaenopsis.png',
    },
  ];

  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('productImage');
    image.src = product.image;
    image.alt = 'Product Image';

    const name = document.createElement('div');
    name.classList.add('productName');
    name.textContent = product.name;

    const description = document.createElement('div');
    description.classList.add('productDescription');
    description.textContent = product.description;

    const price = document.createElement('div');
    price.classList.add('productPrice');
    price.textContent = product.price;

    const buyButton = document.createElement('button');
    buyButton.classList.add('btn-buy');
    buyButton.textContent = 'КУПИТЬ';
    buyButton.addEventListener('click', function () {
      window.location.href = `bag.html?productName=${product.name}`;
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(buyButton);
    card.appendChild(price);

    container.appendChild(card);
  });
});
