const Product = require("./models/productModel");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config/config.env") });

const connectDatabase = require("./config/database");

connectDatabase();

const products = [
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
