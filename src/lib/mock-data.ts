import { Notification, SummaryData, User } from "@/types";

export const summaryData: SummaryData = {
  totalUsers: 725,
  totalRevenue: 5180,
  totalOrder: 50,
  pendingOrder: 525,
};

export const mockUsers: User[] = [
  {
    id: "#12345",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "#12346",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "#12347",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Suspended",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
  {
    id: "#12348",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
  },
  {
    id: "#12349",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    id: "#12350",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  }
];

export const mockNotifications: Notification[] = Array(6).fill(null).map((_, i) => ({
  id: `notif-${i}`,
  title: "New user registered successfully",
  time: "2024-03-09 - 10:30 AM",
  read: false,
}));

export const revenueData = [
  { name: '2020', value: 1000 },
  { name: '2021', value: 3000 },
  { name: '2023', value: 2500 },
  { name: '2024', value: 8900 },
  { name: '2025', value: 4000 },
  { name: '2026', value: 7500 },
];

export const userGrowthData = [
  { name: 'Janu', value: 600 },
  { name: 'Feb', value: 500 },
  { name: 'Mar', value: 400 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 200 },
  { name: 'June', value: 500 },
  { name: 'Jul', value: 400 },
  { name: 'Aug', value: 340 },
];

import { Product, Order, StoreSummaryData, LowStockAlertItem, TopSellingProduct } from "@/types";

export const storeSummaryData: StoreSummaryData = {
  totalIncome: 5180,
  totalCompletedOrder: 725,
  pendingOrder: 25,
  totalProduct: 725,
  todaysSales: 725,
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12345",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
    totalRevenue: 125,
    totalUnitSold: 120,
    previousStock: 125,
    image: "https://images.unsplash.com/photo-1584982751601-97d880f6f9fa?w=400&q=80",
  },
  {
    id: "p2",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12346",
    category: "0175589484",
    price: 124,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "p3",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12347",
    category: "0175589484",
    price: 124,
    stock: 5,
    status: "Low Stock",
  },
  {
    id: "p4",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12348",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
  {
    id: "p5",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12349",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
  {
    id: "p6",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12350",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
];

export const mockOrders: Order[] = [
  {
    id: "o1",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Delivered",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o2",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Processing",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o3",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Shipped",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o4",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Pending",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o5",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Completed",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
];

export const mockLowStockAlerts: LowStockAlertItem[] = [
  {
    id: "ls1",
    name: "USB-C Dock Station 12-in-1",
    sku: "SKU-00421",
    left: 3,
    min: 10,
  },
  {
    id: "ls2",
    name: "Monitor Light Bar Pro",
    sku: "SKU-00318",
    left: 7,
    min: 15,
  },
  {
    id: "ls3",
    name: "Laptop Stand Aluminum",
    sku: "SKU-00209",
    left: 2,
    min: 10,
  },
  {
    id: "ls4",
    name: "Mouse Pad XL Stitched",
    sku: "SKU-00512",
    left: 9,
    min: 20,
  },
];

export const mockTopSellingProducts: TopSellingProduct[] = [
  {
    id: "ts1",
    name: "Wireless ANC Headphones",
    unitsSold: 1842,
    revenue: 404400,
    trend: 18.4,
  },
  {
    id: "ts2",
    name: "Ergonomic Chair X3",
    unitsSold: 834,
    revenue: 456800,
    trend: 12.1,
  },
  {
    id: "ts3",
    name: "Mechanical Keyboard TKL",
    unitsSold: 2310,
    revenue: 389600,
    trend: 24.7,
  },
  {
    id: "ts4",
    name: "4K Webcam Ultra",
    unitsSold: 1120,
    revenue: 145600,
    trend: -9.3,
  },
];

import { Category } from "@/types";

export const mockHappyBodiesData: Record<string, Category> = {
  "Body Religion Library": {
    id: "cat_brl",
    title: "Body Religion Library",
    subTabs: ["Child", "Parents"],
    items: [
      {
        id: "brl_1",
        title: "Head & Skull",
        blocks: [
          {
            id: "b1",
            title: "Emotional & Energetic theme",
            content: "Thinking, identity, feeling overwhelmed, too much responsibility placed on the mind"
          },
          {
            id: "b2",
            title: "Emotional & Energetic theme",
            content: "Thinking, identity, feeling overwhelmed, too much responsibility placed on the mind"
          },
          {
            id: "b3",
            title: "Osteopathic View",
            content: "The cranial bones house and protect the brain and allow the free circulation of cerebrospinal fluid. Tension patterns in the skull — from birth, from falls, from jaw imbalance — affect neurological tone, sleep, concentration and emotional regulation."
          },
          {
            id: "b4",
            title: "For Children",
            content: "In children, head symptoms often reflect the enormous amount of neurological processing happening as the brain develops. Headaches may signal that the nervous system is working beyond its comfortable capacity."
          },
          {
            id: "b5",
            title: "For Parents",
            content: "In parents, chronic head symptoms may reflect the weight of mental responsibility. The mind that never stops problem-solving, the body asking to be led by the heart rather than the head."
          },
          {
            id: "b6",
            title: "Ask to AI",
            content: "I'm here to help you understand what you're noticing and find gentle practices that support your child's wellbeing."
          }
        ]
      },
      { id: "brl_2", title: "Eyes & Vision", blocks: [] },
      { id: "brl_3", title: "Ears & Hearing", blocks: [] },
      { id: "brl_4", title: "Jaw & Teeth", blocks: [] },
      { id: "brl_5", title: "Throat & Voice", blocks: [] },
      { id: "brl_6", title: "Chest & Heart", blocks: [] },
      { id: "brl_7", title: "Belly & Gut", blocks: [] },
      { id: "brl_8", title: "Lower back & Sacrum", blocks: [] }
    ]
  },
  "Development Milestone": {
    id: "cat_dm",
    title: "Development milestone",
    items: [
      {
        id: "dm_1",
        title: "0-3 months",
        blocks: [
          {
            id: "dm_b1",
            title: "Physical",
            content: "1. Lifts head briefly on tummy\n2. Brings hands to mouth\n3. Moves limbs symmetrically\n4. Follows a face to midline"
          },
          {
            id: "dm_b2",
            title: "Neurological",
            content: "1. Moro (startle) reflex active\n2. Rooting and sucking reflexes active\n3. Tonic neck reflex active\n4. Responds to sound"
          },
          {
            id: "dm_b3",
            title: "Osteopathic Perspective",
            content: "Birth places significant forces through the skull, neck and spine. Cranial osteopathy in the first weeks resolves delivery tension, supports..."
          },
          {
            id: "dm_b4",
            title: "Sign to Watch",
            content: "■ Not lifting head by 3 months\n■ Always turning to one side\n■ Difficulty latching or feeding\n■ Excessive unsettled crying\n■ No settling to caregiver's voice or touch"
          },
          {
            id: "dm_b5",
            title: "Emotional",
            content: "1. Feels safe only through your voice, touch, and smell\n2. Communicates entirely through crying and body tension\n3. Borrows your nervous system to settle their own\n4. Starts to track and prefer familiar faces"
          }
        ],
        video: {
          id: "v1",
          title: "Release The Tension",
          subtitle: "A gentle practice to help your child reconnect with nose breathing",
          duration: "2mnt",
          thumbnailUrl: "https://images.unsplash.com/photo-1590650046528-e4bf934dd95e?w=400&q=80"
        }
      },
      { id: "dm_2", title: "4-6 Months", blocks: [] },
      { id: "dm_3", title: "7-9 Months", blocks: [] },
      { id: "dm_4", title: "10-12 Months", blocks: [] },
      { id: "dm_5", title: "13-15 Months", blocks: [] },
      { id: "dm_6", title: "16-18 Months", blocks: [], completed: true }
    ]
  },
  "Movement GYM": {
    id: "cat_mg",
    title: "Movement GYM",
    items: [
      {
        id: "mg_1",
        title: "Tummy Time & Position Play",
        blocks: [
          {
            id: "mg_b1",
            title: "About This Pattern",
            content: "Tummy time is not just one position — it is a whole world of varied, active play that builds the strength your baby needs for every milestone that follows. Rather than placing your baby flat on a mat and hoping for the best, think of tummy time as an invitation to explore: on your chest, over your thigh, on a gentle incline, on varied surfaces."
          },
          {
            id: "mg_b2",
            title: "Osteopathic Perspective",
            content: "From an osteopathic perspective, the prone position activates the entire posterior chain — the anti-gravity muscle system that is inseparable from healthy neurological development. Babies with cranial compressions or birth strains often resist tummy time because it is genuinely uncomfortable for them."
          },
          {
            id: "mg_b3",
            title: "What to watch out for:",
            content: "Dislikes all tummy time positions\nStrong preference for looking one direction\nFlat spot developing on the back of head\nNeck tension or tightness\n\nHead control delayed beyond 4 months\n\n1. On your chest: Semi-recline on the sofa or bed...\n2. Inclined tummy time: Over your lap...\n3. Side-lying: An often overlooked position...\n4. Floor tummy time: On a soft but firm surface...\n5. Follow baby's cues: Watch for enjoyment...\n6. As baby grows stronger: Encourage reaching for toys..."
          },
          {
            id: "mg_b4",
            title: "Frequency & Progression",
            content: "Multiple short bursts throughout the day from the first weeks of life. Aim for variety across positions — floor, chest, lap, incline — rather than one long daily session."
          }
        ],
        video: {
          id: "v2",
          title: "Release The Tension",
          subtitle: "A gentle practice to help your child reconnect with nose breathing",
          duration: "2mnt",
          thumbnailUrl: "https://images.unsplash.com/photo-1590650046528-e4bf934dd95e?w=400&q=80"
        }
      },
      { id: "mg_2", title: "Rolling - The First Full-Body Conversation", blocks: [] },
      { id: "mg_3", title: "Sitting - Building the Core from the Inside Out", blocks: [] },
      { id: "mg_4", title: "Crawling - The Neurological Foundation", blocks: [] },
      { id: "mg_5", title: "Standing, Cruising & First Steps", blocks: [] },
      { id: "mg_6", title: "Active Play for Toddlers & Beyond", blocks: [], completed: true }
    ]
  },
  "Reflex GYM": {
    id: "cat_rg",
    title: "Reflex GYM",
    items: [
      { id: "rg_1", title: "Moro Reflex", blocks: [] },
      { id: "rg_2", title: "Rooting Reflex", blocks: [] },
      { id: "rg_3", title: "Palmar Grasp", blocks: [] }
    ]
  }
};

export const mockHappyHeartData: Record<string, Category> = {
  "Tool 1": {
    id: "hh_t1",
    title: "Tool 1",
    items: [
      {
        id: "hh_s1",
        title: "Step 1",
        blocks: [
          { id: "s1_b1", title: "Title", content: "What was the charge trying to tell you?" },
          { id: "s1_b2", title: "Subtitle", content: "Not about your child. About you." },
          { 
            id: "s1_b3", 
            title: "Option", 
            content: "", 
            type: "options",
            options: [
              "I needed to feel heard, and I wasn't",
              "That moment reminded me of something from my own childhood",
              "I was already running on empty before this happened"
            ]
          }
        ]
      },
      {
        id: "hh_s2",
        title: "Step 2",
        blocks: [
          { id: "s2_b1", title: "Title", content: "Where is the charge sitting right now?" },
          { id: "s2_b2", title: "Subtitle", content: "Place one hand on your chest or belly. Don't name it as an emotion yet — find it as a sensation." },
          { id: "s2_b3", title: "Breath", content: "30 Sec" }
        ]
      },
      {
        id: "hh_s3",
        title: "Step 3",
        blocks: [
          { id: "s3_b1", title: "Title", content: "Where is the charge sitting right now?" },
          { id: "s3_b2", title: "Subtitle", content: "Place one hand on your chest or belly. Don't name it as an emotion yet — find it as a sensation." },
          { id: "s3_b3", title: "Highlighted Text", content: "Title" },
          { id: "s3_b4", title: "Highlighted Text", content: "Body Text" }
        ]
      },
      {
        id: "hh_before",
        title: "Before you close this",
        blocks: [
          { id: "bef_b1", title: "Title", content: "Where is the charge sitting right now?" },
          { id: "bef_b2", title: "Subtitle", content: "Place one hand on your chest or belly. Don't name it as an emotion yet — find it as a sensation." },
          { 
            id: "bef_b3", 
            title: "Option", 
            content: "", 
            type: "options",
            options: [
              "Tight throat",
              "Heavy chest",
              "Heat in my face",
              "Clenched jaw",
              "Tense shoulders",
              "Hollow belly",
              "Racing heart",
              "Something else"
            ]
          }
        ]
      },
      { 
        id: "hh_help", 
        title: "Help them land", 
        blocks: [
          { id: "hl_b1", title: "Title", content: "What was the charge trying to tell you?" },
          { id: "hl_b2", title: "Subtitle", content: "Not about your child. About you." },
          { id: "hl_b3", title: "Highlighted Text", content: "Write here" }
        ] 
      },
      { 
        id: "hh_stay", 
        title: "Say this to your child", 
        blocks: [
          {
            id: "st_b1",
            title: "Option",
            content: "",
            type: "options",
            options: [
              "Can you put your hand on your heart for me?",
              "Now close your eyes if that feels okay.",
              "Where do you feel the big feeling right now? Your chest? Your tummy? Your throat?"
            ]
          },
          { id: "st_b2", title: "Highlighted Text", content: "Pause here. Give them space to feel and answer. Don't rush." }
        ] 
      },
      { 
        id: "hh_breath", 
        title: "Breath Together", 
        blocks: [
          {
            id: "br_b1",
            title: "Option",
            content: "",
            type: "options",
            options: [
              "You don't have to make it go away. Just find it.",
              "Now let's take one big breath together."
            ]
          },
          { id: "br_b2", title: "Highlighted Text", content: "In through the nose, long and slow out through the mouth. Breath with them" }
        ] 
      },
      { 
        id: "hh_here", 
        title: "Stay here", 
        blocks: [
          {
            id: "hr_b1",
            title: "Option",
            content: "",
            type: "options",
            options: [
              "Did you feel that? Your body just did something really clever. It started to settle.",
              "You're safe. I'm right here. Let's just stay here for a moment."
            ]
          },
          { id: "hr_b2", title: "Highlighted Text", content: "No words needed now. Just stay. Let the silence hold you both." }
        ] 
      }
    ]
  },
  "Tool 2": { id: "hh_t2", title: "Tool 2", items: [] },
  "Tool 3": { id: "hh_t3", title: "Tool 3", items: [] },
  "Tool 4": { id: "hh_t4", title: "Tool 4", items: [] },
};
