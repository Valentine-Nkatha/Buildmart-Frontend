"use client";

import { useEffect, useState } from 'react';

import { MaterialData } from '../utils/types';

export const useMaterials = () => {
  const [materials, setMaterials] = useState<MaterialData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch('/api/materials'); 
        const data = await response.json();
        setMaterials(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error){
          setError(error.message)
        }else{
        setError('Failed to fetch materials');
        }
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  return { materials, loading, error, setMaterials };
};