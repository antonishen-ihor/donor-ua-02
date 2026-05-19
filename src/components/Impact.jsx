import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 201,  suffix: 'k',  decimals: 0, label: 'Людей долучились до нашої спільноти' },
  { target: 45,   suffix: 'k+', decimals: 0, label: 'Врятованих життів' },
  { target: 7.5,  suffix: 'k+', decimals: 1, label: 'Реципієнтів отримало кров вчасно' },
]

function useCountUp(target, decimals, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(parseFloat((eased * target).toFixed(decimals)))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals, duration])

  return { value, ref }
}

function StatCard({ target, suffix, decimals, label }) {
  const { value, ref } = useCountUp(target, decimals)

  return (
    <div ref={ref} className="bg-surface-card rounded-md px-8 py-10 flex flex-col gap-3 group cursor-default">
      <span
        className="font-display font-bold text-ink leading-none tracking-[-0.8px] transition-colors duration-500 ease-in-out group-hover:text-primary"
        style={{ fontSize: '44px' }}
      >
        {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
      </span>
      <span className="text-base text-body leading-[1.4]">
        {label}
      </span>
    </div>
  )
}

export default function Impact() {
  return (
    <section className="bg-surface-soft py-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
