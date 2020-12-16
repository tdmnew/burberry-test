export const updateEpisodes = () => ({
    type: 'UPDATE_EPISODES'
})

export const updateShow = () => ({
    type: 'UPDATE_SHOW'
})

export const episodeFetchSuccess = episodes => ({
    type: 'EPISODES_FETCHED',
    episodes
})

export const showFetchSuccess = show => ({
    type: 'SHOW_FETCHED',
    show
})
