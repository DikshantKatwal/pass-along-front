import { description } from "@/components/radialChart";
import { TItem } from "./RecentItems";

export const mockItems: TItem[] = [
  {
    id: '1',
    name: 'Apple iPhone 14 Pro Max',
    description: '128GB, Deep Purple – Factory Unlocked – Excellent Condition',
    user: {
      email: 'susan.miller@example.com',
      id: 'u1',
      username: 'susanm',
      first_name: 'Susan',
      last_name: 'Miller',
    },
    created_at: new Date('2024-12-20'),
    images: [
      { image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { image: 'https://images.unsplash.com/photo-1575717647943-6b2146343437?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '2',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Wireless Noise-Cancelling Overhead Headphones - Black',
    user: {
      email: 'alex.johnson@example.com',
      id: 'u2',
      username: 'alexj',
      first_name: 'Alex',
      last_name: 'Johnson',
    },
    created_at: new Date('2024-11-05'),
    images: [
      { image: 'https://plus.unsplash.com/premium_photo-1677838847721-2bf14b48c256?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { image: 'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '3',
    name: 'Dell XPS 13 Laptop',
    description: 'Intel i7, 16GB RAM, 512GB SSD – 13.4" FHD+ Touchscreen',
    user: {
      email: 'rachel.lee@example.com',
      id: 'u3',
      username: 'rachell',
      first_name: 'Rachel',
      last_name: 'Lee',
    },
    created_at: new Date('2024-10-12'),
    images: [
      { image: 'https://images.unsplash.com/photo-1713470812508-c276021f1b93?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '4',
    name: 'GoPro HERO11 Black',
    description: 'Waterproof Action Camera with Front LCD and Touch Rear Screens',
    user: {
      email: 'mike.williams@example.com',
      id: 'u4',
      username: 'mikew',
      first_name: 'Mike',
      last_name: 'Williams',
    },
    created_at: new Date('2025-01-15'),
    images: [
      { image: 'https://images.unsplash.com/photo-1604942177421-df466b7410f6?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '5',
    name: 'Nike Air Max 270 React',
    description: 'Men’s Running Shoes – Size 10 – Light Smoke Grey',
    user: {
      email: 'emma.davis@example.com',
      id: 'u5',
      username: 'emmad',
      first_name: 'Emma',
      last_name: 'Davis',
    },
    created_at: new Date('2025-03-02'),
    images: [
      { image: 'https://images.unsplash.com/photo-1562613521-6b5293e5b0ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { image: 'https://images.unsplash.com/photo-1562613513-7754e95b3caf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '6',
    name: 'Canon EOS R10 Mirrorless Camera',
    description: 'RF-S18-45mm Lens Kit – 24.2MP APS-C Sensor',
    user: {
      email: 'lucas.smith@example.com',
      id: 'u6',
      username: 'lucasphoto',
      first_name: 'Lucas',
      last_name: 'Smith',
    },
    created_at: new Date('2025-02-10'),
    images: [
      { image: 'https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2Fub24lMjBFT1MlMjBSMTAlMjBNaXJyb3JsZXNzfGVufDB8fDB8fHww' },
    ],
  },
  {
    id: '7',
    name: 'PlayStation 5 Digital Edition',
    description: '825GB SSD – Brand New – Sealed in Box',
    user: {
      email: 'olivia.james@example.com',
      id: 'u7',
      username: 'oliviaj',
      first_name: 'Olivia',
      last_name: 'James',
    },
    created_at: new Date('2025-01-25'),
    images: [
      { image: 'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '8',
    name: 'Samsung Galaxy Watch 6',
    description: '44mm Graphite Aluminum – Bluetooth Smartwatch',
    user: {
      email: 'ethan.brown@example.com',
      id: 'u8',
      username: 'ethanb',
      first_name: 'Ethan',
      last_name: 'Brown',
    },
    created_at: new Date('2024-12-30'),
    images: [
      { image: 'https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHdhdGNofGVufDB8fDB8fHww' },
    ],
  },
  {
    id: '9',
    name: 'Apple MacBook Air M2',
    description: '13" Laptop – 8GB RAM – 256GB SSD – Space Gray',
    user: {
      email: 'isabella.green@example.com',
      id: 'u9',
      username: 'isabellag',
      first_name: 'Isabella',
      last_name: 'Green',
    },
    created_at: new Date('2025-01-05'),
    images: [
      { image: 'https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyJTIwbTJ8ZW58MHx8MHx8fDA%3D' },
    ],
  },
  {
    id: '10',
    name: 'Fitbit Charge 6',
    description: 'Advanced Fitness & Health Tracker – Black/Graphite',
    user: {
      email: 'daniel.thomas@example.com',
      id: 'u10',
      username: 'danielt',
      first_name: 'Daniel',
      last_name: 'Thomas',
    },
    created_at: new Date('2025-01-28'),
    images: [
      { image: 'https://media.istockphoto.com/id/1179275823/photo/fitness-band-for-branding-and-mock-up-template-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=O-ZuYCb4HeoG6Ga_j74J8xTwAuWh-L0_aIIyE6NbmwY=' },
    ],
  },
  // Repeat or vary for items 11-20 as needed
];
export const mockReview = [
  {
    id: '1',
    title: 'Great for decluttering',
    description: "PassAlong helped me give away old electronics and get a free office chair. No fees, no drama. Just post and trade.",
    user: {
      email: 'susan.miller@example.com',
      id: 'u1',
      username: 'susanm',
      first_name: 'Susan',
      last_name: 'Miller',
    },
  },
  {
    id: '2',
    title: 'Surprisingly smooth experience',
    description: "Wasn't expecting much, but I got a like- new blender for free.Some users flake, but most are decent.",
    user: {
      email: 'alex.johnson@example.com',
      id: 'u2',
      username: 'alexj',
      first_name: 'Alex',
      last_name: 'Johnson',
    },

  },
  {
    id: '5',
    title: "Needs better user verification",
    description: 'Met a few unreliable users, but support was responsive. Once you filter the noise, it’s solid.',
    user: {
      email: 'emma.davis@example.com',
      id: 'u5',
      username: 'emmad',
      first_name: 'Emma',
      last_name: 'Davis',
    },
  },
  {
    id: '6',
    title: 'Minimalist’s dream',

    description: 'I’ve been using PassAlong to slowly get rid of excess stuff. No guilt, no trash. Win-win.',
    user: {
      email: 'lucas.smith@example.com',
      id: 'u6',
      username: 'lucasphoto',
      first_name: 'Lucas',
      last_name: 'Smith',
    },
  },
  {
    id: '7',
    title: 'Easy to use',
    description: 'Interface is simple. Posting items takes under a minute. Could use better search filters though.',
    user: {
      email: 'olivia.james@example.com',
      id: 'u7',
      username: 'oliviaj',
      first_name: 'Olivia',
      last_name: 'James',
    },
  },
  {
    id: '8',
    title: 'Unexpected finds',
    description: 'Got a working bike, an old PS3, and a coffee maker—all free. It’s addictive.',
    user: {
      email: 'ethan.brown@example.com',
      id: 'u8',
      username: 'ethanb',
      first_name: 'Ethan',
      last_name: 'Brown',
    },
  },
  {
    id: '9',
    title: 'Better than Facebook Marketplace',
    description: "No pressure to sell or negotiate. Just give or take. Safer and more genuine interactions.",
    user: {
      email: 'isabella.green@example.com',
      id: 'u9',
      username: 'isabellag',
      first_name: 'Isabella',
      last_name: 'Green',
    }

  },
  {
    id: '10',
    title: 'Great for decluttering!',
    description: 'PassAlong helped me give away old electronics and get a free office chair. No fees, no drama. Just post and trade.',
    user: {
      email: 'daniel.thomas@example.com',
      id: 'u10',
      username: 'danielt',
      first_name: 'Daniel',
      last_name: 'Thomas',
    },

  },
  // Repeat or vary for items 11-20 as needed
];
