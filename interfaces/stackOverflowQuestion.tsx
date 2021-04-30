export interface StackOverflowQuestion {
  tags?: string[] | null;
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}
export interface Owner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}
