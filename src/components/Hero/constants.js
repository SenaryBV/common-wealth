export const HERO_HOMEPAGE = {
  smallTitle: 'Senary',
  title: 'Commonwealth',
  descr: 'The innovation community investing in decentralized, open source, public utilities.',
  stats: [
    {
      value: 1250,
      name: 'Members',
      percents: false,
    },
    {
      value: 1.25,
      name: 'Common price',
      percents: true,
    },
    {
      value: 125,
      name: 'Community AUM',
      percents: true,
    },
  ],
  cta: [
    {
      name: 'Invest with us',
      attrs: {
        to: '/',
        className: 'btn btn-primary',
      },
    },
    {
      name: 'Apply for funding',
      attrs: {
        to: '/',
        className: 'btn btn-outline-primary',
      },
    },
  ],
}

export const HERO_GROWTH_STRATEGIES = {
  ...HERO_HOMEPAGE,
  title: 'Growth Strategies',
}

export const HERO_HOW_IT_WORKS = {
  title: 'How it works',
  descr:
    'Members gain exposure to an actively and professionally managed portfolio of early-stage crypto assets. New investments and novel yield strategies are deployed on an ongoing basis to maximize returns. ',
}

export const HERO_SLA = {
  title: 'Software is a Liquid Asset',
  descr: 'In Web3, Software is a Liquid Asset.',
}
