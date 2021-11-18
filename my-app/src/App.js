import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
     {
       id: 'el',
       title: 'Toilet Paper',
       amount: 94,
       date: new Date(2021, 1, 1),
     },
     {
      id: 'el',
      title: 'Car Insurense',
      amount: 78,
      date: new Date(2018, 19, 1),
     },
     {
      id: 'el',
      title: 'New Desk',
      amount: 234,
      date: new Date(2020, 8, 4),
     },
     {
      id: 'el',
      title: 'New TV',
      amount: 96,
      date: new Date(2019, 19, 3),
     },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
         title={expenses[1].title}
         amount={expenses[1].amount}
         date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;