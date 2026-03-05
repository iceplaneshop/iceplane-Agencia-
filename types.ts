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

export interface Transformation {
  id: number;
  image: string;
  loss: string;
  name: string;
  days: number;
  phase: 'before' | 'after';
  gender: 'male' | 'female';
}