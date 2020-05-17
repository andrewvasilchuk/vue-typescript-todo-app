<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'BaseButton',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    theme: {
      type: String,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  render(h, { props, data, children }) {
    const { tag, theme, plain, circle } = props
    return h(
      tag,
      mergeData(data, {
        staticClass: 'button',
        class: {
          [`button--theme--${theme}`]: theme,
          'button--plain': plain,
          'button--circle': circle,
        },
      }),
      children
    )
  },
})
</script>

<style lang="scss">
$button-height: 40px;

@mixin hoiverify($color) {
  background: mix(#fff, $color, 20%);
  border-color: mix(#fff, $color, 20%);
  color: #fff;
}

@mixin plainify($color) {
  color: $color;
  background: mix(#fff, $color, 88%);
  border-color: mix(#fff, $color, 64%);
}

.button {
  $root: &;
  height: $button-height;
  border: 1px solid $default-border-color;
  border-radius: $default-border-radius;
  background-color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  color: $color-dark;

  &:hover {
    @include plainify($color-primary);
  }

  &:focus {
    @include focus-shadow();
  }

  &:not(#{$root}--circle) {
    min-width: 96px;
    padding: {
      right: 20px;
      left: 20px;
    }
  }

  &--theme {
    &--primary {
      color: #fff;
      background-color: $color-primary;
      border-color: $color-primary;

      &#{$root}--plain {
        @include plainify($color-primary);
      }

      &:hover {
        @include hoiverify($color-primary);
      }
    }

    &--success {
      color: #fff;
      background-color: $color-success;
      border-color: $color-success;

      &#{$root}--plain {
        @include plainify($color-success);
      }

      &:hover {
        @include hoiverify($color-success);
      }
    }

    &--danger {
      color: #fff;
      background-color: $color-danger;
      border-color: $color-danger;

      &#{$root}--plain {
        @include plainify($color-danger);
      }

      &:hover {
        @include hoiverify($color-danger);
      }
    }
  }

  &--circle {
    width: $button-height;
    border-radius: 50%;

    svg {
      @include box(16px);
    }
  }

  @at-root a#{&} {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  @at-root button#{&} {
    cursor: pointer;
  }
}
</style>
