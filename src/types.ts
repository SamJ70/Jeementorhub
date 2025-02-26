export type Plan = {
  name: string;
  price: number;
  duration: string;
  features: string[];
  type: 'mentorship' | 'counseling';
};

export type MentorshipType = 'counseling' | 'ongoing';