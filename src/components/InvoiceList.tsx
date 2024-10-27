"use client"
import React from 'react'
import InvoiceCard from './InvoiceCard'
import useInvoiceList from '@/hooks/componentHooks/useInvoiceList'
import { InvoiceData } from '@/lib/utils/generatePdf'

function InvoiceList() {
    const { invoices } = useInvoiceList()
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Invoices</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    invoices.map((invoice: any, index) => {
                        return <InvoiceCard key={invoice._id} data={invoice as InvoiceData} />
                    })
                }

            </div>


        </div>
    )
}

export default InvoiceList