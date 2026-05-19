import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
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
          'rounded-md bg-surface-card p-6',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-outer focus-visible:ring-offset-2',
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
          <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-ink">
            {title}
          </h3>
          <p className="max-w-[80%] text-sm text-body leading-[1.5]">
            {description}
          </p>
        </div>

        {/* CTA label */}
        {cta && (
          <div className="z-10">
            <span className="inline-flex items-center bg-secondary-bg text-ink text-xs font-bold rounded-md px-4 h-8">
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
            className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
          />
        </div>
      </motion.a>
    )
  }
)

LinkCard.displayName = 'LinkCard'

export { LinkCard }
