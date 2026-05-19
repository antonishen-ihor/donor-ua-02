import { LinkCard } from './ui/link-card'
import donoramImg from '../../assets/donoram.png'
import rezepImg from '../../assets/rezep.png'
import itImg from '../../assets/it.png'
import bloodcentrsImg from '../../assets/bloodcentrs.png'

const cards = [
  {
    title: 'Донорам',
    description: 'Ми зробили систему простою й зрозумілою, щоб здавати кров було легко й регулярно.',
    cta: 'Здати кров',
    href: '#',
    imageUrl: donoramImg,
  },
  {
    title: 'Реципієнтам',
    description: 'Ми зробили систему простою й зрозумілою, щоб отримати кров вчасно.',
    cta: 'Запит на кров',
    href: '#',
    imageUrl: rezepImg,
  },
  {
    title: 'Бізнесу',
    description: 'Корпоративні дні донора, бонусні програми та спільні кампанії.',
    cta: 'Про співпрацю',
    href: '#',
    imageUrl: itImg,
  },
  {
    title: 'Центрам крові',
    description: 'Допомагаємо знаходити донорів, комунікувати з ними і тримати все під контролем.',
    cta: 'Дізнатись більше',
    href: '#',
    imageUrl: bloodcentrsImg,
  },
]

export default function Projects() {
  return (
    <section className="bg-mist py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="font-display font-bold text-obsidian leading-[1.2] tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Ми віримо в силу донорства і діємо
          </h2>
          <p className="text-sm text-steel leading-[1.6] max-w-xl mx-auto">
            Пропонуємо партнерство: корпоративні дні донора, бонусні програми, спільні кампанії.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <LinkCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  )
}
