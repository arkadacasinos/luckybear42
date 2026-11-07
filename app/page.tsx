import Link from 'next/link'

const REF_URL = 'https://comboflo.site/aeaofj2k27'

export default function HomePage() {
  return (
    <div className="lb92-shell min-h-screen bg-[#070a0f] text-[#f1f5f9] flex flex-col font-sans">
      {/* Mobile drawer via pure-CSS :target */}
      <aside
        id="lb92-mobile-drawer"
        className="fixed inset-0 z-50 overflow-hidden"
        aria-label="Мобильное меню навигации"
      >
        <Link
          href="#!"
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          aria-label="Закрыть меню"
        />
        <div className="relative w-72 max-w-[85vw] h-full bg-[#0d121c] border-r border-[#1a2333] p-5 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#1a2333]">
              <Link href={REF_URL} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center p-1.5 shadow-md shadow-blue-500/30 text-white font-black text-sm">
                  🐻
                </div>
                <span className="font-extrabold text-lg tracking-wider text-white">
                  LUCKY<span className="text-blue-500">BEAR</span>
                </span>
              </Link>
              <Link
                href="#!"
                className="w-8 h-8 rounded-md bg-[#161f2e] hover:bg-[#1e2a3e] flex items-center justify-center text-slate-300"
                aria-label="Закрыть панель"
              >
                ✕
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-1.5 bg-[#121927] p-1 rounded-lg my-4 border border-[#1e293b]">
              <Link
                href={REF_URL}
                className="text-center py-2 text-xs font-bold rounded-md bg-blue-600 text-white shadow"
              >
                Казино
              </Link>
              <Link
                href={REF_URL}
                className="text-center py-2 text-xs font-semibold rounded-md text-slate-400 hover:text-white"
              >
                Спорт
              </Link>
            </div>

            <nav className="flex flex-col gap-1">
              <Link href={REF_URL} className="lb92-rail-btn lb92-active">
                <span className="text-blue-400">🏠</span>
                <span>Главная</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>🍒</span>
                <span>Слоты</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>⚡</span>
                <span>Быстрые игры</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>🔥</span>
                <span>Популярные</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>🎁</span>
                <span>Покупка Бонуса</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>✨</span>
                <span>Новинки</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>🎥</span>
                <span>Live-игры</span>
              </Link>
              <div className="h-px bg-[#1a2333] my-2" />
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>👥</span>
                <span>Пригласить</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>⭐</span>
                <span>Бонусы</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>💳</span>
                <span>Пополнить</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span>👤</span>
                <span>Профиль</span>
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-[#1a2333]">
            <Link
              href={REF_URL}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              Зарегистрировать / Войти
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Top Header */}
      <header className="lb92-topbar sticky top-0 z-40 bg-[#0b0e14] border-b border-[#161e2e] px-3 sm:px-6 py-2.5">
        <div className="max-w-[1680px] mx-auto flex items-center justify-between gap-3">
          {/* Left: Mobile Burger + Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="#lb92-mobile-drawer"
              className="lg:hidden p-2 rounded-lg bg-[#141b27] hover:bg-[#1a2434] text-slate-300 border border-[#202b3d]"
              aria-label="Открыть меню навигации"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Link>

            <Link href={REF_URL} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform text-base font-black">
                🐻
              </div>
              <span className="font-black text-lg sm:text-xl tracking-wider text-white">
                LUCKY<span className="text-blue-500">BEAR</span>
              </span>
            </Link>
          </div>

          {/* Center: Top Quick Badges (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={REF_URL}
              className="px-3.5 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="font-semibold text-slate-200">Призовой пул</span>
            </Link>
            <Link
              href={REF_URL}
              className="px-3.5 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span className="font-semibold text-slate-200">История</span>
            </Link>
            <Link
              href={REF_URL}
              className="px-3.5 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <span className="text-slate-400">🤍</span>
              <span className="font-semibold text-slate-200">Избранное</span>
            </Link>
            <Link
              href={REF_URL}
              className="px-3.5 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <span className="text-amber-400">🎁</span>
              <span className="font-semibold text-slate-200">Промокод</span>
            </Link>
          </div>

          {/* Right: CTA Register / Login */}
          <div className="flex items-center gap-2">
            <Link
              href={REF_URL}
              className="px-4 sm:px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs sm:text-sm text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Зарегистрировать / Войти
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout Area: Desktop Rail + Content Grid */}
      <div className="max-w-[1680px] w-full mx-auto flex-1 flex">
        {/* Left Desktop Sidebar Rail */}
        <aside className="lb92-rail hidden lg:flex flex-col justify-between w-60 shrink-0 bg-[#0a0e16]/80 border-r border-[#151d2a] p-3.5">
          <div>
            {/* Toggle Casino / Sport */}
            <div className="grid grid-cols-2 gap-1 bg-[#101623] p-1 rounded-xl mb-3 border border-[#1c2637]">
              <Link
                href={REF_URL}
                className="text-center py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow"
              >
                Казино
              </Link>
              <Link
                href={REF_URL}
                className="text-center py-2 text-xs font-semibold rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                Спорт
              </Link>
            </div>

            <nav className="flex flex-col gap-0.5" aria-label="Разделы казино">
              <Link href={REF_URL} className="lb92-rail-btn lb92-active">
                <span className="text-blue-400 text-base">🏠</span>
                <span className="font-semibold">Главная</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">🍒</span>
                <span>Слоты</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">⚡</span>
                <span>Быстрые игры</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">🔥</span>
                <span>Популярные</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">🎁</span>
                <span>Покупка Бонуса</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">✨</span>
                <span>Новинки</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">🎥</span>
                <span>Live-игры</span>
              </Link>

              <div className="h-px bg-[#16202f] my-2.5" />

              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">👥</span>
                <span>Пригласить</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">⭐</span>
                <span>Бонусы</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">💳</span>
                <span>Пополнить</span>
              </Link>
              <Link href={REF_URL} className="lb92-rail-btn">
                <span className="text-base">👤</span>
                <span>Профиль</span>
              </Link>
            </nav>
          </div>

          <div className="pt-3 border-t border-[#16202f] flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2 font-medium">
              <Link href={REF_URL} className="hover:text-blue-400">VK</Link>
              <Link href={REF_URL} className="hover:text-blue-400">TG</Link>
              <Link href={REF_URL} className="hover:text-blue-400">IG</Link>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <span>🇷🇺</span>
              <span>RU</span>
            </div>
          </div>
        </aside>

        {/* Center Main Stage */}
        <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-6 flex flex-col gap-6">
          {/* Screen 1: Top Hero & Promo Banners */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4" aria-label="Промо-акции первого экрана">
            {/* Big Main Banner (Col 1-8) */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#0a0f18] border border-[#1b2638] p-6 sm:p-9 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] shadow-2xl">
              {/* Background cover image with dark fade gradient on left */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/images/hero-girl-solid.png"
                  alt="Lucky Bear Casino Победители"
                  className="w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070a0f] via-[#070a0f]/85 sm:via-[#070a0f]/75 to-transparent" />
              </div>

              <div className="relative z-10 max-w-sm sm:max-w-md">
                <span className="inline-block text-[11px] uppercase tracking-wider font-extrabold text-blue-400 mb-2.5">
                  Эксклюзивный велком-пакет
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Бонус до{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow">
                    360%
                  </span>
                  <br />
                  за депозит!
                </h1>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm font-normal">
                  Мгновенный старт на официальном сайте Lucky Bear Casino с максимальным бустом банка.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={REF_URL}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-xs sm:text-sm text-white shadow-xl shadow-blue-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Забрать Бонус 360%
                  </Link>
                  <Link
                    href="#seo-article"
                    className="px-4 py-3 rounded-xl bg-[#141b27]/90 hover:bg-[#1a2434] text-xs font-semibold text-slate-300 border border-[#202b3d] transition-colors backdrop-blur-sm"
                  >
                    Подробнее об игре
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Stack: 2 Promo Cards (Col 9-12) */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
              {/* Card 1: Daily Jackpot */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0e1421] to-[#090d16] border border-[#1b2638] p-5 flex flex-col justify-between min-h-[175px] shadow-xl">
                <div className="relative z-10 max-w-[62%]">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-amber-400/90 block">
                    Ежедневно разыгрывается более
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 mt-1 tracking-tight">
                    5,000,000 ₽
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Акция Lucky Bonus</p>
                  <Link
                    href={REF_URL}
                    className="inline-block mt-3 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-colors"
                  >
                    Участвовать
                  </Link>
                </div>
                <div className="absolute right-2 bottom-2 w-32 h-32 pointer-events-none">
                  <img
                    src="/images/promo-roulette.png"
                    alt="Золотое колесо фортуны джекпот"
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>

              {/* Card 2: Free Spins */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0e1421] to-[#090d16] border border-[#1b2638] p-5 flex flex-col justify-between min-h-[175px] shadow-xl">
                <div className="relative z-10 max-w-[62%]">
                  <h3 className="text-base sm:text-lg font-black text-white">Твои FS уже ждут</h3>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Просто пополни счёт — и получи бесплатные FS
                  </p>
                  <Link
                    href={REF_URL}
                    className="inline-block mt-3 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white shadow-md shadow-blue-600/30 transition-colors"
                  >
                    Получить FS
                  </Link>
                </div>
                <div className="absolute right-2 bottom-1 w-32 h-36 pointer-events-none">
                  <img
                    src="/images/promo-fs.png"
                    alt="Бесплатные фриспины с подарком"
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Quick Categories Bar */}
          <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-2">
              <Link href={REF_URL} className="lb92-tab-pill lb92-active">
                <span>▦</span>
                <span>Все</span>
              </Link>
              <Link href={REF_URL} className="lb92-tab-pill">
                <span>🍒</span>
                <span>Слоты</span>
              </Link>
              <Link href={REF_URL} className="lb92-tab-pill">
                <span>⚡</span>
                <span>Быстрые игры</span>
              </Link>
              <Link href={REF_URL} className="lb92-tab-pill">
                <span>🔥</span>
                <span>Популярные</span>
              </Link>
              <Link href={REF_URL} className="lb92-tab-pill">
                <span>🎁</span>
                <span>Покупка Бонуса</span>
              </Link>
              <Link href={REF_URL} className="lb92-tab-pill">
                <span>✨</span>
                <span>Новинки</span>
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <Link
                href={REF_URL}
                className="px-3 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2"
              >
                <span>🔍</span>
                <span>Поиск</span>
              </Link>
              <Link
                href={REF_URL}
                className="px-3 py-1.5 rounded-lg bg-[#111722] hover:bg-[#172030] border border-[#1c2637] text-xs text-slate-300 flex items-center gap-2"
              >
                <span>🏢</span>
                <span>Провайдеры ▾</span>
              </Link>
            </div>
          </div>

          {/* Slots Showcase Grid (Identical 6 slots with proper labels) */}
          <section aria-label="Популярные слоты Lucky Bear">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍒</span>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Слоты Lucky Bear Casino
                </h2>
              </div>
              <Link
                href={REF_URL}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                Все игры →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
              {/* Slot 1: 3 Coin Peacock */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-peacock.png"
                    alt="Слот 3 Coin Peacock"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      3 COIN PEACOCK
                    </span>
                    <span className="text-[10px] text-amber-400 font-bold tracking-wide mt-0.5">3 OAKS</span>
                  </div>
                </div>
              </Link>

              {/* Slot 2: Anubis Wrath */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-anubis.png"
                    alt="Слот Anubis Wrath"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      ANUBIS WRATH
                    </span>
                    <span className="text-[10px] text-orange-400 font-bold tracking-wide mt-0.5">PG SOFT</span>
                  </div>
                </div>
              </Link>

              {/* Slot 3: Crown Coins */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-crown.png"
                    alt="Слот Crown Coins"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      CROWN COINS
                    </span>
                    <span className="text-[10px] text-yellow-400 font-bold tracking-wide mt-0.5">ENDORPHINA</span>
                  </div>
                </div>
              </Link>

              {/* Slot 4: Gemstones Gold */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-gemstones.png"
                    alt="Слот Gemstones Gold"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      GEMSTONES GOLD
                    </span>
                    <span className="text-[10px] text-amber-300 font-bold tracking-wide mt-0.5">PG SOFT</span>
                  </div>
                </div>
              </Link>

              {/* Slot 5: Sweet Bonanza */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-bonanza.png"
                    alt="Слот Sweet Bonanza"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      SWEET BONANZA
                    </span>
                    <span className="text-[10px] text-pink-400 font-bold tracking-wide mt-0.5">PRAGMATIC</span>
                  </div>
                </div>
              </Link>

              {/* Slot 6: Wild Bandito */}
              <Link href={REF_URL} className="lb92-slot-card group">
                <div className="aspect-[4/5] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/images/slot-bandito.png"
                    alt="Слот Wild Bandito"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2 text-center flex flex-col items-center">
                    <span className="text-xs font-black text-white uppercase tracking-wider block drop-shadow-md">
                      WILD BANDITO
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold tracking-wide mt-0.5">PG SOFT</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* SEO Plain Text Section (300-400 words with all keywords embedded in H2 and paragraphs) */}
          <article
            id="seo-article"
            className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0c111a] border border-[#1a2436] text-slate-300 text-sm leading-relaxed flex flex-col gap-6"
          >
            {/* Block 1 */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Lucky Bear Casino Официальный Сайт и Казино Лаки Бир Онлайн
              </h2>
              <p>
                Современный <strong>luckybear casino официальный сайт</strong> представляет собой проверенную игровую платформу для ценителей честного азарта, высоких коэффициентов и моментальных выплат. Если вы находитесь в поиске надежного ресурса, то <strong>lucky bear casino</strong> гарантирует прозрачные правила и тысячи лицензионных тайтлов. Каждый гэмблер, открывающий для себя <strong>лаки бир казино официальный сайт</strong>, получает доступ к сертифицированным слотам, краш-дисциплинам и live-рулетке. Запуская популярное <strong>лаки бир казино онлайн</strong>, вы выбираете безопасность депозитов, быстрое зачисление средств и круглосуточную поддержку игроков.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Luckybear Casino Зеркало и Рабочее Лаки Бир Казино Зеркало
              </h2>
              <p>
                Для сохранения бесперебойного доступа к балансу и ставкам администрация предоставляет актуальное <strong>luckybear casino зеркало</strong>, синхронизированное с главной базой клуба. В случае временных сетевых ограничений рабочее <strong>лаки бир казино зеркало</strong> моментально восстанавливает игровой процесс без потери прогресса. Фирменный <strong>лаки бир казино официальный</strong> портал и его альтернативные адреса поддерживают полный функционал кассы, а надежный <strong>luckybear casino официальный</strong> шлюз обеспечивает шифрование всех персональных данных игроков.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Лакибир Казино Официальный Сайт: Вход в Лаки Бир Казино Сайт
              </h2>
              <p>
                Регистрация профиля отнимает менее минуты: перейдите на <strong>лакибир казино официальный сайт</strong>, заполните базовые поля и активируйте свой велкам-пакет. Клуб <strong>лакибир казино</strong> подготовил внушительный стартовый бонус до 360% на депозит и сотни подарочных вращений. Современный <strong>лаки бир казино сайт</strong> оптимизирован для безупречной работы со смартфонов, планшетов и ПК, гарантируя плавную анимацию барабанов и мгновенный отклик кнопок.
              </p>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Регистрация в Lucky Bear Казино и Турниры в Luckybear Casino
              </h2>
              <p>
                Главным преимуществом, которым обладает клуб <strong>lucky bear казино</strong>, выступает мгновенный вывод выигрышей на карты, электронные кошельки и криптовалюту. Регулярные турниры платформы <strong>luckybear casino</strong> разыгрывают миллионные призовые фонды среди активных участников. Посетите лицензионный ресурс <strong>лаки бир казино</strong>, забирайте подарки на первый депозит и запускайте любимые слоты прямо сейчас.
              </p>
            </div>

            {/* CTA inside article */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={REF_URL}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                Перейти в Lucky Bear Casino и Получить 360%
              </Link>
            </div>
          </article>
        </main>
      </div>

      {/* Footer with Hashtags built from keywords */}
      <footer className="mt-auto bg-[#07090e] border-t border-[#141b27] px-4 py-8 text-xs text-slate-400">
        <div className="max-w-[1680px] mx-auto flex flex-col gap-6">
          {/* Hashtag navigation for on-site search */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Теги и быстрый поиск Lucky Bear Casino
            </span>
            <div className="flex flex-wrap gap-2">
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #lucky_bear_casino
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #luckybear_casino
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #luckybear_casino_зеркало
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #luckybear_casino_официальный
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #luckybear_casino_официальный_сайт
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #lucky_bear_казино
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лакибир_казино
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино_зеркало
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино_онлайн
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино_официальный
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино_официальный_сайт
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лакибир_казино_официальный_сайт
              </Link>
              <Link href="#seo-article" className="px-2.5 py-1 rounded bg-[#101623] hover:bg-[#182133] text-slate-300 hover:text-white transition-colors border border-[#1b2638]">
                #лаки_бир_казино_сайт
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#16202f] text-[11px] text-slate-500">
            <p>© 2026 Lucky Bear Casino. Все права защищены. 18+ Играйте ответственно.</p>
            <p>Официальный домен: https://luckybear42casino.vercel.app</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
