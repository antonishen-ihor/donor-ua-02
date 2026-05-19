import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

const LinkCard = React.forwardRef(
  ({ className, title, description, imageUrl, href, cta, ...props }, ref) => {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={cn(
          'group relative flex h-72 w-full flex-col justify-between overflow-hidden',
          'rounded-xl bg-fog p-6',
          'shadow-card-inset',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2',
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        aria-label={title}
        {...props}
      >
        {/* Text */}
        <div className="z-10">
          <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-obsidian">
            {title}
          </h3>
          <p className="max-w-[80%] text-sm text-steel leading-[1.5]">
            {description}
          </p>
        </div>

        {/* CTA label */}
        {cta && (
          <div className="z-10">
            <span className="inline-flex items-center bg-obsidian text-snow text-xs font-semibold rounded-pill px-4 h-8 shadow-cta">
              {cta}
            </span>
          </div>
        )}

        {/* Illustration */}
        <div className="absolute bottom-0 right-0 h-36 w-36 translate-x-4 translate-y-4">
          <motion.img
            src={imageUrl}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
      </motion.a>
    )
  }
)

LinkCard.displayName = 'LinkCard'

export { LinkCard }
