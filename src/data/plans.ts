import { Plan } from '../types';

export const mentorshipPlans: Plan[] = [
  {
    name: 'SILVER',
    price: 99,
    duration: '2 months',
    type: 'mentorship',
    features: [
      'One compulsory mentoring session per month',
      'Personal phone access to an IIT Roorkee mentor',
      'Basic doubt clearing support',
      'Access to mentor during business hours for about 15 mins in a week'
    ]
  },
  {
    name: 'GOLD',
    price: 999,
    duration: '4 months',
    type: 'mentorship',
    features: [
      'Regular performance tests',
      'Progress tracking dashboard',
      'Personalized guidance',
      'Scheduled evaluations',
      'Priority mentor access',
      'Weekend doubt clearing sessions',
      'Talk with mentor for 60 mins a week'
    ]
  },
  {
    name: 'PLATINUM',
    price: 5999,
    duration: '12 months',
    type: 'mentorship',
    features: [
      'All GOLD plan features',
      'Comprehensive revision notes',
      'Complete test materials',
      '24/7 mentor support',
      'Mock tests',
      'Personalized study plan',
      'Weekly progress reports'
    ]
  }
];

export const counselingPlan: Plan = {
  name: 'College Selection',
  price: 199,
  duration: 'one-time',
  type: 'counseling',
  features: [
    'Detailed college analysis',
    'Branch selection guidance',
    'One-on-one counseling session',
    'Rank-based college shortlist',
    'Career pathway guidance'
  ]
};
