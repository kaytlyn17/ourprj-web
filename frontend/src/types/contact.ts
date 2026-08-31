export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export type ContactResponse = {
  data: {
    accepted: boolean;
  };
};