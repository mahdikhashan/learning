import { Account, Role } from '../account/account';

export type ReportTitle = string;
export type ReportBody = string;

export type ReportStatus = 'new' | 'edited' | 'reviewed' | 'closed';

export type ReportGroup = 'national' | 'regional';

export type Report = {
  id: UniqueID;
  title: ReportTitle;
  body: ReportBody;
  last_update: string;
  reported_by: Reporter;
  status: ReportStatus;
  group: ReportGroup;
};

export type Reporter = {
  id: UniqueID;
  account: Account;
  is_active: boolean;
  can_edit: boolean;
};

export function createReport(
  id: UniqueID,
  reporter: Reporter,
  title: ReportTitle,
  body: ReportBody,
  last_update: string
): Report {
  return {
    id,
    title,
    body,
    last_update,
    reported_by: reporter,
    status: 'new',
    group: reporter.account.region
  };
}

// TODO: implement edit feature for reports
export function editReport(
  id: UniqueID,
  title: ReportTitle,
  edited_body: ReportBody,
  last_update: string,
  editor: Reporter
): any {
  return {};
}

export function reportsByRole(reports: Report[], role: Role): Report[] {
  return reports.filter((report) => report.reported_by.account.role === role);
}

export function reportsFromToByDate(): void {}
