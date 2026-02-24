const User = require("./models/userModel");
const bcrypt = require("bcryptjs");
const connectDatabase = require("./config/database");

connectDatabase();

const seedUsers = async () => {
  try {
    // Delete existing users
    await User.deleteMany({});
    console.log("Users deleted successfully");

    // Create a test user
    const hashedPassword = await bcrypt.hash("testuser123", 10);
    
    const user = await User.create({
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
      avatar: {
        public_id: "sample_avatar",
        url: "https://via.placeholder.com/150",
      },
      role: "user",
    });

    console.log("Test user created successfully:");
    console.log("Email: test@example.com");
    console.log("Password: testuser123");
    console.log("Role: user");
    
    // Create an admin user
    const adminPassword = await bcrypt.hash("admin123", 10);
    
    const admin = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: adminPassword,
      avatar: {
        public_id: "sample_admin_avatar",
        url: "https://via.placeholder.com/150",
      },
      role: "admin",
    });

    console.log("\nAdmin user created successfully:");
    console.log("Email: admin@example.com");
    console.log("Password: admin123");
    console.log("Role: admin");
    
    process.exit();
  } catch (error) {
    console.log("Error seeding users:", error.message);
    process.exit(1);
  }
};

seedUsers();
