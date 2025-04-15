# JustDial Clone

A modern clone of JustDial, India's leading local search engine, built with Next.js and Shadcn UI.

![JustDial Clone Preview](https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a)

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

### 1. Selected Web Portal
This project is a clone of [JustDial](https://www.justdial.com/), India's leading local search engine that connects users with local businesses across various categories.

### 2. Tech Stack of Original Portal
JustDial's tech stack includes:
- Frontend: React.js, Redux
- Backend: Java, Spring Boot
- Database: MySQL, MongoDB
- Search: Elasticsearch
- Infrastructure: AWS
- Mobile: React Native

### 3. Tech Stack for Clone Project
For this clone project, we're using:

#### Frontend
- **Next.js 14**: For server-side rendering and improved performance
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **Shadcn UI**: For beautiful, accessible components
- **React Query**: For data fetching and caching
- **Zustand**: For state management

#### Backend
- **Next.js API Routes**: For serverless API endpoints
- **Prisma**: For database ORM
- **PostgreSQL**: For data storage

#### Why This Stack?
1. **Next.js**: Provides excellent SEO capabilities, fast page loads, and great developer experience
2. **TypeScript**: Ensures code reliability and maintainability
3. **Tailwind + Shadcn**: Enables rapid UI development with beautiful, accessible components
4. **Prisma + PostgreSQL**: Offers type-safe database operations and reliable data storage

### 4. External Resources Required

#### Content
- Business listings data
- Category information
- Location data
- User reviews and ratings

#### Graphics
- Category icons
- Business logos
- User avatars
- Background images
- Icons for various services

#### Database
- Business information
- User profiles
- Reviews and ratings
- Search history
- Saved listings

#### APIs
- Maps integration (Google Maps/Mapbox)
- Payment gateway
- SMS/Email services
- Authentication services

## Features

- 🔍 Business search and discovery
- 📂 Category-based browsing
- 📍 Location-based services
- ⭐ User reviews and ratings
- 📱 Business listings management
- 🎨 Responsive design
- 🌙 Dark mode support

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/justdial-clone.git
   cd justdial-clone
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file
   ```bash
   cp .env.example .env
   ```
   Then update the variables in `.env`:
   ```
   DATABASE_URL="your_database_url"
   NEXT_PUBLIC_MAPS_API_KEY="your_maps_api_key"
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
justdial-clone/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── constants/        # Constants and configurations
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
├── public/              # Static files
├── prisma/             # Database schema and migrations
└── tests/              # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Unsplash](https://unsplash.com/) for images
