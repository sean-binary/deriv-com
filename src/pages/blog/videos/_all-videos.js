import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoCard from './_video-card'
import VideoPlayer from './_video-player'
import { Container, Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import RightArrow from 'images/svg/black-right-arrow.svg'

const VideoGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(288px, 384px));
    grid-row-gap: 60px;
    grid-column-gap: 24px;
    grid-template-rows: auto;
`

const AllVideos = ({ video_data }) => {
    const [show, setShow] = useState(false)

    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = () => setShow(true)

    return (
        <Container fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/blog" color="grey-5">
                    {localize('Home')}
                </LocalizedLinkText>
                <img
                    src={RightArrow}
                    alt={localize('right arrow')}
                    height="16"
                    width="16"
                    style={{ margin: '0 8px' }}
                />
                <Text>{localize('All videos')}</Text>
            </Flex>
            <VideoGrid style={{ justifyContent: 'center' }}>
                {video_data.map((item) => {
                    return (
                        <VideoCard
                            title={item.title}
                            image={item.image}
                            category={item.category}
                            key={item.id}
                            item={item}
                            openVideo={handleOpenVideo}
                        />
                    )
                })}
            </VideoGrid>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={handleCloseVideo} />}
        </Container>
    )
}

AllVideos.propTypes = {
    video_data: PropTypes.arrayOf(Object),
}

export default AllVideos