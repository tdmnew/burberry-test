import React from "react";
import { connect } from "react-redux";
import { updateEpisodes } from "../../store/actions";

import Episode from './Episode';

const mapDispatchToProps = (dispatch) => {
    return {
        updateEpisodes: () => dispatch(updateEpisodes()),
    };
};

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
    };
};

function Episodes({ updateEpisodes, episodes }) {
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        updateEpisodes();
    }, [updateEpisodes]);

    React.useEffect(() => {
        if (episodes.length > 0) {
            setLoading(false);
        }
    });

    const episodeList = () => {
        return (
            <div className="episode-list">
                {episodes.map((ep, index) => {
                    let epProps = {
                        name: ep.name,
                        summary: ep.summary,
                        image: ep.image !== null ? ep.image.medium : null,
                        season: ep.season,
                        number: ep.number
                    }
                    return (
                        <Episode key={index} {...epProps} />
                    );
                })}
            </div>
        );
    };

    return <div>{loading ? null : episodeList()}</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
