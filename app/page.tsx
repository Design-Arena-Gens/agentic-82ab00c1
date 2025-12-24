'use client'

import { useState } from 'react'
import { Search, TrendingDown, Shield, Star, ChevronRight, ExternalLink } from 'lucide-react'

interface Store {
  name: string
  logo: string
  trustScore: number
  priceRange: string
  speciality: string
  delivery: string
  returnPolicy: string
  website: string
  pros: string[]
  cons: string[]
  bestFor: string[]
  color: string
}

const stores: Store[] = [
  {
    name: 'Meesho',
    logo: '🛍️',
    trustScore: 4.2,
    priceRange: '₹₹',
    speciality: 'सबसे सस्ते कपड़े और होम डेकोर',
    delivery: '5-7 दिन',
    returnPolicy: '7 दिन',
    website: 'https://meesho.com',
    pros: ['सबसे कम कीमत', 'फ्री डिलीवरी', 'COD उपलब्ध'],
    cons: ['थोड़ा धीमी डिलीवरी', 'गुणवत्ता में उतार-चढ़ाव'],
    bestFor: ['कपड़े', 'घर का सामान', 'ब्यूटी प्रोडक्ट्स'],
    color: 'bg-pink-100 border-pink-300'
  },
  {
    name: 'Flipkart',
    logo: '🔵',
    trustScore: 4.5,
    priceRange: '₹₹₹',
    speciality: 'इलेक्ट्रॉनिक्स और बड़ी छूट',
    delivery: '2-4 दिन',
    returnPolicy: '10 दिन',
    website: 'https://flipkart.com',
    pros: ['बड़ी सेल्स', 'अच्छी गुणवत्ता', 'Plus मेंबरशिप'],
    cons: ['कभी-कभी महंगा', 'सेलर की गुणवत्ता अलग'],
    bestFor: ['मोबाइल', 'लैपटॉप', 'इलेक्ट्रॉनिक्स'],
    color: 'bg-blue-100 border-blue-300'
  },
  {
    name: 'Amazon',
    logo: '📦',
    trustScore: 4.6,
    priceRange: '₹₹₹₹',
    speciality: 'हर चीज़ और तेज़ डिलीवरी',
    delivery: '1-2 दिन',
    returnPolicy: '10-30 दिन',
    website: 'https://amazon.in',
    pros: ['प्राइम मेंबरशिप', 'विश्वसनीय', 'तेज़ डिलीवरी'],
    cons: ['थोड़ा महंगा', 'Prime की जरूरत'],
    bestFor: ['Books', 'Electronics', 'Daily Essentials'],
    color: 'bg-orange-100 border-orange-300'
  },
  {
    name: 'Snapdeal',
    logo: '🛒',
    trustScore: 4.0,
    priceRange: '₹₹',
    speciality: 'सस्ते गैजेट्स और सामान',
    delivery: '4-6 दिन',
    returnPolicy: '7 दिन',
    website: 'https://snapdeal.com',
    pros: ['बहुत सस्ता', 'अच्छी डील्स', 'COD'],
    cons: ['गुणवत्ता की गारंटी नहीं', 'धीमी डिलीवरी'],
    bestFor: ['Budget Shopping', 'Gadgets', 'Home Essentials'],
    color: 'bg-red-100 border-red-300'
  },
  {
    name: 'Jiomart',
    logo: '🏪',
    trustScore: 4.3,
    priceRange: '₹₹₹',
    speciality: 'किराने का सामान और घरेलू जरूरतें',
    delivery: '1-3 दिन',
    returnPolicy: '7 दिन',
    website: 'https://jiomart.com',
    pros: ['किराने में सस्ता', 'Reliance का भरोसा', 'तेज़ डिलीवरी'],
    cons: ['सीमित प्रोडक्ट रेंज', 'सभी जगह नहीं'],
    bestFor: ['Groceries', 'Daily Needs', 'Electronics'],
    color: 'bg-indigo-100 border-indigo-300'
  },
  {
    name: 'Myntra',
    logo: '👗',
    trustScore: 4.4,
    priceRange: '₹₹₹',
    speciality: 'फैशन और ब्रांडेड कपड़े',
    delivery: '3-5 दिन',
    returnPolicy: '30 दिन',
    website: 'https://myntra.com',
    pros: ['ब्रांडेड कपड़े', '30 दिन रिटर्न', 'ट्रेंडी फैशन'],
    cons: ['फैशन तक सीमित', 'कुछ महंगा'],
    bestFor: ['Fashion', 'Branded Clothes', 'Accessories'],
    color: 'bg-purple-100 border-purple-300'
  }
]

