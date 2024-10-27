import React from 'react'

function Footer() {
    return (
        <div className='bg-[#1e1e20] w-full  '>
            <div className='pt-12 w-5/6 flex flex-wrap mx-auto text-[#ffffff7c]'>
                <div className='md:w-1/2 w-full '>
                    <h3 className='text-lg font-medium'>FYNAMICS Business Solutions(P) Ltd</h3>
                    <p className='mt-2'>Finline is an automated platform for financial documents. Your risk-free online tool to create a project report to apply for a bank loan. Be it a new business portfolio or an existing CMA for SME, we have solutions for entrepreneurs & enterprises at every stage.</p>
                    <p className='mt-8'>©Copyright 2019 - 2020 Finline</p>
                </div>
                <div className='md:w-1/2 mt-10 md:mt-0 w-full md:ps-5 text-white'>
                    <p><a href="">Affiliates</a></p>
                    <p><a href="">Professsionals</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer