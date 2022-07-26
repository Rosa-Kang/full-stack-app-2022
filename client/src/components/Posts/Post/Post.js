import React from 'react';
import useStyles from './styles';

export const Post = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.heading}>Post</h1>
    )
}
