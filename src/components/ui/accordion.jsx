import * as React from 'react'
import { cn } from '../../lib/utils'
import { cva } from 'class-variance-authority'
import { ChevronDown, Plus } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'

const accordionRootVariants = cva('', {
  variants: {
    variant: {
      default: '',
      outline: 'space-y-2',
      solid: 'space-y-2',
    },
  },
  defaultVariants: { variant: 'default' },
})

const accordionItemVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b border-pebble',
      outline: 'border border-pebble rounded-xl px-4',
      solid: 'rounded-xl bg-fog px-4',
    },
  },
  defaultVariants: { variant: 'default' },
})

const accordionTriggerVariants = cva(
  'flex flex-1 items-center justify-between py-4 gap-2.5 text-ink font-semibold transition-all [&[data-state=open]>svg]:rotate-180 cursor-pointer',
  {
    variants: {
      variant: { default: '', outline: '', solid: '' },
      indicator: {
        arrow: '',
        plus: '[&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180',
        none: '',
      },
    },
    defaultVariants: { variant: 'default', indicator: 'arrow' },
  }
)

const accordionContentVariants = cva(
  'overflow-hidden text-sm text-steel transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: { variant: { default: '', outline: '', solid: '' } },
    defaultVariants: { variant: 'default' },
  }
)

const AccordionContext = React.createContext({ variant: 'default', indicator: 'arrow' })

function Accordion({ className, variant = 'default', indicator = 'arrow', children, ...rest }) {
  return (
    <AccordionContext.Provider value={{ variant, indicator }}>
      <AccordionPrimitive.Root
        className={cn(accordionRootVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ className, children, ...rest }) {
  const { variant } = React.useContext(AccordionContext)
  return (
    <AccordionPrimitive.Item
      className={cn(accordionItemVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Item>
  )
}

function AccordionTrigger({ className, children, ...rest }) {
  const { variant, indicator } = React.useContext(AccordionContext)
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(accordionTriggerVariants({ variant, indicator }), className)}
        {...rest}
      >
        {children}
        {indicator === 'plus' && (
          <Plus className="size-4 shrink-0 transition-transform duration-200" strokeWidth={1} />
        )}
        {indicator === 'arrow' && (
          <ChevronDown className="size-4 shrink-0 transition-transform duration-200" strokeWidth={1} />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...rest }) {
  const { variant } = React.useContext(AccordionContext)
  return (
    <AccordionPrimitive.Content
      className={cn(accordionContentVariants({ variant }), className)}
      {...rest}
    >
      <div className="pb-5 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
