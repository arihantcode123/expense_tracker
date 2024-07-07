import React, { useState } from 'react';
import NewTrans from './NewTrans';
import Eachtrans from './Eachtrans';

const History = () => {
    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);
    const [balance,setBalance]=useState(0);
    const [data,setData]=useState([]);
    const giveData=(trans)=>{
        if(parseInt(trans.amount)>=0)setIncome(income+parseInt(trans.amount));
        else setExpense(expense+parseInt(trans.amount));
        setData((preValue)=>{
            setBalance(balance+parseInt(trans.amount));
            return [
                ...preValue,
                trans
            ]
        })
    }
    const deleteRecord=(id)=>{
        setData((preValue)=>{
            return data.filter((oldValue,index)=>{
                if(id===index)
                    {
                        if(parseInt(oldValue.amount)>=0)
                            {
                                setIncome(income-parseInt(oldValue.amount));
                                setBalance(balance-parseInt(oldValue.amount));
                            }
                        else 
                        {
                            setExpense(expense-parseInt(oldValue.amount));
                            setBalance(balance-parseInt(oldValue.amount));
                        }
                    }
                else return true;
            })
        })
    }
  return (
    <>
        <div className='balance_heading'>Your Balance <br/>₹ {balance}</div>
        <div className='income_expense'>
            <p className='income_heading'>Income <br/><span className='income_green'>₹ {income}</span></p>
            <p className='income_heading'>Expense <br/><span className='expense_red'>₹ {expense}</span></p>
        </div>
        <h4 className='history_heading'>History</h4>
        <hr></hr>
        <div className='overflow_handler'>
        {
            data.map((entry,index)=>{
                let style={};
                if(entry.amount>=0)
                {
                    style.color="green";
                }
                else 
                {
                    style.color="red";
                }
                return <Eachtrans key={index} id={index} text={entry.text} amount={entry.amount} style={style} onSelect={deleteRecord}/>
            })
        }
        </div>
        <NewTrans getdata={giveData}/>
    </>
  )
}

export default History;
