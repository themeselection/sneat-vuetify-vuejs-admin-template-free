import { Icon } from '@iconify/vue'

const aliases = {
  collapse: 'bx-chevron-up',
  complete: 'bx-check',
  cancel: 'bx-x',
  close: 'bx-x',
  delete: 'bxs-x-circle',
  clear: 'bx-x',
  success: 'bx-check-circle',
  info: 'bx-info-circle',
  warning: 'bx-info-circle',
  error: 'bx-x',
  prev: 'bx-chevron-left',
  next: 'bx-chevron-right',
  checkboxOn: 'custom-checked-checkbox',
  checkboxOff: 'custom-unchecked-checkbox',
  checkboxIndeterminate: 'custom-indeterminate-checkbox',
  delimiter: 'bx-circle',
  sort: 'bx-up-arrow-alt',
  expand: 'bx-chevron-down',
  menu: 'bx-menu',
  subgroup: 'bx-caret-down',
  dropdown: 'bx-chevron-down',
  radioOn: 'custom-checked-radio',
  radioOff: 'custom-unchecked-radio',
  edit: 'bx-pencil',
  ratingEmpty: 'bx-star',
  ratingFull: 'bxs-star',
  ratingHalf: 'bxs-star-half',
  loading: 'bx-refresh',
  first: 'bx-skip-previous-circle',
  last: 'bx-skip-next-circle',
  unfold: 'bx-expand-vertical',
  file: 'bx-paperclip',
  plus: 'bx-plus',
  minus: 'bx-minus',
  sortAsc: 'bx-sort-up',
  sortDesc: 'bx-sort-down',
}

export const iconify = {
  component: props => h(Icon, props),
}
export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
  },
}
