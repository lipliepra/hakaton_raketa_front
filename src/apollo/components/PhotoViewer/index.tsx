import React, {
    FC,
    Fragment,
    useEffect,
    useState,
} from 'react';
import {
    motion,
    AnimatePresence,
} from 'framer-motion';
import cn from 'classnames';

import { useDisableScroll } from '../../hooks/useDisableScroll';
import { Button } from '../Button';
import { Image } from '../Image';
import { ICONS } from '../../assets';
import { TFunc } from '../../types';
import { IPhotoViewerProps } from './types';
import './index.scss';

export const PhotoViewer: FC<IPhotoViewerProps> = ({
    photos,
    startIndex,
    onClose,
    dataTestId,
}) => {
    const isMultiplePhotos = photos.length && photos.length > 1;

    const [currentIndex, setCurrentIndex] = useState<number>(null);

    useDisableScroll(!!startIndex);

    useEffect(() => {
        if (startIndex !== null) setCurrentIndex(startIndex);
    }, [startIndex]);

    const openNewPhotoHandler: TFunc<[boolean?], TFunc> = (isPrev = false) => () => {
        setCurrentIndex(isPrev
            ? (currentIndex - 1 + photos.length) % photos.length
            : (currentIndex + 1) % photos.length);
    };

    const onCloseHandler = () => {
        onClose();
        setCurrentIndex(null);
    };

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    className='apollo-photo-viewer'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-test-id={`${dataTestId}PhotoSlider`}
                >
                    <div className='apollo-photo-viewer__container'>
                        <Image
                            src={photos[currentIndex]}
                            className='apollo-photo-viewer__image'
                        />
                    </div>

                    {isMultiplePhotos && (
                        <Fragment>
                            <Button
                                className={cn('apollo-photo-viewer__button', 'apollo-photo-viewer__button_prev')}
                                onClick={openNewPhotoHandler(true)}
                                iconPrefix={ICONS.ChevronLeft}
                                dataTestId={`${dataTestId}SetPrevIndexPhotoSlider`}
                            />

                            <Button
                                className={cn('apollo-photo-viewer__button', 'apollo-photo-viewer__button_next')}
                                onClick={openNewPhotoHandler()}
                                iconPrefix={ICONS.ChevronRight}
                                dataTestId={`${dataTestId}SetNextIndexPhotoSlider`}
                            />
                        </Fragment>
                    )}

                    <Button
                        iconPrefix={ICONS.Cross}
                        size='sm'
                        onClick={onCloseHandler}
                        dataTestId={`${dataTestId}PhotoSlider`}
                        className='apollo-photo-viewer__close-button'
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
