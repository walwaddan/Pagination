import React, { useState , useEffect} from 'react';

const Pagingin = ({ postsPerPage, totalPosts, paginate , currentPage  }) => {

    const styClk = {
        'background-color': 'red'
    }
    const styNo = {
        "backgroungColor": "black"
    }

    const storedValueAsNumber = Number(localStorage.getItem("count"))
    const [count, setCount] = useState(
        Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
      )
    const [toggle, setToggle] = useState(false)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [number, setNumber] = useState(0)

    const prev = (num) => {
        if (num - 1 > 0) {
            setNumber(num - 1)
        }
        else {
            setNumber(1)
        }
    }

    const next = (num) => {
        if (num + 1 < pageNumbers.length) {
            setNumber(num + 1)
        }
        else {
            setNumber(pageNumbers.length)
        }
    }

    useEffect(() => {
        localStorage.setItem("count", String(currentPage) )
      }, [count])





    return (
        <nav>

            <ul className='pagination'>

                <ul className="paginated" >



                    <li key={number} className='page-item'>
                        <button className='button'  onClick={() => prev(number)} href='!#'  >  Previous-Page<br /> {pageNumbers[number - 1]}<br />  {'<<'}</button>
                        <button className='button' onClick={() => paginate(pageNumbers[number + 0])} href={pageNumbers[number + 0]} >
                            {pageNumbers[number + 0]}
                        </button>
                        <button className='button'  onClick={() => paginate(pageNumbers[number + 1])} href={pageNumbers[number + 1]}  >
                            {pageNumbers[number + 1]}
                        </button>
                        <button className='button'  onClick={() => paginate(pageNumbers[number + 2])} href={pageNumbers[number + 2]}  >
                            {pageNumbers[number + 2]}
                        </button>
                        <button className='button'  onClick={() => paginate(pageNumbers[number + 3])} href={pageNumbers[number + 3]} >
                            {pageNumbers[number + 3]}
                        </button>
                        <button className='button'  onClick={() => next(number)} href='!#'  >  Next-Page<br /> {pageNumbers[number + 4]}<br />  {'>>'}</button>
                    </li>

                </ul>


            </ul>
          <strong> Page {currentPage} of {totalPosts/postsPerPage} </strong>
        </nav>
    );
};

export default Pagingin;
