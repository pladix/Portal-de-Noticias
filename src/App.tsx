import React, { useState, useEffect } from 'react';
import { Search, Facebook, Instagram, Twitter, MessageCircle, Share2, Clock, User, Moon, Sun } from 'lucide-react';
import { categories, news } from './data';
import Loading from './components/Loading';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('latest');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 800);
  };

  const shareNews = (title: string, platform: string) => {
    const url = window.location.href;
    const text = `Confira esta notícia: ${title}`;
    
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      whatsapp: `https://wa.me/?text=${text} ${url}`,
      instagram: `https://www.instagram.com/`
    };

    window.open(links[platform as keyof typeof links], '_blank');
  };

  const filteredNews = news.filter((item) => {
    const matchesCategory = selectedCategory === 'latest' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Portal de Notícias</h1>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
            </div>
          </div>
          
          {/* Categories Menu */}
          <nav className="mt-6 overflow-x-auto">
            <ul className="flex space-x-4 md:space-x-6 min-w-max">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200
                              ${selectedCategory === category.id
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                  >
                    {category.icon}
                    <span className="whitespace-nowrap">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <Loading />
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Nenhuma notícia encontrada para sua pesquisa.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                         transition-all duration-200 hover:shadow-xl hover:scale-102
                         border border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-blue-500 text-white text-sm rounded">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {item.title}
                  </h2>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {item.content}
                  </p>
                  
                  {/* Share buttons */}
                  <div className="flex space-x-4 border-t dark:border-gray-700 pt-4">
                    <button
                      onClick={() => shareNews(item.title, 'facebook')}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      aria-label="Compartilhar no Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareNews(item.title, 'twitter')}
                      className="text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
                      aria-label="Compartilhar no Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareNews(item.title, 'instagram')}
                      className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                      aria-label="Compartilhar no Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareNews(item.title, 'whatsapp')}
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                      aria-label="Compartilhar no WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      aria-label="Mais opções de compartilhamento"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Portal de Notícias. Todos os direitos reservados.</p>
          <p className="text-gray-400 dark:text-gray-500">
            Desenvolvido por{' '}
            <a
              href="https://github.com/pladix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              PladixOficial
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;