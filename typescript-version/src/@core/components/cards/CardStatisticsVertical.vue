<script setup lang="ts">
interface Props {
  title: string
  image: string
  stats: string
  color: string
  change: number
}

const props = defineProps<Props>()

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center pb-4">
      <VAvatar
        v-if="props.image"
        size="38"
        :color="props.color"
        variant="tonal"
        rounded
      >
        <VIcon
          :icon="props.image"
          size="24"
        />
      </VAvatar>

      <VSpacer />

      <MoreBtn
        size="x-small"
        class="me-n3 mt-n4"
      />
    </VCardText>

    <VCardText>
      <p class="mb-1">
        {{ props.title }}
      </p>
      <h5 class="text-h5 text-no-wrap mb-3">
        {{ props.stats }}
      </h5>
      <span
        :class="isPositive ? 'text-success' : 'text-error'"
        class="d-flex align-center gap-1 text-sm"
      >
        <VIcon
          size="18"
          :icon="isPositive ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'"
        />
        {{ isPositive ? Math.abs(props.change) : props.change }}%
      </span>
    </VCardText>
  </VCard>
</template>
