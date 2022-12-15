import { NavigationBarWithoutLens } from '../navigationBar/navigationBarWithoutLens';
import { Box, Button, Grid } from '@mui/material';
import { Post } from '../home/post/post';
import * as React from 'react';
import { TextPreview } from './text/textPreview';
import styles from './style/preview.module.css';

export function Preview() {
  return (
    <div>
      <NavigationBarWithoutLens></NavigationBarWithoutLens>
      <div className={styles.container}>
        <TextPreview></TextPreview>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
