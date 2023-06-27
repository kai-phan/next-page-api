declare namespace Model {
  export interface Job {
    id: string;
    user_id: string;
    position: string;
    description: string | null;
    company: string;
    company_logo: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
  }
}
