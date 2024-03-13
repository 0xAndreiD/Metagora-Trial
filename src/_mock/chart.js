export const portfolioVisitsData = {
  title: 'Portfolio Visits in Metagora',
  labels: [
    '01/01/2023',
    '02/01/2023',
    '03/01/2023',
    '04/01/2023',
    '05/01/2023',
    '06/01/2023',
    '07/01/2023',
    '08/01/2023',
    '09/01/2023',
    '10/01/2023',
    '11/01/2023',
    '12/01/2023',
    '01/01/2024',
    '02/01/2024',
  ],
  series: [
    {
      name: 'Google',
      type: 'column',
      fill: 'solid',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 44, 55],
    },
    {
      name: 'Apple',
      type: 'area',
      fill: 'gradient',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 30, 25],
    },
    {
      name: 'Microsoft',
      type: 'line',
      fill: 'solid',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 23, 11],
    },
  ],
};

export const currentValuesData = {
  title: 'Current Values',
  series: [
    { label: 'Holdings', value: 125000 },
    { label: 'Loss', value: 25000 },
  ],
};

export const holdingsData = {
  title: 'Hoidings in Metagora',
  subheader: '(+44%) than last year',
  series: [
    { label: 'FXH', value: 400 },
    { label: 'ARKG', value: 430 },
    { label: 'FHLC', value: 448 },
    { label: 'IYH', value: 470 },
    { label: 'IXJ', value: 540 },
    { label: 'IHI', value: 580 },
    { label: 'XBI', value: 690 },
    { label: 'IBB', value: 1100 },
    { label: 'VHT', value: 1200 },
    { label: 'XLV', value: 1380 },
  ],
};

export const topHoldingsData = {
  title: 'Top Holdings',
  categories: ['XLV', 'VHT', 'IBB', 'XBI', 'IHI', 'IXJ'],
  series: [
    { name: 'Google', data: [80, 50, 30, 40, 100, 20] },
    { name: 'Apple', data: [20, 30, 40, 80, 20, 80] },
    { name: 'Microsoft', data: [44, 76, 78, 13, 43, 10] },
  ],
};
