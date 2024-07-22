import React from "react";

const MenuItem = ({ name, price, description }) => (
  <div className='mb-4'>
    <div className='flex justify-between'>
      <span className='font-semibold'>{name}</span>
      <span className='font-semibold'>
        ${price.toFixed(2)}
      </span>
    </div>
    <p className='text-sm text-gray-600'>{description}</p>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className='w-full md:w-[450px] h-auto mb-8'>
    <h2 className='font-bold text-2xl mb-4 border-b-2 border-gray-300 pb-2'>
      {title}
    </h2>
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
);

const MenuLists = () => {
  const menuData = {
    starters: [
      {
        name: "Bruschetta",
        price: 8.99,
        description:
          "Toasted bread topped with fresh tomatoes, garlic, and basil",
      },
      {
        name: "Calamari",
        price: 11.99,
        description:
          "Crispy fried squid served with marinara sauce",
      },
      {
        name: "Spinach Artichoke Dip",
        price: 9.99,
        description:
          "Creamy dip served with tortilla chips",
      },
      {
        name: "Stuffed Mushrooms",
        price: 10.99,
        description:
          "Mushroom caps filled with herbs and cheese",
      },
      {
        name: "Chicken Wings",
        price: 12.99,
        description:
          "Choose from BBQ, Buffalo, or Garlic Parmesan",
      },
      {
        name: "Shrimp Cocktail",
        price: 13.99,
        description:
          "Chilled shrimp served with cocktail sauce",
      },
    ],
    mains: [
      {
        name: "Grilled Salmon",
        price: 22.99,
        description:
          "Served with roasted vegetables and lemon butter sauce",
      },
      {
        name: "Chicken Parmesan",
        price: 18.99,
        description:
          "Breaded chicken breast topped with marinara and mozzarella",
      },
      {
        name: "Filet Mignon",
        price: 29.99,
        description:
          "8oz tenderloin served with mashed potatoes and asparagus",
      },
      {
        name: "Vegetable Stir Fry",
        price: 16.99,
        description:
          "Mixed vegetables in a savory sauce over rice",
      },
      {
        name: "Lobster Ravioli",
        price: 24.99,
        description:
          "Stuffed pasta in a creamy tomato sauce",
      },
      {
        name: "BBQ Ribs",
        price: 21.99,
        description:
          "Full rack of ribs with coleslaw and fries",
      },
    ],
    drinks: [
      {
        name: "Classic Margarita",
        price: 9.99,
        description: "Tequila, lime juice, and triple sec",
      },
      {
        name: "Red Wine Sangria",
        price: 8.99,
        description: "House-made with fresh fruits",
      },
      {
        name: "Craft Beer",
        price: 6.99,
        description: "Ask about our rotating selection",
      },
      {
        name: "Mojito",
        price: 10.99,
        description: "Rum, mint, lime, and soda water",
      },
      {
        name: "Iced Tea",
        price: 3.99,
        description: "Sweet or unsweetened",
      },
      {
        name: "Lemonade",
        price: 3.99,
        description: "Freshly squeezed",
      },
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        price: 8.99,
        description:
          "Warm chocolate cake with a gooey center",
      },
      {
        name: "New York Cheesecake",
        price: 7.99,
        description:
          "Classic cheesecake with graham cracker crust",
      },
      {
        name: "Tiramisu",
        price: 8.99,
        description: "Italian coffee-flavored dessert",
      },
      {
        name: "Apple Pie",
        price: 7.99,
        description: "Served warm with vanilla ice cream",
      },
      {
        name: "Crème Brûlée",
        price: 8.99,
        description:
          "Rich custard topped with caramelized sugar",
      },
      {
        name: "Fruit Sorbet",
        price: 6.99,
        description: "Ask about our seasonal flavors",
      },
    ],
  };

  return (
    <div className='flex items-center justify-center mt-8 w-full'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-8 p-4 max-w-7xl'>
        <MenuSection
          title='Starters'
          items={menuData.starters}
        />
        <MenuSection
          title='Main Courses'
          items={menuData.mains}
        />
        <MenuSection
          title='Drinks'
          items={menuData.drinks}
        />
        <MenuSection
          title='Desserts'
          items={menuData.desserts}
        />
      </div>
    </div>
  );
};

export default MenuLists;
