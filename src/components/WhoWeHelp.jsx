import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

const items = [
  {
    value: 'item-1',
    trigger: 'Онкохворі пацієнти',
    content:
      'Пацієнти з онкологічними захворюваннями часто потребують переливання крові під час хіміотерапії або операцій. Втрата крові й пригнічення кровотворення — постійні супутники лікування. Кожна здана одиниця крові може бути вирішальною для продовження курсу.',
  },
  {
    value: 'item-2',
    trigger: 'Постраждалі від травм і ДТП',
    content:
      'При важких травмах людина може втратити критичну кількість крові за лічені хвилини. Своєчасне переливання рятує життя ще на місці аварії та у відділенні реанімації, поки лікарі відновлюють стабільний стан пацієнта.',
  },
  {
    value: 'item-3',
    trigger: 'Породіллі з ускладненнями',
    content:
      'Під час або після пологів може виникнути масивна маткова кровотеча — одна з головних причин материнської смертності. Донорська кров допомагає молодим мамам пережити найнебезпечніший момент і побачити своїх дітей.',
  },
  {
    value: 'item-4',
    trigger: 'Пацієнти після кардіохірургічних операцій',
    content:
      'Операції на серці вимагають великих запасів крові різних груп. Без регулярного поповнення банку крові планові втручання довелося б скасовувати, а стан багатьох пацієнтів — погіршувався б у черзі очікування.',
  },
  {
    value: 'item-5',
    trigger: 'Поранені військові',
    content:
      'З початком повномасштабного вторгнення потреба в донорській крові для поранених бійців зросла в рази. Ваша здача крові — це пряма підтримка тих, хто захищає Україну. Кожна крапля рахується.',
  },
]

export default function WhoWeHelp() {
  return (
    <section className="bg-surface-soft py-[120px]">
      <div className="max-w-[900px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className="font-display font-bold text-ink leading-[1.2] tracking-[-1.2px] mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Кого рятує ваша кров
          </h2>
          <p className="text-base text-body leading-[1.6] max-w-2xl mx-auto">
            До повномасштабного вторгнення росії понад 200 000 пацієнтів на рік потребували
            переливання донорської крові. Наразі кількість необхідної донорської крові та тих,
            хто її потребує, лише зростає.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" variant="solid" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
