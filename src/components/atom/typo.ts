import { styled } from '#/stitches.config';
import { Property } from '@stitches/react/types/css';

const typoGenerator = (
  fontSize: Property.FontSizeAdjust,
  fontWeight: Property.FontWeight,
  opacity?: Property.Opacity,
  tightSpace = true
) =>
  styled('span', {
    fontSize: fontSize + 'rem',
    fontWeight,
    opacity,
    margin: 0,
    ...(tightSpace && {
      letterSpacing: '-0.03em',
    }),
    variants: {
      accent: {
        true: {
          color: '$accent',
        },
      },
      strike: {
        true: {
          textDecoration: 'line-through',
        },
      },
      notight: {
        true: {
          letterSpacing: '0em',
        },
      },
    },
  });

export const PageHeader = typoGenerator(5, '600', 1, false);
