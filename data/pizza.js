const pizzas = [
  {
    name: 'American Classic Cheeseburger',
    imageUrl: '{baseUrl}/menu/pizza/american-classic-cheeseburger.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Tomato Sauce', 'Mustard Sauce', 'Tomato', 'Beef Rasher', 'Beef Crumble', 'Onion', 'Sliced Cheese', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chicken Dominator',
    imageUrl: '{baseUrl}/menu/pizza/chicken-dominator.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Rustic Sauce', 'Green Pepper', 'Corn', 'Chili Chicken', 'Chicken Pepperoni', 'Chicken Sausage', 'Onion', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Grilled Beef Supreme',
    imageUrl: '{baseUrl}/menu/pizza/grilled-beef-supreme.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Barbeque Sauce', 'Cheese Sauce', 'Onion', 'Beef Burger', 'Jalapeno', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Cheesy Meatball Blast',
    imageUrl: '{baseUrl}/menu/pizza/cheesy-meatball-blast.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Barbeque Sauce', 'Liquid Cheese Sauce', 'Onion', 'Meatball', 'Parsley', 'Champignon Mushroom', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Ultimate Cheese Melt',
    imageUrl: '{baseUrl}/menu/pizza/ultimate-cheese-melt.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Liquid Cheese Sauce', 'Mozzarella Cheese', 'Cheddar Cheese Sauce', 'Ricotta Cheese', 'Mozzarella String', 'Parmesan Cheese', 'Parsley'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'NewYorker Alfredo Beef Mushroom Truffle',
    imageUrl: '{baseUrl}/menu/pizza/newyorker-alfredo-beef-mushroom-truffle.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Truffle Alfredo Sauce', 'Mozzarella Cheese', 'Beef Burger', 'Onion', 'Champignon Mushroom', 'Parmesan Cheese', 'Parsley'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'NewYorker Alfredo Chicken Mushroom Truffle',
    imageUrl: '{baseUrl}/menu/pizza/newyorker-alfredo-chicken-mushroom-truffle.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Truffle Alfredo Sauce', 'Mozzarella Cheese', 'Chili Chicken', 'Onion', 'Champignon Mushroom', 'Parmesan Cheese', 'Parsley'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Mexican Beef Nachos',
    imageUrl: '{baseUrl}/menu/pizza/mexican-beef-nachos.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Mozzarella Cheese', 'Cheddar Cheese Sauce', 'Liquid Cheese Sauce', 'Beef Burger', 'Beef Crumble', 'Onion', 'Tomato', 'Jalapeno', 'Mexican Seasoning', 'Nachos Chips'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Mexican Chicken Nachos',
    imageUrl: '{baseUrl}/menu/pizza/mexican-chicken-nachos.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Mozzarella Cheese', 'Cheddar Cheese Sauce', 'Liquid Cheese Sauce', 'Chili Chicken', 'Chicken Sausage', 'Onion', 'Tomato', 'Jalapeno', 'Mexican Seasoning', 'Nachos Chips'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'American Frankie Sausage',
    imageUrl: '{baseUrl}/menu/pizza/american-frankie-sausage.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Rustic Sauce', 'Mustard', 'Mozzarella Cheese', 'Meaty Frankfurter Beef Sausage', 'Beef Rasher', 'Beef Crumble', 'Onion', 'Green Pepper', 'Tomato', 'Mayonnaise', 'Parsley'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Plantt Pro Beef Rendang Special',
    imageUrl: '{baseUrl}/menu/pizza/plantt-pro-beef-rendang-special.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Plant Based Beef', 'Rendang Sauce', 'Mozzarella Cheese', 'Onion', 'Green Pepper', 'Cheddar Cheese Sauce'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'American All Star',
    imageUrl: '{baseUrl}/menu/pizza/american-all-star.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Tomato Sauce', 'Mustard Sauce', 'Jalapeno', 'Beef Rasher', 'Beef Crumble', 'Beef Pepperoni', 'Onion', 'Sliced Cheese', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chicken Lovers',
    imageUrl: '{baseUrl}/menu/pizza/chicken-lovers.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Tomato Sauce', 'Chicken Rasher', 'Parsley', 'Chicken Pepperoni', 'Marinated Chicken', 'Cheesy Bites', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Cheese Mania',
    imageUrl: '{baseUrl}/menu/pizza/cheese-mania.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Parsley', 'Extra Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Extravaganzza',
    imageUrl: '{baseUrl}/menu/pizza/extravaganzza.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Green Pepper', 'Onion', 'Black Olives', 'Mushroom', 'Beef Pepperoni', 'Beef Crumble', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Meatzza',
    imageUrl: '{baseUrl}/menu/pizza/meatzza.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Beef Pepperoni', 'Beef Sausage', 'Beef Crumble', 'Beef Rasher', 'Marinated Chicken', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Veggie Mania',
    imageUrl: '{baseUrl}/menu/pizza/veggie-mania.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Green Pepper', 'Corn', 'Mushroom', 'Tomato', 'Black Olives', 'Onion', 'Parsley', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Plantt Pro Jerky Beef Blackpepper',
    imageUrl: '{baseUrl}/menu/pizza/plantt-pro-jerky-beef-blackpepper.png',
    category: 'Pizza',
    ranges: 'Premium',
    details: {
      toppings: ['Plant Based Beef', 'Barbeque Sauce', 'Blackpepper Sauce', 'Mozzarella Cheese', 'Onion', 'Red Pepper', 'Cheddar Cheese Sauce'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 41364,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 79546,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 84091,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 84091,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 93182,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 97728,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 99546,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 99546,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chicken Delight',
    imageUrl: '{baseUrl}/menu/pizza/chicken-delight.png',
    category: 'Pizza',
    ranges: 'Favourite',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Onion', 'Tomato', 'Chili Chicken', 'Parsley', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 34091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 66819,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 71364,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 71364,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 85000,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 86819,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 87728,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Double Beef Burger',
    imageUrl: '{baseUrl}/menu/pizza/double-beef-burger.png',
    category: 'Pizza',
    ranges: 'Favourite',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Mustard Sauce', 'Tomato Sauce', 'Beef Crumble', 'Tomato', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 34091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 66819,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 71364,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 71364,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 85000,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 86819,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 87728,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Beef Pepperoni Feast',
    imageUrl: '{baseUrl}/menu/pizza/beef-pepperoni-feast.png',
    category: 'Pizza',
    ranges: 'Favourite',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Beef Pepperoni', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 34091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 66819,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 71364,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 71364,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 85000,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 86819,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 87728,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Tuna Delight',
    imageUrl: '{baseUrl}/menu/pizza/tuna-delight.png',
    category: 'Pizza',
    ranges: 'Favourite',
    details: {
      toppings: ['Hot Spicy Tuna', 'Mayonnaise', 'Onion', 'Red Pepper', 'Parsley', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 34091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 66819,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 71364,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 71364,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 85000,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 86819,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 87728,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Meat & Meat',
    imageUrl: '{baseUrl}/menu/pizza/meat-and-meat.png',
    category: 'Pizza',
    ranges: 'Favourite',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Parsley', 'Beef Pepperoni', 'Beef Sausage', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 34091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 66819,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 71364,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 71364,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 80455,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 85000,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 86819,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 87728,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Beef Delight',
    imageUrl: '{baseUrl}/menu/pizza/beef-delight.png',
    category: 'Pizza',
    ranges: 'Super Value',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Beef Rasher', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 19091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 42273,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 46819,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 46819,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 60455,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 62273,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 60455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Cheesy Sausage',
    imageUrl: '{baseUrl}/menu/pizza/cheesy-sausage.png',
    category: 'Pizza',
    ranges: 'Super Value',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Beef Sausage', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 19091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 42273,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 46819,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 46819,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 60455,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 62273,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 60455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chicken Pepperoni Feast',
    imageUrl: '{baseUrl}/menu/pizza/chicken-pepperoni-feast.png',
    category: 'Pizza',
    ranges: 'Super Value',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Chicken Pepperoni', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 19091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 42273,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 46819,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 46819,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 60455,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 62273,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 60455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Margherita',
    imageUrl: '{baseUrl}/menu/pizza/margherita.png',
    category: 'Pizza',
    ranges: 'Super Value',
    details: {
      toppings: ['Domino\'s Pizza Sauce', 'Tomato', 'Parsley', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 19091,
            },
          ],
        },
        {
          size: 'Medium',
          sizeInInch: 9,
          totalSlice: 6,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 42273,
            },
            {
              crust: 'Crunchy Thin Crust',
              desc: 'Roti pizza yang tipis dan renyah.',
              price: 46819,
            },
            {
              crust: 'PAN Pizza',
              desc: 'Roti pizza tebal dengan tekstur empuk dan taburan keju sampai ke pinggiran rotinya.',
              price: 46819,
            },
            {
              crust: 'Filled Chili Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus chili garlic di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Filled Sambal Mozzarella',
              desc: 'Roti pizza dengan keju mozzarella dan saus sambal di pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Cheese Burst',
              desc: 'Roti pizza dengan lelehan saus keju sampai ke pinggiran rotinya.',
              price: 56364,
            },
            {
              crust: 'Double Cheese Burst',
              desc: 'Dua lapis saus keju dalam roti pizza; Creamy Liquid Cheese Sauce & Premium Cheddar Cheese Sauce.',
              price: 60455,
            },
            {
              crust: 'Frankie Sausage Crust',
              desc: 'Roti pizza dengan Crunchy Bread Crumbs, Mustard Sauce, Rustic Sauce & Meaty Frankfurter Beef Sausage di pinggiran rotinya.',
              price: 62273,
            },
          ],
        },
        {
          size: 'Large',
          sizeInInch: 12,
          totalSlice: 8,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 60455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chili Chicken',
    imageUrl: '{baseUrl}/menu/pizza/chili-chicken.png',
    category: 'Pizza',
    ranges: 'Pizza Mania',
    details: {
      toppings: ['Sambal Sauce', 'Cheese Sauce', 'Parsley', 'Chili Chicken', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 15455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Chicken Sausage',
    imageUrl: '{baseUrl}/menu/pizza/chicken-sausage.png',
    category: 'Pizza',
    ranges: 'Pizza Mania',
    details: {
      toppings: ['Sambal Sauce', 'Cheese Sauce', 'Parsley', 'Chicken Sausage', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 15455,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Beef Rasher',
    imageUrl: '{baseUrl}/menu/pizza/beef-rasher.png',
    category: 'Pizza',
    ranges: 'Pizza Mania',
    details: {
      toppings: ['Sambal Sauce', 'Beef Rasher', 'Parsley', 'Cheese Sauce', 'Mozzarella Cheese'],
      sizes: [
        {
          size: 'Personal',
          sizeInInch: 6,
          totalSlice: 4,
          crusts: [
            {
              crust: 'Classic Handtossed',
              desc: 'Roti pizza dengan ketebalan sedang, lembut di bagian dalam namun renyah di bagian luar.',
              price: 15455,
            },
          ],
        },
      ],
    },
  },
];

module.exports = pizzas;
