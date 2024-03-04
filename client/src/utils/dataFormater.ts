const monthNames = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек',
];

export const formatDate = (date: string) => {
  const d = new Date(date);
  const day = d.getDate();
  const monthName = monthNames[d.getMonth()];
  return `${day} ${monthName}`;
};
