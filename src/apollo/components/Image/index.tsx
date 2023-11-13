import React, {
    Fragment,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { ICONS } from '../../assets';
import { WithExpandButton } from './hocs/WithExpandButton';
// @ts-ignore
import EmptyImageIcon from '../../assets/icons/svg/emptyImage.svg?url';

import { IImageProps } from './types';

const ImageComponent: React.FC<IImageProps> = ({
    src,
    alt = '',
    defaultImage = '',
    className = '',
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isAborted, setIsAborted] = useState<boolean>(false);

    const onLoadHandler = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const onAbortHandler = useCallback(() => {
        setIsAborted(true);
    }, []);

    const renderImage = () => {
        if (isAborted) return defaultImage || String(EmptyImageIcon);

        return src;
    };

    return (
        <Fragment>
            {!isLoaded && !isAborted && (
                <div className={`${className}-loader`}>
                    <Icon
                        path={ICONS.Loader}
                        isActive
                        isLoading
                        size='lg'
                        className={className}
                        dataTestId='apolloImageLoaderIcon'
                    />
                </div>
            )}

            <img
                style={isLoaded
                    ? {}
                    : { display: 'none' }}
                src={renderImage()}
                alt={alt}
                onLoad={onLoadHandler}
                onError={onAbortHandler}
                className={cn(className, `${className}_loaded`)}
            />
        </Fragment>
    );
};

export const Image = WithExpandButton(ImageComponent);