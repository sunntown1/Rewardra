import React, { useState } from "react";
import { Header } from "../components/Header";
import { Search, Filter, Tag, X } from "lucide-react";

// Sample gift card data
const giftCards = [
  {
    brand: "Amazon",
    image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png",
    value: "$750",
    category: "Shopping",
    popular: true,
    link: "https://glstrck.com/aff_c?offer_id=144&aff_id=55136",
  },
  {
    brand: "Lululemon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmNK9guDEy-v1soSIaU3CP9SSg2ZXfsqQWQ&s",
    value: "$750",
    category: "Shopping",
    popular: true,
    link: "https://glstrck.com/aff_c?offer_id=140&aff_id=55136",
  },
  {
    brand: "Shein",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9NBnD7PnD6TlJxOBEElCrSH-o4d25bsevA&s",
    value: "$750",
    category: "Shopping",
    popular: true,
    link: "https://glstrck.com/aff_c?offer_id=1113&aff_id=55136",
  },
  
  {
    brand: "Best Buy",
    image: "https://corporate.bestbuy.com/wp-content/uploads/2022/11/BBY-logo-white-background-537x368.jpeg",
    value: "$1000",
    category: "Electronics",
    popular: true,
    link: "https://glstrck.com/aff_c?offer_id=880&aff_id=55136",
  },
  {
    brand: "Target",
    image: "https://www.logodesign.org/wp-content/uploads/2023/08/current-target-logo.png",
    value: "$750",
    category: "Shopping",
    popular: true,
    link: "https://glstrck.com/aff_c?offer_id=250&aff_id=55136",
  },
  {
    brand: "Footlocker",
    image: "https://logos-world.net/wp-content/uploads/2022/04/Foot-Locker-Symbol.png",
    value: "$500",
    category: "Shopping",
    popular: false,
    link: "https://glstrck.com/aff_c?offer_id=275&aff_id=55136",
  },
  {
    brand: "7-11",
    image: "https://images.contentstack.io/v3/assets/blt79dc99fad342cc45/blt080544b49732c1b4/633f08c159c8ec116d13f087/7_Eleven_Horizontal_2022_RGB_1639377127_8977.jpeg",
    value: "$500",
    category: "Food",
    popular: false,
    link: "https://glstrck.com/aff_c?offer_id=404&aff_id=55136",
  },
  {
    brand: "KFC",
    image: "https://www.blessingsinabackpack.org/wp-content/uploads/2020/04/Untitled-design57.png",
    value: "$500",
    category: "Food",
    popular: false,
    link: "https://glstrck.com/aff_c?offer_id=400&aff_id=55136",
  },
];

// Modal component to display gift card details
interface GiftCardModalProps {
  card: typeof giftCards[0];
  onClose: () => void;
}

function GiftCardModal({ card, onClose }: GiftCardModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex items-center mb-6">
          <img
            src={card.image}
            alt={card.brand}
            className="w-20 h-20 object-contain rounded-lg bg-white"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900">{card.brand}</h3>
            <p className="text-sm text-gray-600">{card.value} Gift Card</p>
          </div>
        </div>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white py-3 rounded-lg hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 font-semibold text-center block"
        >
          Link to Tasks
        </a>
      </div>
    </div>
  );
}


// Main GiftCards component
export function GiftCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPopularOnly, setShowPopularOnly] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<typeof giftCards[0] | null>(
    null
  );

  // Extract unique categories
  const categories = ["All", ...new Set(giftCards.map((card) => card.category))];

  // Filter logic
  const filteredCards = giftCards.filter((card) => {
    const matchesSearch = card.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || card.category === selectedCategory;
    const matchesPopular = !showPopularOnly || card.popular;

    return matchesSearch && matchesCategory && matchesPopular;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-white to-[#fff8f1]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-[#3b82f6] mb-8">Gift Cards</h1>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search gift cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                showPopularOnly
                  ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                  : "border-gray-200 text-gray-700 hover:border-[#3b82f6]"
              } transition-all duration-300`}
            >
              <Tag className="h-5 w-5" />
              Popular
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[#3b82f6] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.brand}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.image}
                alt={card.brand}
                className="w-full h-64 object-contain bg-white"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.brand}
                  </h3>
                  {card.popular && (
                    <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">Value: {card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCard && (
          <GiftCardModal
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </main>
    </div>
  );
}
