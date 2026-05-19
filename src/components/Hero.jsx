export default function Hero() {
  return (
    <section className="bg-mist">
      <div className="max-w-[1440px] mx-auto px-6 pt-28 pb-36 text-center">

        <p className="inline-flex items-center gap-2 bg-fog border border-pebble text-xs font-semibold text-steel rounded-pill px-4 py-1.5 mb-8 tracking-wide uppercase">
          Платформа донорства крові в Україні
        </p>

        <h1
          className="font-display font-bold text-obsidian leading-[1.08] tracking-tight mb-6 flex flex-col items-center"
          style={{ fontSize: 'clamp(52px, 6vw, 80px)' }}
        >
          <span>Донорство –</span>
          <span>
            <span className="text-ash font-medium">це</span>
            {' '}база
          </span>
        </h1>

        <p className="text-base text-steel leading-[1.65] max-w-lg mx-auto mb-10" style={{ fontSize: '16px' }}>
          Кожен третій пацієнт в Україні не отримує донорську кров вчасно.
          Ми тут, щоб це змінити — стань донором або дізнайся,
          де можна здати кров.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="bg-obsidian hover:bg-graphite text-snow text-sm font-semibold rounded-pill px-6 h-11 transition-colors shadow-cta">
            Здати кров
          </button>
          <button className="bg-snow hover:bg-mist text-graphite border border-graphite text-sm font-semibold rounded-pill px-6 h-11 transition-colors">
            Чи можу я бути донором
          </button>
        </div>

      </div>
    </section>
  )
}
