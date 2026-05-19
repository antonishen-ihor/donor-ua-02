import { useState } from 'react'
import logoSrc from '../../assets/donor-ua-logo.png'

function ChevronDown() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Реципієнтам', href: '#' },
  {
    label: 'Донорам',
    href: '#',
    dropdown: [
      { label: 'Як стати донором', href: '#' },
      { label: 'Де здати кров', href: '#' },
      { label: 'Підготовка до здачі', href: '#' },
      { label: 'Після здачі крові', href: '#' },
    ],
  },
  {
    label: 'Бізнесу',
    href: '#',
    dropdown: [
      { label: 'Корпоративне донорство', href: '#' },
      { label: 'Партнерство', href: '#' },
      { label: 'Звіти та документи', href: '#' },
    ],
  },
  { label: 'Центрам крові', href: '#' },
  {
    label: 'Про Донор UA',
    href: '#',
    dropdown: [
      { label: 'Про нас', href: '#' },
      { label: 'Команда', href: '#' },
      { label: 'Контакти', href: '#' },
      { label: 'ЗМІ про нас', href: '#' },
    ],
  },
]

const LANGUAGES = [
  { label: 'Укр', value: 'uk' },
  { label: 'Eng', value: 'en' },
]

function Dropdown({ items }) {
  return (
    <div className="absolute top-full left-0 mt-0 min-w-[200px] bg-canvas border border-hairline rounded-md z-50 py-1.5">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-4 py-2 text-sm font-medium text-ink hover:bg-surface-card transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

function NavItem({ link }) {
  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        className="text-sm font-semibold text-ink hover:text-primary transition-colors whitespace-nowrap"
      >
        {link.label}
      </a>
    )
  }
  return (
    <div className="relative group">
      {/* transparent bridge keeps hover alive while cursor moves to dropdown */}
      <button className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-primary transition-colors whitespace-nowrap group-hover:text-primary">
        {link.label}
        <span className="text-ash group-hover:text-primary transition-colors mt-px">
          <ChevronDown />
        </span>
      </button>
      <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
        <Dropdown items={link.dropdown} />
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('uk')

  return (
    <header className="sticky top-0 z-50 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center gap-6">

        {/* Logo */}
        <a href="/" className="shrink-0" aria-label="Донор UA">
          <img src={logoSrc} alt="Донор UA" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}

          {/* Language switcher */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-primary group-hover:text-primary transition-colors whitespace-nowrap">
              {LANGUAGES.find((l) => l.value === activeLang)?.label}
              <span className="text-ash group-hover:text-primary transition-colors mt-px">
                <ChevronDown />
              </span>
            </button>
            <div className="absolute top-full right-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
              <div className="bg-canvas border border-hairline rounded-md py-1.5 min-w-[100px]">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setActiveLang(lang.value)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeLang === lang.value
                        ? 'text-primary bg-surface-card'
                        : 'text-ink hover:bg-surface-card'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search icon */}
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-surface-card text-ink transition-colors"
            aria-label="Пошук"
          >
            <SearchIcon />
          </button>
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <button className="bg-secondary-bg hover:bg-secondary-pressed text-ink text-sm font-bold rounded-md px-[14px] h-10 transition-colors whitespace-nowrap">
            Підтримати нас
          </button>
          <button className="bg-primary hover:bg-primary-pressed text-on-dark text-sm font-bold rounded-md px-[14px] h-10 transition-colors whitespace-nowrap">
            Кабінет донора
          </button>
        </div>

        {/* Mobile right side */}
        <div className="xl:hidden flex items-center gap-2 ml-auto">
          <button className="bg-primary hover:bg-primary-pressed text-on-dark text-sm font-bold rounded-md px-3 h-10 transition-colors whitespace-nowrap hidden sm:block">
            Кабінет донора
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-card text-ink"
            aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-canvas border-t border-hairline">
          <nav className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between py-3 text-sm font-semibold text-ink border-b border-hairline-soft last:border-0"
              >
                {link.label}
                {link.dropdown && <span className="text-ash"><ChevronDown /></span>}
              </a>
            ))}
            <div className="flex items-center justify-between py-3 text-sm font-semibold text-ink border-b border-hairline-soft">
              <span>Мова</span>
              <div className="flex gap-3">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setActiveLang(lang.value)}
                    className={`text-sm font-semibold transition-colors ${
                      activeLang === lang.value ? 'text-primary' : 'text-mute'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          <div className="max-w-[1280px] mx-auto px-6 pb-5 flex gap-2">
            <button className="flex-1 bg-primary hover:bg-primary-pressed text-on-dark text-sm font-bold rounded-md h-10 transition-colors">
              Кабінет донора
            </button>
            <button className="flex-1 bg-secondary-bg hover:bg-secondary-pressed text-ink text-sm font-bold rounded-md h-10 transition-colors">
              Підтримати нас
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
