export const HERO_HOMEPAGE = {
  title: 'Commonwealth',
  descr: 'A tokenized innovation community leading the global development of Web3',
  stats: [
    {
      value: 1250,
      name: 'Accredited Members',
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
