# RuralConnect - Rural Community Platform

A full-stack web application designed to help rural communities easily find and access essential products like groceries, medicines, and other daily necessities.

## 🌟 Features

### Frontend Features
- **Responsive Homepage** with attractive UI/UX
- **User Authentication** - Complete signup/login flow
- **Product Catalog** - Browse and search products with filtering
- **Shopping Cart** - Add products to cart with quantity management
- **User Dashboard** - Profile management and order history
- **Service Listings** - Display available services with icons
- **News & Updates** - Latest news relevant to rural communities
- **Contact Form** - Get in touch with support team
- **Mobile Responsive** - Works seamlessly on all devices

### Backend Features
- **RESTful API** - Complete API endpoints for all functionality
- **User Management** - Registration, login, profile updates
- **Product Management** - CRUD operations for products
- **Order Management** - Place orders, track status
- **Contact Management** - Handle contact form submissions
- **News Management** - Manage news and updates

### Advanced Features
- **Persistent Shopping Cart** - Cart data saved in localStorage
- **Real-time Updates** - Dynamic content loading
- **Search & Filter** - Find products quickly
- **Order Tracking** - Track order status (pending, confirmed, delivered)
- **Profile Editing** - Update user information
- **Toast Notifications** - User feedback for all actions

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Node.js** - Runtime environment

### Database
- **SQL Schema** - Compatible with PostgreSQL, MySQL, SQLite
- **In-memory Storage** - For demo purposes (easily replaceable)

### State Management
- **React Context** - Global state for authentication and cart
- **localStorage** - Persistent client-side storage

## 📁 Project Structure

\`\`\`
rural-community-platform/
├── app/
│   ├── api/
│   │   ├── bookings/
│   │   │   └── route.ts
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── login/
│   │   │   └── route.ts
│   │   ├── news/
│   │   │   └── route.ts
│   │   ├── products/
│   │   │   └── route.ts
│   │   ├── profile/
│   │   │   └── route.ts
│   │   ├── register/
│   │   │   └── route.ts
│   │   └── services/
│   │       └── route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   └── toaster.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── news-section.tsx
│   ├── products-section.tsx
│   ├── profile-edit.tsx
│   └── services-section.tsx
├── hooks/
│   ├── use-auth.tsx
│   ├── use-cart.tsx
│   └── use-toast.ts
├── scripts/
│   ├── database-schema.sql
│   └── seed-data.sql
├── lib/
│   └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/rural-community-platform.git
   cd rural-community-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Database Setup (Optional)

For production use, set up a real database:

1. **Create a PostgreSQL/MySQL database**

2. **Run the schema script**
   \`\`\`bash
   # For PostgreSQL
   psql -d your_database -f scripts/database-schema.sql
   
   # For MySQL
   mysql -u username -p your_database < scripts/database-schema.sql
   \`\`\`

3. **Seed the database**
   \`\`\`bash
   # For PostgreSQL
   psql -d your_database -f scripts/seed-data.sql
   
   # For MySQL
   mysql -u username -p your_database < scripts/seed-data.sql
   \`\`\`

4. **Update API routes** to use your database connection

## 🔐 Demo Login

For testing purposes, use these demo credentials:

- **Email:** \`demo@example.com\`
- **Password:** \`password123\`

Or create a new account using the signup form.

## 📱 API Endpoints

### Authentication
- \`POST /api/register\` - User registration
- \`POST /api/login\` - User login
- \`PUT /api/profile\` - Update user profile

### Products & Services
- \`GET /api/products\` - Get all products
- \`GET /api/services\` - Get all services
- \`GET /api/news\` - Get news updates

### Orders & Contact
- \`GET /api/bookings\` - Get user orders
- \`POST /api/bookings\` - Place new order
- \`POST /api/contact\` - Submit contact form

## 🎯 Usage

### For Users
1. **Browse Products** - View available products on the homepage
2. **Create Account** - Sign up for a new account
3. **Add to Cart** - Add products to your shopping cart
4. **Place Orders** - Complete your purchase through the dashboard
5. **Track Orders** - Monitor order status in your dashboard
6. **Update Profile** - Edit your personal information

### For Developers
1. **API Integration** - Use the RESTful API endpoints
2. **Database Migration** - Run the provided SQL scripts
3. **Customization** - Modify components and styling as needed
4. **Deployment** - Deploy to Vercel, Netlify, or your preferred platform

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Set Environment Variables** (if using a real database)
   - Add your database connection string
   - Add any API keys or secrets

### Deploy to Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the \`.next\` folder to Netlify
   - Or connect your GitHub repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support, email support@ruralconnect.com or create an issue in this repository.

## 🔮 Future Enhancements

- [ ] Real-time chat support
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Multi-language support
- [ ] GPS-based delivery tracking

---

**Made with ❤️ for rural communities**
\`\`\`
