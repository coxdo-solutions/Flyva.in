// components/ClientOnlyDate.tsx
'use client';
import { useEffect, useState } from 'react';

export function ClientOnlyDate({ date }: { date: string }) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB'); // consistent format
    setFormatted(formattedDate);
  }, [date]);

  return <span>Next departure: {formatted}</span>;
}
