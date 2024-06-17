import { ReportGroup } from '../report/report';
import { User } from '../users/user';

export type Role = 'Admin' | 'Reporter';
export type Preference = {
  name: string;
};

export type Profile = {
  preference: Preference[];
};

export type Account = {
  user: User;
  role: Role;
  created_at: string;
  is_active: boolean;
  region: ReportGroup;
  profile: Profile;
};

export function hasPreference(account: Account, preference: Preference): boolean {
  return account.profile.preference.includes(preference);
}

export function isAdmin(account: Account): boolean {
  return account.role === 'Admin';
}
