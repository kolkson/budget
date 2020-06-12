import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
export default function Chart({ parentCategories, transactions, parentCategory }) {

  const parentCategoryName = parentCategories.map(parentCategory => parentCategory.name)
  const parentCategoryTheme = parentCategories.map(parentCategory => parentCategory.theme)

  const mainCategoryFilteredAmount = (() => {
    try {
      return parentCategories.map(parentCategory => transactions.filter(transaction => transaction.parentCategoryId === parentCategory.id))
    } catch (error) {
      return null;
    }

  })();
  const mainCategoryAmount = useMemo(() => mainCategoryFilteredAmount.map(transactions => transactions.reduce((acc, transaction) => acc + transaction.amount, 0)), [mainCategoryFilteredAmount])

  const data = {
    labels: parentCategoryName,
    datasets: [
      {
        label: '',
        backgroundColor: parentCategoryTheme,
        cutoutPercentage: 50,
        borderColor: 'rgba(255,255,255)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: mainCategoryAmount
      },
    ]
  };
  return (
    <Doughnut data={data} />
  )
}

