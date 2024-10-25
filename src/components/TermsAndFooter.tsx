import React from 'react'
import DescriptioGroup from './common/DescriptionGroup'

function TermsAndFooter() {
    return (
        <>
            <div className='md:w-1/2 w-full'>
                <DescriptioGroup placeholder='Terms and conditions - late fees, payment methods, delivery schedule' inputValue='Terms' />
                <DescriptioGroup placeholder='Thank you for your business' inputValue='Foot Note' />

            </div>
        </>
    )
}

export default TermsAndFooter