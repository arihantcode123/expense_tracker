import React from 'react';

import History from './History';
import './index.css';
// import IncomeExpense from '../public/IncomeExpense';

const App = () => {
  return (
    <div className='main_container'>
        <div className='app_container'>
            <h2 className="main_heading">Expense Tracker</h2>
            <History/>
        </div>
    </div>
  )
}

export default App