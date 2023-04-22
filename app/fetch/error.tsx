'use client';

import React from 'react';

export default function Error({ error, reset }: any) {
  return (
    <div className="space-y-4 text-white">
      <h2 className="text-lg font-bold">Error</h2>
      <p className="text-sm">{error?.message}</p>
      <div>
        <button onClick={() => reset()}>Try Again</button>
      </div>
    </div>
  );
}
