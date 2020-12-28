import React, { createContext, useContext, useEffect, useState } from 'react';
import { EventEmitter } from 'events';

const EmitterEvents = {
  HOUR_SELECTED: 'HOUR_SELECTED',
  CARD_SELECTED: 'CARD_SELECTED'
};

interface EmitterContextData {
  emitter: EventEmitter;
  events: typeof EmitterEvents;
}

const EmitterContext = createContext<EmitterContextData>(
  {} as EmitterContextData
);

export const EmitterProvider: React.FC = ({ children }) => {
  const emitter = new EventEmitter();

  return (
    <EmitterContext.Provider value={{ emitter, events: EmitterEvents }}>
      {children}
    </EmitterContext.Provider>
  );
};

export function useEmitter() {
  const context = useContext(EmitterContext);

  if (!context) {
    throw new Error('useEmitter must be used within an EmitterProvider.');
  }

  return context;
}

export default EmitterContext;
