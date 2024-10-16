"use client";

import React, { useEffect, useState } from 'react';
import { useMaterials } from '../../hooks/useMaterials';
import { MaterialData } from '../../utils/types';
import Image from 'next/image';
import Layout from '../Layout'; 

const Paint = () => {
  
  const { materials, loading } = useMaterials() as { materials: MaterialData[], loading: boolean }; 
  const [filteredMaterials, setFilteredMaterials] = useState<MaterialData[]>([]); 

  useEffect(() => {
    console.log('Materials:', materials);
    
   
    const filtered = materials.filter(
      (material) => material.material_name.toLowerCase().includes('paint')
    );
    
    console.log('Filtered Materials:', filtered);
    setFilteredMaterials(filtered);
  }, [materials]);


  return (
    <Layout>
      <div className="flex flex-row min-h-screen bg-gray-100">
    
        
        <div className="flex-1 p-4 sm:p-6 ml-72 pt-24 mt-24 overflow-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredMaterials.map((material: MaterialData) => (
                <div
                  key={material.material_id} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                >
                
                  <Image
                    src="/images/paint.jpg"
                    alt= "cap picture"
                    className="w-full h-32 sm:h-40 object-contain mb-4"
                    width={500}
                    height={600}
                  />
                  <h4 className="font-semibold text-md text-gray-900 mb-1">KES {material.price}</h4>
                  <h4 className="text-gray-800 text-base font-bold mb-1">{material.material_name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{material.brand_name}</p>
                  <button className="mt-4 w-full sm:w-[150px] font-bold border border-[#F8B612] text-black py-2 rounded-lg sm:rounded-2xl hover:bg-[#F8B612] hover:text-white transition-colors duration-300">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Paint;