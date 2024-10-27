import { GetPartnerApi } from "@/pages/api/GetPartnerApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Partner {
  id: number;
  name: string;
  email: string;
  foto: string;
  description?: string;
}

export default function PartnersComponent() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await GetPartnerApi();
        setPartners(response);
        // Set partner pertama sebagai default
        if (response && response.length > 0) {
          setSelectedPartner(response[0]);
        }
      } catch (err) {
        setError("Failed to fetch partners data");
        console.error("Error fetching partners:", err);
      }
    };
    fetchPartners();
  }, []);

  return (
    <>
      {selectedPartner && (
        <div className="flex justify-stretch space-x-5 w-full h-full">
          <div className="flex-col h-full px-3 w-full">
            <div className=" mb-5">
              <p className="text-black text-4xl font-light">Partners</p>
            </div>
            <div className="flex-col space-y-3 text-center">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner)}
                  className="cursor-pointer flex-row"
                >
                  <p className="text-black text-md">{partner.name}</p>
                  
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <img src={selectedPartner.foto} className="float-left pr-5" alt="" />
            </div>
            <div className="flex-col space-y-3">
              <h1 className="text-xl text-black font-bold">{selectedPartner.name}</h1>
              <div className="flex-col space-y-1">
                <p className="text-black text-sm">EMAIL :</p>
                <p className="text-black text-sm">{selectedPartner.email}</p>
              </div>
              <p>{selectedPartner.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}