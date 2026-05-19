export default function Hero() {
  return (
    <section className="bg-surface-soft">
      <div className="max-w-[1440px] mx-auto px-6 pt-32 pb-36 text-center">

        <h1
          className="font-display font-bold text-ink leading-[1.1] tracking-[-1.2px] mb-6 whitespace-nowrap flex justify-center"
          style={{ fontSize: 'clamp(72px, 6vw, 96px)' }}
        >
          Донорство – це база
        </h1>

        <p className="text-base text-body leading-[1.6] max-w-xl mx-auto mb-10">
          Кожен третій пацієнт в Україні не отримує донорську кров вчасно.
          Ми тут, щоб це змінити. Все просто — стань донором або дізнайся,
          де можна здати кров.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="bg-primary hover:bg-primary-pressed text-on-dark text-sm font-bold rounded-md px-6 h-11 transition-colors">
            Здати кров
          </button>
          <button className="bg-secondary-bg hover:bg-secondary-pressed text-ink text-sm font-bold rounded-md px-6 h-11 transition-colors">
            Чи можу я бути донором
          </button>
        </div>

      </div>
    </section>
  )
}
