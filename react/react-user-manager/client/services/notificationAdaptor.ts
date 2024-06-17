import { useSnackbar } from 'notistack';

import { NotificationService } from '../application/ports';

export function useNotifier(): NotificationService {
  const { enqueueSnackbar } = useSnackbar();
  return {
    notify: (message: string) => enqueueSnackbar(message)
  };
}
