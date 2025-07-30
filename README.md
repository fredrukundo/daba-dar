# Daba-Dar

A full-stack property management application built with Next.js and Node.js, featuring AWS Amplify authentication and Prisma database integration.

## 🏗️ Project Structure

This is a monorepo containing:

- **Client** (`/client`) - Next.js 14+ frontend application with TypeScript
- **Server** (`/server`) - Node.js backend API with Prisma ORM

## 🚀 Features

- **Property Management**: Handle property listings, applications, and lease management
- **User Authentication**: AWS Amplify authentication with custom auth logic
- **Investor Portal**: Dedicated interface for property investors
- **Payment Processing**: Integrated payment management system
- **Location Services**: Geographic location and mapping features
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **AWS Amplify UI** for authentication
- **React Hook Form** with validation

### Backend
- **Node.js** with TypeScript
- **Prisma ORM** for database management
- **PostgreSQL** (inferred from Prisma setup)
- **RESTful API** architecture

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- AWS account (for Amplify services)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fredrukundo/daba-dar.git
   cd daba-dar
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp client/.env.example client/.env.local
   cp server/.env.example server/.env
   ```

4. **Database Setup**
   ```bash
   cd server
   npx prisma migrate dev
   npx prisma db seed
   ```

## 🚀 Development

### Using Docker (Recommended)
```bash
docker-compose up --build
```

### Manual Setup
```bash
# Start the server
cd server
npm run dev

# Start the client (in a new terminal)
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000 (or your configured port)

## 📁 Key Directories

```
client/
├── src/app/           # Next.js App Router pages
├── src/components/    # Reusable React components
├── src/hooks/         # Custom React hooks
├── src/lib/           # Utility functions and configurations
├── src/state/         # Redux store and API
└── src/types/         # TypeScript type definitions

server/
├── src/controllers/   # API route controllers
├── src/middleware/    # Express middleware
├── src/routes/        # API route definitions
└── prisma/           # Database schema and migrations
```

## 🔒 Authentication

This application uses AWS Amplify for authentication with custom auth providers. Users can:
- Sign up and sign in
- Manage their profiles
- Access role-based features (property owners, investors, tenants)

## 🗄️ Database Schema

The application manages several key entities:
- **Properties**: Property listings and details
- **Applications**: Rental applications
- **Leases**: Lease agreements and terms
- **Payments**: Payment records and processing
- **Users**: User profiles and authentication
- **Locations**: Geographic and address data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/fredrukundo/daba-dar/issues) on GitHub.

---

**Built with ❤️ by [fredrukundo](https://github.com/fredrukundo)**