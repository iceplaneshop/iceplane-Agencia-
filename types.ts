import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  result: string;
  image: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}