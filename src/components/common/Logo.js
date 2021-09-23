import React from 'react'

export default function Logo(props) {
    const { style, ...otherProps } = props;
    return (
        <img loading='lazy' alt="logo"
            src={require('../../assets/images/ProInnovate.png').default}
            style={style}
            {...otherProps} />
    )
}

