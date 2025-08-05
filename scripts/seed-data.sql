-- Seed data for Rural Community Platform
-- This script populates the database with initial data

-- Insert sample users
INSERT INTO users (name, email, phone, password_hash) VALUES
('Demo User', 'demo@example.com', '+91 98765 43210', '$2b$10$hashedpassword123'),
('John Farmer', 'john@example.com', '+91 98765 43211', '$2b$10$hashedpassword456'),
('Mary Village', 'mary@example.com', '+91 98765 43212', '$2b$10$hashedpassword789');

-- Insert sample products
INSERT INTO products (name, price, category, image_url, in_stock, description) VALUES
('Fresh Vegetables Bundle', 150.00, 'Groceries', '/placeholder.svg?height=200&width=200', true, 'Fresh seasonal vegetables from local farms'),
('Rice (5kg)', 200.00, 'Groceries', '/placeholder.svg?height=200&width=200', true, 'Premium quality rice, 5kg pack'),
('Basic Medicine Kit', 300.00, 'Healthcare', '/placeholder.svg?height=200&width=200', true, 'Essential medicines and first aid supplies'),
('Wheat Flour (10kg)', 350.00, 'Groceries', '/placeholder.svg?height=200&width=200', true, 'High quality wheat flour, 10kg pack'),
('Cooking Oil (1L)', 120.00, 'Groceries', '/placeholder.svg?height=200&width=200', true, 'Pure cooking oil, 1 liter bottle'),
('Dairy Products Bundle', 180.00, 'Groceries', '/placeholder.svg?height=200&width=200', false, 'Fresh milk and dairy products'),
('Pulse & Lentils Mix', 250.00, 'Groceries', '/placeholder.svg?height=200&width=200', true, 'Mixed lentils and pulses pack'),
('Hygiene Essentials', 200.00, 'Personal Care', '/placeholder.svg?height=200&width=200', true, 'Basic hygiene products bundle');

-- Insert sample services
INSERT INTO services (name, description, category) VALUES
('Home Delivery', 'Fast and reliable delivery to your doorstep', 'logistics'),
('Healthcare Products', 'Essential medicines and health supplies', 'healthcare'),
('Grocery Shopping', 'Fresh groceries and daily essentials', 'grocery'),
('24/7 Support', 'Round-the-clock customer assistance', 'support'),
('Community Network', 'Connect with local suppliers and neighbors', 'community'),
('Location Services', 'Find nearest stores and service centers', 'location');

-- Insert sample news
INSERT INTO news (title, description, category, published_date) VALUES
('New Agricultural Subsidies Announced for Rural Farmers', 'Government announces increased subsidies and support programs for small-scale farmers in rural areas, including seed distribution and equipment loans.', 'Agriculture', '2024-01-15'),
('Mobile Health Clinics Expand to Remote Villages', 'Healthcare initiative brings medical services directly to remote communities, providing essential health checkups and medicine distribution.', 'Healthcare', '2024-01-12'),
('Digital Literacy Program Launches in Rural Schools', 'New educational initiative aims to bridge the digital divide by providing computer training and internet access to rural school children.', 'Education', '2024-01-10');

-- Insert sample bookings
INSERT INTO bookings (user_id, total, status, created_at) VALUES
(1, 440.00, 'delivered', '2024-01-10 10:00:00'),
(1, 320.00, 'confirmed', '2024-01-12 14:30:00'),
(2, 550.00, 'pending', '2024-01-15 09:15:00');

-- Insert sample booking items
INSERT INTO booking_items (booking_id, product_name, quantity, price) VALUES
(1, 'Rice (5kg)', 1, 200.00),
(1, 'Cooking Oil (1L)', 2, 120.00),
(2, 'Basic Medicine Kit', 1, 300.00),
(2, 'Hygiene Essentials', 1, 200.00),
(3, 'Fresh Vegetables Bundle', 2, 150.00),
(3, 'Wheat Flour (10kg)', 1, 350.00);
