/**
 * Define types to be used by schema generator
 */
export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  events: Event[];
};

export type Event = {
  id: string;
  title: string;
  startDateTime: string;
};
