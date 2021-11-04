import { useLocalStorage } from '@vueuse/core';
import { reqSsrRef } from '@nuxtjs/composition-api';

const storageName = 'bn-my-moment';

const moment = reqSsrRef({
  date: '',
  postcode: '',
});

export function useMyMoment() {
  const { date, postcode } = useLocalStorage(storageName, moment.value);

  return { date, postcode };
}
