<template>
  <Tutorial/>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import { useMyMoment } from "~/composables/myMoment";

export default defineComponent({
  setup() {
    let { date, postcode } = useMyMoment();

    return { date, postcode };
  },
});
</script>
