import { EditorPage } from '../contexts/EditorPageContext';

export default function pageNameHelper(currentPage: EditorPage) {
  switch (currentPage) {
    case EditorPage.PUBLIC_PAGE:
      return 'public';
    case EditorPage.DRAFT_PAGE:
      return 'draft';
    case EditorPage.BACKUP_PAGE:
      return 'backup';
    case EditorPage.SCHEDULED_PAGE:
      return 'scheduled';
    case EditorPage.TEMPLATE_PAGE:
      return 'template';
    default:
      return 'pages';
  }
}