const categories = [
  { name: 'इलेक्ट्रॉनिक्स', icon: '📱', recommended: ['Flipkart', 'Amazon'] },
  { name: 'कपड़े', icon: '👔', recommended: ['Meesho', 'Myntra'] },
  { name: 'किराना', icon: '🛒', recommended: ['Jiomart', 'Amazon'] },
  { name: 'होम डेकोर', icon: '🏠', recommended: ['Meesho', 'Snapdeal'] },
  { name: 'मोबाइल', icon: '📱', recommended: ['Flipkart', 'Amazon'] },
  { name: 'ब्यूटी', icon: '💄', recommended: ['Meesho', 'Myntra'] }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStores = selectedCategory
    ? stores.filter(store =>
        categories.find(cat => cat.name === selectedCategory)?.recommended.includes(store.name)
      )
    : stores

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                💰 India Price Compare
              </h1>
              <p className="text-sm text-gray-600 mt-1">सबसे कम कीमत पर बेहतरीन गुणवत्ता</p>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="text-orange-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">क्या खरीदना चाहते हैं?</h2>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="जैसे: मोबाइल, कपड़े, लैपटॉप, किचन का सामान..."
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none text-lg"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📂 कैटेगरी चुनें</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedCategory === cat.name
                  ? 'bg-orange-500 text-white border-orange-600 shadow-lg scale-105'
                  : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="text-sm font-semibold">{cat.name}</div>
            </button>
          ))}
        </div>
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-4 text-orange-600 hover:text-orange-700 font-semibold"
          >
            ✕ फिल्टर हटाएं
          </button>
        )}
      </section>

      {/* Top Picks Banner */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">⭐ हमारे टॉप पिक्स</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-bold">सबसे सस्ता</p>
              <p className="text-sm">Meesho - कपड़ों के लिए</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-bold">सबसे तेज़ डिलीवरी</p>
              <p className="text-sm">Amazon - 1-2 दिन</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-bold">सबसे भरोसेमंद</p>
              <p className="text-sm">Amazon & Flipkart</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores List */}
      <section className="max-w-7xl mx-auto px-4 py-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            🏪 {selectedCategory ? `${selectedCategory} के लिए बेस्ट स्टोर्स` : 'सभी ऑनलाइन स्टोर्स'}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingDown className="text-green-600" size={20} />
            <span>कम से ज्यादा कीमत</span>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredStores.map((store, idx) => (
            <div
              key={store.name}
              className={`${store.color} border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{store.logo}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{store.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(store.trustScore) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                          <span className="text-sm font-semibold ml-1">{store.trustScore}</span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">{store.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-gray-700 mb-4">{store.speciality}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">⏱️ डिलीवरी: <span className="font-semibold">{store.delivery}</span></p>
                      <p className="text-sm text-gray-600">🔄 रिटर्न: <span className="font-semibold">{store.returnPolicy}</span></p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">✅ फायदे:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {store.pros.slice(0, 2).map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 font-semibold mb-2">🎯 बेस्ट फॉर:</p>
                    <div className="flex flex-wrap gap-2">
                      {store.bestFor.map((item, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="md:w-48 flex flex-col justify-between">
                  <div className="bg-white rounded-xl p-4 mb-4 border-2 border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-green-600" size={20} />
                      <span className="font-semibold text-sm">Trust Score</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600">{store.trustScore}/5</div>
                  </div>

                  <a
                    href={store.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <span>विजिट करें</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg p-6 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">💡 ऑनलाइन शॉपिंग टिप्स</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <p className="font-bold mb-2">✓ कीमत की तुलना करें</p>
              <p className="text-sm">खरीदने से पहले सभी साइट्स पर कीमत चेक करें</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <p className="font-bold mb-2">✓ रिव्यू पढ़ें</p>
              <p className="text-sm">दूसरे कस्टमर्स के रिव्यू जरूर देखें</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <p className="font-bold mb-2">✓ सेल्स का इंतजार करें</p>
              <p className="text-sm">बड़ी सेल्स में 50-80% तक छूट मिलती है</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <p className="font-bold mb-2">✓ रिटर्न पॉलिसी चेक करें</p>
              <p className="text-sm">खराब प्रोडक्ट के लिए रिटर्न ऑप्शन देखें</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">🇮🇳 भारत में बेहतरीन ऑनलाइन शॉपिंग के लिए</p>
          <p className="text-sm text-gray-400">सबसे कम कीमत | बेहतरीन गुणवत्ता | भरोसेमंद साइट्स</p>
          <div className="mt-4 text-xs text-gray-500">
            <p>नोट: कीमतें और ऑफर्स बदल सकते हैं। खरीदने से पहले साइट पर जाकर चेक करें।</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
