import logoSrc from '../../assets/donor-ua-logo.png'

const columns = [
  {
    title: 'Донорам',
    links: ['Як стати донором', 'Де здати кров', 'Підготовка до здачі', 'Після здачі крові'],
  },
  {
    title: 'Реципієнтам',
    links: ['Запит на кров', 'Центри крові', 'Невідкладна допомога', 'FAQ'],
  },
  {
    title: 'Про нас',
    links: ['Команда', 'Контакти', 'ЗМІ про нас', 'Звіти та документи'],
  },
  {
    title: 'Підтримати',
    links: ['Зробити донат', 'Партнерство', 'Корпоративне донорство', 'Волонтерство'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-snow border-t border-pebble">
      <div className="max-w-[1280px] mx-auto px-6 py-12">

        {/* Logo + tagline */}
        <div className="mb-10">
          <a href="/" aria-label="Донор UA">
            <img src={logoSrc} alt="Донор UA" className="h-7 w-auto mb-3" />
          </a>
          <p className="text-sm text-steel max-w-xs leading-[1.5]">
            Платформа донорства крові, яка з'єднує донорів, реципієнтів та центри крові по всій Україні.
          </p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold text-obsidian mb-3 uppercase tracking-wide">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-steel hover:text-ink transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-pebble pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-ash">© 2026 Донор UA. Всі права захищені.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-ash hover:text-ink transition-colors">Конфіденційність</a>
            <a href="#" className="text-xs text-ash hover:text-ink transition-colors">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
