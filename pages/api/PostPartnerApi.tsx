import React from 'react'


async function PostPartnerApi (data: {name: string, email: string, phone: string, address: string, city: string, state: string, zip: string, country: string, website: string, description: string, logo: string}) {
    const response = await fetch('/api/partner', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    return response.json()
    
}
export default function PostPartnerApii  ()  {

}
