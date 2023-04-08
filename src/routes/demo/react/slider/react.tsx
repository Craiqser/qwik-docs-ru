/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { Slider } from '@mui/material';
export const MUISlider = qwikify$<typeof Slider>(
  Slider
  // Раскомментируйте следующую строку, чтобы сделать компонент интерактивным
  // { eagerness: 'hover' }
);
