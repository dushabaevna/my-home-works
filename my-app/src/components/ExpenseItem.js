
// import './ExpenseItem.css';
// import ExpenseDate from './ExpenseDate';

//     function ExpenseItem(props) {
//         const expenseUserid = props.userid;
//         const expenseTitle = props.title;
//         const expenseCompleted = props.completed;

//         return (
//             <div className='expense-item'>
//                 <ExpenseDate userid = {expenseUserid}/>
//                 <div className='expense-item__description'>
//                     <h2>{expenseTitle}</h2>
//                     <div className='expense-item__price'>{expenseTitle}</div>
//                 </div>
//             </div>
//         )
//     }

//     export default ExpenseItem
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';

function ExpenseItem(props) {
    let expenseDate = props.date;
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

    const [title, setTitle] = useState(expenseTitle);



    const clickHandler = () => {
    //     expenseTitle = "Title changed";
    //     console.log(expenseTitle)
           setTitle('Title Change')
    // 
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date = {expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
           <button Onlick={()=> setTitle(title + num)} ></button>
        </div>
    );
}

export default ExpenseItem;