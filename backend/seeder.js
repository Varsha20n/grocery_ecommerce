const Product = require("./models/productModel");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config/config.env") });

const connectDatabase = require("./config/database");

connectDatabase();

const products = [
  // ==================== FRUITS (10 products) ====================
  {
    name: "Fresh Organic Apples",
    description: "Fresh organic apples from local farms. Sweet and crispy.",
    price: 150,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_apple",
        url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
      },
    ],
    category: "Fruits",
    Stock: 50,
    numOfReviews: 10,
  },
  {
    name: "Organic Bananas",
    description: "Fresh organic bananas. Rich in potassium and nutrients.",
    price: 60,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_banana",
        url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      },
    ],
    category: "Fruits",
    Stock: 100,
    numOfReviews: 5,
  },
  {
    name: "Fresh Oranges (1 kg)",
    description: "Juicy fresh oranges. Rich in Vitamin C.",
    price: 120,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_orange",
        url: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400",
      },
    ],
    category: "Fruits",
    Stock: 60,
    numOfReviews: 12,
  },
  {
    name: "Sweet Mangoes (1 kg)",
    description: "Delicious sweet mangoes. Perfect for summer.",
    price: 200,
    ratings: 4.8,
    images: [
      {
        public_id: "sample_mango",
        url: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
      },
    ],
    category: "Fruits",
    Stock: 40,
    numOfReviews: 18,
  },
  {
    name: "Fresh Grapes (500g)",
    description: "Sweet and seedless grapes. Perfect for snacking.",
    price: 180,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_grapes",
        url: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400",
      },
    ],
    category: "Fruits",
    Stock: 45,
    numOfReviews: 8,
  },
  {
    name: "Watermelon (Whole)",
    description: "Fresh juicy watermelon. Perfect for hot days.",
    price: 150,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_watermelon",
        url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
      },
    ],
    category: "Fruits",
    Stock: 25,
    numOfReviews: 15,
  },
  {
    name: "Pomegranate (500g)",
    description: "Fresh pomegranate seeds. Rich in antioxidants.",
    price: 220,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_pomegranate",
        url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400",
      },
    ],
    category: "Fruits",
    Stock: 35,
    numOfReviews: 11,
  },
  {
    name: "Papaya (1 piece)",
    description: "Ripe papaya. Good for digestion.",
    price: 80,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_papaya",
        url: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400",
      },
    ],
    category: "Fruits",
    Stock: 30,
    numOfReviews: 7,
  },
  {
    name: "Pineapple (1 piece)",
    description: "Sweet tropical pineapple. Rich in enzymes.",
    price: 100,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_pineapple",
        url: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400",
      },
    ],
    category: "Fruits",
    Stock: 20,
    numOfReviews: 9,
  },
  {
    name: "Guava (500g)",
    description: "Fresh guava. High in Vitamin C.",
    price: 90,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_guava",
        url: "https://images.unsplash.com/photo-1536511132770-e506a7bc3a36?w=400",
      },
    ],
    category: "Fruits",
    Stock: 50,
    numOfReviews: 6,
  },

  // ==================== VEGETABLES (10 products) ====================
  {
    name: "Organic Tomatoes (1 kg)",
    description: "Fresh organic tomatoes. Perfect for cooking.",
    price: 40,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_tomato",
        url: "https://images.unsplash.com/photo-1546470427-227c7a715614?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 60,
    numOfReviews: 12,
  },
  {
    name: "Potatoes (2 kg)",
    description: "Fresh potatoes. Versatile for cooking.",
    price: 50,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_potato",
        url: "https://images.unsplash.com/photo-1518977676601-b53f82beb255?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 70,
    numOfReviews: 18,
  },
  {
    name: "Fresh Carrots (1 kg)",
    description: "Crunchy fresh carrots. Rich in vitamins.",
    price: 45,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_carrot",
        url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 55,
    numOfReviews: 14,
  },
  {
    name: "Fresh Spinach (250g)",
    description: "Fresh organic spinach. Rich in iron.",
    price: 30,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_spinach",
        url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 45,
    numOfReviews: 9,
  },
  {
    name: "Fresh Onions (2 kg)",
    description: "Fresh onions. Essential for cooking.",
    price: 60,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_onion",
        url: "https://images.unsplash.com/photo-1518977676601-b53f82beb255?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 80,
    numOfReviews: 19,
  },
  {
    name: "Fresh Broccoli (500g)",
    description: "Nutritious broccoli. Rich in vitamins and fiber.",
    price: 80,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_broccoli",
        url: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 40,
    numOfReviews: 11,
  },
  {
    name: "Fresh Cauliflower (1 piece)",
    description: "Fresh white cauliflower. Perfect for curries.",
    price: 50,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_cauliflower",
        url: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 35,
    numOfReviews: 8,
  },
  {
    name: "Green Bell Peppers (500g)",
    description: "Fresh green bell peppers. Crunchy and flavorful.",
    price: 70,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_bellpepper",
        url: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 50,
    numOfReviews: 10,
  },
  {
    name: "Fresh Cabbage (1 piece)",
    description: "Fresh green cabbage. Great for salads and stir-fries.",
    price: 35,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_cabbage",
        url: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 60,
    numOfReviews: 7,
  },
  {
    name: "Fresh Cucumber (500g)",
    description: "Cool and refreshing cucumber. Perfect for salads.",
    price: 30,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_cucumber",
        url: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400",
      },
    ],
    category: "Vegetables",
    Stock: 75,
    numOfReviews: 13,
  },

  // ==================== DAIRY (10 products) ====================
  {
    name: "Fresh Milk (1 Liter)",
    description: "Pure fresh milk from dairy farms. No preservatives.",
    price: 45,
    ratings: 4.7,
    images: [
      {
        public_id: "sample_milk",
        url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      },
    ],
    category: "Dairy",
    Stock: 80,
    numOfReviews: 25,
  },
  {
    name: "Fresh Eggs (Dozen)",
    description: "Farm fresh eggs. High protein content.",
    price: 80,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_eggs",
        url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
      },
    ],
    category: "Dairy",
    Stock: 100,
    numOfReviews: 30,
  },
  {
    name: "Greek Yogurt (500g)",
    description: "Creamy Greek yogurt. High in protein.",
    price: 120,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_yogurt",
        url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      },
    ],
    category: "Dairy",
    Stock: 40,
    numOfReviews: 22,
  },
  {
    name: "Cheese Slices (200g)",
    description: "Processed cheese slices. Perfect for sandwiches.",
    price: 150,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_cheese",
        url: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
      },
    ],
    category: "Dairy",
    Stock: 35,
    numOfReviews: 16,
  },
  {
    name: "Butter (500g)",
    description: "Fresh dairy butter. Rich and creamy.",
    price: 250,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_butter",
        url: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
      },
    ],
    category: "Dairy",
    Stock: 40,
    numOfReviews: 24,
  },
  {
    name: "Paneer (200g)",
    description: "Fresh cottage cheese. Perfect for Indian dishes.",
    price: 180,
    ratings: 4.7,
    images: [
      {
        public_id: "sample_paneer",
        url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
    ],
    category: "Dairy",
    Stock: 30,
    numOfReviews: 19,
  },
  {
    name: "Curd (500g)",
    description: "Fresh homemade curd. Good for digestion.",
    price: 40,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_curd",
        url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      },
    ],
    category: "Dairy",
    Stock: 60,
    numOfReviews: 14,
  },
  {
    name: "Cream (200ml)",
    description: "Fresh dairy cream. Perfect for desserts.",
    price: 90,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_cream",
        url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      },
    ],
    category: "Dairy",
    Stock: 25,
    numOfReviews: 8,
  },
  {
    name: "Buttermilk (500ml)",
    description: "Refreshing buttermilk. Great for summer.",
    price: 35,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_buttermilk",
        url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      },
    ],
    category: "Dairy",
    Stock: 50,
    numOfReviews: 11,
  },
  {
    name: "Cheese Block (500g)",
    description: "Premium cheese block. Perfect for cooking.",
    price: 350,
    ratings: 4.8,
    images: [
      {
        public_id: "sample_cheeseblock",
        url: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
      },
    ],
    category: "Dairy",
    Stock: 20,
    numOfReviews: 17,
  },

  // ==================== BAKERY (10 products) ====================
  {
    name: "Brown Bread",
    description: "Healthy brown bread. Rich in fiber.",
    price: 35,
    ratings: 4.0,
    images: [
      {
        public_id: "sample_bread",
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      },
    ],
    category: "Bakery",
    Stock: 40,
    numOfReviews: 8,
  },
  {
    name: "White Bread",
    description: "Soft white bread. Perfect for sandwiches.",
    price: 30,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_whitebread",
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      },
    ],
    category: "Bakery",
    Stock: 50,
    numOfReviews: 12,
  },
  {
    name: "Multigrain Bread",
    description: "Nutritious multigrain bread. Healthy choice.",
    price: 45,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_multigrain",
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      },
    ],
    category: "Bakery",
    Stock: 35,
    numOfReviews: 9,
  },
  {
    name: "Croissants (Pack of 4)",
    description: "Buttery French croissants. Flaky and delicious.",
    price: 120,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_croissant",
        url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
      },
    ],
    category: "Bakery",
    Stock: 25,
    numOfReviews: 15,
  },
  {
    name: "Muffins (Pack of 6)",
    description: "Delicious blueberry muffins. Perfect for breakfast.",
    price: 150,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_muffin",
        url: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",
      },
    ],
    category: "Bakery",
    Stock: 30,
    numOfReviews: 18,
  },
  {
    name: "Donuts (Pack of 6)",
    description: "Sweet glazed donuts. Treat yourself.",
    price: 180,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_donut",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
      },
    ],
    category: "Bakery",
    Stock: 20,
    numOfReviews: 22,
  },
  {
    name: "Bagels (Pack of 4)",
    description: "Fresh baked bagels. Perfect with cream cheese.",
    price: 100,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_bagel",
        url: "https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=400",
      },
    ],
    category: "Bakery",
    Stock: 25,
    numOfReviews: 7,
  },
  {
    name: "Pizza Base (Pack of 2)",
    description: "Ready to use pizza base. Make pizza at home.",
    price: 80,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_pizzabase",
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
      },
    ],
    category: "Bakery",
    Stock: 40,
    numOfReviews: 11,
  },
  {
    name: "Burger Buns (Pack of 4)",
    description: "Soft burger buns. Perfect for homemade burgers.",
    price: 70,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_burgerbun",
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      },
    ],
    category: "Bakery",
    Stock: 35,
    numOfReviews: 9,
  },
  {
    name: "Cookies (Pack of 12)",
    description: "Crunchy chocolate chip cookies. Perfect snack.",
    price: 130,
    ratings: 4.7,
    images: [
      {
        public_id: "sample_cookies",
        url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      },
    ],
    category: "Bakery",
    Stock: 45,
    numOfReviews: 25,
  },

  // ==================== GROCERY (10 products) ====================
  {
    name: "Basmati Rice (5 kg)",
    description: "Premium quality basmati rice. Long grains, aromatic.",
    price: 450,
    ratings: 4.8,
    images: [
      {
        public_id: "sample_rice",
        url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      },
    ],
    category: "Grocery",
    Stock: 30,
    numOfReviews: 20,
  },
  {
    name: "Groundnut Oil (1 Liter)",
    description: "Pure groundnut oil for cooking. Healthy option.",
    price: 180,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_oil",
        url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      },
    ],
    category: "Grocery",
    Stock: 45,
    numOfReviews: 15,
  },
  {
    name: "Whole Wheat Pasta (500g)",
    description: "Healthy whole wheat pasta. High in fiber.",
    price: 85,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_pasta",
        url: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400",
      },
    ],
    category: "Grocery",
    Stock: 60,
    numOfReviews: 11,
  },
  {
    name: "Organic Honey (500g)",
    description: "Pure organic honey. Natural sweetener.",
    price: 250,
    ratings: 4.9,
    images: [
      {
        public_id: "sample_honey",
        url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
      },
    ],
    category: "Grocery",
    Stock: 25,
    numOfReviews: 35,
  },
  {
    name: "Almonds (500g)",
    description: "Premium quality almonds. Rich in nutrients.",
    price: 450,
    ratings: 4.7,
    images: [
      {
        public_id: "sample_almonds",
        url: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400",
      },
    ],
    category: "Grocery",
    Stock: 30,
    numOfReviews: 28,
  },
  {
    name: "Sugar (1 kg)",
    description: "Pure white sugar. Essential for cooking.",
    price: 45,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_sugar",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      },
    ],
    category: "Grocery",
    Stock: 100,
    numOfReviews: 8,
  },
  {
    name: "Salt (1 kg)",
    description: "Iodized table salt. Essential for cooking.",
    price: 25,
    ratings: 4.0,
    images: [
      {
        public_id: "sample_salt",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      },
    ],
    category: "Grocery",
    Stock: 150,
    numOfReviews: 5,
  },
  {
    name: "Turmeric Powder (200g)",
    description: "Pure turmeric powder. Essential spice.",
    price: 60,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_turmeric",
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
      },
    ],
    category: "Grocery",
    Stock: 80,
    numOfReviews: 12,
  },
  {
    name: "Red Chili Powder (200g)",
    description: "Spicy red chili powder. Adds heat to dishes.",
    price: 70,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_chili",
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
      },
    ],
    category: "Grocery",
    Stock: 70,
    numOfReviews: 14,
  },
  {
    name: "Lentils (1 kg)",
    description: "Mixed lentils. Rich in protein.",
    price: 120,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_lentils",
        url: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400",
      },
    ],
    category: "Grocery",
    Stock: 55,
    numOfReviews: 19,
  },

  // ==================== BEVERAGES (10 products) ====================
  {
    name: "Orange Juice (1 Liter)",
    description: "Freshly squeezed orange juice. No added sugar.",
    price: 120,
    ratings: 4.1,
    images: [
      {
        public_id: "sample_juice",
        url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      },
    ],
    category: "Beverages",
    Stock: 35,
    numOfReviews: 7,
  },
  {
    name: "Green Tea (25 bags)",
    description: "Premium green tea bags. Antioxidant rich.",
    price: 180,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_tea",
        url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
      },
    ],
    category: "Beverages",
    Stock: 50,
    numOfReviews: 13,
  },
  {
    name: "Coffee Powder (200g)",
    description: "Premium coffee powder. Rich aroma.",
    price: 250,
    ratings: 4.7,
    images: [
      {
        public_id: "sample_coffee",
        url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      },
    ],
    category: "Beverages",
    Stock: 40,
    numOfReviews: 22,
  },
  {
    name: "Apple Juice (1 Liter)",
    description: "Fresh apple juice. No preservatives.",
    price: 110,
    ratings: 4.2,
    images: [
      {
        public_id: "sample_applejuice",
        url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      },
    ],
    category: "Beverages",
    Stock: 30,
    numOfReviews: 9,
  },
  {
    name: "Mango Juice (1 Liter)",
    description: "Sweet mango juice. Tropical flavor.",
    price: 130,
    ratings: 4.5,
    images: [
      {
        public_id: "sample_mangojuice",
        url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      },
    ],
    category: "Beverages",
    Stock: 25,
    numOfReviews: 16,
  },
  {
    name: "Lemonade (1 Liter)",
    description: "Refreshing lemonade. Perfect for summer.",
    price: 80,
    ratings: 4.3,
    images: [
      {
        public_id: "sample_lemonade",
        url: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400",
      },
    ],
    category: "Beverages",
    Stock: 45,
    numOfReviews: 11,
  },
  {
    name: "Coconut Water (1 Liter)",
    description: "Natural coconut water. Hydrating and healthy.",
    price: 90,
    ratings: 4.6,
    images: [
      {
        public_id: "sample_coconutwater",
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      },
    ],
    category: "Beverages",
    Stock: 35,
    numOfReviews: 14,
  },
  {
    name: "Black Tea (100g)",
    description: "Premium black tea leaves. Strong flavor.",
    price: 150,
    ratings: 4.4,
    images: [
      {
        public_id: "sample_blacktea",
        url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
      },
    ],
    category: "Beverages",
    Stock: 60,
    numOfReviews: 8,
  },
  {
    name: "Energy Drink (250ml)",
    description: "Boost your energy. Perfect for active lifestyle.",
    price: 100,
    ratings: 4.0,
    images: [
      {
        public_id: "sample_energydrink",
        url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400",
      },
    ],
    category: "Beverages",
    Stock: 50,
    numOfReviews: 20,
  },
  {
    name: "Mineral Water (1 Liter)",
    description: "Pure mineral water. Stay hydrated.",
    price: 20,
    ratings: 4.8,
    images: [
      {
        public_id: "sample_water",
        url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400",
      },
    ],
    category: "Beverages",
    Stock: 200,
    numOfReviews: 30,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    console.log("Products deleted successfully");

    await Product.insertMany(products);
    console.log("Products seeded successfully");
    
    process.exit();
  } catch (error) {
    console.log("Error seeding products:", error.message);
    process.exit(1);
  }
};

seedProducts();
